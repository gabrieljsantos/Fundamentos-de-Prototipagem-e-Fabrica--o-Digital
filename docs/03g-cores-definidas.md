# LED RGB

[← Voltar ao início](../README.md)

Antes de começar, faça o projeto [LED comum](03d-guia-pratico-led.md) para compreender polaridade, resistor, `OUTPUT`, `HIGH`, `LOW`, tempo e PWM.

## Conceitos

- [LED RGB e canais de cor](03c-led-rgb.md)
- [Resistor limitador](03b-resistor-led.md)
- [PWM](02d-sinais-comunicacao.md#pwm)

## Ligação

O exemplo usa LED RGB de cátodo comum. Cada canal precisa do próprio resistor.

```text
pino 9  PWM ── resistor ── R ┐
pino 10 PWM ── resistor ── G ├── LED RGB ── comum ── GND
pino 11 PWM ── resistor ── B ┘
```

## Cores definidas

### Blocos

1. No início, configure os pinos 9, 10 e 11 como `OUTPUT`.
2. Para sempre, escolha valores para vermelho, verde e azul.
3. Mostre vermelho.
4. Aguarde 1 segundo.
5. Mostre verde.
6. Aguarde 1 segundo.
7. Mostre azul, amarelo, ciano e magenta.
8. Aguarde 1 segundo entre as cores.

### Código

```cpp
const int vermelho = 9;
const int verde = 10;
const int azul = 11;

void definirCor(int r, int g, int b) {
  analogWrite(vermelho, r);  // intensidade do canal vermelho
  analogWrite(verde, g);     // intensidade do canal verde
  analogWrite(azul, b);      // intensidade do canal azul
}

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void loop() {
  definirCor(255, 0, 0);    // vermelho
  delay(1000);
  definirCor(0, 255, 0);    // verde
  delay(1000);
  definirCor(0, 0, 255);    // azul
  delay(1000);
  definirCor(255, 255, 0);  // amarelo
  delay(1000);
  definirCor(0, 255, 255);  // ciano
  delay(1000);
  definirCor(255, 0, 255);  // magenta
  delay(1000);
}
```

As cores mudam de uma combinação definida para outra. Em LED de ânodo comum, os valores precisam ser invertidos.

## Cores e tempo

### Blocos

1. No início, configure os pinos 9, 10 e 11 como `OUTPUT`.
2. Para sempre, mostre vermelho com brilho máximo.
3. Aguarde 1 segundo.
4. Mostre azul com brilho médio.
5. Aguarde meio segundo.
6. Apague os três canais.
7. Aguarde meio segundo.

### Código

```cpp
void loop() {
  definirCor(255, 0, 0);  // vermelho forte
  delay(1000);             // mantém por 1 segundo
  definirCor(0, 0, 120);  // azul com brilho médio
  delay(500);              // mantém por meio segundo
  definirCor(0, 0, 0);    // apaga todos os canais
  delay(500);
}
```

Esse exemplo combina escolha de cor, intensidade e duração.

## Transição de cores

### Blocos

1. No início, configure os pinos 9, 10 e 11 como `OUTPUT`.
2. Para sempre, aumente o verde enquanto diminui o vermelho.
3. Aumente o azul enquanto diminui o verde.
4. Aumente o vermelho enquanto diminui o azul.
5. Aguarde 8 ms entre cada pequeno passo.

### Código

```cpp
const int vermelho = 9;
const int verde = 10;
const int azul = 11;

void definirCor(int r, int g, int b) {
  analogWrite(vermelho, r);
  analogWrite(verde, g);
  analogWrite(azul, b);
}

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void loop() {
  // i é o contador do laço; não precisa ser criado separadamente.
  for (int i = 0; i <= 255; i++) {
    definirCor(255 - i, i, 0);  // vermelho diminui; verde aumenta
    delay(8);
  }

  // j é criado pelo segundo laço.
  for (int j = 0; j <= 255; j++) {
    definirCor(0, 255 - j, j);  // verde diminui; azul aumenta
    delay(8);
  }

  // k é criado pelo terceiro laço.
  for (int k = 0; k <= 255; k++) {
    definirCor(k, 0, 255 - k);  // azul diminui; vermelho aumenta
    delay(8);
  }
}
```

Os canais mudam em pequenos passos, formando transições suaves entre as cores.
