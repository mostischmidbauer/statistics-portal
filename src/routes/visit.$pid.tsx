import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { Badge, Button, Card, Field, Input, Num, Select, Textarea } from "@/components/ui";
import { bands, pliItems, susItems, t } from "@/lib/i18n";
import {
  emptyVisit,
  egStatus,
  fev1Est,
  fev1Expected,
  pctDiff,
  pctExpected,
  pefProxy,
  pliBand,
  pliPct,
  pliTotal,
  susTotal,
  type Visit,
  type VisitKey,
} from "@/lib/schema";
import { useLab } from "@/lib/store";
import { fmt } from "@/lib/stats";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/visit/$pid")({ component: VisitPage });

const TABS = ["core", "breath", "rom", "gaitTool", "pli", "encounter", "sus"] as const;

function VisitPage() {
  const { pid } = Route.useParams();
  const lang = useLab((s) => s.lang);
  const people = useLab((s) => s.people);
  const saveVisit = useLab((s) => s.saveVisit);
  const copy = t[lang];
  const p = people.find((x) => x.id === pid);
  const [vk, setVk] = useState<VisitKey>("v1");
  const [tab, setTab] = useState<(typeof TABS)[number]>("core");
  const [v, setV] = useState<Visit>(emptyVisit());
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (!p) return;
    setV(p.visits[vk] ? structuredClone(p.visits[vk]!) : emptyVisit());
  }, [pid, vk, p?.id]);

  const est = fev1Est(v.breath.rmsPeak, p?.heightCm, p?.age);
  const exp = fev1Expected(p?.heightCm, p?.age);
  const tot = pliTotal(v.pli);
  const sus = susTotal(v.sus);
  const eg = egStatus(v.encounter);

  if (!p) {
    return (
      <Shell>
        <p>Unknown ID</p>
        <Link to="/">Dashboard</Link>
      </Shell>
    );
  }

  function persist(next = v) {
    saveVisit(p!.id, vk, next);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 1200);
  }

  return (
    <Shell>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-muted">{p.id}</p>
          <h1 className="font-serif text-3xl tracking-tight">{p.siteName}</h1>
          <p className="text-sm text-muted">
            {p.age} · {p.heightCm} cm · {copy.bmi} {p.heightCm ? fmt((p.weightKg / (p.heightCm / 100) ** 2), 1) : "—"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["v1", "retest", "v2"] as VisitKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setVk(k)}
              className={cn(
                "h-11 rounded-md px-3 text-sm",
                vk === k ? "bg-accent text-accent-fg" : "border border-border bg-surface",
              )}
            >
              {k === "v1" ? copy.visitV1 : k === "retest" ? copy.visitRetest : copy.visitV2}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex gap-1 overflow-x-auto pb-1">
        {TABS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className={cn(
              "h-10 shrink-0 rounded-md px-3 text-sm",
              tab === k ? "bg-accent text-accent-fg" : "text-muted hover:bg-sunken",
            )}
          >
            {copy[k]}
          </button>
        ))}
      </div>

      {tab === "core" && (
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label={copy.visitDate}>
            <Input type="date" value={v.date} onChange={(e) => setV({ ...v, date: e.target.value })} />
          </Field>
          <Field label={copy.operator}>
            <Input value={v.operator} onChange={(e) => setV({ ...v, operator: e.target.value })} />
          </Field>
          <Field label={copy.duration}>
            <Num value={v.durationMin} onChange={(n) => setV({ ...v, durationMin: n })} />
          </Field>
          <Field label={copy.order}>
            <Select
              value={v.digitalFirst ? "d" : "r"}
              onChange={(e) => setV({ ...v, digitalFirst: e.target.value === "d" })}
            >
              <option value="d">{copy.digitalFirst}</option>
              <option value="r">{copy.refFirst}</option>
            </Select>
          </Field>
          <label className="flex h-11 items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={v.techSuccess}
              onChange={(e) => setV({ ...v, techSuccess: e.target.checked })}
            />
            {copy.techOk}
          </label>
          <Field label={copy.notes} >
            <Textarea value={v.notes} onChange={(e) => setV({ ...v, notes: e.target.value })} />
          </Field>
        </Card>
      )}

      {tab === "breath" && (
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label={copy.rmsPeak}>
            <Num step={0.001} value={v.breath.rmsPeak} onChange={(n) => setV({ ...v, breath: { ...v.breath, rmsPeak: n } })} />
          </Field>
          <Field label={copy.pefProxy}>
            <Input readOnly value={fmt(pefProxy(v.breath.rmsPeak), 1)} />
          </Field>
          <Field label={copy.fev1est}>
            <Input readOnly value={fmt(est, 2)} />
          </Field>
          <Field label={copy.fev1exp}>
            <Input readOnly value={fmt(exp, 2)} />
          </Field>
          <Field label={copy.pctExp}>
            <Input readOnly value={fmt(pctExpected(est, exp), 0)} />
          </Field>
          <Field label={copy.refFev1}>
            <Num step={0.01} value={v.breath.refFev1} onChange={(n) => setV({ ...v, breath: { ...v.breath, refFev1: n } })} />
          </Field>
          <Field label={copy.pctDiff}>
            <Input readOnly value={fmt(pctDiff(est, v.breath.refFev1), 1)} />
          </Field>
          <Field label={copy.attempts}>
            <Num value={v.breath.attempts} onChange={(n) => setV({ ...v, breath: { ...v.breath, attempts: n } })} />
          </Field>
        </Card>
      )}

      {tab === "rom" && (
        <div className="grid gap-4 md:grid-cols-2">
          <RomCard title={copy.digital} block={v.romD} labels={copy} onChange={(romD) => setV({ ...v, romD })} />
          <RomCard title={copy.reference} block={v.romR} labels={copy} onChange={(romR) => setV({ ...v, romR })} />
        </div>
      )}

      {tab === "gaitTool" && (
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="grid gap-3">
            <p className="text-sm font-medium">{copy.digital}</p>
            {(
              [
                ["cadence", copy.cadence],
                ["steps", copy.steps],
                ["strideCm", copy.stride],
                ["asym", copy.asym],
                ["kneeL", copy.kneeL],
                ["kneeR", copy.kneeR],
                ["hipL", copy.hipL],
                ["hipR", copy.hipR],
                ["riskRaw", copy.riskRaw],
              ] as const
            ).map(([k, lab]) => (
              <Field key={k} label={lab}>
                <Num value={v.gaitD[k]} onChange={(n) => setV({ ...v, gaitD: { ...v.gaitD, [k]: n } })} />
              </Field>
            ))}
          </Card>
          <Card className="grid gap-3">
            <p className="text-sm font-medium">{copy.gaitRef}</p>
            <Field label={copy.cadence}>
              <Num value={v.gaitR.cadence} onChange={(n) => setV({ ...v, gaitR: { ...v.gaitR, cadence: n } })} />
            </Field>
            <Field label={copy.steps}>
              <Num value={v.gaitR.steps} onChange={(n) => setV({ ...v, gaitR: { ...v.gaitR, steps: n } })} />
            </Field>
          </Card>
        </div>
      )}

      {tab === "pli" && (
        <Card>
          <div className="mb-4 flex gap-2">
            <Badge>{copy.pliTotal}: {tot ?? "—"}</Badge>
            <Badge>{copy.pliPct}: {fmt(pliPct(tot), 0)}</Badge>
            <Badge tone="accent">{copy.pliBand}: {tot != null ? bands[lang][pliBand(tot)!] : "—"}</Badge>
          </div>
          <ol className="space-y-3">
            {pliItems[lang].map((lab, i) => (
              <li key={i} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                <span className="text-sm">
                  {i + 1}. {lab}
                </span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={cn(
                        "size-10 rounded-md border text-sm",
                        v.pli[i] === n ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface",
                      )}
                      onClick={() => {
                        const pli = [...v.pli];
                        pli[i] = n;
                        setV({ ...v, pli });
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Card>
      )}

      {tab === "encounter" && (
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label={copy.icd}>
            <Input value={v.encounter.icd ?? ""} onChange={(e) => setV({ ...v, encounter: { ...v.encounter, icd: e.target.value } })} />
          </Field>
          <Field label={copy.rater}>
            <Input value={v.encounter.rater ?? ""} onChange={(e) => setV({ ...v, encounter: { ...v.encounter, rater: e.target.value } })} />
          </Field>
          {(
            [
              ["pain", copy.pain],
              ["mobility", copy.mobility],
              ["fall", copy.fall],
              ["fatigue", copy.fatigue],
              ["cgi", copy.cgi],
            ] as const
          ).map(([k, lab]) => (
            <Field key={k} label={lab}>
              <Num
                min={k === "cgi" ? 1 : 0}
                max={k === "cgi" ? 7 : 10}
                value={v.encounter[k]}
                onChange={(n) => setV({ ...v, encounter: { ...v.encounter, [k]: n } })}
              />
            </Field>
          ))}
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">{copy.redflags}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {(["chest", "neuro", "resp", "trauma", "systemic"] as const).map((k) => (
                <label key={k} className="flex h-11 items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!v.encounter[k]}
                    onChange={(e) => setV({ ...v, encounter: { ...v.encounter, [k]: e.target.checked } })}
                  />
                  {copy[k === "resp" ? "resp" : k]}
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-muted">{copy.egStatus}</p>
            <Badge tone={eg === "red" ? "danger" : eg === "yellow" ? "warn" : eg === "green" ? "ok" : "neutral"}>
              {eg ?? "—"}
            </Badge>
          </div>
        </Card>
      )}

      {tab === "sus" && (
        <Card>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>{copy.susTotal}: {fmt(sus, 0)}</Badge>
            <label className="flex h-11 items-center gap-2 text-sm">
              <input type="checkbox" checked={v.ae} onChange={(e) => setV({ ...v, ae: e.target.checked })} />
              {v.ae ? copy.aeYes : copy.aeNone}
            </label>
          </div>
          {v.ae ? (
            <Field label={copy.aeText}>
              <Textarea value={v.aeText} onChange={(e) => setV({ ...v, aeText: e.target.value })} />
            </Field>
          ) : null}
          <ol className="mt-4 space-y-3">
            {susItems[lang].map((lab, i) => (
              <li key={i} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                <span className="text-sm">
                  {i + 1}. {lab}
                </span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={cn(
                        "size-10 rounded-md border text-sm",
                        v.sus[i] === n ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface",
                      )}
                      onClick={() => {
                        const susArr = [...v.sus];
                        susArr[i] = n;
                        setV({ ...v, sus: susArr });
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Card>
      )}

      <div className="sticky bottom-3 mt-4 flex items-center gap-3">
        <Button onClick={() => persist()}>{copy.saveVisit}</Button>
        {flash ? <span className="text-sm text-ok">{copy.saved}</span> : null}
      </div>
    </Shell>
  );
}

function RomCard({
  title,
  block,
  labels,
  onChange,
}: {
  title: string;
  block: Visit["romD"];
  labels: { flex: string; ext: string; rotL: string; rotR: string; latL: string; latR: string };
  onChange: (b: Visit["romD"]) => void;
}) {
  const keys = [
    ["flex", labels.flex],
    ["ext", labels.ext],
    ["rotL", labels.rotL],
    ["rotR", labels.rotR],
    ["latL", labels.latL],
    ["latR", labels.latR],
  ] as const;
  return (
    <Card className="grid gap-3">
      <p className="text-sm font-medium">{title}</p>
      {keys.map(([k, lab]) => (
        <Field key={k} label={lab}>
          <Num value={block[k]} onChange={(n) => onChange({ ...block, [k]: n })} />
        </Field>
      ))}
    </Card>
  );
}
