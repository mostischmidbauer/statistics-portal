import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { Button, Card, Field, Input } from "@/components/ui";
import { t } from "@/lib/i18n";
import { SCHEMA_VERSION, VARIABLES, allRows, type Participant } from "@/lib/schema";
import { useLab } from "@/lib/store";
import { csvEscape, download } from "@/lib/utils";

export const Route = createFileRoute("/collaborate")({ component: Collaborate });

function Collaborate() {
  const lang = useLab((s) => s.lang);
  const people = useLab((s) => s.people);
  const workspace = useLab((s) => s.workspace);
  const setWorkspace = useLab((s) => s.setWorkspace);
  const mergeImport = useLab((s) => s.mergeImport);
  const loadSample = useLab((s) => s.loadSample);
  const clearAll = useLab((s) => s.clearAll);
  const copy = t[lang];
  const [msg, setMsg] = useState("");
  const [confirm, setConfirm] = useState(false);

  function exportJson() {
    const payload = {
      schemaVersion: SCHEMA_VERSION,
      workspace: workspace.name,
      exportedAt: new Date().toISOString(),
      lang,
      people,
    };
    download(`${workspace.name}.json`, JSON.stringify(payload, null, 2));
  }

  function exportCsv() {
    const rows = allRows(people);
    const cols = VARIABLES.map((v) => v.id);
    const lines = [cols.join(",")];
    for (const r of rows) {
      lines.push(cols.map((c) => csvEscape(r[c])).join(","));
    }
    download(`${workspace.name}.csv`, lines.join("\n"), "text/csv");
  }

  return (
    <Shell>
      <h1 className="font-serif text-3xl tracking-tight">{copy.collaborate}</h1>
      <p className="mt-1 mb-5 text-sm text-muted">{copy.mergeHint}</p>
      <Card className="grid gap-4">
        <Field label={copy.workspace}>
          <Input value={workspace.name} onChange={(e) => setWorkspace(e.target.value)} />
        </Field>
        <div className="flex flex-wrap gap-2">
          <Button onClick={exportJson}>{copy.exportJson}</Button>
          <Button variant="outline" onClick={exportCsv}>
            {copy.exportCsv}
          </Button>
          <label className="inline-flex h-11 cursor-pointer items-center rounded-md border border-border bg-surface px-4 text-sm font-medium">
            {copy.importJson}
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  const data = JSON.parse(await file.text()) as {
                    people?: Participant[];
                    workspace?: string;
                  };
                  const list = data.people ?? [];
                  const r = mergeImport(list, typeof data.workspace === "string" ? data.workspace : undefined);
                  setMsg(`+${r.added} · merge ${r.merged}`);
                } catch {
                  setMsg("Invalid JSON");
                }
                e.target.value = "";
              }}
            />
          </label>
        </div>
        {msg ? <p className="text-sm text-ok">{msg}</p> : null}
      </Card>
      <Card className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" onClick={loadSample}>
          {copy.loadSample}
        </Button>
        {confirm ? (
          <>
            <p className="w-full text-sm text-danger">{copy.confirmClear}</p>
            <Button variant="danger" onClick={() => { clearAll(); setConfirm(false); }}>
              {copy.confirm}
            </Button>
            <Button variant="ghost" onClick={() => setConfirm(false)}>
              {copy.cancel}
            </Button>
          </>
        ) : (
          <Button variant="ghost" onClick={() => setConfirm(true)}>
            {copy.clearData}
          </Button>
        )}
      </Card>
    </Shell>
  );
}
