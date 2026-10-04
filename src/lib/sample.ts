import { emptyVisit, type Participant, type Visit, type VisitKey } from "./schema";

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}
function nrand(m: number, s: number) {
  const u = 1 - Math.random();
  const v = Math.random();
  return m + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}
function round(n: number, d = 1) {
  const p = 10 ** d;
  return Math.round(n * p) / p;
}

function noisy(trueVal: number, err = 3, lo = 0, hi = 90) {
  return round(clamp(trueVal + nrand(0, err), lo, hi), 1);
}

function visitFrom(base: {
  age: number;
  height: number;
  neck: boolean;
  gait: boolean;
  resp: boolean;
  operator: string;
  date: string;
}): Visit {
  const v = emptyVisit();
  v.date = base.date;
  v.operator = base.operator;
  v.durationMin = round(rand(38, 78), 0);
  v.techSuccess = Math.random() > 0.06;
  v.ae = Math.random() < 0.04;
  if (v.ae) v.aeText = "Transient dizziness, recovered seated";
  const flex = noisy(base.neck ? 38 : 52, 6, 12, 70);
  v.romD = {
    flex,
    ext: noisy(base.neck ? 42 : 58, 6, 15, 80),
    rotL: noisy(base.neck ? 55 : 70, 7, 20, 90),
    rotR: noisy(base.neck ? 53 : 68, 7, 20, 90),
    latL: noisy(base.neck ? 28 : 38, 5, 8, 55),
    latR: noisy(base.neck ? 30 : 39, 5, 8, 55),
  };
  v.romR = {
    flex: noisy(v.romD.flex!, 4, 12, 70),
    ext: noisy(v.romD.ext!, 4, 15, 80),
    rotL: noisy(v.romD.rotL!, 5, 20, 90),
    rotR: noisy(v.romD.rotR!, 5, 20, 90),
    latL: noisy(v.romD.latL!, 3, 8, 55),
    latR: noisy(v.romD.latR!, 3, 8, 55),
  };
  const cad = noisy(base.gait ? 96 : 112, 6, 70, 140);
  v.gaitD = {
    cadence: cad,
    steps: Math.round(cad / 2),
    strideCm: noisy(base.gait ? 118 : 138, 8, 80, 170),
    asym: round(clamp(base.gait ? nrand(8, 3) : nrand(3, 1.5), 0, 25), 1),
    kneeL: noisy(168, 4, 140, 180),
    kneeR: noisy(167, 4, 140, 180),
    hipL: noisy(172, 5, 140, 185),
    hipR: noisy(171, 5, 140, 185),
    riskRaw: round(clamp(nrand(base.gait ? 22 : 8, 6), 0, 60), 1),
  };
  v.gaitR = {
    cadence: noisy(cad, 3, 70, 140),
    steps: v.gaitD.steps! + Math.round(nrand(0, 1)),
  };
  const peak = clamp(nrand(base.resp ? 0.22 : 0.34, 0.05), 0.08, 0.55);
  v.breath = {
    rmsPeak: round(peak, 3),
    refFev1: round(clamp(nrand(base.resp ? 2.4 : 3.3, 0.35), 1.1, 5.2), 2),
    attempts: 1,
    aborted: false,
  };
  const pain = Math.round(clamp(nrand(base.neck ? 2.8 : 1.4, 1.1), 0, 5));
  v.pli = Array.from({ length: 10 }, (_, i) =>
    Math.round(clamp(pain + nrand(i === 4 ? 0.4 : 0, 0.9), 0, 5)),
  );
  v.sus = Array.from({ length: 10 }, (_, i) => {
    const easy = i % 2 === 0;
    return Math.round(clamp(easy ? nrand(3.2, 0.6) : nrand(0.8, 0.6), 0, 4));
  });
  v.encounter = {
    icd: base.neck ? "M54.2" : base.gait ? "M17.1" : "J44.1",
    pain: Math.round(clamp(nrand(base.neck ? 5 : 3, 1.5), 0, 10)),
    mobility: Math.round(clamp(nrand(base.gait ? 6 : 3, 1.5), 0, 10)),
    fall: Math.round(clamp(nrand(base.gait ? 4 : 1.5, 1.2), 0, 10)),
    fatigue: Math.round(clamp(nrand(4, 1.6), 0, 10)),
    chest: false,
    neuro: false,
    resp: base.resp && Math.random() < 0.1,
    trauma: false,
    systemic: false,
    cgi: Math.round(clamp(nrand(3, 1), 1, 7)),
    rater: base.operator.slice(0, 2).toUpperCase(),
  };
  return v;
}

const SITES = [
  { id: "SITE-N", name: "Nord Reha", country: "DE", inv: "M. Keller" },
  { id: "SITE-S", name: "Alpen Physio", country: "AT", inv: "L. Hofmann" },
];

export function makeSample(): Participant[] {
  const people: Participant[] = [];
  for (let i = 0; i < 16; i++) {
    const site = SITES[i % 2];
    const age = Math.round(rand(22, 64));
    const sex = i % 5 === 0 ? "x" : i % 2 === 0 ? "f" : "m";
    const height = Math.round(nrand(sex === "f" ? 168 : 178, 7));
    const neck = i % 3 !== 2;
    const gait = i % 3 !== 0;
    const resp = i % 4 === 0;
    const day = 10 + (i % 18);
    const p: Participant = {
      id: `SAMPLE-${site.id}-${String(i + 1).padStart(2, "0")}`,
      sample: true,
      siteId: site.id,
      siteName: site.name,
      country: site.country,
      investigator: site.inv,
      enrolledAt: `2026-09-${String(day).padStart(2, "0")}T09:00:00.000Z`,
      status: i === 15 ? "withdrawn" : i > 2 ? "enrolled" : "complete",
      age,
      sex,
      heightCm: height,
      weightKg: Math.round(nrand(74, 11)),
      neck,
      gait,
      resp,
      consentCore: true,
      consentAv: false,
      consentHome: i % 5 === 0,
      visits: {},
    };
    const v1 = visitFrom({
      age,
      height,
      neck,
      gait,
      resp,
      operator: site.inv,
      date: `2026-09-${String(day).padStart(2, "0")}`,
    });
    p.visits.v1 = v1;
    if (i !== 15 && i !== 4) {
      const rt: Visit = visitFrom({
        age,
        height,
        neck,
        gait,
        resp,
        operator: site.inv,
        date: `2026-09-${String(Math.min(30, day + 2)).padStart(2, "0")}`,
      });
      rt.romD.flex = noisy(v1.romD.flex ?? 40, 3, 12, 70);
      rt.romR.flex = noisy(rt.romD.flex!, 3, 12, 70);
      p.visits.retest = rt;
    }
    if (p.status === "complete") {
      p.visits.v2 = visitFrom({
        age,
        height,
        neck,
        gait,
        resp,
        operator: site.inv,
        date: `2026-10-01`,
      });
    }
    people.push(p);
  }
  return people;
}

export const VISIT_KEYS: VisitKey[] = ["v1", "retest", "v2"];
