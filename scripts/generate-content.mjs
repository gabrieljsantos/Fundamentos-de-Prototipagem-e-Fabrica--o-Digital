import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");
const outDir = path.join(root, "dist", "conteudos");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const slugify = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const [target, fragment] = href.split("#");
      const convertedTarget = /(?:^|\/)README\.md$/.test(target)
        ? "../index.html"
        : target.replace(/^\.\//, "").replace(/\.md$/, ".html");
      const converted = `${convertedTarget}${fragment ? `#${slugify(fragment)}` : ""}`;
      return `<a href="${converted}">${label}</a>`;
    });
}

function renderMarkdown(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let inCode = false;
  let codeLanguage = "";
  let code = [];
  let table = [];

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = null;
  };
  const flushTable = () => {
    if (!table.length) return;
    const rows = table.map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()));
    const body = rows.filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell)));
    if (body.length) {
      html.push("<div class=\"article-table-wrap\"><table class=\"article-table\"><thead><tr>" + body[0].map((cell) => `<th>${inline(cell)}</th>`).join("") + "</tr></thead><tbody>");
      for (const row of body.slice(1)) html.push("<tr>" + row.map((cell) => `<td>${inline(cell)}</td>`).join("") + "</tr>");
      html.push("</tbody></table></div>");
    }
    table = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushParagraph(); flushList(); flushTable();
      if (!inCode) { inCode = true; codeLanguage = line.slice(3).trim(); code = []; }
      else { html.push(`<pre data-language="${codeLanguage || "texto"}"><code>${escapeHtml(code.join("\n"))}</code></pre>`); inCode = false; }
      continue;
    }
    if (inCode) { code.push(line); continue; }
    if (/^\|.*\|$/.test(line.trim())) { flushParagraph(); flushList(); table.push(line.trim()); continue; }
    flushTable();
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph(); flushList();
      const level = Math.min(heading[1].length + 1, 5);
      html.push(`<h${level} id="${slugify(heading[2])}">${inline(heading[2])}</h${level}>`);
      continue;
    }
    const unordered = line.match(/^\s*-\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const type = unordered ? "ul" : "ol";
      if (listType !== type) { flushList(); html.push(`<${type}>`); listType = type; }
      html.push(`<li>${inline((unordered || ordered)[1])}</li>`);
      continue;
    }
    if (line.startsWith("> ")) {
      flushParagraph(); flushList();
      html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
      continue;
    }
    if (!line.trim()) { flushParagraph(); flushList(); continue; }
    paragraph.push(line.trim());
  }
  flushParagraph(); flushList(); flushTable();
  return html.join("\n");
}

const digitalSupport = `
<section class="didactic-support" aria-labelledby="apoio-gpio">
  <div class="didactic-support__head"><p class="eyebrow">Apoio didático 01</p><h2 id="apoio-gpio">Saída digital: do bloco ao LED</h2><p>Variação pedagógica construída a partir da lógica de níveis digitais do material-base. O desenho mostra o caminho elétrico; os blocos apresentam a mesma sequência do código textual.</p></div>
  <div class="didactic-grid">
    <div class="didactic-panel"><h3>Diagrama de conexão</h3>
      <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="gpio-diagram-title gpio-diagram-desc">
        <title id="gpio-diagram-title">Arduino conectado a um LED pelo pino 3</title><desc id="gpio-diagram-desc">O pino digital 3 passa por um resistor de 220 ohms e pelo LED antes de retornar ao GND.</desc>
        <rect x="42" y="48" width="250" height="275" rx="22" fill="#147f9b" stroke="#11110f" stroke-width="5"/><text x="167" y="150" fill="white" font-size="31" font-weight="800" text-anchor="middle">ARDUINO</text><text x="167" y="188" fill="white" font-size="25" text-anchor="middle">UNO</text>
        <text x="247" y="94" fill="white" font-size="16" font-weight="700">D3</text><text x="242" y="290" fill="white" font-size="16" font-weight="700">GND</text>
        <path d="M278 90H365" stroke="#3657ff" stroke-width="8" fill="none"/><rect x="365" y="74" width="110" height="32" rx="8" fill="#f6d99d" stroke="#11110f" stroke-width="4"/><path d="M393 76v28m20-28v28m20-28v28" stroke="#7b3b19" stroke-width="5"/><text x="420" y="62" text-anchor="middle" font-size="15" font-weight="700">220 Ω</text>
        <path d="M475 90h64" stroke="#3657ff" stroke-width="8"/><path d="M539 90v22m42-22v22" stroke="#11110f" stroke-width="4"/><path d="M529 92a31 31 0 0 1 62 0v38h-62z" fill="#ff5a36" stroke="#11110f" stroke-width="4"/><path d="M560 130v100H278v56" stroke="#11110f" stroke-width="8" fill="none"/>
        <text x="612" y="104" font-size="18" font-weight="700">LED</text><text x="378" y="255" font-size="16">cátodo → GND</text>
      </svg>
      <p class="diagram-caption"><b>Caminho:</b> D3 → resistor de 220 Ω → ânodo do LED → cátodo → GND.</p>
    </div>
    <div class="didactic-panel"><h3>Programação em blocos</h3><div class="block-stack"><div class="block block--event">no início</div><div class="block">definir pino <em>3</em> como <em>SAÍDA</em></div><div class="block block--loop"><span>para sempre</span><div class="block__inside"><div class="block">definir pino <em>3</em> como <em>ALTO</em></div><div class="block block--wait">aguardar <em>1 s</em></div><div class="block">definir pino <em>3</em> como <em>BAIXO</em></div><div class="block block--wait">aguardar <em>1 s</em></div></div></div></div>
      <p class="diagram-caption">ALTO acende; BAIXO apaga. Os dois tempos tornam a mudança visível.</p>
    </div>
  </div>
</section>`;

