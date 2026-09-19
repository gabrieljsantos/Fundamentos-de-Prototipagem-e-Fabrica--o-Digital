# Guia prático: ligar e programar LEDs

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Ligação do LED comum](#ligação-do-led-comum)
- [Piscar LED](#piscar-led)
- [Controle de brilho com PWM](#controle-de-brilho-com-pwm)
- [Ligação do LED RGB](#ligação-do-led-rgb)
- [Controle de cor](#controle-de-cor)
- [Erros comuns](#erros-comuns)

## Ligação do LED comum

1. Confirme a tensão da placa e a corrente segura da GPIO.
2. Identifique ânodo, cátodo e tensão direta.
3. Escolha a corrente desejada dentro dos limites.
4. Calcule o resistor e selecione um valor comercial seguro.
5. Com a placa desligada, monte GPIO, resistor, LED e GND em série.
6. Revise as fileiras da protoboard e a polaridade.
7. Alimente e teste.

```text
GPIO ── resistor ── ânodo → LED → cátodo ── GND
```

## Piscar LED

| Bloco | Código |
|---|---|
| definir pino 9 como saída | `pinMode(9, OUTPUT);` |
| definir pino 9 como ALTO | `digitalWrite(9, HIGH);` |
| aguardar 500 ms | `delay(500);` |
| definir pino 9 como BAIXO | `digitalWrite(9, LOW);` |

```cpp
const int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  delay(500);
  digitalWrite(led, LOW);
  delay(500);
}
```

## Controle de brilho com PWM

O **PWM** altera o ciclo de trabalho dos pulsos e, com isso, o brilho percebido. Use uma GPIO compatível.

```cpp
const int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, 64);
  delay(1000);
  analogWrite(led, 192);
  delay(1000);
}
```

Os valores 0 a 255 correspondem ao Uno clássico. Em outra placa, confira funções e resolução. Em blocos, procure “definir PWM do pino para valor”.

## Ligação do LED RGB

1. Identifique se é ânodo comum ou cátodo comum.
2. Identifique os terminais R, G e B.
3. Calcule e instale um resistor em cada canal.
4. Escolha três GPIOs PWM se desejar intensidades variáveis.
5. Conecte o terminal comum ao GND ou VCC conforme o tipo.

## Controle de cor

Exemplo para RGB de cátodo comum no Uno clássico:

```cpp
const int vermelho = 9;
const int verde = 10;
const int azul = 11;

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void definirCor(int r, int g, int b) {
  analogWrite(vermelho, r);
  analogWrite(verde, g);
  analogWrite(azul, b);
}

void loop() {
  definirCor(255, 255, 0); // amarelo
}
```

Para ânodo comum, a lógica geralmente deve ser invertida.

## Erros comuns

- LED invertido.
- Ausência de resistor ou resistor muito baixo.
- GPIO escolhida sem suporte ao recurso necessário.
- Confusão entre ânodo comum e cátodo comum.
- Um único resistor para os três canais RGB.
- Limites do Uno usados em outra placa sem verificação.
- Perna longa usada como única forma de identificar terminal.

## Diagnóstico rápido

Se não acender, desligue e confira polaridade, fileiras da protoboard, GND, número da porta e configuração `OUTPUT`. Depois teste o LED com fonte e resistor conhecidos. Se a cor estiver errada, revise a ordem dos canais. Se o brilho estiver invertido, confira o tipo de terminal comum.

[← Anterior: LED RGB](03c-led-rgb.md) · [Revisão do tópico 3 →](03-leds-resistores.md)

[← Voltar ao início](../README.md)
