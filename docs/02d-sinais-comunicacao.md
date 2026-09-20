# ADC, PWM, I²C, SPI e UART

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [ADC e entrada analógica](#adc-e-entrada-analógica)
- [PWM](#pwm)
- [Duty cycle](#duty-cycle)
- [Frequência](#frequência)
- [I²C](#i²c)
- [SPI](#spi)
- [UART](#uart)

## ADC e entrada analógica

Uma **entrada analógica** recebe uma tensão dentro de uma faixa permitida. O **ADC**, conversor analógico-digital, representa essa tensão por um número.

```cpp
int leitura = analogRead(A0);
```

No Uno clássico, a leitura costuma variar de 0 a 1023. Em outras placas, a resolução e a tensão de referência podem ser diferentes. O ADC mede tensão, não resistência diretamente; potenciômetros e LDRs costumam aparecer em divisores de tensão.

## PWM

**PWM**, modulação por largura de pulso, alterna rapidamente a saída entre LOW e HIGH. O controle muda a proporção de tempo ativo, não a amplitude do nível HIGH.

PWM permite controlar brilho aparente de LED, potência média em certas cargas e sinais para alguns dispositivos. Ele não é automaticamente uma tensão analógica contínua.

```cpp
analogWrite(9, 128); // valor intermediário no Uno clássico
```

Em ESP32, funções e configuração de PWM podem diferir conforme a versão do suporte da placa.

Os projetos [LED comum](03d-guia-pratico-led.md), [Semáforo](03e-semaforo.md) e [LED RGB](03g-cores-definidas.md) apresentam estados definidos e aplicações de PWM em brilho, sinalização e transições de cor.

## Duty cycle

**Duty cycle**, ou ciclo de trabalho, é o percentual do período em que o PWM permanece ativo.

- 0%: sempre inativo.
- 50%: ativo durante metade do período.
- 100%: sempre ativo.

Em lógica invertida, como certos LEDs de ânodo comum, a resposta visual pode ser oposta ao aumento do valor.

## Frequência

**Frequência** é o número de ciclos por segundo, medido em hertz. Ela influencia som, suavidade visual, aquecimento e compatibilidade com a carga. Frequência e duty cycle são características diferentes do mesmo sinal periódico.

## I²C

**I²C** é um barramento síncrono que costuma usar SDA para dados e SCL para clock. Vários dispositivos podem compartilhar os fios quando possuem endereços compatíveis.

I²C exige alimentação, GND comum quando não há isolamento e resistores de pull-up adequados. Endereço, nível lógico e pinos dependem do dispositivo e da placa.

## SPI

**SPI** é uma comunicação síncrona que normalmente usa clock, linha do controlador para o periférico, linha do periférico para o controlador e seleção de dispositivo.

É comum encontrar nomes como SCK, MOSI, MISO e CS. SPI tende a usar mais fios que I²C, mas permite comunicação rápida e seleção direta de periféricos.

## UART

**UART** é uma comunicação serial assíncrona. Normalmente, TX de um dispositivo liga ao RX do outro e os GNDs são compartilhados.

Os dois lados devem concordar sobre velocidade e formato. UART não é sinônimo de USB, embora um conversor USB/serial permita ao computador conversar com a UART da placa.

## Comparação

| Recurso | Finalidade | Conexões típicas |
|---|---|---|
| ADC | Medir tensão | entrada analógica e GND |
| PWM | Controlar pulsos de saída | GPIO compatível e GND |
| I²C | Comunicar com dispositivos endereçados | SDA e SCL |
| SPI | Comunicação síncrona com seleção | SCK, MOSI, MISO e CS |
| UART | Comunicação serial assíncrona | TX e RX |

## Verifique se entendeu

1. Por que ADC e PWM não são operações inversas perfeitas?
2. Qual é a diferença entre duty cycle e frequência?
3. Como vários módulos podem compartilhar I²C?
4. Por que TX normalmente se conecta a RX?

[← Anterior: GPIO digital](02c-gpio-digital.md) · [Revisão do tópico 2 →](02-microcontroladores-gpio.md)

[← Voltar ao início](../README.md)
