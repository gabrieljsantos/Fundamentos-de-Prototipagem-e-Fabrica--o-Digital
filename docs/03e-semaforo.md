# Semáforo

[← Voltar ao início](../README.md)

Este projeto controla três LEDs como um semáforo simples. Cada fase define quais saídas ficam acesas e por quanto tempo permanecem nesse estado.

## Conceitos

- [LED, ânodo, cátodo e polaridade](03a-led-comum.md)
- [Resistor limitador](03b-resistor-led.md)
- [GPIO e saída digital](02c-gpio-digital.md)
- [Estados, sequência e temporização](04d-blocos-codigo.md#estados-e-sequenciamento)
- [PWM](02d-sinais-comunicacao.md#pwm)

## Montagem

O exemplo usa os pinos PWM 9, 10 e 11. O funcionamento básico precisa apenas de saída digital, mas essa escolha permite realizar depois o bônus de controle de brilho sem trocar os fios.

```text
D9  ── resistor ── LED vermelho ── GND
D10 ── resistor ── LED amarelo  ── GND
D11 ── resistor ── LED verde    ── GND
```

Cada LED precisa de um resistor próprio. Os três cátodos podem compartilhar o GND.

## Sequência do semáforo

O ciclo possui três estados: vermelho por 5 segundos, verde por 4 segundos e amarelo por 1 segundo. Ao terminar o amarelo, o bloco `para sempre` reinicia a sequência no vermelho.

### Blocos

1. No início, configure os pinos 9, 10 e 11 como `OUTPUT`.
2. Para sempre, acenda somente o vermelho e aguarde 5 segundos.
3. Apague o vermelho, acenda somente o verde e aguarde 4 segundos.
4. Apague o verde, acenda somente o amarelo e aguarde 1 segundo.

### Código

```cpp
const int vermelho = 9;
const int amarelo = 10;
const int verde = 11;

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(amarelo, OUTPUT);
  pinMode(verde, OUTPUT);
}

void loop() {
  // Estado 1: passagem proibida.
  digitalWrite(vermelho, HIGH);
  digitalWrite(amarelo, LOW);
  digitalWrite(verde, LOW);
  delay(5000);

  // Estado 2: passagem permitida.
  digitalWrite(vermelho, LOW);
  digitalWrite(amarelo, LOW);
  digitalWrite(verde, HIGH);
  delay(4000);

  // Estado 3: atenção antes de voltar ao vermelho.
  digitalWrite(vermelho, LOW);
  digitalWrite(amarelo, HIGH);
  digitalWrite(verde, LOW);
  delay(1000);
}
```

## Bônus: controle de brilho

Como os três LEDs estão nos pinos PWM 9, 10 e 11, valores entre 0 e 255 podem reduzir ou aumentar o brilho aparente. O exemplo mantém a mesma sequência, mas usa intensidade 180 em vez do máximo 255.

### Blocos

1. No início, configure os pinos 9, 10 e 11 como `OUTPUT`.
2. Para sempre, defina vermelho como 180, amarelo e verde como 0, e aguarde 5 segundos.
3. Defina verde como 180, vermelho e amarelo como 0, e aguarde 4 segundos.
4. Defina amarelo como 180, vermelho e verde como 0, e aguarde 1 segundo.

### Código

```cpp
void loop() {
  analogWrite(vermelho, 180);
  analogWrite(amarelo, 0);
  analogWrite(verde, 0);
  delay(5000);

  analogWrite(vermelho, 0);
  analogWrite(amarelo, 0);
  analogWrite(verde, 180);
  delay(4000);

  analogWrite(vermelho, 0);
  analogWrite(amarelo, 180);
  analogWrite(verde, 0);
  delay(1000);
}
```

## Erros comuns

- Usar um único resistor para os três LEDs.
- Inverter ânodo e cátodo.
- Ligar um LED em pino diferente do declarado no código.
- Acender duas fases por não desligar explicitamente o estado anterior.
- Trocar os pinos por GPIOs sem PWM e esperar que `analogWrite()` controle o brilho.

## Diagnóstico rápido

Teste um LED por vez. Confirme o GND compartilhado, a polaridade, o resistor, o número do pino e o estado enviado pelo programa. Depois execute a sequência completa.

[← Anterior: LED comum](03d-guia-pratico-led.md) · [Próximo: LED RGB →](03g-cores-definidas.md)

[← Voltar ao início](../README.md)
