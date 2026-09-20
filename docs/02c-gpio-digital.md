# GPIO, entrada, saída e níveis digitais

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [GPIO](#gpio)
- [Entrada digital](#entrada-digital)
- [Saída digital](#saída-digital)
- [Nível lógico](#nível-lógico)
- [HIGH e LOW](#high-e-low)
- [Pull-up e pull-down](#pull-up-e-pull-down)
- [Corrente e proteção](#corrente-e-proteção)

## GPIO

**GPIO** significa entrada e saída de propósito geral. É um pino que o programa pode configurar para funções permitidas pelo microcontrolador.

Nem todo pino exposto na placa é GPIO. GND, 5 V, 3,3 V, reset e alguns pinos de USB ou alimentação possuem funções próprias. Também existem GPIOs com restrições na inicialização.

## Entrada digital

Uma **entrada digital** observa a tensão do pino e a classifica como LOW ou HIGH. Ela é usada para botões, interruptores e saídas digitais de sensores.

```cpp
pinMode(2, INPUT);
int estado = digitalRead(2);
```

No ambiente de blocos, corresponde a “definir pino como entrada” e “ler pino digital”. A entrada não deve receber tensão acima dos limites da placa.

## Saída digital

Uma **saída digital** comanda o pino para um nível LOW ou HIGH. Ela serve para sinais de controle e cargas muito pequenas, como um LED com resistor.

```cpp
pinMode(9, OUTPUT);
digitalWrite(9, HIGH);
```

Em blocos: “definir pino como saída” e “definir pino como ALTO”. Uma saída não deve alimentar diretamente motor, servo ou carga de corrente elevada.

Os projetos [LED comum](03d-guia-pratico-led.md) e [Semáforo](03e-semaforo.md) aplicam essa saída digital em ligações com resistor, controle por tempo, sequência de estados, PWM, gradiente e pulsação.

## Nível lógico

**Nível lógico** é uma faixa de tensão interpretada como estado digital. Não existe uma única tensão universal para HIGH e LOW; os limites dependem do microcontrolador e da alimentação.

Uma placa de 5 V pode produzir HIGH próximo de 5 V. Uma placa de 3,3 V produz HIGH próximo de 3,3 V. Alguns pinos de 3,3 V não toleram 5 V.

## HIGH e LOW

**HIGH** e **LOW** representam estados lógicos, não valores universais de tensão. LOW costuma estar próximo ao GND; HIGH, próximo à alimentação lógica da placa.

O significado funcional depende do circuito. Com botão em `INPUT_PULLUP`, LOW pode significar “pressionado”. Em LED RGB de ânodo comum, LOW pode acender um canal.

## Pull-up e pull-down

**Pull-up** e **pull-down** são resistores que definem o estado de uma entrada quando nenhum dispositivo a está acionando. Sem eles, a entrada fica flutuante e pode captar ruído.

- Pull-up liga fracamente a entrada ao VCC e define HIGH como repouso.
- Pull-down liga fracamente a entrada ao GND e define LOW como repouso.
- `INPUT_PULLUP` ativa um resistor interno disponível em muitas placas.

## Corrente e proteção

A GPIO trabalha com corrente limitada. Confira os valores recomendados e máximos da placa. Um resistor limita corrente de LED; transistor ou driver controla carga maior; divisor ou conversor de nível protege uma entrada contra tensão incompatível.

Configurar uma porta por código não aumenta sua capacidade elétrica.

## Blocos e código

| Ação | Bloco comum | Código |
|---|---|---|
| Configurar entrada | definir pino como entrada | `pinMode(p, INPUT);` |
| Ativar pull-up | entrada com pull-up | `pinMode(p, INPUT_PULLUP);` |
| Ler entrada | ler pino digital | `digitalRead(p);` |
| Configurar saída | definir pino como saída | `pinMode(p, OUTPUT);` |
| Escrever estado | definir ALTO/BAIXO | `digitalWrite(p, HIGH);` |

## Verifique se entendeu

1. Por que GND e 5 V não são GPIOs?
2. Por que HIGH não significa sempre 5 V?
3. O que ocorre com uma entrada flutuante?
4. Por que uma saída digital não deve alimentar um motor?

[← Anterior: IDE e USB](02b-ide-usb-drivers.md) · [Próximo: sinais e comunicação →](02d-sinais-comunicacao.md)

[← Voltar ao início](../README.md)
