import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Shell } from "@/components/shell";
import { Badge, Button, Card } from "@/components/ui";
import { t } from "@/lib/i18n";
import { feed, funnel, kpis, primaryStats, sitesOf, toolComplete } from "@/lib/analysis";
import { useLab } from "@/lib/store";
import { fmt } from "@/lib/stats";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/")({ component: Dashboard });

function Dashboard() {
  const lang = useLab((s) => s.lang);
  const peopleAll = useLab((s) => s.people);
  const siteFilter = useLab((s) => s.siteFilter);
  const setSiteFilter = useLab((s) => s.setSiteFilter);
  const sampleBanner = useLab((s) => s.sampleBanner);
  const dismiss = useLab((s) => s.dismissBanner);
  const copy = t[lang];
  useEffect(() => {
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

  return (
    <Shell>
      {sampleBanner ? (
        <div className="mb-5 flex flex-col gap-3 rounded-lg border border-border bg-sunken px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-soft">{copy.sampleBanner}</p>
          <Button variant="outline" className="h-10 shrink-0" onClick={dismiss}>
            {copy.dismiss}
          </Button>
        </div>
      ) : null}

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl tracking-tight">{copy.dashboard}</h1>
          <p className="mt-1 text-sm text-muted">{copy.tag}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            className="h-11 rounded-md border border-border bg-surface px-3 text-sm"
            value={siteFilter}
            onChange={(e) => setSiteFilter(e.target.value)}
          >
            <option value="">{copy.filterSite}</option>
            {sites.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <Link to="/enrol">
            <Button>{copy.newParticipant}</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label={copy.enrolled} value={String(kpi.n)} />
        <Stat label={copy.readings} value={String(kpi.readings)} />
        <Stat label={copy.meanSus} value={kpi.sus != null ? fmt(kpi.sus, 0) : "—"} />
        <Stat label={copy.techRate} value={kpi.tech != null ? `${Math.round(kpi.tech * 100)}%` : "—"} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <h2 className="mb-3 text-sm font-medium">{copy.funnel}</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { n: copy.screened, v: f.screened },
                  { n: copy.enrolled, v: f.enrolled },
                  { n: copy.completeV1, v: f.v1 },
                  { n: copy.retest, v: f.retest },
                  { n: copy.completed, v: f.complete },
                ]}
              >
                <XAxis dataKey="n" tick={{ fill: "#6b6458", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b6458", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="v" fill="#2f4a43" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-medium">{copy.completeness}</h2>
          <ul className="space-y-3">
            {tools.map((x) => (
              <li key={x.id}>
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>{x.id}</span>
                  <span className="tabular-nums">
                    {x.n} · {Math.round(x.pct * 100)}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-sunken">
                  <div className="h-full bg-accent" style={{ width: `${Math.round(x.pct * 100)}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="overflow-x-auto lg:col-span-3">
          <h2 className="text-sm font-medium">{copy.iccLive}</h2>
          <p className="mb-3 mt-1 text-xs text-muted">{copy.iccHint}</p>
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="text-xs text-muted">
              <tr>
                <th className="pb-2 font-medium">{copy.tool}</th>
                <th className="pb-2 font-medium">{copy.nPaired}</th>
                <th className="pb-2 font-medium">{copy.icc}</th>
                <th className="pb-2 font-medium">{copy.ci}</th>
                <th className="pb-2 font-medium">{copy.mdc}</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => (
                <tr key={s.id} className="border-t border-border">
                  <td className="py-2">{s.label}</td>
                  <td className="tabular-nums">{s.icc?.n ?? s.pairs.length}</td>
                  <td className="tabular-nums">{s.icc ? fmt(s.icc.icc, 2) : "—"}</td>
                  <td className="tabular-nums text-muted">
                    {s.icc ? `${fmt(s.icc.lo, 2)}–${fmt(s.icc.hi, 2)}` : "—"}
                  </td>
                  <td className="tabular-nums">{s.icc?.mdc != null ? fmt(s.icc.mdc, 1) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-medium">{copy.liveFeed}</h2>
          <ul className="max-h-72 space-y-2 overflow-auto text-sm">
            {live.length === 0 ? <li className="text-muted">{copy.noData}</li> : null}
            {live.map((x, i) => (
              <li key={i} className="flex items-baseline justify-between gap-2 border-b border-border/70 pb-2">
                <span className="min-w-0 truncate">
                  <span className="font-mono text-xs text-muted">{x.pid}</span>
                  <span className="mx-2 text-muted">{x.label}</span>
                </span>
                <span className="tabular-nums font-medium">{x.value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium">{copy.participants}</h2>
          <Badge>{sites.length} {copy.sites}</Badge>
        </div>
        <ul className="divide-y divide-border">
          {people.slice(0, 12).map((p) => (
            <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <div>
                <p className="font-mono text-sm">{p.id}</p>
                <p className="text-xs text-muted">
                  {p.siteName} · {p.age} y
                </p>
              </div>
              <div className="flex items-center gap-2">
                {p.sample ? <Badge>SAMPLE</Badge> : null}
                <Badge tone={p.visits.retest ? "ok" : p.visits.v1 ? "accent" : "neutral"}>
                  {p.visits.retest ? copy.retest : p.visits.v1 ? copy.completeV1 : copy.enrolledSt}
                </Badge>
                <Link to="/visit/$pid" params={{ pid: p.id }} className="text-sm font-medium text-accent">
                  {copy.openVisit}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </Shell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-serif text-3xl tabular-nums tracking-tight">{value}</p>
    </Card>
  );
}
