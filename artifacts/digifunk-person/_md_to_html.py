#!/usr/bin/env python3
"""Convert markdown files in this folder to simple HTML for Google Docs import."""
from pathlib import Path
import html, re, sys

CSS = """
body { font-family: Georgia, 'Times New Roman', serif; max-width: 920px; margin: 40px auto; line-height: 1.45; color: #111; }
h1 { font-size: 20pt; }
h2 { font-size: 15pt; margin-top: 26px; }
h3 { font-size: 12.5pt; }
table { font-size: 10.5pt; margin: 12px 0 20px; width: 100%; }
th { background: #f2f2f2; text-align: left; }
td, th { vertical-align: top; }
code { font-family: Consolas, monospace; font-size: 0.9em; }
blockquote { border-left: 3px solid #333; padding-left: 12px; color: #333; }
.headerblock { border: 1px solid #222; padding: 12px 16px; margin-bottom: 24px; }
.small { font-size: 10pt; color: #333; }
"""

def inline(s: str) -> str:
    s = html.escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    s = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', s)
    return s

def md_to_html(src: str, title: str) -> str:
    lines = src.splitlines()
    out, para, in_code = [], [], False

    def flush_para():
        nonlocal para
        if para:
            out.append(f"<p>{inline(' '.join(para))}</p>")
            para = []

    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith("```"):
            flush_para()
            in_code = not in_code
            out.append("<pre>" if in_code else "</pre>")
            i += 1
            continue
        if in_code:
            out.append(html.escape(line))
            i += 1
            continue
        if re.match(r"^\|.*\|$", line.strip()) and i + 1 < len(lines) and re.match(r"^\|?\s*[-: ]+\s*\|", lines[i+1].strip()):
            flush_para()
            rows = []
            while i < len(lines) and re.match(r"^\|.*\|$", lines[i].strip()):
                row = lines[i].strip()
                if re.match(r"^\|?\s*[-:| ]+\|", row):
                    i += 1
                    continue
                rows.append([c.strip() for c in row.strip("|").split("|")])
                i += 1
            if rows:
                out.append("<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;width:100%'>")
                for ri, cells in enumerate(rows):
                    tag = "th" if ri == 0 else "td"
                    out.append("<tr>" + "".join(f"<{tag}>{inline(c)}</{tag}>" for c in cells) + "</tr>")
                out.append("</table>")
            continue
        if line.startswith("# "):
            flush_para(); out.append(f"<h1>{inline(line[2:])}</h1>"); i += 1; continue
        if line.startswith("## "):
            flush_para(); out.append(f"<h2>{inline(line[3:])}</h2>"); i += 1; continue
        if line.startswith("### "):
            flush_para(); out.append(f"<h3>{inline(line[4:])}</h3>"); i += 1; continue
        if line.startswith("> "):
            flush_para(); out.append(f"<blockquote>{inline(line[2:])}</blockquote>"); i += 1; continue
        if line.strip() == "---":
            flush_para(); out.append("<hr/>"); i += 1; continue
        if re.match(r"^\d+\.\s", line.strip()):
            flush_para()
            out.append("<ol>")
            while i < len(lines) and re.match(r"^\d+\.\s", lines[i].strip()):
                item = re.sub(r"^\d+\.\s", "", lines[i].strip())
                out.append(f"<li>{inline(item)}</li>")
                i += 1
            out.append("</ol>")
            continue
        if line.strip().startswith("- ") or line.strip().startswith("* "):
            flush_para()
            out.append("<ul>")
            while i < len(lines) and (lines[i].strip().startswith("- ") or lines[i].strip().startswith("* ")):
                out.append(f"<li>{inline(lines[i].strip()[2:])}</li>")
                i += 1
            out.append("</ul>")
            continue
        if not line.strip():
            flush_para(); i += 1; continue
        para.append(line.strip()); i += 1
    flush_para()
    return (
        "<!DOCTYPE html><html lang='de'><head><meta charset='utf-8'>"
        f"<title>{html.escape(title)}</title><style>{CSS}</style></head><body>"
        + "\n".join(out) + "</body></html>"
    )

def convert(md_path: Path) -> Path:
    src = md_path.read_text(encoding="utf-8")
    title = md_path.stem
    html_path = md_path.with_suffix(".html")
    html_path.write_text(md_to_html(src, title), encoding="utf-8")
    return html_path

if __name__ == "__main__":
    folder = Path(__file__).parent
    targets = [Path(p) for p in sys.argv[1:]] if len(sys.argv) > 1 else sorted(folder.glob("*.md"))
    for p in targets:
        out = convert(p)
        print(out.name, out.stat().st_size)
