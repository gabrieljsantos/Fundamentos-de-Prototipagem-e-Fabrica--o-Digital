# LED comum

[← Voltar ao início](../README.md)

Este projeto começa com uma ligação direta em 5 V e avança até o controle de brilho e tempo pela programação.

## Conceitos

- [LED, ânodo e cátodo](03a-led-comum.md)
- [Resistor limitador](03b-resistor-led.md)
- [Medição da fonte e calculadora de resistor](03b-resistor-led.md#medir-a-tensão-da-fonte)
- [GPIO e saída digital](02c-gpio-digital.md)
- [PWM](02d-sinais-comunicacao.md#pwm)

## Controle de brilho

Depois de ligar e desligar o LED com `HIGH` e `LOW`, use uma porta PWM para variar o brilho. No Arduino Uno, os pinos PWM são identificados pelo símbolo `~`; o pino 9 é usado neste projeto.

### Blocos

1. No início, configure o pino 9 como `OUTPUT`.
2. Para sempre, aumente o valor PWM de 0 até 255.
3. Aguarde 8 ms entre os valores.
4. Diminua o valor PWM de 255 até 0.
5. Aguarde 8 ms entre os valores.

### Código

```cpp
const int led = 9;  // porta PWM identificada por ~ no Arduino Uno

void setup() {
  pinMode(led, OUTPUT);  // permite controlar o LED
}

void loop() {
  for (int i = 0; i <= 255; i++) {
    analogWrite(led, i);       // usa diretamente o contador do laço
    delay(8);                  // controla a velocidade do gradiente
  }

  for (int j = 255; j >= 0; j--) {
    analogWrite(led, j);       // usa o contador do segundo laço
    delay(8);
  }
}
```

## Brilho e tempo

O LED alterna entre brilho baixo, brilho alto e apagado. Assim, tempo e PWM são usados no mesmo programa.

### Blocos

1. No início, configure o pino 9 como `OUTPUT`.
2. Para sempre, defina o PWM como 70.
3. Aguarde 500 ms.
4. Defina o PWM como 220.
5. Aguarde 500 ms.
6. Defina o PWM como 0.
7. Aguarde 500 ms.

### Código

```cpp
const int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, 70);   // brilho baixo
  delay(500);
  analogWrite(led, 220);  // brilho alto
  delay(500);
  analogWrite(led, 0);    // apaga o LED
  delay(500);
}
```

## Gradiente

O brilho sobe de zero ao máximo e retorna ao zero sem saltos visíveis. O código é o mesmo princípio apresentado no controle de brilho, mas pode usar atrasos maiores ou menores para alterar a velocidade.

## Pulsação

Neste modelo, o LED acende gradualmente, permanece aceso por um instante, apaga gradualmente e permanece apagado antes de repetir.

### Blocos

1. No início, configure o pino 9 como `OUTPUT`.
2. Para sempre, aumente o PWM de 0 até 255 em passos de 5.
3. Aguarde 20 ms entre os valores.
4. Aguarde 300 ms com brilho máximo.
5. Diminua o PWM de 255 até 0 em passos de 5.
6. Aguarde 20 ms entre os valores.
7. Aguarde 300 ms com o LED apagado.

### Código

```cpp
const int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  for (int i = 0; i <= 255; i += 5) {
    analogWrite(led, i);       // acende usando o contador do laço
    delay(20);
  }
  delay(300);                  // mantém o brilho máximo

  for (int j = 255; j >= 0; j -= 5) {
    analogWrite(led, j);       // apaga usando o segundo contador
    delay(20);
  }
  delay(300);                  // mantém o LED apagado
}
```

## Erros comuns

- LED invertido.
- Ausência de resistor ou resistor muito baixo.
- Perna longa usada como única forma de identificar terminal.

## Diagnóstico rápido

Se não acender, desligue e confira polaridade, fileiras da protoboard, GND, número do pino e configuração `OUTPUT`. Depois teste o LED com uma fonte e um resistor conhecidos.

[← Anterior: LED RGB](03c-led-rgb.md) · [Próximo: Semáforo →](03e-semaforo.md)

[← Voltar ao início](../README.md)
