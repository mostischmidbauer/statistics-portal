import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { Button, Card, Field, Input, Select } from "@/components/ui";
import { t } from "@/lib/i18n";
import { newParticipant, useLab } from "@/lib/store";
import type { Sex } from "@/lib/schema";
import { uid } from "@/lib/utils";

export const Route = createFileRoute("/enrol")({ component: Enrol });

function Enrol() {
  const lang = useLab((s) => s.lang);
  const upsert = useLab((s) => s.upsert);
  const people = useLab((s) => s.people);
  const nav = useNavigate();
  const copy = t[lang];
  const last = people[0];
  const [form, setForm] = useState({
    id: uid("P"),
    siteId: last?.siteId || "SITE-01",
    siteName: last?.siteName || "",
    country: last?.country || "DE",
    investigator: last?.investigator || "",
    age: 45,
    sex: "x" as Sex,
    heightCm: 170,
    weightKg: 72,
    neck: true,
    gait: true,
    resp: false,
    consentAv: false,
    consentHome: false,
  });

  return (
    <Shell>
      <h1 className="font-serif text-3xl tracking-tight">{copy.newParticipant}</h1>
      <p className="mt-1 mb-6 text-sm text-muted">{copy.emptySites}</p>
      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const p = newParticipant({
            ...form,
            consentCore: true,
            status: "enrolled",
          });
          upsert(p);
          nav({ to: "/visit/$pid", params: { pid: p.id } });
        }}
      >
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label={copy.pid}>
            <Input value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} required />
          </Field>
          <Field label={copy.investigator}>
            <Input value={form.investigator} onChange={(e) => setForm({ ...form, investigator: e.target.value })} />
          </Field>
          <Field label={copy.siteId}>
            <Input value={form.siteId} onChange={(e) => setForm({ ...form, siteId: e.target.value })} required />
          </Field>
          <Field label={copy.siteName}>
            <Input value={form.siteName} onChange={(e) => setForm({ ...form, siteName: e.target.value })} required />
          </Field>
          <Field label={copy.country}>
            <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          </Field>
        </Card>
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label={copy.age}>
            <Input
              type="number"
              min={18}
              max={100}
              value={form.age}
              onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
            />
          </Field>
          <Field label={copy.sex}>
            <Select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value as Sex })}>
              <option value="f">{copy.female}</option>
              <option value="m">{copy.male}</option>
              <option value="x">{copy.other}</option>
            </Select>
          </Field>
          <Field label={copy.height}>
            <Input
              type="number"
              value={form.heightCm}
              onChange={(e) => setForm({ ...form, heightCm: Number(e.target.value) })}
            />
          </Field>
          <Field label={copy.weight}>
            <Input
              type="number"
              value={form.weightKg}
              onChange={(e) => setForm({ ...form, weightKg: Number(e.target.value) })}
            />
          </Field>
        </Card>
        <Card>
          <p className="mb-3 text-sm font-medium">{copy.indications}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {(
              [
                ["neck", copy.neck],
                ["gait", copy.gait],
                ["resp", copy.resp],
              ] as const
            ).map(([k, lab]) => (
              <label key={k} className="flex h-11 items-center gap-2">
                <input
                  type="checkbox"
                  checked={form[k]}
                  onChange={(e) => setForm({ ...form, [k]: e.target.checked })}
                />
                {lab}
              </label>
            ))}
          </div>
          <p className="mt-4 mb-2 text-sm font-medium">{copy.consent}</p>
          <p className="mb-2 text-xs text-muted">{copy.consentCore} — {copy.saveEnrol}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex h-11 items-center gap-2">
              <input
                type="checkbox"
                checked={form.consentAv}
                onChange={(e) => setForm({ ...form, consentAv: e.target.checked })}
              />
              {copy.consentAv}
            </label>
            <label className="flex h-11 items-center gap-2">
              <input
                type="checkbox"
                checked={form.consentHome}
                onChange={(e) => setForm({ ...form, consentHome: e.target.checked })}
              />
              {copy.consentHome}
            </label>
          </div>
        </Card>
        <Button type="submit">{copy.saveEnrol}</Button>
      </form>
    </Shell>
  );
}
