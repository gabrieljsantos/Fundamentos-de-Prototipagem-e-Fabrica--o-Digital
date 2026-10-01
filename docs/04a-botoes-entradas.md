# Botão controla LED

[← Voltar ao início](../README.md)

Este projeto reúne cinco montagens progressivas. As duas primeiras controlam o LED diretamente, sem Arduino. As três seguintes usam uma entrada digital para decidir o estado do LED.

## Conceitos

- [Botão e interruptor](04a1-botoes-interruptores.md)
- [Entrada digital: HIGH, LOW e entrada flutuante](04a2-entrada-digital-flutuante.md)
- [Pull-down](04a3-pull-up-pull-down.md#pull-down)
- [Pull-up e lógica ativa em LOW](04a3-pull-up-pull-down.md#pull-up)
- [Ruído, bounce e debounce](04a4-ruido-bounce-debounce.md)
- [LED, ânodo, cátodo e polaridade](03a-led-comum.md)
- [Resistor limitador do LED](03b-resistor-led.md)
- [GPIO e saída digital](02c-gpio-digital.md)

## Materiais

- fonte de 5 V e GND para as montagens diretas;
- um LED;
- um resistor de 220 Ω para o LED;
- um push button;
- um interruptor de gangorra SPDT de três terminais;
- um resistor de 10 kΩ para a montagem pull-down;
- Arduino Uno e fios para as etapas programadas.

## Montagem 1 — gangorra controla o LED diretamente

O caminho é `5 V → resistor de 220 Ω → terminal central da gangorra`. Uma das saídas laterais segue para `LED → GND`; a outra fica sem ligação nesta primeira montagem. Em uma posição o comum alimenta o LED; na outra, seleciona a saída livre e o LED apaga. Não há programação.

## Montagem 2 — push button controla o LED diretamente

O push button substitui a gangorra no mesmo caminho. O LED acende somente enquanto o botão está pressionado. Essa montagem evidencia a diferença entre uma chave que mantém a posição e um botão momentâneo.

## Montagem 3 — gangorra seleciona HIGH ou LOW

O terminal central, ou comum, da chave SPDT vai ao pino 2. Um terminal lateral vai ao pino 5 V do Arduino e o outro vai ao GND da própria placa. Assim, a entrada sempre recebe um estado definido: `HIGH` de um lado e `LOW` do outro. O Arduino usa essa leitura para controlar o LED no pino 9.

```cpp
const int chave = 2; // terminal central da chave SPDT
const int led = 9;   // saída do LED

void setup() {
  pinMode(chave, INPUT); // a chave sempre seleciona 5 V ou GND
  pinMode(led, OUTPUT);  // configura o controle do LED
}

void loop() {
  int estado = digitalRead(chave); // lê HIGH ou LOW
  digitalWrite(led, estado);       // reproduz o estado no LED
}
```

## Montagem 4 — push button com pull-down

O botão conecta o pino 2 aos 5 V quando é pressionado. O resistor de 10 kΩ conecta o mesmo pino ao GND e garante `LOW` quando o botão está solto. O programa acende o LED quando lê `HIGH`.

```cpp
const int botao = 2; // ponto de leitura do botão
const int led = 9;   // saída que controla o LED

void setup() {
  pinMode(botao, INPUT); // o resistor externo define o repouso em LOW
  pinMode(led, OUTPUT);  // permite ao Arduino comandar o LED
}

void loop() {
  int estado = digitalRead(botao); // HIGH pressionado; LOW solto
  digitalWrite(led, estado);       // copia o estado do botão para o LED
}
```

## Montagem 5 — push button com pull-up interno

O botão conecta o pino 2 ao GND. O Arduino mantém a entrada em `HIGH` pelo pull-up interno quando o botão está solto. Como pressionar produz `LOW`, o programa precisa inverter a decisão.

```cpp
const int botao = 2; // botão ligado entre este pino e o GND
const int led = 9;   // LED com resistor de 220 ohms até o GND

void setup() {
  pinMode(botao, INPUT_PULLUP); // ativa o resistor interno para 5 V
  pinMode(led, OUTPUT);         // configura a saída do LED
}

void loop() {
  bool pressionado = digitalRead(botao) == LOW; // LOW significa pressionado
  digitalWrite(led, pressionado ? HIGH : LOW);  // acende somente ao pressionar
}
```

## Antes de avançar

Compare as montagens 3, 4 e 5. Em todas, o pino 2 recebe sempre `HIGH` ou `LOW`; o que muda é como o circuito define o repouso e qual estado significa “acionado”.

[Próximo: divisor e sensores resistivos →](04b-divisor-potenciometro-ldr.md)
