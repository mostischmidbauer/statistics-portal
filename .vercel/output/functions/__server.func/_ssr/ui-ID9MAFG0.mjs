import { C as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChartLine, i as LayoutDashboard, o as BookOpen, r as Share2, t as UserPlus } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-ID9MAFG0.js
var import_jsx_runtime = require_jsx_runtime();
var t = {
	en: {
		app: "Clinimetric Lab",
		tag: "Digital Rehabilitation Research Suite",
		research: "Research CRF · not a medical device",
		dashboard: "Dashboard",
		enrol: "Enrol",
		analysis: "Analysis",
		dictionary: "Variables",
		collaborate: "Collaborate",
		protocol: "Study",
		sampleBanner: "Sample dataset loaded. Enrol real participants or import a site file. Sample rows are tagged SAMPLE.",
		dismiss: "Dismiss",
		loadSample: "Load sample",
		clearData: "Clear local data",
		enrolled: "Enrolled",
		completeV1: "V1 complete",
		retest: "Retest 24–72 h",
		withdrawn: "Withdrawn",
		sites: "Sites",
		liveFeed: "Live readings",
		funnel: "Enrolment funnel",
		screened: "Screened",
		eligible: "Eligible",
		completed: "Completed",
		completeness: "Tool completeness (V1)",
		iccLive: "Live reliability (paired V1 vs retest)",
		iccHint: "ICC(2,1) absolute agreement. Interpret cautiously below n = 30.",
		noData: "No paired readings yet. Enrol a participant and complete V1 plus retest.",
		newParticipant: "New participant",
		site: "Site / facility",
		siteId: "Site ID",
		siteName: "Site name",
		country: "Country",
		investigator: "Investigator / operator",
		pid: "Participant ID",
		age: "Age (years)",
		sex: "Sex",
		female: "Female",
		male: "Male",
		other: "Other / not specified",
		height: "Height (cm)",
		weight: "Weight (kg)",
		indications: "Indications (research)",
		neck: "Neck / cervical",
		gait: "Gait / lower limb",
		resp: "Respiratory / breath",
		mixed: "Mixed / other",
		consent: "Consent modules",
		consentCore: "Core clinimetry",
		consentAv: "Optional AV raw (off by default)",
		consentHome: "Optional home follow-up",
		saveEnrol: "Enrol participant",
		openVisit: "Open visits",
		visitV1: "Visit 1",
		visitRetest: "Retest 24–72 h",
		visitV2: "Visit 2 (optional)",
		visitDate: "Visit date",
		duration: "Duration (min)",
		operator: "Operator",
		digitalFirst: "Digital measured first",
		refFirst: "Reference measured first",
		order: "Order (randomise)",
		techOk: "Technical success",
		aeNone: "No adverse event",
		aeYes: "Adverse event / stop",
		aeText: "Event description",
		notes: "Notes",
		saveVisit: "Save visit",
		saved: "Saved",
		core: "Core",
		breath: "BreathScope",
		rom: "ROMLens",
		gaitTool: "GaitScope",
		pli: "PLI",
		encounter: "EncounterGuard",
		sus: "SUS & safety",
		rmsPeak: "RMS peak",
		pefProxy: "PEF proxy (peak × 800)",
		fev1est: "Estimated FEV₁ (L)",
		fev1exp: "Expected FEV₁ (L)",
		pctExp: "% expected",
		refFev1: "Reference spirometer FEV₁ (L)",
		pctDiff: "% difference vs reference",
		attempts: "Attempts",
		aborted: "Aborted / incomplete",
		flex: "Flexion (°)",
		ext: "Extension (°)",
		rotL: "Rotation L (°)",
		rotR: "Rotation R (°)",
		latL: "Lateral flexion L (°)",
		latR: "Lateral flexion R (°)",
		digital: "Digital (ROMLens)",
		reference: "Reference (goniometer / inclinometer)",
		cadence: "Cadence (steps/min)",
		steps: "Step count",
		stride: "Stride estimate (cm)",
		asym: "Asymmetry index",
		kneeL: "Knee angle L (°)",
		kneeR: "Knee angle R (°)",
		hipL: "Hip angle L (°)",
		hipR: "Hip angle R (°)",
		riskRaw: "Composite heuristic (exploratory, hidden from care)",
		gaitRef: "Reference (visual count / wearable)",
		pliTotal: "PLI total (0–50)",
		pliPct: "% disability",
		pliBand: "Severity band",
		icd: "Primary ICD-10",
		pain: "Pain (0–10)",
		mobility: "Mobility (0–10)",
		fall: "Fall risk (0–10)",
		fatigue: "Fatigue (0–10)",
		redflags: "Red-flag screen",
		chest: "Chest pain",
		neuro: "Neuro change",
		trauma: "Trauma",
		systemic: "Systemic",
		egStatus: "Heuristic status",
		cgi: "Clinician global impression (1–7)",
		rater: "Rater ID (inter-rater)",
		susTotal: "SUS total (0–100)",
		exportJson: "Export JSON",
		exportCsv: "Export CSV (wide)",
		importJson: "Import / merge JSON",
		mergeHint: "Merges by participant ID. Same ID from another site is prefixed with that site.",
		workspace: "Workspace",
		lang: "Language",
		modelTitle: "Statistical model (locked)",
		modelBody: "Primary: ICC(2,1) two-way random, single-measure, absolute agreement with 95% CI; Bland–Altman mean bias and 95% limits of agreement; SEM = SD × √(1−ICC); MDC95 = 1.96 × SEM × √2. PLI: Cronbach’s α and test–retest ICC. Ordinal EncounterGuard status: weighted κ. Associations: Pearson or Spearman as specified. No treatment inference. Tools do not change care.",
		nPaired: "n paired",
		icc: "ICC(2,1)",
		ci: "95% CI",
		sem: "SEM",
		mdc: "MDC95",
		bias: "Bias",
		loa: "95% LoA",
		alpha: "Cronbach α",
		filterSite: "All sites",
		status: "Status",
		screening: "Screening",
		enrolledSt: "Enrolled",
		completeSt: "Complete",
		withdrawnSt: "Withdrawn",
		bmi: "BMI",
		dictionaryHint: "Locked codebook for SPSS/R. Same names in DE and EN exports.",
		field: "Variable",
		tool: "Tool",
		role: "Role",
		unit: "Unit",
		primary: "Primary",
		secondary: "Secondary",
		exploratory: "Exploratory",
		covariate: "Covariate",
		feasibility: "Feasibility",
		safety: "Safety",
		emptySites: "Add a site when you enrol. Any facility.",
		search: "Search ID or site",
		confirmClear: "This deletes all local participants. Export first.",
		cancel: "Cancel",
		confirm: "Clear",
		participants: "Participants",
		readings: "Readings",
		meanSus: "Mean SUS",
		techRate: "Technical success",
		aeRate: "AE / stops",
		notDevice: "Investigational research instruments. No diagnosis. No therapy change."
	},
	de: {
		app: "Clinimetric Lab",
		tag: "Digital Rehabilitation Research Suite",
		research: "Forschungs-CRF · kein Medizinprodukt",
		dashboard: "Dashboard",
		enrol: "Einschluss",
		analysis: "Analyse",
		dictionary: "Variablen",
		collaborate: "Zusammenarbeit",
		protocol: "Studie",
		sampleBanner: "Beispieldatensatz geladen. Echte Teilnehmende einschließen oder eine Standort-Datei importieren. Beispielzeilen sind mit SAMPLE markiert.",
		dismiss: "Schließen",
		loadSample: "Beispiel laden",
		clearData: "Lokale Daten löschen",
		enrolled: "Eingeschlossen",
		completeV1: "V1 vollständig",
		retest: "Retest 24–72 h",
		withdrawn: "Abgebrochen",
		sites: "Standorte",
		liveFeed: "Live-Messungen",
		funnel: "Einschluss-Trichter",
		screened: "Gescreent",
		eligible: "Geeignet",
		completed: "Abgeschlossen",
		completeness: "Vollständigkeit der Instrumente (V1)",
		iccLive: "Live-Reliabilität (gepaart V1 vs. Retest)",
		iccHint: "ICC(2,1) absolute Übereinstimmung. Unter n = 30 vorsichtig interpretieren.",
		noData: "Noch keine gepaarten Messungen. Teilnehmende einschließen und V1 plus Retest ausfüllen.",
		newParticipant: "Neue Person",
		site: "Standort / Einrichtung",
		siteId: "Standort-ID",
		siteName: "Standortname",
		country: "Land",
		investigator: "Prüferin / Operator",
		pid: "Teilnehmer-ID",
		age: "Alter (Jahre)",
		sex: "Geschlecht",
		female: "Weiblich",
		male: "Männlich",
		other: "Divers / nicht angegeben",
		height: "Größe (cm)",
		weight: "Gewicht (kg)",
		indications: "Indikationen (Forschung)",
		neck: "Nacken / zervikal",
		gait: "Gang / untere Extremität",
		resp: "Atmung",
		mixed: "Gemischt / anderes",
		consent: "Einwilligungsmodule",
		consentCore: "Kern-Clinimetrie",
		consentAv: "Optional AV-Rohdaten (Standard aus)",
		consentHome: "Optionaler Home-Follow-up",
		saveEnrol: "Einschließen",
		openVisit: "Visiten öffnen",
		visitV1: "Visite 1",
		visitRetest: "Retest 24–72 h",
		visitV2: "Visite 2 (optional)",
		visitDate: "Visiten-Datum",
		duration: "Dauer (min)",
		operator: "Operator",
		digitalFirst: "Digital zuerst",
		refFirst: "Referenz zuerst",
		order: "Reihenfolge (randomisieren)",
		techOk: "Technischer Erfolg",
		aeNone: "Kein unerwünschtes Ereignis",
		aeYes: "UE / Abbruch",
		aeText: "Beschreibung",
		notes: "Notizen",
		saveVisit: "Visite speichern",
		saved: "Gespeichert",
		core: "Kern",
		breath: "BreathScope",
		rom: "ROMLens",
		gaitTool: "GaitScope",
		pli: "PLI",
		encounter: "EncounterGuard",
		sus: "SUS & Sicherheit",
		rmsPeak: "RMS-Peak",
		pefProxy: "PEF-Proxy (Peak × 800)",
		fev1est: "Geschätztes FEV₁ (L)",
		fev1exp: "Erwartetes FEV₁ (L)",
		pctExp: "% erwartet",
		refFev1: "Referenz-Spirometer FEV₁ (L)",
		pctDiff: "% Differenz zur Referenz",
		attempts: "Versuche",
		aborted: "Abgebrochen / unvollständig",
		flex: "Flexion (°)",
		ext: "Extension (°)",
		rotL: "Rotation L (°)",
		rotR: "Rotation R (°)",
		latL: "Lateralflexion L (°)",
		latR: "Lateralflexion R (°)",
		digital: "Digital (ROMLens)",
		reference: "Referenz (Goniometer / Inklinometer)",
		cadence: "Kadenz (Schritte/min)",
		steps: "Schrittzahl",
		stride: "Schrittlängenschätzung (cm)",
		asym: "Asymmetrieindex",
		kneeL: "Kniewinkel L (°)",
		kneeR: "Kniewinkel R (°)",
		hipL: "Hüftwinkel L (°)",
		hipR: "Hüftwinkel R (°)",
		riskRaw: "Zusammengesetzte Heuristik (explorativ, nicht für die Versorgung)",
		gaitRef: "Referenz (Zählung / Wearable)",
		pliTotal: "PLI-Summe (0–50)",
		pliPct: "% Einschränkung",
		pliBand: "Schweregrad",
		icd: "Primäre ICD-10",
		pain: "Schmerz (0–10)",
		mobility: "Mobilität (0–10)",
		fall: "Sturzrisiko (0–10)",
		fatigue: "Fatigue (0–10)",
		redflags: "Red-Flag-Screen",
		chest: "Brustschmerz",
		neuro: "Neurologische Änderung",
		trauma: "Trauma",
		systemic: "Systemisch",
		egStatus: "Heuristik-Status",
		cgi: "Klinischer Gesamteindruck (1–7)",
		rater: "Rater-ID (Inter-Rater)",
		susTotal: "SUS-Summe (0–100)",
		exportJson: "JSON exportieren",
		exportCsv: "CSV exportieren (breit)",
		importJson: "JSON importieren / mergen",
		mergeHint: "Merge über Teilnehmer-ID. Gleiche ID von einem anderen Standort wird mit der Standort-ID präfigiert.",
		workspace: "Arbeitsbereich",
		lang: "Sprache",
		modelTitle: "Statistisches Modell (gesperrt)",
		modelBody: "Primär: ICC(2,1) zweifach zufällig, Einzelmessung, absolute Übereinstimmung mit 95 %-KI; Bland-Altman mittlerer Bias und 95 %-Übereinstimmungsgrenzen; SEM = SD × √(1−ICC); MDC95 = 1,96 × SEM × √2. PLI: Cronbachs α und Test-Retest-ICC. Ordinal EncounterGuard: gewichtetes κ. Assoziationen: Pearson oder Spearman. Keine Therapie-Inferenz. Instrumente ändern die Behandlung nicht.",
		nPaired: "n gepaart",
		icc: "ICC(2,1)",
		ci: "95 %-KI",
		sem: "SEM",
		mdc: "MDC95",
		bias: "Bias",
		loa: "95 % LoA",
		alpha: "Cronbach α",
		filterSite: "Alle Standorte",
		status: "Status",
		screening: "Screening",
		enrolledSt: "Eingeschlossen",
		completeSt: "Abgeschlossen",
		withdrawnSt: "Abgebrochen",
		bmi: "BMI",
		dictionaryHint: "Gesperrtes Codebuch für SPSS/R. Gleiche Variablennamen in DE- und EN-Exporten.",
		field: "Variable",
		tool: "Instrument",
		role: "Rolle",
		unit: "Einheit",
		primary: "Primär",
		secondary: "Sekundär",
		exploratory: "Explorativ",
		covariate: "Kovariate",
		feasibility: "Machbarkeit",
		safety: "Sicherheit",
		emptySites: "Standort beim Einschluss angeben. Beliebige Einrichtung.",
		search: "ID oder Standort suchen",
		confirmClear: "Löscht alle lokalen Teilnehmenden. Zuerst exportieren.",
		cancel: "Abbrechen",
		confirm: "Löschen",
		participants: "Teilnehmende",
		readings: "Messungen",
		meanSus: "Mittlerer SUS",
		techRate: "Technischer Erfolg",
		aeRate: "UE / Stops",
		notDevice: "Prüfprodukte zur Forschung. Keine Diagnose. Keine Therapieänderung."
	}
};
var pliItems = {
	en: [
		"Pain intensity",
		"Personal care",
		"Lifting / carrying",
		"Reading / screens",
		"Headaches",
		"Concentration",
		"Work / occupation",
		"Driving / transport",
		"Sleeping",
		"Recreation / sport"
	],
	de: [
		"Schmerzintensität",
		"Körperpflege",
		"Heben / Tragen",
		"Lesen / Bildschirme",
		"Kopfschmerzen",
		"Konzentration",
		"Arbeit / Beruf",
		"Fahren / Transport",
		"Schlaf",
		"Freizeit / Sport"
	]
};
var susItems = {
	en: [
		"I think I would like to use this system frequently.",
		"I found the system unnecessarily complex.",
		"I thought the system was easy to use.",
		"I think I would need support to use this system.",
		"I found the functions well integrated.",
		"I thought there was too much inconsistency.",
		"I would imagine most people would learn this quickly.",
		"I found the system very cumbersome to use.",
		"I felt very confident using the system.",
		"I needed to learn a lot before I could get going."
	],
	de: [
		"Ich würde dieses System häufig nutzen wollen.",
		"Ich fand das System unnötig komplex.",
		"Ich fand das System einfach zu bedienen.",
		"Ich würde Unterstützung brauchen, um es zu nutzen.",
		"Die Funktionen waren gut integriert.",
		"Es gab zu viele Unstimmigkeiten.",
		"Die meisten würden es schnell lernen.",
		"Ich fand das System umständlich.",
		"Ich fühlte mich sicher bei der Nutzung.",
		"Ich musste viel lernen, bevor ich starten konnte."
	]
};
var bands = {
	en: [
		"Minimal",
		"Mild",
		"Moderate",
		"Severe",
		"Very severe"
	],
	de: [
		"Minimal",
		"Leicht",
		"Mäßig",
		"Schwer",
		"Sehr schwer"
	]
};
var emptyVisit = () => ({
	date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	operator: "",
	durationMin: void 0,
	digitalFirst: Math.random() < .5,
	techSuccess: true,
	ae: false,
	aeText: "",
	notes: "",
	breath: {
		attempts: 1,
		aborted: false
	},
	romD: {},
	romR: {},
	gaitD: {},
	gaitR: {},
	pli: Array(10).fill(-1),
	sus: Array(10).fill(-1),
	encounter: {}
});
function bmi(p) {
	if (!p.heightCm || !p.weightKg) return void 0;
	const m = p.heightCm / 100;
	return p.weightKg / (m * m);
}
function pefProxy(peak) {
	if (peak == null) return void 0;
	return peak * 800;
}
function fev1Est(peak, heightCm, age) {
	const pef = pefProxy(peak);
	if (pef == null || !heightCm || !age) return void 0;
	return pef * .004 * (heightCm / 170) * (40 / age);
}
function fev1Expected(heightCm, age) {
	if (!heightCm || !age) return void 0;
	return .04 * heightCm - .03 * age - 2;
}
function pctExpected(est, exp) {
	if (est == null || !exp) return void 0;
	return Math.min(100, Math.max(0, est / exp * 100));
}
function pctDiff(est, ref) {
	if (est == null || ref == null || ref === 0) return void 0;
	return (est - ref) / ref * 100;
}
function pliTotal(items) {
	const ok = items.filter((x) => x >= 0);
	if (ok.length < 10) return void 0;
	return ok.reduce((a, b) => a + b, 0);
}
function pliPct(total) {
	if (total == null) return void 0;
	return total / 50 * 100;
}
function pliBand(total) {
	if (total == null) return void 0;
	if (total <= 4) return 0;
	if (total <= 14) return 1;
	if (total <= 24) return 2;
	if (total <= 34) return 3;
	return 4;
}
function susTotal(items) {
	if (items.some((x) => x < 0 || x > 4)) return void 0;
	let s = 0;
	items.forEach((v, i) => {
		s += i % 2 === 0 ? v : 4 - v;
	});
	return s * 2.5;
}
function egIcfSum(e) {
	const vals = [
		e.pain,
		e.mobility,
		e.fall,
		e.fatigue
	];
	if (vals.some((v) => v == null)) return void 0;
	return vals.reduce((a, b) => a + b, 0);
}
function egLoad(icd) {
	if (!icd) return 0;
	const c = icd.toUpperCase();
	if (/^[I]/.test(c) || /^G/.test(c) || /^J9/.test(c)) return 8;
	if (/^M5[0-4]/.test(c) || /^S1/.test(c)) return 4;
	return 1;
}
function egStatus(e) {
	const sum = egIcfSum(e);
	if (sum == null) return void 0;
	let score = sum + egLoad(e.icd);
	const flags = [
		e.chest,
		e.neuro,
		e.resp,
		e.trauma,
		e.systemic
	].filter(Boolean).length;
	if (e.chest || e.neuro) return "red";
	if (flags) score += 6;
	if (score >= 28) return "red";
	if (score >= 14) return "yellow";
	return "green";
}
var VARIABLES = [
	{
		id: "pid",
		tool: "core",
		role: "covariate",
		unit: "id",
		en: "Participant ID",
		de: "Teilnehmer-ID"
	},
	{
		id: "site_id",
		tool: "core",
		role: "covariate",
		unit: "id",
		en: "Site ID",
		de: "Standort-ID"
	},
	{
		id: "site_name",
		tool: "core",
		role: "covariate",
		unit: "text",
		en: "Site name",
		de: "Standortname"
	},
	{
		id: "country",
		tool: "core",
		role: "covariate",
		unit: "text",
		en: "Country",
		de: "Land"
	},
	{
		id: "investigator",
		tool: "core",
		role: "covariate",
		unit: "text",
		en: "Investigator",
		de: "Prüferin"
	},
	{
		id: "visit",
		tool: "core",
		role: "covariate",
		unit: "cat",
		en: "Visit (v1/retest/v2)",
		de: "Visite"
	},
	{
		id: "visit_date",
		tool: "core",
		role: "covariate",
		unit: "date",
		en: "Visit date",
		de: "Visiten-Datum"
	},
	{
		id: "age_years",
		tool: "core",
		role: "covariate",
		unit: "y",
		en: "Age",
		de: "Alter"
	},
	{
		id: "sex",
		tool: "core",
		role: "covariate",
		unit: "cat",
		en: "Sex",
		de: "Geschlecht"
	},
	{
		id: "height_cm",
		tool: "core",
		role: "covariate",
		unit: "cm",
		en: "Height",
		de: "Größe"
	},
	{
		id: "weight_kg",
		tool: "core",
		role: "covariate",
		unit: "kg",
		en: "Weight",
		de: "Gewicht"
	},
	{
		id: "bmi",
		tool: "core",
		role: "covariate",
		unit: "kg/m²",
		en: "BMI",
		de: "BMI"
	},
	{
		id: "ind_neck",
		tool: "core",
		role: "covariate",
		unit: "0/1",
		en: "Indication neck",
		de: "Indikation Nacken"
	},
	{
		id: "ind_gait",
		tool: "core",
		role: "covariate",
		unit: "0/1",
		en: "Indication gait",
		de: "Indikation Gang"
	},
	{
		id: "ind_resp",
		tool: "core",
		role: "covariate",
		unit: "0/1",
		en: "Indication respiratory",
		de: "Indikation Atmung"
	},
	{
		id: "digital_first",
		tool: "core",
		role: "covariate",
		unit: "0/1",
		en: "Digital first",
		de: "Digital zuerst"
	},
	{
		id: "duration_min",
		tool: "feasibility",
		role: "feasibility",
		unit: "min",
		en: "Session duration",
		de: "Dauer"
	},
	{
		id: "tech_success",
		tool: "feasibility",
		role: "feasibility",
		unit: "0/1",
		en: "Technical success",
		de: "Technischer Erfolg"
	},
	{
		id: "ae_flag",
		tool: "sus",
		role: "safety",
		unit: "0/1",
		en: "Adverse event",
		de: "Unerwünschtes Ereignis"
	},
	{
		id: "bs_rms_peak",
		tool: "breath",
		role: "primary",
		unit: "rms",
		en: "BreathScope RMS peak",
		de: "BreathScope RMS-Peak"
	},
	{
		id: "bs_pef_proxy",
		tool: "breath",
		role: "primary",
		unit: "proxy",
		en: "PEF proxy",
		de: "PEF-Proxy"
	},
	{
		id: "bs_fev1_est",
		tool: "breath",
		role: "primary",
		unit: "L",
		en: "Estimated FEV1",
		de: "Geschätztes FEV1"
	},
	{
		id: "bs_fev1_expected",
		tool: "breath",
		role: "secondary",
		unit: "L",
		en: "Expected FEV1",
		de: "Erwartetes FEV1"
	},
	{
		id: "bs_pct_expected",
		tool: "breath",
		role: "secondary",
		unit: "%",
		en: "% expected FEV1",
		de: "% erwartetes FEV1"
	},
	{
		id: "bs_ref_fev1",
		tool: "breath",
		role: "primary",
		unit: "L",
		en: "Spirometer FEV1",
		de: "Spirometer-FEV1"
	},
	{
		id: "bs_pct_diff_ref",
		tool: "breath",
		role: "primary",
		unit: "%",
		en: "% diff vs spirometer",
		de: "% Diff. Spirometer"
	},
	{
		id: "rom_flex_d",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Flexion digital",
		de: "Flexion digital"
	},
	{
		id: "rom_flex_r",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Flexion reference",
		de: "Flexion Referenz"
	},
	{
		id: "rom_ext_d",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Extension digital",
		de: "Extension digital"
	},
	{
		id: "rom_ext_r",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Extension reference",
		de: "Extension Referenz"
	},
	{
		id: "rom_rot_l_d",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Rotation L digital",
		de: "Rotation L digital"
	},
	{
		id: "rom_rot_l_r",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Rotation L reference",
		de: "Rotation L Referenz"
	},
	{
		id: "rom_rot_r_d",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Rotation R digital",
		de: "Rotation R digital"
	},
	{
		id: "rom_rot_r_r",
		tool: "rom",
		role: "primary",
		unit: "deg",
		en: "Rotation R reference",
		de: "Rotation R Referenz"
	},
	{
		id: "rom_lat_l_d",
		tool: "rom",
		role: "secondary",
		unit: "deg",
		en: "Lat flex L digital",
		de: "Lateralflexion L digital"
	},
	{
		id: "rom_lat_l_r",
		tool: "rom",
		role: "secondary",
		unit: "deg",
		en: "Lat flex L reference",
		de: "Lateralflexion L Referenz"
	},
	{
		id: "rom_lat_r_d",
		tool: "rom",
		role: "secondary",
		unit: "deg",
		en: "Lat flex R digital",
		de: "Lateralflexion R digital"
	},
	{
		id: "rom_lat_r_r",
		tool: "rom",
		role: "secondary",
		unit: "deg",
		en: "Lat flex R reference",
		de: "Lateralflexion R Referenz"
	},
	{
		id: "gait_cadence_d",
		tool: "gait",
		role: "primary",
		unit: "spm",
		en: "Cadence digital",
		de: "Kadenz digital"
	},
	{
		id: "gait_cadence_r",
		tool: "gait",
		role: "primary",
		unit: "spm",
		en: "Cadence reference",
		de: "Kadenz Referenz"
	},
	{
		id: "gait_steps_d",
		tool: "gait",
		role: "primary",
		unit: "n",
		en: "Steps digital",
		de: "Schritte digital"
	},
	{
		id: "gait_steps_r",
		tool: "gait",
		role: "primary",
		unit: "n",
		en: "Steps reference",
		de: "Schritte Referenz"
	},
	{
		id: "gait_stride_cm",
		tool: "gait",
		role: "secondary",
		unit: "cm",
		en: "Stride estimate",
		de: "Schrittlänge Schätzung"
	},
	{
		id: "gait_asym",
		tool: "gait",
		role: "secondary",
		unit: "idx",
		en: "Asymmetry",
		de: "Asymmetrie"
	},
	{
		id: "gait_knee_l",
		tool: "gait",
		role: "secondary",
		unit: "deg",
		en: "Knee L",
		de: "Knie L"
	},
	{
		id: "gait_knee_r",
		tool: "gait",
		role: "secondary",
		unit: "deg",
		en: "Knee R",
		de: "Knie R"
	},
	{
		id: "gait_hip_l",
		tool: "gait",
		role: "exploratory",
		unit: "deg",
		en: "Hip L",
		de: "Hüfte L"
	},
	{
		id: "gait_hip_r",
		tool: "gait",
		role: "exploratory",
		unit: "deg",
		en: "Hip R",
		de: "Hüfte R"
	},
	{
		id: "gait_risk_raw",
		tool: "gait",
		role: "exploratory",
		unit: "score",
		en: "Gait heuristic (blind)",
		de: "Gang-Heuristik (blind)"
	},
	{
		id: "pli_i1",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 1",
		de: "PLI Item 1"
	},
	{
		id: "pli_i2",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 2",
		de: "PLI Item 2"
	},
	{
		id: "pli_i3",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 3",
		de: "PLI Item 3"
	},
	{
		id: "pli_i4",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 4",
		de: "PLI Item 4"
	},
	{
		id: "pli_i5",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 5",
		de: "PLI Item 5"
	},
	{
		id: "pli_i6",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 6",
		de: "PLI Item 6"
	},
	{
		id: "pli_i7",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 7",
		de: "PLI Item 7"
	},
	{
		id: "pli_i8",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 8",
		de: "PLI Item 8"
	},
	{
		id: "pli_i9",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 9",
		de: "PLI Item 9"
	},
	{
		id: "pli_i10",
		tool: "pli",
		role: "primary",
		unit: "0-5",
		en: "PLI item 10",
		de: "PLI Item 10"
	},
	{
		id: "pli_total",
		tool: "pli",
		role: "primary",
		unit: "0-50",
		en: "PLI total",
		de: "PLI-Summe"
	},
	{
		id: "pli_pct",
		tool: "pli",
		role: "secondary",
		unit: "%",
		en: "PLI % disability",
		de: "PLI % Einschränkung"
	},
	{
		id: "pli_band",
		tool: "pli",
		role: "secondary",
		unit: "1-5",
		en: "PLI band",
		de: "PLI-Band"
	},
	{
		id: "eg_icd",
		tool: "encounter",
		role: "exploratory",
		unit: "code",
		en: "ICD-10 primary",
		de: "ICD-10 primär"
	},
	{
		id: "eg_pain",
		tool: "encounter",
		role: "exploratory",
		unit: "0-10",
		en: "ICF pain",
		de: "ICF Schmerz"
	},
	{
		id: "eg_mobility",
		tool: "encounter",
		role: "exploratory",
		unit: "0-10",
		en: "ICF mobility",
		de: "ICF Mobilität"
	},
	{
		id: "eg_fall",
		tool: "encounter",
		role: "exploratory",
		unit: "0-10",
		en: "ICF fall risk",
		de: "ICF Sturzrisiko"
	},
	{
		id: "eg_fatigue",
		tool: "encounter",
		role: "exploratory",
		unit: "0-10",
		en: "ICF fatigue",
		de: "ICF Fatigue"
	},
	{
		id: "eg_status",
		tool: "encounter",
		role: "exploratory",
		unit: "cat",
		en: "Heuristic G/Y/R",
		de: "Heuristik G/Y/R"
	},
	{
		id: "eg_cgi",
		tool: "encounter",
		role: "exploratory",
		unit: "1-7",
		en: "CGI",
		de: "CGI"
	},
	{
		id: "eg_rater",
		tool: "encounter",
		role: "exploratory",
		unit: "id",
		en: "Rater ID",
		de: "Rater-ID"
	},
	{
		id: "sus_total",
		tool: "sus",
		role: "feasibility",
		unit: "0-100",
		en: "SUS total",
		de: "SUS-Summe"
	}
];
function visitRow(p, key) {
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
		bmi: bmi(p) != null ? Math.round(bmi(p) * 10) / 10 : void 0,
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
		...Object.fromEntries(v.pli.map((x, i) => [`pli_i${i + 1}`, x < 0 ? void 0 : x])),
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
		sus_total: susTotal(v.sus)
	};
}
function allRows(people) {
	const keys = [
		"v1",
		"retest",
		"v2"
	];
	const rows = [];
	for (const p of people) for (const k of keys) {
		const r = visitRow(p, k);
		if (r) rows.push(r);
	}
	return rows;
}
function rand(a, b) {
	return a + Math.random() * (b - a);
}
function nrand(m, s) {
	const u = 1 - Math.random();
	const v = Math.random();
	return m + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
function clamp(n, a, b) {
	return Math.min(b, Math.max(a, n));
}
function round(n, d = 1) {
	const p = 10 ** d;
	return Math.round(n * p) / p;
}
function noisy(trueVal, err = 3, lo = 0, hi = 90) {
	return round(clamp(trueVal + nrand(0, err), lo, hi), 1);
}
function visitFrom(base) {
	const v = emptyVisit();
	v.date = base.date;
	v.operator = base.operator;
	v.durationMin = round(rand(38, 78), 0);
	v.techSuccess = Math.random() > .06;
	v.ae = Math.random() < .04;
	if (v.ae) v.aeText = "Transient dizziness, recovered seated";
	v.romD = {
		flex: noisy(base.neck ? 38 : 52, 6, 12, 70),
		ext: noisy(base.neck ? 42 : 58, 6, 15, 80),
		rotL: noisy(base.neck ? 55 : 70, 7, 20, 90),
		rotR: noisy(base.neck ? 53 : 68, 7, 20, 90),
		latL: noisy(base.neck ? 28 : 38, 5, 8, 55),
		latR: noisy(base.neck ? 30 : 39, 5, 8, 55)
	};
	v.romR = {
		flex: noisy(v.romD.flex, 4, 12, 70),
		ext: noisy(v.romD.ext, 4, 15, 80),
		rotL: noisy(v.romD.rotL, 5, 20, 90),
		rotR: noisy(v.romD.rotR, 5, 20, 90),
		latL: noisy(v.romD.latL, 3, 8, 55),
		latR: noisy(v.romD.latR, 3, 8, 55)
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
		riskRaw: round(clamp(nrand(base.gait ? 22 : 8, 6), 0, 60), 1)
	};
	v.gaitR = {
		cadence: noisy(cad, 3, 70, 140),
		steps: v.gaitD.steps + Math.round(nrand(0, 1))
	};
	v.breath = {
		rmsPeak: round(clamp(nrand(base.resp ? .22 : .34, .05), .08, .55), 3),
		refFev1: round(clamp(nrand(base.resp ? 2.4 : 3.3, .35), 1.1, 5.2), 2),
		attempts: 1,
		aborted: false
	};
	const pain = Math.round(clamp(nrand(base.neck ? 2.8 : 1.4, 1.1), 0, 5));
	v.pli = Array.from({ length: 10 }, (_, i) => Math.round(clamp(pain + nrand(i === 4 ? .4 : 0, .9), 0, 5)));
	v.sus = Array.from({ length: 10 }, (_, i) => {
		const easy = i % 2 === 0;
		return Math.round(clamp(easy ? nrand(3.2, .6) : nrand(.8, .6), 0, 4));
	});
	v.encounter = {
		icd: base.neck ? "M54.2" : base.gait ? "M17.1" : "J44.1",
		pain: Math.round(clamp(nrand(base.neck ? 5 : 3, 1.5), 0, 10)),
		mobility: Math.round(clamp(nrand(base.gait ? 6 : 3, 1.5), 0, 10)),
		fall: Math.round(clamp(nrand(base.gait ? 4 : 1.5, 1.2), 0, 10)),
		fatigue: Math.round(clamp(nrand(4, 1.6), 0, 10)),
		chest: false,
		neuro: false,
		resp: base.resp && Math.random() < .1,
		trauma: false,
		systemic: false,
		cgi: Math.round(clamp(nrand(3, 1), 1, 7)),
		rater: base.operator.slice(0, 2).toUpperCase()
	};
	return v;
}
var SITES = [{
	id: "SITE-N",
	name: "Nord Reha",
	country: "DE",
	inv: "M. Keller"
}, {
	id: "SITE-S",
	name: "Alpen Physio",
	country: "AT",
	inv: "L. Hofmann"
}];
function makeSample() {
	const people = [];
	for (let i = 0; i < 16; i++) {
		const site = SITES[i % 2];
		const age = Math.round(rand(22, 64));
		const sex = i % 5 === 0 ? "x" : i % 2 === 0 ? "f" : "m";
		const height = Math.round(nrand(sex === "f" ? 168 : 178, 7));
		const neck = i % 3 !== 2;
		const gait = i % 3 !== 0;
		const resp = i % 4 === 0;
		const day = 10 + i % 18;
		const p = {
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
			visits: {}
		};
		const v1 = visitFrom({
			age,
			height,
			neck,
			gait,
			resp,
			operator: site.inv,
			date: `2026-09-${String(day).padStart(2, "0")}`
		});
		p.visits.v1 = v1;
		if (i !== 15 && i !== 4) {
			const rt = visitFrom({
				age,
				height,
				neck,
				gait,
				resp,
				operator: site.inv,
				date: `2026-09-${String(Math.min(30, day + 2)).padStart(2, "0")}`
			});
			rt.romD.flex = noisy(v1.romD.flex ?? 40, 3, 12, 70);
			rt.romR.flex = noisy(rt.romD.flex, 3, 12, 70);
			p.visits.retest = rt;
		}
		if (p.status === "complete") p.visits.v2 = visitFrom({
			age,
			height,
			neck,
			gait,
			resp,
			operator: site.inv,
			date: `2026-10-01`
		});
		people.push(p);
	}
	return people;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "P") {
	return `${prefix}-${Math.random().toString(36).slice(2, 6).toUpperCase()}${Date.now().toString(36).slice(-3).toUpperCase()}`;
}
function download(filename, content, mime = "application/json") {
	const blob = new Blob([content], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function csvEscape(v) {
	if (v == null) return "";
	const s = String(v);
	if (/[",\n]/.test(s)) return `"${s.replace(/"/g, "\"\"")}"`;
	return s;
}
var useLab = create()(persist((set, get) => ({
	lang: "en",
	workspace: {
		name: "DIGIFUNK-CRF",
		schemaVersion: 1
	},
	people: [],
	siteFilter: "",
	sampleBanner: false,
	setLang: (lang) => set({ lang }),
	setWorkspace: (name) => set({ workspace: {
		...get().workspace,
		name
	} }),
	setSiteFilter: (siteFilter) => set({ siteFilter }),
	dismissBanner: () => set({ sampleBanner: false }),
	loadSample: () => set({
		people: makeSample(),
		sampleBanner: true
	}),
	clearAll: () => set({
		people: [],
		sampleBanner: false
	}),
	upsert: (p) => set({ people: get().people.some((x) => x.id === p.id) ? get().people.map((x) => x.id === p.id ? p : x) : [p, ...get().people] }),
	saveVisit: (id, key, v) => set({ people: get().people.map((p) => {
		if (p.id !== id) return p;
		const visits = {
			...p.visits,
			[key]: v
		};
		const status = p.status === "withdrawn" ? p.status : visits.v1 ? "enrolled" : p.status;
		return {
			...p,
			visits,
			status
		};
	}) }),
	remove: (id) => set({ people: get().people.filter((p) => p.id !== id) }),
	mergeImport: (incoming, workspaceName) => {
		const cur = [...get().people];
		let added = 0;
		let merged = 0;
		for (const p of incoming) {
			const clash = cur.find((x) => x.id === p.id);
			if (!clash) {
				cur.push(p);
				added++;
				continue;
			}
			if (clash.siteId === p.siteId) {
				cur[cur.indexOf(clash)] = {
					...clash,
					...p,
					visits: {
						...clash.visits,
						...p.visits
					}
				};
				merged++;
			} else {
				cur.push({
					...p,
					id: `${p.siteId}-${p.id}`
				});
				added++;
			}
		}
		set({
			people: cur,
			workspace: workspaceName ? {
				...get().workspace,
				name: workspaceName
			} : get().workspace
		});
		return {
			added,
			merged
		};
	}
}), {
	name: "clinimetric-lab-v1",
	onRehydrateStorage: () => (state) => {
		if (!state) return;
		if (!state.people.length) useLab.setState({
			people: makeSample(),
			sampleBanner: true
		});
	}
}));
function newParticipant(partial) {
	return {
		id: partial.id || uid("P"),
		siteId: partial.siteId || "SITE-01",
		siteName: partial.siteName || "Unnamed facility",
		country: partial.country || "DE",
		investigator: partial.investigator || "",
		enrolledAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: "enrolled",
		age: partial.age ?? 40,
		sex: partial.sex ?? "x",
		heightCm: partial.heightCm ?? 170,
		weightKg: partial.weightKg ?? 70,
		neck: partial.neck ?? true,
		gait: partial.gait ?? true,
		resp: partial.resp ?? false,
		consentCore: true,
		consentAv: false,
		consentHome: false,
		visits: {},
		...partial
	};
}
var nav = [
	{
		to: "/",
		key: "dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/enrol",
		key: "enrol",
		icon: UserPlus
	},
	{
		to: "/analysis",
		key: "analysis",
		icon: ChartLine
	},
	{
		to: "/dictionary",
		key: "dictionary",
		icon: BookOpen
	},
	{
		to: "/collaborate",
		key: "collaborate",
		icon: Share2
	}
];
function Shell({ children }) {
	const lang = useLab((s) => s.lang);
	const setLang = useLab((s) => s.setLang);
	const path = useRouterState({ select: (s) => s.location.pathname });
	const copy = t[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg font-medium tracking-tight",
							children: copy.app
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted",
							children: copy.research
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 rounded-md border border-border bg-surface p-0.5",
						children: ["en", "de"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(l),
							className: cn("h-9 min-w-11 rounded-[6px] px-2.5 text-xs font-medium uppercase", lang === l ? "bg-accent text-accent-fg" : "text-muted"),
							children: l
						}, l))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2",
					children: nav.map((n) => {
						const Icon = n.icon;
						const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: n.to,
							className: cn("flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm", active ? "bg-accent text-accent-fg" : "text-muted hover:bg-sunken hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								strokeWidth: 1.75
							}), copy[n.key]]
						}, n.to);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 py-6",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mx-auto max-w-6xl px-4 pb-10 text-xs text-muted",
				children: copy.notDevice
			})
		]
	});
}
function Button({ variant = "primary", className, ...props }) {
	const v = {
		primary: "bg-accent text-accent-fg hover:opacity-90",
		ghost: "bg-transparent text-fg hover:bg-sunken",
		outline: "bg-surface text-fg border border-border hover:bg-sunken",
		danger: "bg-danger text-accent-fg hover:opacity-90"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-medium transition-opacity disabled:opacity-40", v, className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none ring-accent/30 placeholder:text-subtle focus:ring-2", className),
		...props
	});
}
function Select({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none ring-accent/30 focus:ring-2", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg outline-none ring-accent/30 focus:ring-2", className),
		...props
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-ink-soft",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-surface p-5", className),
		...props
	});
}
function Badge({ tone = "neutral", children }) {
	const map = {
		neutral: "bg-sunken text-muted",
		ok: "bg-ok/10 text-ok",
		warn: "bg-warn/10 text-warn",
		danger: "bg-danger/10 text-danger",
		accent: "bg-accent/10 text-accent"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", map),
		children
	});
}
function Num({ value, onChange, step, min, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		type: "number",
		inputMode: "decimal",
		step: step ?? "any",
		min,
		max,
		value: value ?? "",
		onChange: (e) => {
			const v = e.target.value;
			onChange(v === "" ? void 0 : Number(v));
		}
	});
}
//#endregion
export { t as A, pefProxy as C, pliTotal as D, pliPct as E, useLab as M, susItems as O, pctExpected as S, pliItems as T, emptyVisit as _, Input as a, newParticipant as b, Shell as c, allRows as d, bands as f, egStatus as g, download as h, Field as i, uid as j, susTotal as k, Textarea as l, csvEscape as m, Button as n, Num as o, cn as p, Card as r, Select as s, Badge as t, VARIABLES as u, fev1Est as v, pliBand as w, pctDiff as x, fev1Expected as y };
