import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { applyBlockPrograms } from "./block-programs.mjs";
import { blocks as tinkercad, renderProgram } from "./tinkercad-blocks.mjs";

const root = process.cwd();
const docsDir = path.join(root, "docs");
const outDir = path.join(root, "conteudos");

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
  <div class="didactic-support__head"><h2 id="apoio-gpio">Saída digital</h2><p>O desenho mostra o caminho elétrico; os blocos apresentam a mesma sequência do código.</p></div>
  <div class="didactic-grid">
    <div class="didactic-panel"><h3>Diagrama de conexão</h3>
      <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="gpio-diagram-title gpio-diagram-desc">
        <title id="gpio-diagram-title">Arduino conectado a um LED pelo pino 9</title><desc id="gpio-diagram-desc">O pino digital 9 passa por um resistor de 220 ohms e pelo LED antes de retornar ao GND.</desc>
        <rect x="42" y="48" width="250" height="275" rx="34" fill="#a9d8e6" stroke="#52656d" stroke-width="4"/><text x="167" y="150" fill="#263b43" font-size="31" font-weight="800" text-anchor="middle">ARDUINO</text><text x="167" y="188" fill="#263b43" font-size="25" text-anchor="middle">UNO</text>
        <text x="247" y="94" fill="#263b43" font-size="16" font-weight="700">D9</text><text x="242" y="258" fill="#263b43" font-size="16" font-weight="700">GND</text>
        <path d="M278 90H365" stroke="#8aa9d6" stroke-width="8" fill="none"/><rect x="365" y="74" width="110" height="32" rx="16" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><path d="M393 78v24m20-24v24m20-24v24" stroke="#b98b75" stroke-width="5"/><text x="420" y="62" text-anchor="middle" font-size="15" font-weight="700">220 Ω</text>
        <path d="M475 90h30v140h39" stroke="#8aa9d6" stroke-width="8" fill="none"/><path d="M526 170v-55c0-24 15-43 34-43s34 19 34 43v55z" fill="#f3a99f" stroke="#7c5c58" stroke-width="3"/><path d="M544 170v60m32-60v60" stroke="#59656a" stroke-width="4"/><path d="M278 270H576V230" stroke="#69767b" stroke-width="8" fill="none"/>
        <text x="618" y="122" font-size="18" font-weight="700">LED</text><text x="518" y="252" font-size="14" font-weight="700">A</text><text x="584" y="252" font-size="14" font-weight="700">K</text>
      </svg>
      <p class="diagram-caption"><b>Caminho:</b> D9 → resistor de 220 Ω → ânodo do LED → cátodo → GND.</p>
    </div>
    <div class="didactic-panel"><h3>Programação em blocos</h3>${renderProgram({ start: [tinkercad.pinMode(9)], forever: [tinkercad.write(9, "HIGH"), tinkercad.wait(500), tinkercad.write(9, "LOW"), tinkercad.wait(500)] }).replace("<h4>Blocos</h4>", "")}
      <p class="diagram-caption">HIGH acende; LOW apaga. Os dois tempos tornam a mudança visível.</p>
    </div>
  </div>
