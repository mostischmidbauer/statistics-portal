import { createFileRoute } from "@tanstack/react-router";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, Tooltip } from "recharts";
import { Shell } from "@/components/shell";
import { Card } from "@/components/ui";
import { pliAlpha, primaryStats } from "@/lib/analysis";
import { t } from "@/lib/i18n";
import { fmt } from "@/lib/stats";
import { useLab } from "@/lib/store";

export const Route = createFileRoute("/analysis")({ component: Analysis });

function Analysis() {
  const lang = useLab((s) => s.lang);
  const peopleAll = useLab((s) => s.people);
  const siteFilter = useLab((s) => s.siteFilter);
  const copy = t[lang];
  const people = siteFilter ? peopleAll.filter((p) => p.siteId === siteFilter) : peopleAll;
  const stats = primaryStats(people);
  const alpha = pliAlpha(people);

  return (
    <Shell>
      <h1 className="font-serif text-3xl tracking-tight">{copy.analysis}</h1>
      <Card className="mt-4">
        <h2 className="font-medium">{copy.modelTitle}</h2>
        <p className="mt-2 text-sm text-muted">{copy.modelBody}</p>
        <p className="mt-3 text-sm">
          {copy.alpha} (PLI V1): <span className="tabular-nums font-medium">{fmt(alpha, 2)}</span>
        </p>
      </Card>
      <div className="mt-4 grid gap-4">
        {stats.map((s) => (
          <Card key={s.id} className="grid gap-4 lg:grid-cols-2">
            <div>
              <h3 className="font-medium">{s.label}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <dt className="text-muted">{copy.nPaired}</dt>
                <dd className="tabular-nums">{s.icc?.n ?? s.pairs.length}</dd>
                <dt className="text-muted">{copy.icc}</dt>
                <dd className="tabular-nums">{s.icc ? fmt(s.icc.icc, 3) : "—"}</dd>
                <dt className="text-muted">{copy.ci}</dt>
                <dd className="tabular-nums">{s.icc ? `${fmt(s.icc.lo, 2)} – ${fmt(s.icc.hi, 2)}` : "—"}</dd>
                <dt className="text-muted">{copy.sem}</dt>
                <dd className="tabular-nums">{s.icc?.sem != null ? fmt(s.icc.sem, 2) : "—"}</dd>
                <dt className="text-muted">{copy.mdc}</dt>
                <dd className="tabular-nums">{s.icc?.mdc != null ? fmt(s.icc.mdc, 2) : "—"}</dd>
                <dt className="text-muted">{copy.bias}</dt>
                <dd className="tabular-nums">{s.ba ? fmt(s.ba.bias, 2) : "—"}</dd>
                <dt className="text-muted">{copy.loa}</dt>
                <dd className="tabular-nums">{s.ba ? `${fmt(s.ba.loaLo, 1)} / ${fmt(s.ba.loaHi, 1)}` : "—"}</dd>
              </dl>
            </div>
            <div className="h-56">
              {s.ba ? (
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid stroke="#ddd6c8" />
                    <XAxis dataKey="avg" name="mean" tick={{ fontSize: 11 }} />
                    <YAxis dataKey="diff" name="diff" tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Scatter data={s.ba.points} fill="#2f4a43" />
                  </ScatterChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-muted">{copy.noData}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Shell>
  );
}
