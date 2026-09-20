import { blocks as b, replaceSectionBlocks } from "./tinkercad-blocks.mjs";

const commonLedPrograms = {
  "controle-de-brilho": {
    start: [b.pinMode(9)],
    forever: [
      b.countWith("i", 0, 255, 1, [
        b.write(9, "i"),
        b.wait(8)
      ]),
      b.countWith("j", 255, 0, -1, [
        b.write(9, "j"),
        b.wait(8)
      ])
    ]
  },
  "brilho-e-tempo": {
    start: [b.pinMode(9)],
    forever: [
      b.write(9, 70), b.wait(500),
      b.write(9, 220), b.wait(500),
      b.write(9, 0), b.wait(500)
    ]
  },
  "pulsacao": {
    start: [b.pinMode(9)],
    forever: [
      b.countWith("i", 0, 255, 5, [
        b.write(9, "i"),
        b.wait(20)
      ]),
      b.wait(300),
      b.countWith("j", 255, 0, -5, [
        b.write(9, "j"),
        b.wait(20)
      ]),
      b.wait(300)
    ]
  }
};

const rgbSetup = [b.pinMode(9), b.pinMode(10), b.pinMode(11)];
const color = (red, green, blue) => [
  b.write(9, red),
  b.write(10, green),
  b.write(11, blue)
];

const rgbLedPrograms = {
  "cores-definidas": {
    start: rgbSetup,
    forever: [
      ...color(255, 0, 0), b.wait(1, "s"),
      ...color(0, 255, 0), b.wait(1, "s"),
      ...color(0, 0, 255), b.wait(1, "s"),
      ...color(255, 255, 0), b.wait(1, "s"),
      ...color(0, 255, 255), b.wait(1, "s"),
      ...color(255, 0, 255), b.wait(1, "s")
    ]
  },
  "cores-e-tempo": {
    start: rgbSetup,
    forever: [
      ...color(255, 0, 0), b.wait(1, "s"),
      ...color(0, 0, 120), b.wait(500),
      ...color(0, 0, 0), b.wait(500)
    ]
  },
  "transicao-de-cores": {
    start: rgbSetup,
    forever: [
      b.countWith("i", 0, 255, 1, [
        ...color(b.math(255, "−", "i"), "i", 0),
        b.wait(8)
      ]),
      b.countWith("j", 0, 255, 1, [
        ...color(0, b.math(255, "−", "j"), "j"),
        b.wait(8)
      ]),
      b.countWith("k", 0, 255, 1, [
        ...color("k", 0, b.math(255, "−", "k")),
        b.wait(8)
      ])
    ]
  }
};

const trafficSetup = [b.pinMode(9), b.pinMode(10), b.pinMode(11)];
const digitalState = (red, yellow, green) => [
  b.digitalWrite(9, red),
  b.digitalWrite(10, yellow),
  b.digitalWrite(11, green)
];
const pwmState = (red, yellow, green) => [
  b.analogWrite(9, red),
  b.analogWrite(10, yellow),
  b.analogWrite(11, green)
];

const trafficLightPrograms = {
  "sequencia-do-semaforo": {
    start: trafficSetup,
    forever: [
      ...digitalState("ALTO", "BAIXO", "BAIXO"), b.wait(5, "s"),
      ...digitalState("BAIXO", "BAIXO", "ALTO"), b.wait(4, "s"),
      ...digitalState("BAIXO", "ALTO", "BAIXO"), b.wait(1, "s")
    ]
  },
  "bonus-controle-de-brilho": {
    start: trafficSetup,
    forever: [
      ...pwmState(180, 0, 0), b.wait(5, "s"),
      ...pwmState(0, 0, 180), b.wait(4, "s"),
      ...pwmState(0, 180, 0), b.wait(1, "s")
    ]
  }
};

const programsByPage = {
  "03d-guia-pratico-led": commonLedPrograms,
  "03e-semaforo": trafficLightPrograms,
  "03g-cores-definidas": rgbLedPrograms
};

export function applyBlockPrograms(page, article) {
  const programs = programsByPage[page];
  if (!programs) return article;
  return Object.entries(programs).reduce(
    (output, [sectionId, program]) => replaceSectionBlocks(output, sectionId, program),
    article
  );
}
