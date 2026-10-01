const tones = {
  power: "#d98778",
  signal: "#91acd7",
  ground: "#59656a",
  neutral: "#879aa8"
};

export const wire = (d, tone = "signal", width = 7, extra = "") =>
  `<path d="${d}" stroke="${tones[tone] || tone}" stroke-width="${width}" fill="none" ${extra}/>`;

export function arduinoUno({ x, y, width = 180, height = 140, leftPins = [], rightPins = [] }) {
  const pinText = (pins, side) => pins.map((pin) => {
    const px = side === "left" ? x + 10 : x + width - 10;
    const anchor = side === "left" ? "start" : "end";
    return `<text x="${px}" y="${y + pin.y + 4}" text-anchor="${anchor}" font-size="12" font-weight="700">${pin.label}</text>`;
  }).join("");
  return `<g data-circuit-part="arduino-uno"><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="24" fill="#b9dce7" stroke="#586b72" stroke-width="4"/><text x="${x + width / 2}" y="${y + height / 2 - 4}" text-anchor="middle" font-size="19" font-weight="800" fill="#263b43">ARDUINO</text><text x="${x + width / 2}" y="${y + height / 2 + 22}" text-anchor="middle" font-size="15" fill="#263b43">UNO</text>${pinText(leftPins, "left")}${pinText(rightPins, "right")}</g>`;
}

export function resistor({ x, y, label = "220 Ω", orientation = "horizontal" }) {
  if (orientation === "vertical") {
    return `<g data-circuit-part="resistor"><rect x="${x}" y="${y}" width="30" height="72" rx="15" fill="#f1d9aa" stroke="#736956" stroke-width="3"/><text x="${x - 8}" y="${y + 41}" text-anchor="end" font-size="13" font-weight="700">${label}</text></g>`;
  }
  return `<g data-circuit-part="resistor"><rect x="${x}" y="${y}" width="76" height="30" rx="15" fill="#f1d9aa" stroke="#736956" stroke-width="3"/><text x="${x + 38}" y="${y - 9}" text-anchor="middle" font-size="13" font-weight="700">${label}</text></g>`;
}

export function led({ x, y, label = "LED", fill = "#f3aaa2" }) {
  return `<g data-circuit-part="led-common"><path d="M${x} ${y}h18c20 0 36 11 36 25s-16 25-36 25h-18z" fill="${fill}" stroke="#7c5c58" stroke-width="3"/><path d="M${x} ${y + 12}v26m54-13h34" stroke="#59656a" stroke-width="4" fill="none"/><text x="${x + 27}" y="${y - 10}" text-anchor="middle" font-size="13" font-weight="700">${label}</text></g>`;
}

export function pushButton({ x, y, orientation = "horizontal" }) {
  if (orientation === "vertical") {
    return `<g data-circuit-part="push-button"><rect x="${x}" y="${y}" width="60" height="112" rx="28" fill="#d9cbea" stroke="#756781" stroke-width="3"/><circle cx="${x + 30}" cy="${y + 23}" r="7" fill="#59656a"/><circle cx="${x + 30}" cy="${y + 89}" r="7" fill="#59656a"/><path d="M${x + 30} ${y + 30}v52" stroke="#59656a" stroke-width="6"/><text x="${x + 30}" y="${y - 12}" text-anchor="middle" font-size="13" font-weight="700">botão</text></g>`;
  }
  return `<g data-circuit-part="push-button"><rect x="${x}" y="${y}" width="124" height="54" rx="26" fill="#d9cbea" stroke="#756781" stroke-width="3"/><circle cx="${x + 20}" cy="${y + 27}" r="7" fill="#59656a"/><circle cx="${x + 104}" cy="${y + 27}" r="7" fill="#59656a"/><path d="M${x + 27} ${y + 27}h70" stroke="#59656a" stroke-width="6"/><text x="${x + 62}" y="${y - 10}" text-anchor="middle" font-size="13" font-weight="700">botão</text></g>`;
}

export function spdt({ x, y, width = 168, height = 174, labels = ["5 V", "comum", "GND"] }) {
  const left = x + 40;
  const middle = x + width / 2;
  const right = x + width - 40;
  const contactY = y + 66;
  const commonY = y + 89;
  const pinY = y + 112;
  return `<g data-circuit-part="switch-spdt"><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="#c8d8ee" stroke="#64758a" stroke-width="3"/><circle cx="${left}" cy="${contactY}" r="8" fill="#59656a"/><circle cx="${middle}" cy="${commonY}" r="8" fill="#59656a"/><circle cx="${right}" cy="${contactY}" r="8" fill="#59656a"/><path d="M${middle} ${commonY}L${left + 6} ${contactY + 2}M${left} ${contactY + 8}v38M${middle} ${commonY + 8}v15M${right} ${contactY + 8}v38" stroke="#59656a" stroke-width="6"/><text x="${left}" y="${y + 134}" text-anchor="middle" font-size="12" font-weight="700">${labels[0]}</text><text x="${middle}" y="${y + 134}" text-anchor="middle" font-size="12" font-weight="700">${labels[1]}</text><text x="${right}" y="${y + 134}" text-anchor="middle" font-size="12" font-weight="700">${labels[2]}</text><text x="${middle}" y="${y + 158}" text-anchor="middle" font-size="13" font-weight="700">SPDT</text></g>`;
}

export function rgbLed({ x, y, label = "LED RGB" }) {
  return `<g data-circuit-part="led-rgb"><path d="M${x} ${y + 55}v-32c0-26 24-47 54-47s54 21 54 47v32z" fill="#eee" stroke="#6b6870" stroke-width="3"/><path d="M${x + 18} ${y + 55}v45m24-45v45m24-45v45m24-45v45" stroke="#59656a" stroke-width="4"/><text x="${x + 18}" y="${y + 35}" fill="#b52d2d" font-weight="800">R</text><text x="${x + 42}" y="${y + 35}" fill="#23833b" font-weight="800">G</text><text x="${x + 66}" y="${y + 35}" fill="#315bb5" font-weight="800">B</text><text x="${x + 90}" y="${y + 35}" font-weight="800">C</text><text x="${x + 54}" y="${y - 34}" text-anchor="middle" font-size="13" font-weight="700">${label}</text></g>`;
}
