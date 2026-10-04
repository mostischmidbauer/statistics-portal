import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, C as pefProxy, D as pliTotal, E as pliPct, M as useLab, O as susItems, S as pctExpected, T as pliItems, _ as emptyVisit, a as Input, c as Shell, f as bands, g as egStatus, i as Field, k as susTotal, l as Textarea, n as Button, o as Num, p as cn, r as Card, s as Select, t as Badge, v as fev1Est, w as pliBand, x as pctDiff, y as fev1Expected } from "./ui-ID9MAFG0.mjs";
import { r as fmt } from "./stats-CIrD55O-.mjs";
import { n as Route } from "./router-CYzDtTCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit._pid-Cce_N0N2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"core",
	"breath",
	"rom",
	"gaitTool",
	"pli",
	"encounter",
	"sus"
];
function VisitPage() {
	const { pid } = Route.useParams();
	const lang = useLab((s) => s.lang);
	const people = useLab((s) => s.people);
	const saveVisit = useLab((s) => s.saveVisit);
	const copy = t[lang];
	const p = people.find((x) => x.id === pid);
	const [vk, setVk] = (0, import_react.useState)("v1");
	const [tab, setTab] = (0, import_react.useState)("core");
	const [v, setV] = (0, import_react.useState)(emptyVisit());
	const [flash, setFlash] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!p) return;
		setV(p.visits[vk] ? structuredClone(p.visits[vk]) : emptyVisit());
	}, [
		pid,
		vk,
		p?.id
	]);
	const est = fev1Est(v.breath.rmsPeak, p?.heightCm, p?.age);
	const exp = fev1Expected(p?.heightCm, p?.age);
	const tot = pliTotal(v.pli);
	const sus = susTotal(v.sus);
	const eg = egStatus(v.encounter);
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unknown ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		children: "Dashboard"
	})] });
	function persist(next = v) {
		saveVisit(p.id, vk, next);
		setFlash(true);
		window.setTimeout(() => setFlash(false), 1200);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-muted",
					children: p.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl tracking-tight",
					children: p.siteName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						p.age,
						" · ",
						p.heightCm,
						" cm · ",
						copy.bmi,
						" ",
						p.heightCm ? fmt(p.weightKg / (p.heightCm / 100) ** 2, 1) : "—"
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					"v1",
					"retest",
					"v2"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setVk(k),
					className: cn("h-11 rounded-md px-3 text-sm", vk === k ? "bg-accent text-accent-fg" : "border border-border bg-surface"),
					children: k === "v1" ? copy.visitV1 : k === "retest" ? copy.visitRetest : copy.visitV2
				}, k))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex gap-1 overflow-x-auto pb-1",
			children: TABS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTab(k),
				className: cn("h-10 shrink-0 rounded-md px-3 text-sm", tab === k ? "bg-accent text-accent-fg" : "text-muted hover:bg-sunken"),
				children: copy[k]
			}, k))
		}),
		tab === "core" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.visitDate,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: v.date,
						onChange: (e) => setV({
							...v,
							date: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.operator,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: v.operator,
						onChange: (e) => setV({
							...v,
							operator: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.duration,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: v.durationMin,
						onChange: (n) => setV({
							...v,
							durationMin: n
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.order,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: v.digitalFirst ? "d" : "r",
						onChange: (e) => setV({
							...v,
							digitalFirst: e.target.value === "d"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "d",
							children: copy.digitalFirst
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "r",
							children: copy.refFirst
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: v.techSuccess,
						onChange: (e) => setV({
							...v,
							techSuccess: e.target.checked
						})
					}), copy.techOk]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.notes,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: v.notes,
						onChange: (e) => setV({
							...v,
							notes: e.target.value
						})
					})
				})
			]
		}),
		tab === "breath" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.rmsPeak,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						step: .001,
						value: v.breath.rmsPeak,
						onChange: (n) => setV({
							...v,
							breath: {
								...v.breath,
								rmsPeak: n
							}
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.pefProxy,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						readOnly: true,
						value: fmt(pefProxy(v.breath.rmsPeak), 1)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.fev1est,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						readOnly: true,
						value: fmt(est, 2)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.fev1exp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						readOnly: true,
						value: fmt(exp, 2)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.pctExp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						readOnly: true,
						value: fmt(pctExpected(est, exp), 0)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.refFev1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						step: .01,
						value: v.breath.refFev1,
						onChange: (n) => setV({
							...v,
							breath: {
								...v.breath,
								refFev1: n
							}
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.pctDiff,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						readOnly: true,
						value: fmt(pctDiff(est, v.breath.refFev1), 1)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.attempts,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: v.breath.attempts,
						onChange: (n) => setV({
							...v,
							breath: {
								...v.breath,
								attempts: n
							}
						})
					})
				})
			]
		}),
		tab === "rom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RomCard, {
				title: copy.digital,
				block: v.romD,
				labels: copy,
				onChange: (romD) => setV({
					...v,
					romD
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RomCard, {
				title: copy.reference,
				block: v.romR,
				labels: copy,
				onChange: (romR) => setV({
					...v,
					romR
				})
			})]
		}),
		tab === "gaitTool" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: copy.digital
				}), [
					["cadence", copy.cadence],
					["steps", copy.steps],
					["strideCm", copy.stride],
					["asym", copy.asym],
					["kneeL", copy.kneeL],
					["kneeR", copy.kneeR],
					["hipL", copy.hipL],
					["hipR", copy.hipR],
					["riskRaw", copy.riskRaw]
				].map(([k, lab]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: lab,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: v.gaitD[k],
						onChange: (n) => setV({
							...v,
							gaitD: {
								...v.gaitD,
								[k]: n
							}
						})
					})
				}, k))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: copy.gaitRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy.cadence,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							value: v.gaitR.cadence,
							onChange: (n) => setV({
								...v,
								gaitR: {
									...v.gaitR,
									cadence: n
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy.steps,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							value: v.gaitR.steps,
							onChange: (n) => setV({
								...v,
								gaitR: {
									...v.gaitR,
									steps: n
								}
							})
						})
					})
				]
			})]
		}),
		tab === "pli" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
					copy.pliTotal,
					": ",
					tot ?? "—"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
					copy.pliPct,
					": ",
					fmt(pliPct(tot), 0)
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "accent",
					children: [
						copy.pliBand,
						": ",
						tot != null ? bands[lang][pliBand(tot)] : "—"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3",
			children: pliItems[lang].map((lab, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm",
					children: [
						i + 1,
						". ",
						lab
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: [
						0,
						1,
						2,
						3,
						4,
						5
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("size-10 rounded-md border text-sm", v.pli[i] === n ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface"),
						onClick: () => {
							const pli = [...v.pli];
							pli[i] = n;
							setV({
								...v,
								pli
							});
						},
						children: n
					}, n))
				})]
			}, i))
		})] }),
		tab === "encounter" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.icd,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: v.encounter.icd ?? "",
						onChange: (e) => setV({
							...v,
							encounter: {
								...v.encounter,
								icd: e.target.value
							}
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.rater,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: v.encounter.rater ?? "",
						onChange: (e) => setV({
							...v,
							encounter: {
								...v.encounter,
								rater: e.target.value
							}
						})
					})
				}),
				[
					["pain", copy.pain],
					["mobility", copy.mobility],
					["fall", copy.fall],
					["fatigue", copy.fatigue],
					["cgi", copy.cgi]
				].map(([k, lab]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: lab,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						min: k === "cgi" ? 1 : 0,
						max: k === "cgi" ? 7 : 10,
						value: v.encounter[k],
						onChange: (n) => setV({
							...v,
							encounter: {
								...v.encounter,
								[k]: n
							}
						})
					})
				}, k)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-medium",
						children: copy.redflags
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4 text-sm",
						children: [
							"chest",
							"neuro",
							"resp",
							"trauma",
							"systemic"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: !!v.encounter[k],
								onChange: (e) => setV({
									...v,
									encounter: {
										...v.encounter,
										[k]: e.target.checked
									}
								})
							}), copy[k === "resp" ? "resp" : k]]
						}, k))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: copy.egStatus
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: eg === "red" ? "danger" : eg === "yellow" ? "warn" : eg === "green" ? "ok" : "neutral",
					children: eg ?? "—"
				})] })
			]
		}),
		tab === "sus" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
					copy.susTotal,
					": ",
					fmt(sus, 0)
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: v.ae,
						onChange: (e) => setV({
							...v,
							ae: e.target.checked
						})
					}), v.ae ? copy.aeYes : copy.aeNone]
				})]
			}),
			v.ae ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: copy.aeText,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: v.aeText,
					onChange: (e) => setV({
						...v,
						aeText: e.target.value
					})
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-3",
				children: susItems[lang].map((lab, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm",
						children: [
							i + 1,
							". ",
							lab
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							0,
							1,
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("size-10 rounded-md border text-sm", v.sus[i] === n ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface"),
							onClick: () => {
								const susArr = [...v.sus];
								susArr[i] = n;
								setV({
									...v,
									sus: susArr
								});
							},
							children: n
						}, n))
					})]
				}, i))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky bottom-3 mt-4 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => persist(),
				children: copy.saveVisit
			}), flash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-ok",
				children: copy.saved
			}) : null]
		})
	] });
}
function RomCard({ title, block, labels, onChange }) {
	const keys = [
		["flex", labels.flex],
		["ext", labels.ext],
		["rotL", labels.rotL],
		["rotR", labels.rotR],
		["latL", labels.latL],
		["latR", labels.latR]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: title
		}), keys.map(([k, lab]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: lab,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
				value: block[k],
				onChange: (n) => onChange({
					...block,
					[k]: n
				})
			})
		}, k))]
	});
}
//#endregion
export { VisitPage as component };
