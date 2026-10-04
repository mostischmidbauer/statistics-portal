import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, M as useLab, c as Shell, n as Button, r as Card, t as Badge } from "./ui-ID9MAFG0.mjs";
import { r as fmt } from "./stats-CIrD55O-.mjs";
import { a as primaryStats, n as funnel, o as sitesOf, r as kpis, s as toolComplete, t as feed } from "./analysis-BZ1WifPq.mjs";
import { c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, r as YAxis, s as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DntJNSVv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const lang = useLab((s) => s.lang);
	const peopleAll = useLab((s) => s.people);
	const siteFilter = useLab((s) => s.siteFilter);
	const setSiteFilter = useLab((s) => s.setSiteFilter);
	const sampleBanner = useLab((s) => s.sampleBanner);
	const dismiss = useLab((s) => s.dismissBanner);
	const copy = t[lang];
	(0, import_react.useEffect)(() => {
		const s = useLab.getState();
		if (!s.people.length) s.loadSample();
	}, []);
	const people = siteFilter ? peopleAll.filter((p) => p.siteId === siteFilter) : peopleAll;
	const f = funnel(people);
	const kpi = kpis(people);
	const tools = toolComplete(people);
	const stats = primaryStats(people);
	const live = feed(people);
	const sites = sitesOf(peopleAll);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		sampleBanner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3 rounded-lg border border-border bg-sunken px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ink-soft",
				children: copy.sampleBanner
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "h-10 shrink-0",
				onClick: dismiss,
				children: copy.dismiss
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl tracking-tight",
				children: copy.dashboard
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: copy.tag
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 rounded-md border border-border bg-surface px-3 text-sm",
					value: siteFilter,
					onChange: (e) => setSiteFilter(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: copy.filterSite
					}), sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s.id,
						children: s.name
					}, s.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/enrol",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: copy.newParticipant })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: copy.enrolled,
					value: String(kpi.n)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: copy.readings,
					value: String(kpi.readings)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: copy.meanSus,
					value: kpi.sus != null ? fmt(kpi.sus, 0) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: copy.techRate,
					value: kpi.tech != null ? `${Math.round(kpi.tech * 100)}%` : "—"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium",
					children: copy.funnel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: [
								{
									n: copy.screened,
									v: f.screened
								},
								{
									n: copy.enrolled,
									v: f.enrolled
								},
								{
									n: copy.completeV1,
									v: f.v1
								},
								{
									n: copy.retest,
									v: f.retest
								},
								{
									n: copy.completed,
									v: f.complete
								}
							],
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "n",
									tick: {
										fill: "#6b6458",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fill: "#6b6458",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false,
									allowDecimals: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "v",
									fill: "#2f4a43",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium",
					children: copy.completeness
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: tools.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								x.n,
								" · ",
								Math.round(x.pct * 100),
								"%"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-sunken",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-accent",
							style: { width: `${Math.round(x.pct * 100)}%` }
						})
					})] }, x.id))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-x-auto lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium",
						children: copy.iccLive
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 mt-1 text-xs text-muted",
						children: copy.iccHint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[520px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-xs text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: copy.tool
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: copy.nPaired
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: copy.icc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: copy.ci
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: copy.mdc
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums",
									children: s.icc?.n ?? s.pairs.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums",
									children: s.icc ? fmt(s.icc.icc, 2) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums text-muted",
									children: s.icc ? `${fmt(s.icc.lo, 2)}–${fmt(s.icc.hi, 2)}` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums",
									children: s.icc?.mdc != null ? fmt(s.icc.mdc, 1) : "—"
								})
							]
						}, s.id)) })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium",
					children: copy.liveFeed
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "max-h-72 space-y-2 overflow-auto text-sm",
					children: [live.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-muted",
						children: copy.noData
					}) : null, live.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-2 border-b border-border/70 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted",
								children: x.pid
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-muted",
								children: x.label
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-medium",
							children: x.value
						})]
					}, i))]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium",
					children: copy.participants
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
					sites.length,
					" ",
					copy.sites
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: people.slice(0, 12).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-2 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm",
						children: p.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							p.siteName,
							" · ",
							p.age,
							" y"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							p.sample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "SAMPLE" }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: p.visits.retest ? "ok" : p.visits.v1 ? "accent" : "neutral",
								children: p.visits.retest ? copy.retest : p.visits.v1 ? copy.completeV1 : copy.enrolledSt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/visit/$pid",
								params: { pid: p.id },
								className: "text-sm font-medium text-accent",
								children: copy.openVisit
							})
						]
					})]
				}, p.id))
			})]
		})
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-serif text-3xl tabular-nums tracking-tight",
			children: value
		})]
	});
}
//#endregion
export { Dashboard as component };
