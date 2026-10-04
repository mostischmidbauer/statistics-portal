import { allRows, type Participant, type VisitKey } from "./schema";
import { blandAltman, cronbach, icc21, pairs, type Pair } from "./stats";

export function sitesOf(people: Participant[]) {
  const map = new Map<string, string>();
  for (const p of people) map.set(p.siteId, p.siteName);
  return [...map.entries()].map(([id, name]) => ({ id, name }));
}

export function funnel(people: Participant[]) {
  const screened = people.length;
  const eligible = people.filter((p) => p.consentCore).length;
  const enrolled = people.filter((p) => p.status !== "screening").length;
  const v1 = people.filter((p) => p.visits.v1).length;
  const retest = people.filter((p) => p.visits.retest).length;
  const complete = people.filter((p) => p.status === "complete").length;
  const withdrawn = people.filter((p) => p.status === "withdrawn").length;
  return { screened, eligible, enrolled, v1, retest, complete, withdrawn };
}

export function toolComplete(people: Participant[]) {
  const v1 = people.map((p) => p.visits.v1).filter(Boolean);
  const n = v1.length || 1;
  const breath = v1.filter((v) => v!.breath.rmsPeak != null).length;
  const rom = v1.filter((v) => v!.romD.flex != null && v!.romR.flex != null).length;
  const gait = v1.filter((v) => v!.gaitD.cadence != null).length;
  const pli = v1.filter((v) => v!.pli.every((x) => x >= 0)).length;
  const eg = v1.filter((v) => v!.encounter.pain != null).length;
  const sus = v1.filter((v) => v!.sus.every((x) => x >= 0)).length;
  return [
    { id: "BreathScope", n: breath, pct: breath / n },
    { id: "ROMLens", n: rom, pct: rom / n },
    { id: "GaitScope", n: gait, pct: gait / n },
    { id: "PLI", n: pli, pct: pli / n },
    { id: "EncounterGuard", n: eg, pct: eg / n },
    { id: "SUS", n: sus, pct: sus / n },
  ];
}

function col(people: Participant[], a: string, b: string, visit: VisitKey = "v1"): Pair[] {
  const rows = allRows(people).filter((r) => r.visit === visit);
  return pairs(rows.map((r) => ({ x: r[a], y: r[b] })));
}

function retestPairs(people: Participant[], field: string): Pair[] {
  const out: Pair[] = [];
  for (const p of people) {
    const a = allRows([p]).find((r) => r.visit === "v1");
    const b = allRows([p]).find((r) => r.visit === "retest");
    if (a && b && typeof a[field] === "number" && typeof b[field] === "number") {
      out.push({ x: a[field] as number, y: b[field] as number });
    }
  }
  return out;
}

export const PRIMARY_PAIRS = [
  { id: "rom_flex", label: "ROM flexion", a: "rom_flex_d", b: "rom_flex_r", mode: "concurrent" as const },
  { id: "rom_rot_r", label: "ROM rotation R", a: "rom_rot_r_d", b: "rom_rot_r_r", mode: "concurrent" as const },
  { id: "gait_cadence", label: "Gait cadence", a: "gait_cadence_d", b: "gait_cadence_r", mode: "concurrent" as const },
  { id: "bs_fev1", label: "FEV₁ proxy vs spirometer", a: "bs_fev1_est", b: "bs_ref_fev1", mode: "concurrent" as const },
  { id: "pli_retest", label: "PLI total test–retest", a: "pli_total", b: "pli_total", mode: "retest" as const },
  { id: "rom_flex_rt", label: "ROM flexion test–retest (digital)", a: "rom_flex_d", b: "rom_flex_d", mode: "retest" as const },
];

export function primaryStats(people: Participant[]) {
  return PRIMARY_PAIRS.map((spec) => {
    const ps = spec.mode === "retest" ? retestPairs(people, spec.a) : col(people, spec.a, spec.b, "v1");
    return { ...spec, pairs: ps, icc: icc21(ps), ba: blandAltman(ps) };
  });
}

export function pliAlpha(people: Participant[]) {
  const m = people
    .map((p) => p.visits.v1?.pli)
    .filter((x): x is number[] => !!x && x.every((i) => i >= 0));
  return cronbach(m);
}

export type FeedItem = { at: string; pid: string; site: string; label: string; value: string };

export function feed(people: Participant[]): FeedItem[] {
  const items: FeedItem[] = [];
  for (const p of people) {
    (["v1", "retest", "v2"] as VisitKey[]).forEach((k) => {
      const v = p.visits[k];
      if (!v) return;
      if (v.romD.flex != null) items.push({ at: v.date, pid: p.id, site: p.siteId, label: `ROM flex ${k}`, value: `${v.romD.flex}°` });
      if (v.breath.rmsPeak != null) items.push({ at: v.date, pid: p.id, site: p.siteId, label: `Breath ${k}`, value: String(v.breath.rmsPeak) });
      if (v.gaitD.cadence != null) items.push({ at: v.date, pid: p.id, site: p.siteId, label: `Cadence ${k}`, value: `${v.gaitD.cadence}` });
    });
  }
  return items.sort((a, b) => (a.at < b.at ? 1 : -1)).slice(0, 18);
}

export function kpis(people: Participant[]) {
  const rows = allRows(people);
  const sus = rows.map((r) => r.sus_total).filter((x): x is number => typeof x === "number");
  const tech = rows.map((r) => r.tech_success).filter((x) => x != null);
  const ae = rows.map((r) => r.ae_flag).filter((x) => x != null);
  const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : undefined);
  return {
    n: people.length,
    readings: rows.length,
    sus: mean(sus),
    tech: tech.length ? tech.filter((x) => x === 1).length / tech.length : undefined,
    ae: ae.length ? ae.filter((x) => x === 1).length / ae.length : undefined,
  };
}