</section>`;

function directSourceDiagram(id, title, sourceMarkup) {
  return `<svg class="lesson-diagram source-diagram" viewBox="0 0 300 190" role="img" aria-labelledby="${id}-title ${id}-desc">
    <title id="${id}-title">${title}</title><desc id="${id}-desc">Uma fonte alimenta um resistor em série com um LED e retorna ao terminal negativo.</desc>
    ${sourceMarkup}
    <path d="M70 55H105" stroke="#d85845" stroke-width="6" fill="none"/><rect x="105" y="43" width="70" height="24" rx="12" fill="#f2d9a6" stroke="#6f6552" stroke-width="2"/><text x="140" y="34" text-anchor="middle" font-size="12" font-weight="700">resistor</text>
    <path d="M175 55H188V91H205" stroke="#d85845" stroke-width="6" fill="none"/><path d="M205 77h28c18 0 32 12 32 27s-14 27-32 27h-28z" fill="#f3a99f" stroke="#7c5c58" stroke-width="2"/><path d="M185 91h20m-20 26h20" stroke="#59656a" stroke-width="3"/><path d="M185 117H70V125" stroke="#222" stroke-width="6" fill="none"/><text x="270" y="109" font-size="13" font-weight="700">LED</text>
  </svg>`;
}

const directPowerSupport = `
<section class="direct-power" aria-labelledby="direct-power-title">
  <h3 id="direct-power-title">Ligação direta com pilhas e bateria</h3>
  <p>Nesta ligação não há Arduino nem programação. A fonte, o resistor e o LED formam um único caminho. O resistor aparece sem valor fixo porque ele depende da tensão medida, da tensão direta do LED e da corrente escolhida.</p>
  <div class="source-option-grid">
    <div class="didactic-panel"><h4>Bateria de 9 V</h4>${directSourceDiagram("source-9v", "LED alimentado por bateria de 9 volts", '<rect x="18" y="42" width="52" height="88" rx="8" fill="#30343a"/><rect x="29" y="34" width="10" height="8" fill="#777"/><rect x="51" y="34" width="10" height="8" fill="#777"/><text x="44" y="83" fill="white" font-size="20" font-weight="800" text-anchor="middle">9 V</text><text x="32" y="30" font-size="15" font-weight="800">+</text><text x="54" y="30" font-size="15" font-weight="800">−</text>')}<p>Exemplo para LED vermelho com <code>Vf = 2,0 V</code> e 10 mA: cálculo de 700 Ω; próximo valor E12 acima: <b>820 Ω</b>.</p></div>
    <div class="didactic-panel"><h4>Uma pilha de 1,5 V</h4>${directSourceDiagram("source-1v5", "LED alimentado por uma pilha de 1,5 volt", '<line x1="30" y1="42" x2="30" y2="130" stroke="#555" stroke-width="5"/><line x1="52" y1="58" x2="52" y2="114" stroke="#555" stroke-width="10"/><text x="41" y="153" font-size="14" font-weight="700" text-anchor="middle">1,5 V</text><text x="25" y="32" font-size="15" font-weight="800">+</text><text x="49" y="32" font-size="15" font-weight="800">−</text>')}<p>Uma pilha alcalina comum geralmente não fornece tensão suficiente para acender diretamente um LED visível típico. O cálculo deve acusar <b>tensão insuficiente</b>.</p></div>
    <div class="didactic-panel"><h4>Duas pilhas em série</h4>${directSourceDiagram("source-3v", "LED alimentado por duas pilhas de 1,5 volt em série", '<line x1="20" y1="42" x2="20" y2="130" stroke="#555" stroke-width="5"/><line x1="34" y1="58" x2="34" y2="114" stroke="#555" stroke-width="9"/><line x1="50" y1="42" x2="50" y2="130" stroke="#555" stroke-width="5"/><line x1="64" y1="58" x2="64" y2="114" stroke="#555" stroke-width="9"/><text x="42" y="153" font-size="14" font-weight="700" text-anchor="middle">3 V</text><text x="16" y="32" font-size="15" font-weight="800">+</text><text x="61" y="32" font-size="15" font-weight="800">−</text>')}<p>Com duas pilhas em série e LED vermelho de 2,0 V a 10 mA: <b>100 Ω</b>. Em paralelo, as pilhas continuam em 1,5 V; aumenta a capacidade, não a tensão.</p></div>
  </div>
  <div class="article-table-wrap"><table class="article-table"><thead><tr><th>Fonte</th><th>Tensão nominal</th><th>Exemplo para LED vermelho, Vf 2,0 V, 10 mA</th></tr></thead><tbody><tr><td>Bateria de 9 V</td><td>9 V</td><td>700 Ω calculado; 820 Ω como E12 acima</td></tr><tr><td>Uma pilha</td><td>1,5 V</td><td>Tensão insuficiente</td></tr><tr><td>Duas pilhas em série</td><td>3 V</td><td>100 Ω</td></tr><tr><td>Duas pilhas em paralelo</td><td>1,5 V</td><td>Tensão insuficiente; maior capacidade</td></tr></tbody></table></div>
  <p>Para outra fonte ou outra cor de LED, primeiro <a href="03b-resistor-led.html#medir-a-tensao-da-fonte">meça a tensão da fonte</a> e depois use a <a href="03b-resistor-led.html#calculadora-de-resistor">calculadora de resistor</a>.</p>
