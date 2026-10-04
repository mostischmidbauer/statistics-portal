import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as t, M as useLab, a as Input, b as newParticipant, c as Shell, i as Field, j as uid, n as Button, r as Card, s as Select } from "./ui-ID9MAFG0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enrol-BNj6oOtY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Enrol() {
	const lang = useLab((s) => s.lang);
	const upsert = useLab((s) => s.upsert);
	const people = useLab((s) => s.people);
	const nav = useNavigate();
	const copy = t[lang];
	const last = people[0];
	const [form, setForm] = (0, import_react.useState)({
		id: uid("P"),
		siteId: last?.siteId || "SITE-01",
		siteName: last?.siteName || "",
		country: last?.country || "DE",
		investigator: last?.investigator || "",
		age: 45,
		sex: "x",
		heightCm: 170,
		weightKg: 72,
		neck: true,
		gait: true,
		resp: false,
		consentAv: false,
		consentHome: false
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl tracking-tight",
			children: copy.newParticipant
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 mb-6 text-sm text-muted",
			children: copy.emptySites
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4",
			onSubmit: (e) => {
				e.preventDefault();
				const p = newParticipant({
					...form,
					consentCore: true,
					status: "enrolled"
				});
				upsert(p);
				nav({
					to: "/visit/$pid",
					params: { pid: p.id }
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.pid,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.id,
								onChange: (e) => setForm({
									...form,
									id: e.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.investigator,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.investigator,
								onChange: (e) => setForm({
									...form,
									investigator: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.siteId,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.siteId,
								onChange: (e) => setForm({
									...form,
									siteId: e.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.siteName,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.siteName,
								onChange: (e) => setForm({
									...form,
									siteName: e.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.country,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.country,
								onChange: (e) => setForm({
									...form,
									country: e.target.value
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.age,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 18,
								max: 100,
								value: form.age,
								onChange: (e) => setForm({
									...form,
									age: Number(e.target.value)
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.sex,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: form.sex,
								onChange: (e) => setForm({
									...form,
									sex: e.target.value
								}),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "f",
										children: copy.female
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "m",
										children: copy.male
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "x",
										children: copy.other
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.height,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: form.heightCm,
								onChange: (e) => setForm({
									...form,
									heightCm: Number(e.target.value)
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy.weight,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: form.weightKg,
								onChange: (e) => setForm({
									...form,
									weightKg: Number(e.target.value)
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm font-medium",
						children: copy.indications
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4 text-sm",
						children: [
							["neck", copy.neck],
							["gait", copy.gait],
							["resp", copy.resp]
						].map(([k, lab]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form[k],
								onChange: (e) => setForm({
									...form,
									[k]: e.target.checked
								})
							}), lab]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mb-2 text-sm font-medium",
						children: copy.consent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-xs text-muted",
						children: [
							copy.consentCore,
							" — ",
							copy.saveEnrol
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.consentAv,
								onChange: (e) => setForm({
									...form,
									consentAv: e.target.checked
								})
							}), copy.consentAv]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.consentHome,
								onChange: (e) => setForm({
									...form,
									consentHome: e.target.checked
								})
							}), copy.consentHome]
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: copy.saveEnrol
				})
			]
		})
	] });
}
//#endregion
export { Enrol as component };
