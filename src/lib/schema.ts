export const SCHEMA_VERSION = 1 as const;

export type Sex = "f" | "m" | "x";
export type Status = "screening" | "enrolled" | "complete" | "withdrawn";
export type VisitKey = "v1" | "retest" | "v2";
export type Role = "primary" | "secondary" | "exploratory" | "covariate" | "feasibility" | "safety";
export type ToolId = "core" | "breath" | "rom" | "gait" | "pli" | "encounter" | "sus" | "feasibility";

export type Breath = {
  rmsPeak?: number;
  refFev1?: number;
  attempts?: number;
  aborted?: boolean;
};

export type RomBlock = {
  flex?: number;
  ext?: number;
  rotL?: number;
  rotR?: number;
  latL?: number;
  latR?: number;
};

export type GaitBlock = {
  cadence?: number;
  steps?: number;
  strideCm?: number;
  asym?: number;
  kneeL?: number;
  kneeR?: number;
  hipL?: number;
  hipR?: number;
  riskRaw?: number;
};

export type Encounter = {
  icd?: string;
  pain?: number;
  mobility?: number;
  fall?: number;
  fatigue?: number;
  chest?: boolean;
  neuro?: boolean;
  resp?: boolean;
  trauma?: boolean;
  systemic?: boolean;
  cgi?: number;
  rater?: string;
};

export type Visit = {
  date: string;
  operator: string;
  durationMin?: number;
  digitalFirst: boolean;
  techSuccess: boolean;
  ae: boolean;
  aeText: string;
  notes: string;
  breath: Breath;
  romD: RomBlock;
  romR: RomBlock;
  gaitD: GaitBlock;
  gaitR: Pick<GaitBlock, "cadence" | "steps">;
  pli: number[];
  sus: number[];
  encounter: Encounter;
};

export type Participant = {
  id: string;
  sample?: boolean;
  siteId: string;
  siteName: string;
  country: string;
  investigator: string;
  enrolledAt: string;
  status: Status;
  age: number;
  sex: Sex;
  heightCm: number;
  weightKg: number;
  neck: boolean;
  gait: boolean;
  resp: boolean;
  consentCore: boolean;
  consentAv: boolean;
  consentHome: boolean;
  visits: Partial<Record<VisitKey, Visit>>;
};

export type Workspace = {
  name: string;
  schemaVersion: typeof SCHEMA_VERSION;
};

export const emptyVisit = (): Visit => ({
  date: new Date().toISOString().slice(0, 10),
  operator: "",
  durationMin: undefined,
  digitalFirst: Math.random() < 0.5,
  techSuccess: true,
  ae: false,
  aeText: "",
  notes: "",
  breath: { attempts: 1, aborted: false },
  romD: {},
  romR: {},
  gaitD: {},
  gaitR: {},
  pli: Array(10).fill(-1),
  sus: Array(10).fill(-1),
  encounter: {},
});

export function bmi(p: Participant) {
  if (!p.heightCm || !p.weightKg) return undefined;
  const m = p.heightCm / 100;
  return p.weightKg / (m * m);
}

export function pefProxy(peak?: number) {
  if (peak == null) return undefined;
  return peak * 800;
}

export function fev1Est(peak?: number, heightCm?: number, age?: number) {
  const pef = pefProxy(peak);
  if (pef == null || !heightCm || !age) return undefined;
  return pef * 0.004 * (heightCm / 170) * (40 / age);
}

export function fev1Expected(heightCm?: number, age?: number) {
  if (!heightCm || !age) return undefined;
  return 0.04 * heightCm - 0.03 * age - 2;
}

export function pctExpected(est?: number, exp?: number) {
  if (est == null || !exp) return undefined;
  return Math.min(100, Math.max(0, (est / exp) * 100));
}

export function pctDiff(est?: number, ref?: number) {
  if (est == null || ref == null || ref === 0) return undefined;
  return ((est - ref) / ref) * 100;
}

export function pliTotal(items: number[]) {
  const ok = items.filter((x) => x >= 0);
  if (ok.length < 10) return undefined;
  return ok.reduce((a, b) => a + b, 0);
}

export function pliPct(total?: number) {
  if (total == null) return undefined;
  return (total / 50) * 100;
}

export function pliBand(total?: number) {
  if (total == null) return undefined;
  if (total <= 4) return 0;
  if (total <= 14) return 1;
  if (total <= 24) return 2;
  if (total <= 34) return 3;
  return 4;
}

export function susTotal(items: number[]) {
  if (items.some((x) => x < 0 || x > 4)) return undefined;
  let s = 0;
  items.forEach((v, i) => {
    s += i % 2 === 0 ? v : 4 - v;
  });
  return s * 2.5;
}