</section>`;

const resistorCalculatorSupport = `
<form class="resistor-calculator" id="resistor-calculator" novalidate>
  <div class="calculator-fields">
    <label>Fonte de alimentação<select name="sourcePreset"><option value="5">Arduino / USB — 5 V</option><option value="9">Bateria — 9 V</option><option value="1.5">Uma pilha — 1,5 V</option><option value="3">Duas pilhas em série — 3 V</option><option value="custom">Outra tensão</option></select></label>
    <label>Tensão da fonte (V)<input name="sourceVoltage" type="number" min="0" step="0.01" value="5" disabled title="Escolha Outra tensão para editar este campo"></label>
    <label>Cor do LED<select name="ledColor"><option value="1.9">Vermelho — Vf típica 1,9 V</option><option value="2.1">Amarelo — Vf típica 2,1 V</option><option value="2.2">Verde — Vf típica 2,2 V</option><option value="3.0">Azul — Vf típica 3,0 V</option><option value="3.0">Branco — Vf típica 3,0 V</option><option value="custom">Outro valor</option></select></label>
    <label>Tensão direta Vf (V)<input name="forwardVoltage" type="number" min="0" step="0.01" value="1.9" disabled title="Escolha Outro valor na cor do LED para editar este campo"></label>
    <label>Corrente desejada (mA) — 10 mA recomendado<input name="currentMa" type="number" min="0.1" step="0.1" value="10" list="led-current-options"><datalist id="led-current-options"><option value="2"></option><option value="5"></option><option value="10"></option><option value="15"></option><option value="20"></option><option value="30"></option></datalist></label>
  </div>
  <button type="submit">Calcular resistor</button>
  <output class="calculator-result" aria-live="polite"></output>
  <p class="diagram-caption">As tensões por cor são valores típicos para estudo. O datasheet e a medição têm prioridade.</p>
