import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "./i18n";
import {
  SCHEMA_VERSION,
  allRows,
  emptyVisit,
  type Participant,
  type Visit,
  type VisitKey,
  type Workspace,
} from "./schema";
import { makeSample } from "./sample";
import { uid } from "./utils";

type State = {
  lang: Lang;
  workspace: Workspace;
  people: Participant[];
  siteFilter: string;
  sampleBanner: boolean;
  setLang: (l: Lang) => void;
  setWorkspace: (n: string) => void;
  setSiteFilter: (s: string) => void;
  dismissBanner: () => void;
  loadSample: () => void;
  clearAll: () => void;
  upsert: (p: Participant) => void;
  saveVisit: (id: string, key: VisitKey, v: Visit) => void;
  remove: (id: string) => void;
  mergeImport: (incoming: Participant[], workspaceName?: string) => { added: number; merged: number };
};

export const useLab = create<State>()(
  persist(
    (set, get) => ({
      lang: "en",
      workspace: { name: "DIGIFUNK-CRF", schemaVersion: SCHEMA_VERSION },
      people: [],
      siteFilter: "",
      sampleBanner: false,
      setLang: (lang) => set({ lang }),
      setWorkspace: (name) => set({ workspace: { ...get().workspace, name } }),
      setSiteFilter: (siteFilter) => set({ siteFilter }),
      dismissBanner: () => set({ sampleBanner: false }),
      loadSample: () => set({ people: makeSample(), sampleBanner: true }),
      clearAll: () => set({ people: [], sampleBanner: false }),
      upsert: (p) =>
        set({
          people: get().people.some((x) => x.id === p.id)
            ? get().people.map((x) => (x.id === p.id ? p : x))
            : [p, ...get().people],
        }),
      saveVisit: (id, key, v) =>
        set({
          people: get().people.map((p) => {
            if (p.id !== id) return p;
            const visits = { ...p.visits, [key]: v };
            const status: Participant["status"] =
              p.status === "withdrawn" ? p.status : visits.v1 ? "enrolled" : p.status;
            return { ...p, visits, status };
          }),
        }),
      remove: (id) => set({ people: get().people.filter((p) => p.id !== id) }),
      mergeImport: (incoming, workspaceName) => {
        const cur = [...get().people];
        let added = 0;
        let merged = 0;
        for (const p of incoming) {
          const clash = cur.find((x) => x.id === p.id);
          if (!clash) {
            cur.push(p);
            added++;
            continue;
          }
          if (clash.siteId === p.siteId) {
            cur[cur.indexOf(clash)] = {
              ...clash,
              ...p,
              visits: { ...clash.visits, ...p.visits },
            };
            merged++;
          } else {
            cur.push({ ...p, id: `${p.siteId}-${p.id}` });
            added++;
          }
        }
        set({
          people: cur,
          workspace: workspaceName
            ? { ...get().workspace, name: workspaceName }
            : get().workspace,
        });
        return { added, merged };
      },
    }),
    {
      name: "clinimetric-lab-v1",
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (!state.people.length) {
          useLab.setState({ people: makeSample(), sampleBanner: true });
        }
      },
    },
  ),
);

export function filteredPeople() {
  const { people, siteFilter } = useLab.getState();
  if (!siteFilter) return people;
  return people.filter((p) => p.siteId === siteFilter);
}

export function newParticipant(partial: Partial<Participant>): Participant {
  return {
    id: partial.id || uid("P"),
    siteId: partial.siteId || "SITE-01",
    siteName: partial.siteName || "Unnamed facility",
    country: partial.country || "DE",
    investigator: partial.investigator || "",
    enrolledAt: new Date().toISOString(),
    status: "enrolled",
    age: partial.age ?? 40,
    sex: partial.sex ?? "x",
    heightCm: partial.heightCm ?? 170,
    weightKg: partial.weightKg ?? 70,
    neck: partial.neck ?? true,
    gait: partial.gait ?? true,
    resp: partial.resp ?? false,
    consentCore: true,
    consentAv: false,
    consentHome: false,
    visits: {},
    ...partial,
  };
}

export { emptyVisit, allRows };
