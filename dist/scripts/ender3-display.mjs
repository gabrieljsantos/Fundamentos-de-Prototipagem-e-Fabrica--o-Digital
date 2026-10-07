const screens = {
  "main-menu": {
    label: "menu principal",
    items: [
      { text: "Informações", suffix: "↑", parent: true },
      { text: "Movimento", suffix: "→" },
      { text: "Temperatura", suffix: "→" },
      { text: "Configuração", suffix: "→" },
      "Release SD Card",
      { text: "Select from SD Card", suffix: "→" },
      { text: "Sobre", suffix: "→" },
    ],
    selected: 0,
  },
  "main-menu-temperature": {
    label: "menu principal com Temperatura selecionada",
    items: [
      { text: "Informações", suffix: "↑", parent: true },
      { text: "Movimento", suffix: "→" },
      { text: "Temperatura", suffix: "→" },
      { text: "Configuração", suffix: "→" },
      "Release SD Card",
      { text: "Select from SD Card", suffix: "→" },
      { text: "Sobre", suffix: "→" },
    ],
    selected: 2,
  },
  "main-menu-sd": {
    label: "menu principal com Select from SD Card selecionado",
    items: [
      { text: "Informações", suffix: "↑", parent: true },
      { text: "Movimento", suffix: "→" },
      { text: "Temperatura", suffix: "→" },
      { text: "Configuração", suffix: "→" },
      "Release SD Card",
      { text: "Select from SD Card", suffix: "→" },
      { text: "Sobre", suffix: "→" },
    ],
    selected: 5,
  },
  "print-menu": {
    label: "menu principal durante a impressão",
    items: [
      { text: "Informações", suffix: "↑", parent: true },
      { text: "Pausar impressão", suffix: "→" },
      { text: "Parar impressão", suffix: "→" },
      { text: "Ajustar", suffix: "→" },
      { text: "Temperatura", suffix: "→" },
      { text: "Configuração", suffix: "→" },
      "Release SD Card",
      { text: "Select from SD Card", suffix: "→" },
      { text: "Sobre", suffix: "→" },
    ],
    selected: 0,
  },
  temperature: {
    label: "menu de temperatura",
    items: [
      { text: "Menu principal", suffix: "↑", parent: true },
      "Bocal: 0",
      "Mesa: 0",
      "Vel. Ventoinha: 0%",
      { text: "Pre-aquecer PLA", suffix: "→" },
      { text: "Pre-aquecer ABS", suffix: "→" },
    ],
    selected: 4,
  },
  "temperature-more": {
    label: "menu de temperatura",
    items: [
      { text: "Menu principal", suffix: "↑", parent: true },
      "Bocal: 0",
      "Mesa: 0",
      "Vel. Ventoinha: 0%",
      { text: "Pre-aquecer PLA", suffix: "→" },
      { text: "Pre-aquecer ABS", suffix: "→" },
    ],
    selected: 4,
  },
  "preheat-pla": {
    label: "menu de pré-aquecimento PLA",
    items: [
      { text: "Temperatura", suffix: "↑", parent: true },
      "Pre-aquecer PLA",
      "Extrusora PLA",
      "Pre-aqu Mesa PLA",
    ],
    selected: 1,
  },
  "sd-browser": {
    label: "lista de arquivos do cartão SD",
    items: [
      { text: "Menu principal", suffix: "↑", parent: true },
      "nome_do_arquivo.gcode",
      "nome_do_arquivo_2.gcode",
      "Isabela_PLA_6h13m.gcode",
      "ridge42_PLA_1h11m.gcode",
      "ChaveiroHarryPotter.gcode",
    ],
    selected: 1,
  },
  "sd-selection": {
    label: "arquivo selecionado no cartão SD",
    items: [
      { text: "Menu principal", suffix: "↑", parent: true },
      "Isabela_PLA_6h13m.gcode",
      "ridge42_PLA_1h11m.gcode",
      "ChaveiroHarryPotter.gcode",
      "ChaveiroFlexivel.gcode",
    ],
    selected: 2,
  },
  "print-confirmation": {
    label: "confirmação para iniciar a impressão",
    heading: "Iniciar Impressão",
    message: "nome_do_arquivo.gcode?",
    actions: ["Cancelar", "Imprimir"],
    selected: 0,
  },
  "stop-confirmation": {
    label: "confirmação para parar a impressão",
    heading: "Parar impressão?",
    actions: ["Voltar", "Parar"],
    selected: 0,
  },
  status: {
    label: "tela de informações da Ender 3 pronta",
    stats: ["Bocal 0° / 0°", "Mesa 27° / 25°", "Ventoinha 0%", "Progresso 100%", "Tempo 00:00"],
  },
  heating: {
    label: "tela de informações da Ender 3 aquecendo",
    stats: ["Bocal 150° / 70°", "Mesa 30° / 25°", "Ventoinha 0%", "Progresso 0%", "Tempo 00:04"],
  },
};

const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
})[character]);

const renderItems = (screen) => `<ul class="ender3-menu">${screen.items.map((item, index) => {
  const entry = typeof item === "string" ? { text: item } : item;
  const classes = [index === screen.selected ? "is-selected" : "", entry.parent ? "is-parent" : ""].filter(Boolean).join(" ");
  return `<li${classes ? ` class="${classes}"` : ""}${index === screen.selected ? ' aria-current="true"' : ""}><span>${escapeHtml(entry.text)}</span>${entry.suffix ? `<b aria-hidden="true">${escapeHtml(entry.suffix)}</b>` : ""}</li>`;
}).join("")}</ul>`;

const renderActions = (screen) => `<div class="ender3-actions">${screen.actions.map((action, index) =>
  `<span${index === screen.selected ? ' class="is-selected"' : ""}>${escapeHtml(action)}</span>`
).join("")}</div>`;

const renderStats = (screen) => `<dl class="ender3-status">${screen.stats.map((stat) => {
  const [label, ...value] = stat.split(" ");
  return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value.join(" "))}</dd></div>`;
}).join("")}</dl>`;

class Ender3Display extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["screen"];
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const name = this.getAttribute("screen") || "main-menu";
    const screen = screens[name] || screens["main-menu"];
    const body = screen.items ? renderItems(screen) : screen.stats ? renderStats(screen) : renderActions(screen);
    this.innerHTML = `<figure class="ender3-panel" aria-label="Reconstituição da ${escapeHtml(screen.label)}">
      <div class="ender3-screen">
        ${screen.heading ? `<strong class="ender3-screen__heading">${escapeHtml(screen.heading)}</strong>` : ""}
        ${screen.message ? `<p class="ender3-screen__message">${escapeHtml(screen.message)}</p>` : ""}
        ${body}
      </div>
    </figure>`;
  }
}

if (!customElements.get("ender3-display")) {
  customElements.define("ender3-display", Ender3Display);
}

window.ender3Screens = screens;
