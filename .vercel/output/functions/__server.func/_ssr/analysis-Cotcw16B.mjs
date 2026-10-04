import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, M as useLab, c as Shell, r as Card } from "./ui-ID9MAFG0.mjs";
import { r as fmt } from "./stats-CIrD55O-.mjs";
import { a as primaryStats, i as pliAlpha } from "./analysis-BZ1WifPq.mjs";
import { a as Scatter, c as ResponsiveContainer, i as XAxis, l as Tooltip, o as CartesianGrid, r as YAxis, t as ScatterChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analysis-Cotcw16B.js
var import_jsx_runtime = require_jsx_runtime();
function Analysis() {
	const lang = useLab((s) => s.lang);
	const peopleAll = useLab((s) => s.people);
	const siteFilter = useLab((s) => s.siteFilter);
	const copy = t[lang];
	const people = siteFilter ? peopleAll.filter((p) => p.siteId === siteFilter) : peopleAll;
	const stats = primaryStats(people);
	const alpha = pliAlpha(people);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl tracking-tight",
			children: copy.analysis
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium",
					children: copy.modelTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: copy.modelBody
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm",
					children: [
						copy.alpha,
						" (PLI V1): ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-medium",
							children: fmt(alpha, 2)
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid grid-cols-2 gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.nPaired
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.icc?.n ?? s.pairs.length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.icc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.icc ? fmt(s.icc.icc, 3) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.ci
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.icc ? `${fmt(s.icc.lo, 2)} – ${fmt(s.icc.hi, 2)}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.sem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.icc?.sem != null ? fmt(s.icc.sem, 2) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.mdc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.icc?.mdc != null ? fmt(s.icc.mdc, 2) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.bias
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.ba ? fmt(s.ba.bias, 2) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: copy.loa
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: s.ba ? `${fmt(s.ba.loaLo, 1)} / ${fmt(s.ba.loaHi, 1)}` : "—"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: s.ba ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "#ddd6c8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "avg",
								name: "mean",
								tick: { fontSize: 11 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								dataKey: "diff",
								name: "diff",
								tick: { fontSize: 11 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
								data: s.ba.points,
								fill: "#2f4a43"
							})
						] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: copy.noData
					})
				})]
			}, s.id))
		})
	] });
}
//#endregion
export { Analysis as component };