export function egIcfSum(e: Encounter) {
  const vals = [e.pain, e.mobility, e.fall, e.fatigue];
  if (vals.some((v) => v == null)) return undefined;
  return vals.reduce((a, b) => a! + b!, 0);
}

export function egLoad(icd?: string) {
  if (!icd) return 0;
  const c = icd.toUpperCase();
  if (/^[I]/.test(c) || /^G/.test(c) || /^J9/.test(c)) return 8;
  if (/^M5[0-4]/.test(c) || /^S1/.test(c)) return 4;
  return 1;
}

export function egStatus(e: Encounter): "green" | "yellow" | "red" | undefined {
  const sum = egIcfSum(e);
  if (sum == null) return undefined;
  let score = sum + egLoad(e.icd);
  const flags = [e.chest, e.neuro, e.resp, e.trauma, e.systemic].filter(Boolean).length;
  if (e.chest || e.neuro) return "red";
  if (flags) score += 6;
  if (score >= 28) return "red";
  if (score >= 14) return "yellow";
  return "green";
}

export type VarDef = {
  id: string;
  tool: ToolId;
  role: Role;
  unit: string;
  en: string;
  de: string;
};

export const VARIABLES: VarDef[] = [
  { id: "pid", tool: "core", role: "covariate", unit: "id", en: "Participant ID", de: "Teilnehmer-ID" },
  { id: "site_id", tool: "core", role: "covariate", unit: "id", en: "Site ID", de: "Standort-ID" },
  { id: "site_name", tool: "core", role: "covariate", unit: "text", en: "Site name", de: "Standortname" },
  { id: "country", tool: "core", role: "covariate", unit: "text", en: "Country", de: "Land" },
  { id: "investigator", tool: "core", role: "covariate", unit: "text", en: "Investigator", de: "Prüferin" },
  { id: "visit", tool: "core", role: "covariate", unit: "cat", en: "Visit (v1/retest/v2)", de: "Visite" },
  { id: "visit_date", tool: "core", role: "covariate", unit: "date", en: "Visit date", de: "Visiten-Datum" },
  { id: "age_years", tool: "core", role: "covariate", unit: "y", en: "Age", de: "Alter" },
  { id: "sex", tool: "core", role: "covariate", unit: "cat", en: "Sex", de: "Geschlecht" },
  { id: "height_cm", tool: "core", role: "covariate", unit: "cm", en: "Height", de: "Größe" },
  { id: "weight_kg", tool: "core", role: "covariate", unit: "kg", en: "Weight", de: "Gewicht" },
  { id: "bmi", tool: "core", role: "covariate", unit: "kg/m²", en: "BMI", de: "BMI" },
  { id: "ind_neck", tool: "core", role: "covariate", unit: "0/1", en: "Indication neck", de: "Indikation Nacken" },
  { id: "ind_gait", tool: "core", role: "covariate", unit: "0/1", en: "Indication gait", de: "Indikation Gang" },
  { id: "ind_resp", tool: "core", role: "covariate", unit: "0/1", en: "Indication respiratory", de: "Indikation Atmung" },
  { id: "digital_first", tool: "core", role: "covariate", unit: "0/1", en: "Digital first", de: "Digital zuerst" },
  { id: "duration_min", tool: "feasibility", role: "feasibility", unit: "min", en: "Session duration", de: "Dauer" },
  { id: "tech_success", tool: "feasibility", role: "feasibility", unit: "0/1", en: "Technical success", de: "Technischer Erfolg" },
  { id: "ae_flag", tool: "sus", role: "safety", unit: "0/1", en: "Adverse event", de: "Unerwünschtes Ereignis" },
  { id: "bs_rms_peak", tool: "breath", role: "primary", unit: "rms", en: "BreathScope RMS peak", de: "BreathScope RMS-Peak" },
  { id: "bs_pef_proxy", tool: "breath", role: "primary", unit: "proxy", en: "PEF proxy", de: "PEF-Proxy" },
  { id: "bs_fev1_est", tool: "breath", role: "primary", unit: "L", en: "Estimated FEV1", de: "Geschätztes FEV1" },
  { id: "bs_fev1_expected", tool: "breath", role: "secondary", unit: "L", en: "Expected FEV1", de: "Erwartetes FEV1" },
  { id: "bs_pct_expected", tool: "breath", role: "secondary", unit: "%", en: "% expected FEV1", de: "% erwartetes FEV1" },
  { id: "bs_ref_fev1", tool: "breath", role: "primary", unit: "L", en: "Spirometer FEV1", de: "Spirometer-FEV1" },
  { id: "bs_pct_diff_ref", tool: "breath", role: "primary", unit: "%", en: "% diff vs spirometer", de: "% Diff. Spirometer" },
  { id: "rom_flex_d", tool: "rom", role: "primary", unit: "deg", en: "Flexion digital", de: "Flexion digital" },
  { id: "rom_flex_r", tool: "rom", role: "primary", unit: "deg", en: "Flexion reference", de: "Flexion Referenz" },
  { id: "rom_ext_d", tool: "rom", role: "primary", unit: "deg", en: "Extension digital", de: "Extension digital" },
  { id: "rom_ext_r", tool: "rom", role: "primary", unit: "deg", en: "Extension reference", de: "Extension Referenz" },
  { id: "rom_rot_l_d", tool: "rom", role: "primary", unit: "deg", en: "Rotation L digital", de: "Rotation L digital" },
  { id: "rom_rot_l_r", tool: "rom", role: "primary", unit: "deg", en: "Rotation L reference", de: "Rotation L Referenz" },
  { id: "rom_rot_r_d", tool: "rom", role: "primary", unit: "deg", en: "Rotation R digital", de: "Rotation R digital" },
  { id: "rom_rot_r_r", tool: "rom", role: "primary", unit: "deg", en: "Rotation R reference", de: "Rotation R Referenz" },
  { id: "rom_lat_l_d", tool: "rom", role: "secondary", unit: "deg", en: "Lat flex L digital", de: "Lateralflexion L digital" },
  { id: "rom_lat_l_r", tool: "rom", role: "secondary", unit: "deg", en: "Lat flex L reference", de: "Lateralflexion L Referenz" },
  { id: "rom_lat_r_d", tool: "rom", role: "secondary", unit: "deg", en: "Lat flex R digital", de: "Lateralflexion R digital" },
  { id: "rom_lat_r_r", tool: "rom", role: "secondary", unit: "deg", en: "Lat flex R reference", de: "Lateralflexion R Referenz" },
  { id: "gait_cadence_d", tool: "gait", role: "primary", unit: "spm", en: "Cadence digital", de: "Kadenz digital" },
  { id: "gait_cadence_r", tool: "gait", role: "primary", unit: "spm", en: "Cadence reference", de: "Kadenz Referenz" },
  { id: "gait_steps_d", tool: "gait", role: "primary", unit: "n", en: "Steps digital", de: "Schritte digital" },
  { id: "gait_steps_r", tool: "gait", role: "primary", unit: "n", en: "Steps reference", de: "Schritte Referenz" },
  { id: "gait_stride_cm", tool: "gait", role: "secondary", unit: "cm", en: "Stride estimate", de: "Schrittlänge Schätzung" },
  { id: "gait_asym", tool: "gait", role: "secondary", unit: "idx", en: "Asymmetry", de: "Asymmetrie" },
  { id: "gait_knee_l", tool: "gait", role: "secondary", unit: "deg", en: "Knee L", de: "Knie L" },
  { id: "gait_knee_r", tool: "gait", role: "secondary", unit: "deg", en: "Knee R", de: "Knie R" },
  { id: "gait_hip_l", tool: "gait", role: "exploratory", unit: "deg", en: "Hip L", de: "Hüfte L" },
  { id: "gait_hip_r", tool: "gait", role: "exploratory", unit: "deg", en: "Hip R", de: "Hüfte R" },
  { id: "gait_risk_raw", tool: "gait", role: "exploratory", unit: "score", en: "Gait heuristic (blind)", de: "Gang-Heuristik (blind)" },
  { id: "pli_i1", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 1", de: "PLI Item 1" },
  { id: "pli_i2", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 2", de: "PLI Item 2" },
  { id: "pli_i3", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 3", de: "PLI Item 3" },
  { id: "pli_i4", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 4", de: "PLI Item 4" },
  { id: "pli_i5", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 5", de: "PLI Item 5" },
  { id: "pli_i6", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 6", de: "PLI Item 6" },
  { id: "pli_i7", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 7", de: "PLI Item 7" },
  { id: "pli_i8", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 8", de: "PLI Item 8" },
  { id: "pli_i9", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 9", de: "PLI Item 9" },
  { id: "pli_i10", tool: "pli", role: "primary", unit: "0-5", en: "PLI item 10", de: "PLI Item 10" },
  { id: "pli_total", tool: "pli", role: "primary", unit: "0-50", en: "PLI total", de: "PLI-Summe" },
  { id: "pli_pct", tool: "pli", role: "secondary", unit: "%", en: "PLI % disability", de: "PLI % Einschränkung" },
  { id: "pli_band", tool: "pli", role: "secondary", unit: "1-5", en: "PLI band", de: "PLI-Band" },
  { id: "eg_icd", tool: "encounter", role: "exploratory", unit: "code", en: "ICD-10 primary", de: "ICD-10 primär" },
  { id: "eg_pain", tool: "encounter", role: "exploratory", unit: "0-10", en: "ICF pain", de: "ICF Schmerz" },
  { id: "eg_mobility", tool: "encounter", role: "exploratory", unit: "0-10", en: "ICF mobility", de: "ICF Mobilität" },
  { id: "eg_fall", tool: "encounter", role: "exploratory", unit: "0-10", en: "ICF fall risk", de: "ICF Sturzrisiko" },
  { id: "eg_fatigue", tool: "encounter", role: "exploratory", unit: "0-10", en: "ICF fatigue", de: "ICF Fatigue" },
  { id: "eg_status", tool: "encounter", role: "exploratory", unit: "cat", en: "Heuristic G/Y/R", de: "Heuristik G/Y/R" },
  { id: "eg_cgi", tool: "encounter", role: "exploratory", unit: "1-7", en: "CGI", de: "CGI" },
  { id: "eg_rater", tool: "encounter", role: "exploratory", unit: "id", en: "Rater ID", de: "Rater-ID" },
  { id: "sus_total", tool: "sus", role: "feasibility", unit: "0-100", en: "SUS total", de: "SUS-Summe" },
];

export type Row = Record<string, string | number | boolean | undefined>;

export function visitRow(p: Participant, key: VisitKey): Row | null {
  const v = p.visits[key];
  if (!v) return null;
  const est = fev1Est(v.breath.rmsPeak, p.heightCm, p.age);
  const exp = fev1Expected(p.heightCm, p.age);
  const tot = pliTotal(v.pli);
  return {
    pid: p.id,
    site_id: p.siteId,
    site_name: p.siteName,
    country: p.country,
    investigator: p.investigator,
    sample: p.sample ? 1 : 0,
    visit: key,
    visit_date: v.date,
    age_years: p.age,
    sex: p.sex,
    height_cm: p.heightCm,
    weight_kg: p.weightKg,
    bmi: bmi(p) != null ? Math.round(bmi(p)! * 10) / 10 : undefined,
    ind_neck: p.neck ? 1 : 0,
    ind_gait: p.gait ? 1 : 0,
    ind_resp: p.resp ? 1 : 0,
    digital_first: v.digitalFirst ? 1 : 0,
    duration_min: v.durationMin,
    tech_success: v.techSuccess ? 1 : 0,
    ae_flag: v.ae ? 1 : 0,
    bs_rms_peak: v.breath.rmsPeak,
    bs_pef_proxy: pefProxy(v.breath.rmsPeak),
    bs_fev1_est: est,
    bs_fev1_expected: exp,
    bs_pct_expected: pctExpected(est, exp),
    bs_ref_fev1: v.breath.refFev1,
    bs_pct_diff_ref: pctDiff(est, v.breath.refFev1),
    rom_flex_d: v.romD.flex,
    rom_flex_r: v.romR.flex,
    rom_ext_d: v.romD.ext,
    rom_ext_r: v.romR.ext,
    rom_rot_l_d: v.romD.rotL,
    rom_rot_l_r: v.romR.rotL,
    rom_rot_r_d: v.romD.rotR,
    rom_rot_r_r: v.romR.rotR,
    rom_lat_l_d: v.romD.latL,
    rom_lat_l_r: v.romR.latL,
    rom_lat_r_d: v.romD.latR,
    rom_lat_r_r: v.romR.latR,
    gait_cadence_d: v.gaitD.cadence,
    gait_cadence_r: v.gaitR.cadence,
    gait_steps_d: v.gaitD.steps,
    gait_steps_r: v.gaitR.steps,
    gait_stride_cm: v.gaitD.strideCm,
    gait_asym: v.gaitD.asym,
    gait_knee_l: v.gaitD.kneeL,
    gait_knee_r: v.gaitD.kneeR,
    gait_hip_l: v.gaitD.hipL,
    gait_hip_r: v.gaitD.hipR,
    gait_risk_raw: v.gaitD.riskRaw,
    ...Object.fromEntries(v.pli.map((x, i) => [`pli_i${i + 1}`, x < 0 ? undefined : x])),
    pli_total: tot,
    pli_pct: pliPct(tot),
    pli_band: pliBand(tot),
    eg_icd: v.encounter.icd,
    eg_pain: v.encounter.pain,
    eg_mobility: v.encounter.mobility,
    eg_fall: v.encounter.fall,
    eg_fatigue: v.encounter.fatigue,
    eg_status: egStatus(v.encounter),
    eg_cgi: v.encounter.cgi,
    eg_rater: v.encounter.rater,
    sus_total: susTotal(v.sus),
  };
}

export function allRows(people: Participant[]) {
  const keys: VisitKey[] = ["v1", "retest", "v2"];
  const rows: Row[] = [];
  for (const p of people) {
    for (const k of keys) {
      const r = visitRow(p, k);
      if (r) rows.push(r);
    }
  }
  return rows;
}