</form>`;

const ledSupport = `
<section class="didactic-support" aria-label="LED comum">
  <div class="didactic-panel"><h3>LED</h3><p>A perna longa geralmente é o ânodo. A perna curta e a face achatada geralmente indicam o cátodo. Se as pernas já tiverem sido cortadas, confira o datasheet ou use o teste de diodo do multímetro.</p></div>
  ${directPowerSupport}
  <div class="didactic-panel"><h3>Alimentação de 5 V do Arduino</h3>
    <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="direct-diagram-title direct-diagram-desc">
      <title id="direct-diagram-title">LED ligado diretamente ao pino de 5 V</title><desc id="direct-diagram-desc">O pino de alimentação de 5 V passa por um resistor de 220 ohms e pelo LED antes de retornar ao GND.</desc>
      <rect x="42" y="48" width="250" height="275" rx="34" fill="#a9d8e6" stroke="#52656d" stroke-width="4"/><text x="167" y="150" fill="#263b43" font-size="31" font-weight="800" text-anchor="middle">ARDUINO</text><text x="167" y="188" fill="#263b43" font-size="25" text-anchor="middle">UNO</text>
      <text x="242" y="94" fill="#263b43" font-size="16" font-weight="700">5 V</text><text x="242" y="258" fill="#263b43" font-size="16" font-weight="700">GND</text>
      <path d="M278 90H365" stroke="#d85845" stroke-width="8" fill="none"/><rect x="365" y="74" width="110" height="32" rx="16" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><path d="M393 78v24m20-24v24m20-24v24" stroke="#b98b75" stroke-width="5"/><text x="420" y="62" text-anchor="middle" font-size="15" font-weight="700">220 Ω</text>
      <path d="M475 90h30v140h39" stroke="#d85845" stroke-width="8" fill="none"/><path d="M526 170v-55c0-24 15-43 34-43s34 19 34 43v55z" fill="#f3a99f" stroke="#7c5c58" stroke-width="3"/><path d="M544 170v60m32-60v60" stroke="#59656a" stroke-width="4"/><path d="M278 270H576V230" stroke="#222" stroke-width="8" fill="none"/>
      <text x="618" y="122" font-size="18" font-weight="700">LED</text><text x="518" y="252" font-size="14" font-weight="700">A</text><text x="584" y="252" font-size="14" font-weight="700">K</text>
    </svg>
    <p class="diagram-caption"><b>Caminho:</b> 5 V → resistor de 220 Ω → ânodo → LED → cátodo → GND.</p>
    <p>Com a placa desligada, ligue o pino de alimentação de 5 V ao resistor, o resistor ao ânodo e o cátodo ao GND. Esta ligação não usa uma GPIO e não pode ser comandada pelo programa: o LED permanece aceso enquanto houver alimentação.</p>
  </div>
  <div class="didactic-panel"><h3>Controle pelo Arduino</h3>
    ${digitalSupport.match(/<svg[\s\S]*?<\/svg>/)?.[0] || ""}
    <p class="diagram-caption"><b>Caminho:</b> pino 9 → resistor de 220 Ω → ânodo → LED → cátodo → GND.</p>
    <p>Aqui o fio sai de uma GPIO, não do pino de 5 V. No Arduino Uno, os pinos digitais 2 a 13 podem controlar o LED com <code>HIGH</code> e <code>LOW</code>; evite 0 e 1 enquanto usa a comunicação serial. Para variar o brilho com <code>analogWrite()</code>, use uma porta PWM marcada com <code>~</code>: 3, 5, 6, 9, 10 ou 11. Consulte <a href="02c-gpio-digital.html">GPIO e saída digital</a> e <a href="02d-sinais-comunicacao.html#pwm">PWM</a> antes de trocar o pino.</p>
  </div>
  <div class="didactic-panel"><h3>Blocos</h3>${renderProgram({ start: [tinkercad.pinMode(9)], forever: [tinkercad.write(9, "HIGH"), tinkercad.wait(500), tinkercad.write(9, "LOW"), tinkercad.wait(500)] }).replace("<h4>Blocos</h4>", "")}</div>
  <div class="didactic-panel"><h3>Código</h3><pre data-language="cpp"><code>const int led = 9;       // LED ligado ao pino digital 9

void setup() {
  pinMode(led, OUTPUT);    // configura o pino para controlar o LED
}

