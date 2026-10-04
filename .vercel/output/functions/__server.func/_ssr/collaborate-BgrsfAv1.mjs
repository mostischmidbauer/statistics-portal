import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, M as useLab, a as Input, c as Shell, d as allRows, h as download, i as Field, m as csvEscape, n as Button, r as Card, u as VARIABLES } from "./ui-ID9MAFG0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collaborate-BgrsfAv1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Collaborate() {
	const lang = useLab((s) => s.lang);
	const people = useLab((s) => s.people);
	const workspace = useLab((s) => s.workspace);
	const setWorkspace = useLab((s) => s.setWorkspace);
	const mergeImport = useLab((s) => s.mergeImport);
	const loadSample = useLab((s) => s.loadSample);
	const clearAll = useLab((s) => s.clearAll);
	const copy = t[lang];
	const [msg, setMsg] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	function exportJson() {
		const payload = {
			schemaVersion: 1,
			workspace: workspace.name,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			lang,
			people
		};
		download(`${workspace.name}.json`, JSON.stringify(payload, null, 2));
	}
	function exportCsv() {
		const rows = allRows(people);
		const cols = VARIABLES.map((v) => v.id);
		const lines = [cols.join(",")];
		for (const r of rows) lines.push(cols.map((c) => csvEscape(r[c])).join(","));
		download(`${workspace.name}.csv`, lines.join("\n"), "text/csv");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl tracking-tight",
			children: copy.collaborate
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 mb-5 text-sm text-muted",
			children: copy.mergeHint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: copy.workspace,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: workspace.name,
						onChange: (e) => setWorkspace(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: exportJson,
							children: copy.exportJson
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: exportCsv,
							children: copy.exportCsv
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "inline-flex h-11 cursor-pointer items-center rounded-md border border-border bg-surface px-4 text-sm font-medium",
							children: [copy.importJson, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "application/json",
								className: "hidden",
								onChange: async (e) => {
									const file = e.target.files?.[0];
									if (!file) return;
									try {
										const data = JSON.parse(await file.text());
										const list = data.people ?? [];
										const r = mergeImport(list, typeof data.workspace === "string" ? data.workspace : void 0);
										setMsg(`+${r.added} · merge ${r.merged}`);
									} catch {
										setMsg("Invalid JSON");
									}
									e.target.value = "";
								}
							})]
						})
					]
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ok",
					children: msg
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: loadSample,
				children: copy.loadSample
			}), confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "w-full text-sm text-danger",
					children: copy.confirmClear
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						clearAll();
						setConfirm(false);
					},
					children: copy.confirm
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => setConfirm(false),
					children: copy.cancel
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setConfirm(true),
				children: copy.clearData
			})]
		})
	] });
}
//#endregion
export { Collaborate as component };