const ledSupport = `
<section class="didactic-support" aria-labelledby="apoio-led">
  <div class="didactic-support__head"><p class="eyebrow">Apoio didático 02</p><h2 id="apoio-led">Pisca-LED: conexão, blocos e código</h2><p>As três representações descrevem o mesmo projeto. Use o diagrama para montar, os blocos para enxergar a sequência e o código para conferir a tradução textual.</p></div>
  <div class="representation-flow">
    <div><span>01</span><b>Conectar</b><small>D3, resistor, LED e GND</small></div><i>→</i><div><span>02</span><b>Organizar</b><small>ALTO, espera, BAIXO, espera</small></div><i>→</i><div><span>03</span><b>Programar</b><small>digitalWrite e delay</small></div>
  </div>
  ${digitalSupport.match(/<svg[\s\S]*?<\/svg>/)?.[0] || ""}
  <div class="didactic-grid didactic-grid--code">
    <div class="didactic-panel"><h3>Blocos equivalentes</h3><div class="block-stack"><div class="block block--event">no início</div><div class="block">configurar pino <em>3</em> como <em>SAÍDA</em></div><div class="block block--loop"><span>para sempre</span><div class="block__inside"><div class="block">pino <em>3</em> → <em>ALTO</em></div><div class="block block--wait">aguardar <em>1000 ms</em></div><div class="block">pino <em>3</em> → <em>BAIXO</em></div><div class="block block--wait">aguardar <em>1000 ms</em></div></div></div></div></div>
    <div class="didactic-panel"><h3>Código comentado</h3><pre data-language="cpp"><code>const int led = 3;       // LED ligado ao pino digital 3

void setup() {
  pinMode(led, OUTPUT);  // define o pino como saída
}

void loop() {
  digitalWrite(led, HIGH); // acende o LED
  delay(1000);             // espera 1 segundo
  digitalWrite(led, LOW);  // apaga o LED
  delay(1000);             // espera 1 segundo
}</code></pre></div>
  </div>
</section>`;

const enhancements = {
  "02c-gpio-digital": digitalSupport,
  "03d-guia-pratico-led": ledSupport,
};

const files = (await readdir(docsDir)).filter((name) => name.endsWith(".md")).sort();
await mkdir(outDir, { recursive: true });

for (let index = 0; index < files.length; index++) {
  const file = files[index];
  const base = file.replace(/\.md$/, "");
  const source = await readFile(path.join(docsDir, file), "utf8");
  const title = source.match(/^#\s+(.+)$/m)?.[1] || base;
  const previous = files[index - 1]?.replace(/\.md$/, ".html");
  const next = files[index + 1]?.replace(/\.md$/, ".html");
  const article = renderMarkdown(source).replace(/^<h2[^>]*>.*?<\/h2>/, "");
  const support = enhancements[base] || "";
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escapeHtml(title)} — material de apoio de prototipagem e fabricação digital."><title>${escapeHtml(title)} — Fundamentos de Prototipagem</title><link rel="stylesheet" href="../styles.css?v=4"></head>
<body><header class="site-header"><div class="site-header__inner shell"><a class="brand" href="../index.html"><span class="brand__mark">FP</span><span>Fundamentos de Prototipagem</span></a><nav class="nav" aria-label="Navegação principal"><a href="../index.html#conteudos">Conteúdos</a><a href="../praticas.html">Apoios</a><a class="nav__report" href="../relatorio.html">Relatório</a></nav></div></header>
<main><header class="article-hero"><div class="shell"><p class="eyebrow">Material de apoio · ${String(index + 1).padStart(2, "0")} de ${files.length}</p><h1>${escapeHtml(title)}</h1></div></header><div class="article-layout shell"><aside class="article-aside"><a href="../index.html#conteudos">← Voltar ao sumário</a><p>Conteúdo convertido do material pedagógico original.</p>${support ? '<span class="pill pill--done">Com apoio visual</span>' : '<span class="pill pill--partial">Texto convertido</span>'}</aside><article class="article-content">${article}${support}</article></div>
<nav class="article-pagination shell" aria-label="Navegação entre conteúdos">${previous ? `<a href="${previous}">← Conteúdo anterior</a>` : "<span></span>"}${next ? `<a href="${next}">Próximo conteúdo →</a>` : "<span></span>"}</nav></main>
<footer class="footer"><div class="shell"><b>Fundamentos de Prototipagem e Fabricação Digital</b><p>Material pedagógico convertido para a web</p></div></footer></body></html>`;
  await writeFile(path.join(outDir, `${base}.html`), html);
}

console.log(`Geradas ${files.length} páginas em dist/conteudos.`);
