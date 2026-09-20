const escape = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const value = (content) => `<em>${escape(content)}</em>`;
const pinValue = (content) => {
  if (content && typeof content === "object" && content.kind === "math") {
    return `<span class="block-token--math">${pinValue(content.left)} <b>${escape(content.operator)}</b> ${pinValue(content.right)}</span>`;
  }
  if (content && typeof content === "object" && content.kind === "input") {
    return `<span class="block-token--input">${content.label}</span>`;
  }
  const text = String(content);
  if (/^[ijk]$/.test(text)) return `<em class="block-token--variable">${escape(text)}</em>`;
  return value(content);
};

export const blocks = {
  readDigitalPin(pin) {
    return { kind: "input", toolbox: "Entrada", blockName: "ler pino digital", label: `ler pino digital ${value(pin)}` };
  },
  readAnalogPin(pin = "A0") {
    return { kind: "input", toolbox: "Entrada", blockName: "ler pino analógico", label: `ler pino analógico ${value(pin)}` };
  },
  readServoDegrees(pin) {
    return { kind: "input", toolbox: "Entrada", blockName: "ler graus de servo", label: `ler graus de servo no pino ${value(pin)}` };
  },
  serialAvailable() {
    return { kind: "input", toolbox: "Entrada", blockName: "número de caracteres seriais disponíveis", label: "número de caracteres seriais disponíveis" };
  },
  serialRead() {
    return { kind: "input", toolbox: "Entrada", blockName: "ler do serial", label: "ler do serial" };
  },
  ultrasonicDistance(triggerPin, echoPin = triggerPin, unit = "cm") {
    return { kind: "input", toolbox: "Entrada", blockName: "ler sensor de distância ultrassônico", label: `ler sensor de distância ultrassônico no pino ${value(triggerPin)}, eco ${value(echoPin)}, em ${value(unit)}` };
  },
  temperatureSensor(pin = "A0", unit = "°C") {
    return { kind: "input", toolbox: "Entrada", blockName: "ler sensor de temperatura", label: `ler sensor de temperatura no pino ${value(pin)} em ${value(unit)}` };
  },
  infraredSensor(pin) {
    return { kind: "input", toolbox: "Entrada", blockName: "ler pino do sensor infravermelho", label: `ler pino do sensor infravermelho ${value(pin)}` };
  },
  math(left, operator, right) {
    return { kind: "math", left, operator, right };
  },
  pinMode(pin, mode = "OUTPUT") {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "configurar pino", label: `configurar pino ${value(pin)} como ${value(mode)}` };
  },
  builtInLed(state) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "definir LED incorporado", label: `definir LED incorporado como ${value(state)}` };
  },
  digitalWrite(pin, state) {
    const translated = state === "HIGH" ? "ALTO" : state === "LOW" ? "BAIXO" : state;
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "definir pino digital", label: `definir pino ${value(pin)} como ${value(translated)}` };
  },
  analogWrite(pin, output) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "definir pino PWM", input: output, label: `definir pino ${value(pin)} como ${pinValue(output)}` };
  },
  write(pin, output) {
    return output === "HIGH" || output === "LOW" || output === "ALTO" || output === "BAIXO"
      ? blocks.digitalWrite(pin, output)
      : blocks.analogWrite(pin, output);
  },
  servo(pin, degrees) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "girar servo", label: `girar servo no pino ${value(pin)} em ${value(degrees)} graus` };
  },
  playSpeaker(pin, tone) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "reproduzir alto-falante", label: `reproduzir alto-falante no pino ${value(pin)} com tom ${value(tone)}` };
  },
  stopSpeaker(pin) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "desativar alto-falante", label: `desativar alto-falante no pino ${value(pin)}` };
  },
  serialPrint(content) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "imprimir no monitor serial", label: `imprimir no monitor serial ${value(content)}` };
  },
  rgbLed(redPin, greenPin, bluePin, color) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "definir LED RGB", label: `definir LED RGB nos pinos ${value(redPin)}, ${value(greenPin)} e ${value(bluePin)} como ${value(color)}` };
  },
  configureLcd(number, type, address) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "configurar LCD", label: `configurar LCD do tipo ${value(number)} para ${value(type)} com endereço ${value(address)}` };
  },
  lcdPrint(number, content) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "imprimir no LCD", label: `imprimir no LCD ${value(number)} ${value(content)}` };
  },
  lcdPosition(number, column, row) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "definir posição no LCD", label: `definir posição no LCD ${value(number)} para coluna ${value(column)}, linha ${value(row)}` };
  },
  lcdAction(number, action) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "ação no LCD", label: `no LCD ${value(number)} ${value(action)}` };
  },
  lcdScreenType(number, type) {
    return { kind: "command", tone: "io", toolbox: "Saída", blockName: "configurar tipo de tela de LED", label: `configurar tipo de tela de LED ${value(number)} para ${value(type)}` };
  },
  wait(amount, unit = "ms") {
    return { kind: "command", tone: "wait", toolbox: "Controle", blockName: "aguardar", label: `aguardar ${value(amount)} ${escape(unit)}` };
  },
  setVariable(name, initialValue) {
    return { kind: "command", tone: "variable", toolbox: "Variáveis", blockName: "definir variável", variableName: String(name), label: `definir ${value(name)} como ${value(initialValue)}` };
  },
  changeVariable(name, amount) {
    return { kind: "command", tone: "variable", toolbox: "Variáveis", blockName: "alterar variável", variableName: String(name), label: `alterar ${value(name)} por ${value(amount)}` };
  },
  repeat(times, children) {
    return { kind: "container", tone: "loop", toolbox: "Controle", blockName: "repetir", label: `repetir ${value(times)} vezes`, children };
  },
  countWith(counter, from, to, step, children) {
    const direction = Number(step) < 0 ? "baixo" : "cima";
    const increment = Math.abs(Number(step));
    return {
      kind: "container",
      tone: "loop",
      toolbox: "Controle",
      blockName: "contagem para cima/baixo",
      counterName: String(counter),
      label: `contagem para ${value(direction)} por ${value(increment)} para ${value(counter)} de ${value(from)} a ${value(to)} fazer`,
      children
    };
  }
};

