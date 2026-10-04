import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, M as useLab, c as Shell, r as Card, t as Badge, u as VARIABLES } from "./ui-ID9MAFG0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dictionary-B6OjVmLe.js
var import_jsx_runtime = require_jsx_runtime();
var tone = {
	primary: "accent",
	secondary: "ok",
	exploratory: "warn",
	covariate: "neutral",
	feasibility: "neutral",
	safety: "danger"
};
function Dictionary() {
	const lang = useLab((s) => s.lang);
	const copy = t[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl tracking-tight",
			children: copy.dictionary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 mb-5 text-sm text-muted",
			children: copy.dictionaryHint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "overflow-x-auto p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-xs text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: copy.field
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: copy.tool
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: copy.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: copy.unit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: lang === "de" ? "Bezeichnung" : "Label"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: VARIABLES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-2 font-mono text-xs",
							children: v.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-2",
							children: v.tool
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: tone[v.role],
								children: copy[v.role]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-2 text-muted",
							children: v.unit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-2",
							children: lang === "de" ? v.de : v.en
						})
					]
				}, v.id)) })]
			})
		})
	] });
}
//#endregion
export { Dictionary as component };