void loop() {
  digitalWrite(led, HIGH);  // coloca 5 V no pino e acende o LED
  delay(500);               // mantém o LED aceso por meio segundo
  digitalWrite(led, LOW);   // coloca 0 V no pino e apaga o LED
  delay(500);               // mantém o LED apagado por meio segundo
}</code></pre></div>
</section>`;

const rgbWiringSupport = `
<p>O exemplo usa um LED RGB de cátodo comum. Cada canal possui seu próprio resistor. A ordem física das quatro pernas varia entre fabricantes; confirme o datasheet antes da montagem.</p>
<div class="didactic-grid rgb-diagram-grid">
  <div class="didactic-panel"><h3>LED RGB de quatro pernas</h3>
    <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="rgb-four-title rgb-four-desc">
      <title id="rgb-four-title">Arduino ligado a um LED RGB de cátodo comum</title><desc id="rgb-four-desc">Os pinos 9, 10 e 11 passam por resistores individuais e chegam aos canais vermelho, verde e azul. A quarta perna, comum, retorna ao GND.</desc>
      <rect x="25" y="38" width="225" height="295" rx="32" fill="#a9d8e6" stroke="#52656d" stroke-width="4"/><text x="137" y="175" fill="#263b43" font-size="29" font-weight="800" text-anchor="middle">ARDUINO</text><text x="137" y="210" fill="#263b43" font-size="23" text-anchor="middle">UNO</text>
      <text x="205" y="75" font-size="15" font-weight="700">D9</text><text x="198" y="135" font-size="15" font-weight="700">D10</text><text x="198" y="195" font-size="15" font-weight="700">D11</text><text x="197" y="302" font-size="15" font-weight="700">GND</text>
      <path d="M235 70H300" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M235 130H300" stroke="#43a75b" stroke-width="7" fill="none"/><path d="M235 190H300" stroke="#4b77d1" stroke-width="7" fill="none"/>
      <rect x="300" y="56" width="92" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="300" y="116" width="92" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="300" y="176" width="92" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><text x="346" y="48" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="346" y="108" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="346" y="168" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text>
      <path d="M392 70H416V260H468V250" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M392 130H406V275H508V250" stroke="#43a75b" stroke-width="7" fill="none"/><path d="M392 190H396V290H548V250" stroke="#4b77d1" stroke-width="7" fill="none"/>
      <path d="M440 190v-48c0-38 35-69 78-69s78 31 78 69v48z" fill="#eee" stroke="#6b6870" stroke-width="3"/><path d="M468 190v60m40-60v60m40-60v60m40-60v60" stroke="#59656a" stroke-width="4"/><text x="468" y="166" text-anchor="middle" fill="#b52d2d" font-weight="800">R</text><text x="508" y="166" text-anchor="middle" fill="#23833b" font-weight="800">G</text><text x="548" y="166" text-anchor="middle" fill="#315bb5" font-weight="800">B</text><text x="588" y="166" text-anchor="middle" font-weight="800">C</text>
      <path d="M250 310H588V250" stroke="#222" stroke-width="7" fill="none"/><text x="607" y="274" font-size="13" font-weight="700">comum</text>
    </svg>
    <p class="diagram-caption"><b>Caminho:</b> D9 → resistor → R; D10 → resistor → G; D11 → resistor → B; comum → GND.</p>
  </div>
  <div class="didactic-panel"><h3>Três LEDs separados</h3>
    <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="rgb-three-title rgb-three-desc">
      <title id="rgb-three-title">Arduino ligado a três LEDs separados</title><desc id="rgb-three-desc">Os mesmos pinos PWM controlam LEDs vermelho, verde e azul separados, cada um com resistor próprio e todos retornando ao GND.</desc>
      <rect x="25" y="38" width="225" height="295" rx="32" fill="#a9d8e6" stroke="#52656d" stroke-width="4"/><text x="137" y="175" fill="#263b43" font-size="29" font-weight="800" text-anchor="middle">ARDUINO</text><text x="137" y="210" fill="#263b43" font-size="23" text-anchor="middle">UNO</text>
      <text x="205" y="75" font-size="15" font-weight="700">D9</text><text x="198" y="135" font-size="15" font-weight="700">D10</text><text x="198" y="195" font-size="15" font-weight="700">D11</text><text x="197" y="302" font-size="15" font-weight="700">GND</text>
      <path d="M235 70H292" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M235 130H292" stroke="#43a75b" stroke-width="7" fill="none"/><path d="M235 190H292" stroke="#4b77d1" stroke-width="7" fill="none"/>
      <rect x="292" y="56" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="292" y="116" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="292" y="176" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><text x="333" y="48" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="333" y="108" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="333" y="168" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text>
      <path d="M374 70H394V260H430V250" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M374 130H404V275H510V250" stroke="#43a75b" stroke-width="7" fill="none"/><path d="M374 190H414V290H590V250" stroke="#4b77d1" stroke-width="7" fill="none"/>
      <path d="M412 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#e75e57" stroke="#7c5c58" stroke-width="3"/><path d="M430 185v65m24-65v125" stroke="#59656a" stroke-width="4"/><path d="M492 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#55ba69" stroke="#52705b" stroke-width="3"/><path d="M510 185v65m24-65v125" stroke="#59656a" stroke-width="4"/><path d="M572 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#5f86db" stroke="#52627f" stroke-width="3"/><path d="M590 185v65m24-65v125" stroke="#59656a" stroke-width="4"/>
      <path d="M250 310H614" stroke="#222" stroke-width="7" fill="none"/><text x="522" y="104" text-anchor="middle" font-size="14" font-weight="700">três canais separados</text>
    </svg>
    <p class="diagram-caption"><b>Equivalência:</b> cada LED representa um canal do RGB; os três cátodos compartilham o retorno ao GND.</p>
  </div>