function renderNode(node) {
  if (node.kind === "container") {
    return `<div class="block block--loop block--repeat"><span>${node.label}</span><div class="block__inside">${node.children.map(renderNode).join("")}</div></div>`;
  }
  const tone = node.tone ? ` block--${node.tone}` : "";
  return `<div class="block${tone}">${node.label}</div>`;
}

export function renderProgram({ start = [], forever = [] }) {
  const variables = new Set();
  const counters = new Set();
  const locations = new Map([
    ["Controle:no início", ["Controle", "no início"]],
    ["Controle:para sempre", ["Controle", "para sempre"]]
  ]);
  const findVariables = (nodes) => nodes.forEach((node) => {
    if (node.variableName) variables.add(node.variableName);
    if (node.counterName) counters.add(node.counterName);
    if (node.toolbox && node.blockName) locations.set(`${node.toolbox}:${node.blockName}`, [node.toolbox, node.blockName]);
    if (node.input?.kind === "math") locations.set("Matemática:operação aritmética", ["Matemática", "operação aritmética"]);
    if (node.input?.kind === "input") locations.set(`Entrada:${node.input.blockName}`, ["Entrada", node.input.blockName]);
    if (node.children) findVariables(node.children);
  });
  findVariables([...start, ...forever]);

  const startBlock = `<div class="block block--loop block--event"><span>no início</span><div class="block__inside">${start.map(renderNode).join("")}</div></div>`;
  const foreverBlock = `<div class="block block--loop"><span>para sempre</span><div class="block__inside">${forever.map(renderNode).join("")}</div></div>`;
  const stack = `<div class="block-stack" data-block-framework="tinkercad-circuits">${startBlock}${foreverBlock}</div>`;
  const variableInstructions = [...variables]
    .map((name) => `<li>Em <b>Variáveis</b>, clique em <b>Criar variável</b> e use o nome ${value(name)}.</li>`)
    .join("");
  const counterInstructions = [...counters]
    .map((name, index) => index === 0
      ? `<li>Depois de inserir a primeira <b>contagem</b>, abra <b>Variáveis</b> e arraste ${value(name)} para o campo de valor do bloco <b>definir pino</b>.</li>`
      : `<li>Para usar ${value(name)} em outra contagem, crie essa variável em <b>Variáveis</b>, selecione-a no bloco de contagem e arraste-a para o campo de valor correspondente.</li>`)
    .join("");
  if (counters.size) locations.set("Variáveis:contador do laço", ["Variáveis", "contador do laço"]);
  const locationItems = [...locations.values()]
    .map(([category, name]) => `<li><b>${escape(name)}</b> — categoria <b>${escape(category)}</b>.</li>`)
    .join("");
  const preparation = counterInstructions || variableInstructions
    ? `<strong>Como encaixar</strong><ol>${counterInstructions}${variableInstructions}</ol>`
    : "";
  return `<h4>Blocos</h4><div class="block-workspace">${stack}<aside class="block-instructions" aria-label="Localização dos blocos"><strong>Onde encontrar</strong><ul>${locationItems}</ul>${preparation}<p>Arraste cada peça da categoria indicada e encaixe-a na posição mostrada.</p></aside></div>`;
}

export function replaceSectionBlocks(article, sectionId, program) {
  const sectionStart = article.indexOf(`<h3 id="${sectionId}">`);
  if (sectionStart < 0) return article;
  const sectionEndCandidate = article.indexOf("<h3 id=", sectionStart + 1);
  const sectionEnd = sectionEndCandidate < 0 ? article.length : sectionEndCandidate;
  const section = article.slice(sectionStart, sectionEnd);
  const replaced = section.replace(/<h4 id="blocos">Blocos<\/h4>\n<ol>\n[\s\S]*?<\/ol>/, renderProgram(program));
  return article.slice(0, sectionStart) + replaced + article.slice(sectionEnd);
}
