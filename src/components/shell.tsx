import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, UserPlus, LineChart, BookOpen, Share2 } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";
import { useLab } from "@/lib/store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", key: "dashboard" as const, icon: LayoutDashboard },
  { to: "/enrol", key: "enrol" as const, icon: UserPlus },
  { to: "/analysis", key: "analysis" as const, icon: LineChart },
  { to: "/dictionary", key: "dictionary" as const, icon: BookOpen },
  { to: "/collaborate", key: "collaborate" as const, icon: Share2 },
];

export function Shell({ children }: { children: ReactNode }) {
  const lang = useLab((s) => s.lang);
  const setLang = useLab((s) => s.setLang);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const copy = t[lang];

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="font-serif text-lg font-medium tracking-tight">{copy.app}</p>
            <p className="truncate text-xs text-muted">{copy.research}</p>
          </div>
          <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-0.5">
            {(["en", "de"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "h-9 min-w-11 rounded-[6px] px-2.5 text-xs font-medium uppercase",
                  lang === l ? "bg-accent text-accent-fg" : "text-muted",
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm",
                  active ? "bg-accent text-accent-fg" : "text-muted hover:bg-sunken hover:text-fg",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {copy[n.key]}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-muted">{copy.notDevice}</footer>
    </div>
  );
}