</div>`;

const trafficLightWiringSupport = `
<p>O exemplo usa os pinos PWM 9, 10 e 11. O funcionamento básico precisa apenas de saída digital, mas essa escolha permite realizar depois o bônus de controle de brilho sem trocar os fios.</p>
<div class="didactic-panel"><h3>Arduino e três LEDs</h3>
  <svg class="lesson-diagram" viewBox="0 0 720 370" role="img" aria-labelledby="traffic-title traffic-desc">
    <title id="traffic-title">Arduino ligado aos LEDs vermelho, amarelo e verde</title><desc id="traffic-desc">Os pinos 9, 10 e 11 passam por resistores individuais e chegam aos ânodos dos três LEDs. Os cátodos compartilham o GND.</desc>
    <rect x="25" y="38" width="225" height="295" rx="32" fill="#a9d8e6" stroke="#52656d" stroke-width="4"/><text x="137" y="175" fill="#263b43" font-size="29" font-weight="800" text-anchor="middle">ARDUINO</text><text x="137" y="210" fill="#263b43" font-size="23" text-anchor="middle">UNO</text>
    <text x="205" y="75" font-size="15" font-weight="700">D9</text><text x="198" y="135" font-size="15" font-weight="700">D10</text><text x="198" y="195" font-size="15" font-weight="700">D11</text><text x="197" y="302" font-size="15" font-weight="700">GND</text>
    <path d="M235 70H292" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M235 130H292" stroke="#e3a81a" stroke-width="7" fill="none"/><path d="M235 190H292" stroke="#43a75b" stroke-width="7" fill="none"/>
    <rect x="292" y="56" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="292" y="116" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><rect x="292" y="176" width="82" height="28" rx="14" fill="#f2d9a6" stroke="#6f6552" stroke-width="3"/><text x="333" y="48" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="333" y="108" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text><text x="333" y="168" text-anchor="middle" font-size="13" font-weight="700">220 Ω</text>
    <path d="M374 70H394V260H430V250" stroke="#d94b45" stroke-width="7" fill="none"/><path d="M374 130H404V275H510V250" stroke="#e3a81a" stroke-width="7" fill="none"/><path d="M374 190H414V290H590V250" stroke="#43a75b" stroke-width="7" fill="none"/>
    <path d="M412 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#e75e57" stroke="#7c5c58" stroke-width="3"/><path d="M430 185v65m24-65v125" stroke="#59656a" stroke-width="4"/><path d="M492 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#e7b83f" stroke="#806e38" stroke-width="3"/><path d="M510 185v65m24-65v125" stroke="#59656a" stroke-width="4"/><path d="M572 185v-35c0-20 13-36 30-36s30 16 30 36v35z" fill="#55ba69" stroke="#52705b" stroke-width="3"/><path d="M590 185v65m24-65v125" stroke="#59656a" stroke-width="4"/>
    <path d="M250 310H614" stroke="#222" stroke-width="7" fill="none"/><text x="442" y="104" text-anchor="middle" font-size="14" font-weight="700">vermelho</text><text x="522" y="104" text-anchor="middle" font-size="14" font-weight="700">amarelo</text><text x="602" y="104" text-anchor="middle" font-size="14" font-weight="700">verde</text>
  </svg>
  <p class="diagram-caption"><b>Caminho:</b> D9 → resistor → vermelho; D10 → resistor → amarelo; D11 → resistor → verde; três cátodos → GND.</p>
