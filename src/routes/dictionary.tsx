import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Badge, Card } from "@/components/ui";
import { t } from "@/lib/i18n";
import { VARIABLES, type Role } from "@/lib/schema";
import { useLab } from "@/lib/store";

export const Route = createFileRoute("/dictionary")({ component: Dictionary });

const tone: Record<Role, "accent" | "ok" | "warn" | "neutral" | "danger"> = {
  primary: "accent",
  secondary: "ok",
  exploratory: "warn",
  covariate: "neutral",
  feasibility: "neutral",
  safety: "danger",
};

function Dictionary() {
  const lang = useLab((s) => s.lang);
  const copy = t[lang];
  return (
    <Shell>
      <h1 className="font-serif text-3xl tracking-tight">{copy.dictionary}</h1>
      <p className="mt-1 mb-5 text-sm text-muted">{copy.dictionaryHint}</p>
      <Card className="overflow-x-auto p-0">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-xs text-muted">
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-medium">{copy.field}</th>
              <th className="px-4 py-3 font-medium">{copy.tool}</th>
              <th className="px-4 py-3 font-medium">{copy.role}</th>
              <th className="px-4 py-3 font-medium">{copy.unit}</th>
              <th className="px-4 py-3 font-medium">{lang === "de" ? "Bezeichnung" : "Label"}</th>
            </tr>
          </thead>
          <tbody>
            {VARIABLES.map((v) => (
              <tr key={v.id} className="border-b border-border/80">
                <td className="px-4 py-2 font-mono text-xs">{v.id}</td>
                <td className="px-4 py-2">{v.tool}</td>
                <td className="px-4 py-2">
                  <Badge tone={tone[v.role]}>{copy[v.role]}</Badge>
                </td>
                <td className="px-4 py-2 text-muted">{v.unit}</td>
                <td className="px-4 py-2">{lang === "de" ? v.de : v.en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Shell>
  );
}
