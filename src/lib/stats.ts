export type Pair = { x: number; y: number };

function finite(n: unknown): n is number {
  return typeof n === "number" && Number.isFinite(n);
}

export function pairs(rows: { x?: unknown; y?: unknown }[]): Pair[] {
  return rows.filter((r) => finite(r.x) && finite(r.y)).map((r) => ({ x: r.x as number, y: r.y as number }));
}

export function mean(xs: number[]) {
  if (!xs.length) return undefined;
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function variance(xs: number[], ddof = 1) {
  if (xs.length < 2) return undefined;
  const m = mean(xs)!;
  return xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - ddof);
}

export function sd(xs: number[]) {
  const v = variance(xs);
  return v == null ? undefined : Math.sqrt(v);
}

export function pearson(ps: Pair[]) {
  if (ps.length < 3) return undefined;
  const xs = ps.map((p) => p.x);
  const ys = ps.map((p) => p.y);
  const mx = mean(xs)!;
  const my = mean(ys)!;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (const p of ps) {
    const a = p.x - mx;
    const b = p.y - my;
    num += a * b;
    dx += a * a;
    dy += b * b;
  }
  if (!dx || !dy) return undefined;
  return num / Math.sqrt(dx * dy);
}

/** ICC(2,1) two-way random, absolute agreement, single measure (Shrout & Fleiss). */
export function icc21(ps: Pair[]) {
  const n = ps.length;
  if (n < 3) return undefined;
  const k = 2;
  const x = ps.map((p) => p.x);
  const y = ps.map((p) => p.y);
  const grand = mean([...x, ...y])!;
  let ssr = 0;
  let sse = 0;
  let ssc = 0;
  const colM = [mean(x)!, mean(y)!];
  for (let i = 0; i < n; i++) {
    const rowM = (x[i] + y[i]) / 2;
    ssr += k * (rowM - grand) ** 2;
    sse += (x[i] - rowM - colM[0] + grand) ** 2 + (y[i] - rowM - colM[1] + grand) ** 2;
  }
  ssc = n * ((colM[0] - grand) ** 2 + (colM[1] - grand) ** 2);
  const msr = ssr / (n - 1);
  const mse = sse / ((n - 1) * (k - 1));
  const msc = ssc / (k - 1);
  const den = msr + (k - 1) * mse + (k * (msc - mse)) / n;
  if (!den) return undefined;
  const icc = (msr - mse) / den;
  const ci = iccCi(icc, n, k);
  const s = sd([...x, ...y]);
  const sem = s != null ? s * Math.sqrt(Math.max(0, 1 - icc)) : undefined;
  const mdc = sem != null ? 1.96 * sem * Math.SQRT2 : undefined;
  return { n, icc, lo: ci[0], hi: ci[1], sem, mdc, msr, mse, msc };
}

function iccCi(icc: number, n: number, k: number): [number, number] {
  const z = 0.5 * Math.log((1 + icc) / Math.max(1e-6, 1 - icc));
  const se = 1 / Math.sqrt(Math.max(1, n * (k - 1) - 1));
  const loz = z - 1.96 * se;
  const hiz = z + 1.96 * se;
  const tz = (v: number) => (Math.exp(2 * v) - 1) / (Math.exp(2 * v) + 1);
  return [tz(loz), tz(hiz)];
}

export function blandAltman(ps: Pair[]) {
  if (ps.length < 3) return undefined;
  const diffs = ps.map((p) => p.x - p.y);
  const avgs = ps.map((p) => (p.x + p.y) / 2);
  const bias = mean(diffs)!;
  const s = sd(diffs)!;
  return {
    n: ps.length,
    bias,
    sd: s,
    loaLo: bias - 1.96 * s,
    loaHi: bias + 1.96 * s,
    points: avgs.map((a, i) => ({ avg: a, diff: diffs[i] })),
  };
}

export function cronbach(matrix: number[][]) {
  const rows = matrix.filter((r) => r.every((x) => Number.isFinite(x) && x >= 0));
  const k = rows[0]?.length ?? 0;
  if (rows.length < 3 || k < 2) return undefined;
  const itemVars = Array.from({ length: k }, (_, j) => variance(rows.map((r) => r[j])));
  if (itemVars.some((v) => v == null)) return undefined;
  const totals = rows.map((r) => r.reduce((a, b) => a + b, 0));
  const tv = variance(totals);
  if (!tv) return undefined;
  let sumV = 0;
  for (const v of itemVars) {
    if (v == null) return undefined;
    sumV += v;
  }
  return (k / (k - 1)) * (1 - sumV / tv);
}

export function fmt(n?: number, d = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  return n.toFixed(d);
}
