import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function round(n: number, d = 2) {
  const p = 10 ** d;
  return Math.round(n * p) / p;
}

export function uid(prefix = "P") {
  const a = Math.random().toString(36).slice(2, 6).toUpperCase();
  const b = Date.now().toString(36).slice(-3).toUpperCase();
  return `${prefix}-${a}${b}`;
}

export function download(filename: string, content: string, mime = "application/json") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function csvEscape(v: unknown) {
  if (v == null) return "";
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
