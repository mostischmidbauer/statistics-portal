//#region node_modules/.nitro/vite/services/ssr/assets/stats-CIrD55O-.js
function finite(n) {
	return typeof n === "number" && Number.isFinite(n);
}
function pairs(rows) {
	return rows.filter((r) => finite(r.x) && finite(r.y)).map((r) => ({
		x: r.x,
		y: r.y
	}));
}
function mean(xs) {
	if (!xs.length) return void 0;
	return xs.reduce((a, b) => a + b, 0) / xs.length;
}
function variance(xs, ddof = 1) {
	if (xs.length < 2) return void 0;
	const m = mean(xs);
	return xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - ddof);
}
function sd(xs) {
	const v = variance(xs);
	return v == null ? void 0 : Math.sqrt(v);
}
/** ICC(2,1) two-way random, absolute agreement, single measure (Shrout & Fleiss). */
function icc21(ps) {
	const n = ps.length;
	if (n < 3) return void 0;
	const k = 2;
	const x = ps.map((p) => p.x);
	const y = ps.map((p) => p.y);
	const grand = mean([...x, ...y]);
	let ssr = 0;
	let sse = 0;
	let ssc = 0;
	const colM = [mean(x), mean(y)];
	for (let i = 0; i < n; i++) {
		const rowM = (x[i] + y[i]) / 2;
		ssr += k * (rowM - grand) ** 2;
		sse += (x[i] - rowM - colM[0] + grand) ** 2 + (y[i] - rowM - colM[1] + grand) ** 2;
	}
	ssc = n * ((colM[0] - grand) ** 2 + (colM[1] - grand) ** 2);
	const msr = ssr / (n - 1);
	const mse = sse / ((n - 1) * 1);
	const msc = ssc / 1;
	const den = msr + 1 * mse + k * (msc - mse) / n;
	if (!den) return void 0;
	const icc = (msr - mse) / den;
	const ci = iccCi(icc, n, k);
	const s = sd([...x, ...y]);
	const sem = s != null ? s * Math.sqrt(Math.max(0, 1 - icc)) : void 0;
	const mdc = sem != null ? 1.96 * sem * Math.SQRT2 : void 0;
	return {
		n,
		icc,
		lo: ci[0],
		hi: ci[1],
		sem,
		mdc,
		msr,
		mse,
		msc
	};
}
function iccCi(icc, n, k) {
	const z = .5 * Math.log((1 + icc) / Math.max(1e-6, 1 - icc));
	const se = 1 / Math.sqrt(Math.max(1, n * (k - 1) - 1));
	const loz = z - 1.96 * se;
	const hiz = z + 1.96 * se;
	const tz = (v) => (Math.exp(2 * v) - 1) / (Math.exp(2 * v) + 1);
	return [tz(loz), tz(hiz)];
}
function blandAltman(ps) {
	if (ps.length < 3) return void 0;
	const diffs = ps.map((p) => p.x - p.y);
	const avgs = ps.map((p) => (p.x + p.y) / 2);
	const bias = mean(diffs);
	const s = sd(diffs);
	return {
		n: ps.length,
		bias,
		sd: s,
		loaLo: bias - 1.96 * s,
		loaHi: bias + 1.96 * s,
		points: avgs.map((a, i) => ({
			avg: a,
			diff: diffs[i]
		}))
	};
}
function cronbach(matrix) {
	const rows = matrix.filter((r) => r.every((x) => Number.isFinite(x) && x >= 0));
	const k = rows[0]?.length ?? 0;
	if (rows.length < 3 || k < 2) return void 0;
	const itemVars = Array.from({ length: k }, (_, j) => variance(rows.map((r) => r[j])));
	if (itemVars.some((v) => v == null)) return void 0;
	const tv = variance(rows.map((r) => r.reduce((a, b) => a + b, 0)));
	if (!tv) return void 0;
	let sumV = 0;
	for (const v of itemVars) {
		if (v == null) return void 0;
		sumV += v;
	}
	return k / (k - 1) * (1 - sumV / tv);
}
function fmt(n, d = 2) {
	if (n == null || Number.isNaN(n)) return "—";
	return n.toFixed(d);
}
//#endregion
export { pairs as a, icc21 as i, cronbach as n, fmt as r, blandAltman as t };