</div>
<p>Cada LED precisa de um resistor próprio. Os três cátodos podem compartilhar o GND.</p>`;

function integrateSupport(base, article) {
  if (base === "02c-gpio-digital") {
    return article.replace('<h3 id="nivel-logico">', `${digitalSupport}<h3 id="nivel-logico">`);
  }
  if (base === "03d-guia-pratico-led") {
    return article.replace('<h3 id="controle-de-brilho">', `${ledSupport}<h3 id="controle-de-brilho">`);
  }
  if (base === "03b-resistor-led") {
    return article.replace('<h3 id="valor-comercial">', `${resistorCalculatorSupport}<h3 id="valor-comercial">`);
  }
  if (base === "03g-cores-definidas") {
    return article.replace(
      /(<h3 id="ligacao">Ligação<\/h3>)[\s\S]*?(?=<h3 id="cores-definidas">)/,
      `$1${rgbWiringSupport}`
    );
  }
  if (base === "03e-semaforo") {
    return article.replace(
      /(<h3 id="montagem">Montagem<\/h3>)[\s\S]*?(?=<h3 id="sequencia-do-semaforo">)/,
      `$1${trafficLightWiringSupport}`
    );
  }
  return article;
}

function addCopyButtons(article) {
  return article.replace(/<pre data-language="([^"]+)">/g, '<pre data-language="$1"><button class="copy-code" type="button">Copiar</button>');
}

function convertBlockLists(article) {
  return article.replace(/<h4 id="blocos">Blocos<\/h4>\n<ol>\n([\s\S]*?)<\/ol>/g, (_, list) => {
    const items = [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) => match[1].trim());
    if (!items.length) return "";

    let setup = "";
    if (/^No início,/i.test(items[0])) setup = items.shift().replace(/^No início,\s*/i, "");
    if (items.length) items[0] = items[0].replace(/^Para sempre,\s*/i, "");

    const blockClass = (item) => {
      if (/HIGH/i.test(item)) return "block block--high";
      if (/LOW/i.test(item)) return "block block--low";
      if (/aguard/i.test(item)) return "block block--wait";
      return "block";
    };
    const actions = items.map((item) => `<div class="${blockClass(item)}">${item}</div>`).join("");
    const setupContainer = `<div class="block block--loop block--event"><span>no início</span><div class="block__inside">${setup ? `<div class="block">${setup}</div>` : ""}</div></div>`;
    return `<h4>Blocos</h4><div class="block-stack">${setupContainer}<div class="block block--loop"><span>para sempre</span><div class="block__inside">${actions}</div></div></div>`;
  });
}

const files = (await readdir(docsDir)).filter((name) => name.endsWith(".md")).sort();
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (let index = 0; index < files.length; index++) {
  const file = files[index];
  const base = file.replace(/\.md$/, "");
  const source = await readFile(path.join(docsDir, file), "utf8");
  const title = source.match(/^#\s+(.+)$/m)?.[1] || base;
  const previous = files[index - 1]?.replace(/\.md$/, ".html");
  const next = files[index + 1]?.replace(/\.md$/, ".html");
  const rawArticle = renderMarkdown(source).replace(/^<h2[^>]*>.*?<\/h2>/, "");
  const supportedArticle = integrateSupport(base, rawArticle);
  const article = addCopyButtons(convertBlockLists(applyBlockPrograms(base, supportedArticle)));
  const hasSupport = base === "02c-gpio-digital" || base === "03d-guia-pratico-led";
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escapeHtml(title)} — material de apoio de Fundamentos de Prototipagem e Fabricação Digital."><title>${escapeHtml(title)} — Fundamentos de Prototipagem e Fabricação Digital</title><link rel="stylesheet" href="../styles.css?v=6"></head>
<body><main><header class="article-hero"><div class="shell"><h1>${escapeHtml(title)}</h1></div></header><div class="article-layout shell"><aside class="article-aside"><a href="../index.html#conteudos">← Voltar ao sumário</a></aside><article class="article-content">${article}</article></div>
<nav class="article-pagination shell" aria-label="Navegação entre conteúdos">${previous ? `<a href="${previous}">← Conteúdo anterior</a>` : "<span></span>"}${next ? `<a href="${next}">Próximo conteúdo →</a>` : "<span></span>"}</nav></main>
<footer class="footer"><div class="shell"><b>Fundamentos de Prototipagem e Fabricação Digital</b></div></footer>
<script>
document.addEventListener('click', async (event) => {
  const button = event.target.closest('.copy-code');
  if (!button) return;
  const code = button.parentElement.querySelector('code');
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code.textContent);
    button.textContent = 'Copiado';
    setTimeout(() => { button.textContent = 'Copiar'; }, 1400);
  } catch {
    button.textContent = 'Selecione o código';
    setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
  }
});

const resistorCalculator = document.querySelector('#resistor-calculator');
if (resistorCalculator) {
  const color = resistorCalculator.elements.ledColor;
  const sourcePreset = resistorCalculator.elements.sourcePreset;
  const sourceVoltage = resistorCalculator.elements.sourceVoltage;
  const forwardVoltage = resistorCalculator.elements.forwardVoltage;
  const result = resistorCalculator.querySelector('.calculator-result');
  const nextE12 = (required) => {
    const values = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
    for (let exponent = -1; exponent <= 7; exponent += 1) {
      const scale = 10 ** exponent;
      for (const base of values) {
        const candidate = base * scale;
        if (candidate >= required) return candidate;
      }
    }
    return required;
  };
  const formatOhms = (ohms) => ohms >= 1000
    ? (ohms / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + ' kΩ'
    : ohms.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' Ω';

  color.addEventListener('change', () => {
    const custom = color.value === 'custom';
    forwardVoltage.disabled = !custom;
    if (!custom) forwardVoltage.value = color.value;
    forwardVoltage.title = custom
      ? 'Digite a tensão direta Vf do LED'
      : 'Escolha Outro valor na cor do LED para editar este campo';
    if (custom) {
      forwardVoltage.value = '';
      forwardVoltage.focus();
    }
  });

  sourcePreset.addEventListener('change', () => {
    const custom = sourcePreset.value === 'custom';
    sourceVoltage.disabled = !custom;
    if (!custom) sourceVoltage.value = sourcePreset.value;
    if (custom) {
      sourceVoltage.value = '';
      sourceVoltage.focus();
    }
  });

  resistorCalculator.addEventListener('submit', (event) => {
    event.preventDefault();
    const source = Number(resistorCalculator.elements.sourceVoltage.value);
    const vf = Number(forwardVoltage.value);
    const currentMa = Number(resistorCalculator.elements.currentMa.value);
    if (!(source > 0) || !(vf > 0) || !(currentMa > 0)) {
      result.textContent = 'Preencha tensão da fonte, tensão direta e corrente com valores maiores que zero.';
      return;
    }
    if (source <= vf) {
      result.textContent = 'Tensão insuficiente: a fonte precisa ser maior que a tensão direta do LED para este cálculo.';
      return;
    }
    const currentA = currentMa / 1000;
    const required = (source - vf) / currentA;
    const commercial = nextE12(required);
    const actualMa = ((source - vf) / commercial) * 1000;
    const power = ((source - vf) ** 2) / commercial;
    result.textContent = 'Cálculo: ' + formatOhms(required) + '. Próximo valor E12 acima: ' + formatOhms(commercial) + '. Corrente estimada: ' + actualMa.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + ' mA. Potência no resistor: ' + power.toLocaleString('pt-BR', { maximumFractionDigits: 3 }) + ' W.';
  });
}
</script></body></html>`;
  await writeFile(path.join(outDir, `${base}.html`), html);
}

console.log(`Geradas ${files.length} páginas em conteudos/.`);
