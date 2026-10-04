import { d as allRows } from "./ui-ID9MAFG0.mjs";
import { a as pairs, i as icc21, n as cronbach, t as blandAltman } from "./stats-CIrD55O-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analysis-BZ1WifPq.js
function sitesOf(people) {
	const map = /* @__PURE__ */ new Map();
	for (const p of people) map.set(p.siteId, p.siteName);
	return [...map.entries()].map(([id, name]) => ({
		id,
		name
	}));
}
function funnel(people) {
	return {
		screened: people.length,
		eligible: people.filter((p) => p.consentCore).length,
		enrolled: people.filter((p) => p.status !== "screening").length,
		v1: people.filter((p) => p.visits.v1).length,
		retest: people.filter((p) => p.visits.retest).length,
		complete: people.filter((p) => p.status === "complete").length,
		withdrawn: people.filter((p) => p.status === "withdrawn").length
	};
}
function toolComplete(people) {
	const v1 = people.map((p) => p.visits.v1).filter(Boolean);
	const n = v1.length || 1;
	const breath = v1.filter((v) => v.breath.rmsPeak != null).length;
	const rom = v1.filter((v) => v.romD.flex != null && v.romR.flex != null).length;
	const gait = v1.filter((v) => v.gaitD.cadence != null).length;
	const pli = v1.filter((v) => v.pli.every((x) => x >= 0)).length;
	const eg = v1.filter((v) => v.encounter.pain != null).length;
	const sus = v1.filter((v) => v.sus.every((x) => x >= 0)).length;
	return [
		{
			id: "BreathScope",
			n: breath,
			pct: breath / n
		},
		{
			id: "ROMLens",
			n: rom,
			pct: rom / n
		},
		{
			id: "GaitScope",
			n: gait,
			pct: gait / n
		},
		{
			id: "PLI",
			n: pli,
			pct: pli / n
		},
		{
			id: "EncounterGuard",
			n: eg,
			pct: eg / n
		},
		{
			id: "SUS",
			n: sus,
			pct: sus / n
		}
	];
}
function col(people, a, b, visit = "v1") {
	const rows = allRows(people).filter((r) => r.visit === visit);
	return pairs(rows.map((r) => ({
		x: r[a],
		y: r[b]
	})));
}
function retestPairs(people, field) {
	const out = [];
	for (const p of people) {
		const a = allRows([p]).find((r) => r.visit === "v1");
		const b = allRows([p]).find((r) => r.visit === "retest");
		if (a && b && typeof a[field] === "number" && typeof b[field] === "number") out.push({
			x: a[field],
			y: b[field]
		});
	}
	return out;
}
var PRIMARY_PAIRS = [
	{
		id: "rom_flex",
		label: "ROM flexion",
		a: "rom_flex_d",
		b: "rom_flex_r",
		mode: "concurrent"
	},
	{
		id: "rom_rot_r",
		label: "ROM rotation R",
		a: "rom_rot_r_d",
		b: "rom_rot_r_r",
		mode: "concurrent"
	},
	{
		id: "gait_cadence",
		label: "Gait cadence",
		a: "gait_cadence_d",
		b: "gait_cadence_r",
		mode: "concurrent"
	},
	{
		id: "bs_fev1",
		label: "FEV₁ proxy vs spirometer",
		a: "bs_fev1_est",
		b: "bs_ref_fev1",
		mode: "concurrent"
	},
	{
		id: "pli_retest",
		label: "PLI total test–retest",
		a: "pli_total",
		b: "pli_total",
		mode: "retest"
	},
	{
		id: "rom_flex_rt",
		label: "ROM flexion test–retest (digital)",
		a: "rom_flex_d",
		b: "rom_flex_d",
		mode: "retest"
	}
];
function primaryStats(people) {
	return PRIMARY_PAIRS.map((spec) => {
		const ps = spec.mode === "retest" ? retestPairs(people, spec.a) : col(people, spec.a, spec.b, "v1");
		return {
			...spec,
			pairs: ps,
			icc: icc21(ps),
			ba: blandAltman(ps)
		};
	});
}
function pliAlpha(people) {
	const m = people.map((p) => p.visits.v1?.pli).filter((x) => !!x && x.every((i) => i >= 0));
	return cronbach(m);
}
function feed(people) {
	const items = [];
	for (const p of people) [
		"v1",
		"retest",
		"v2"
	].forEach((k) => {
		const v = p.visits[k];
		if (!v) return;
		if (v.romD.flex != null) items.push({
			at: v.date,
			pid: p.id,
			site: p.siteId,
			label: `ROM flex ${k}`,
			value: `${v.romD.flex}°`
		});
		if (v.breath.rmsPeak != null) items.push({
			at: v.date,
			pid: p.id,
			site: p.siteId,
			label: `Breath ${k}`,
			value: String(v.breath.rmsPeak)
		});
		if (v.gaitD.cadence != null) items.push({
			at: v.date,
			pid: p.id,
			site: p.siteId,
			label: `Cadence ${k}`,
			value: `${v.gaitD.cadence}`
		});
	});
	return items.sort((a, b) => a.at < b.at ? 1 : -1).slice(0, 18);
}
function kpis(people) {
	const rows = allRows(people);
	const sus = rows.map((r) => r.sus_total).filter((x) => typeof x === "number");
	const tech = rows.map((r) => r.tech_success).filter((x) => x != null);
	const ae = rows.map((r) => r.ae_flag).filter((x) => x != null);
	const mean = (xs) => xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : void 0;
	return {
		n: people.length,
		readings: rows.length,
		sus: mean(sus),
		tech: tech.length ? tech.filter((x) => x === 1).length / tech.length : void 0,
		ae: ae.length ? ae.filter((x) => x === 1).length / ae.length : void 0
	};
}
//#endregion
export { primaryStats as a, pliAlpha as i, funnel as n, sitesOf as o, kpis as r, toolComplete as s, feed as t };
