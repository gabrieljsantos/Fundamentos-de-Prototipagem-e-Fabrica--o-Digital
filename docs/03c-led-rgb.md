# LED RGB e mistura de cores

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [LED RGB](#led-rgb)
- [Canal de cor](#canal-de-cor)
- [Mistura aditiva de cores](#mistura-aditiva-de-cores)
- [Cátodo comum](#cátodo-comum)
- [Ânodo comum](#ânodo-comum)
- [Resistor por canal](#resistor-por-canal)

## LED RGB

Um **LED RGB** reúne três LEDs no mesmo encapsulamento: vermelho, verde e azul. Cada cor possui um terminal de controle, enquanto o quarto terminal é compartilhado.

Controlar as três intensidades permite produzir várias cores. O componente continua obedecendo aos limites de corrente, tensão e potência de cada canal.

## Canal de cor

Um **canal de cor** é um dos LEDs internos. Vermelho, verde e azul podem ter tensões diretas diferentes, por isso devem ser analisados separadamente.

Cada canal é ligado a uma saída, de preferência com PWM quando se deseja variar a intensidade.

## Mistura aditiva de cores

A **mistura aditiva** combina luz emitida:

| Vermelho | Verde | Azul | Cor aproximada |
|---:|---:|---:|---|
| ligado | desligado | desligado | vermelho |
| desligado | ligado | desligado | verde |
| desligado | desligado | ligado | azul |
| ligado | ligado | desligado | amarelo |
| ligado | desligado | ligado | magenta |
| desligado | ligado | ligado | ciano |
| ligado | ligado | ligado | branco aproximado |

O branco e as demais cores dependem do equilíbrio entre intensidades e das características do LED.

## Cátodo comum

No LED RGB de **cátodo comum**, os três cátodos compartilham um terminal ligado ao GND. Cada canal acende quando seu ânodo recebe nível positivo por meio de resistor.

Em uma faixa PWM convencional, valor maior costuma produzir mais brilho.

## Ânodo comum

No LED RGB de **ânodo comum**, os três ânodos compartilham um terminal ligado ao VCC. Cada canal acende quando sua saída conduz em direção ao GND.

A lógica fica invertida: LOW tende a acender e HIGH tende a apagar. No Uno clássico, uma conversão comum é escrever `255 − intensidade`.

## Resistor por canal

Cada canal precisa de **resistor próprio**. Um único resistor no terminal comum permite que as correntes interfiram e não controla corretamente cada cor.

Calcule cada resistor com a tensão direta e a corrente desejada daquele canal:

```text
Rcor = (Vsaída − Vf_cor) / I_cor
```

Os três resistores podem resultar em valores diferentes.

## Identificação do tipo

Não confie apenas no tamanho das pernas. Consulte datasheet, embalagem ou teste com multímetro e corrente limitada. Descobrir o terminal comum não informa automaticamente a ordem dos canais.

O projeto [LED RGB](03g-cores-definidas.md) aplica os três canais em cores definidas, transições suaves e sequências com tempo.

## Verifique se entendeu

1. Por que um RGB possui quatro terminais?
2. Qual é a diferença de lógica entre ânodo comum e cátodo comum?
3. Por que cada canal precisa de resistor próprio?

[← Anterior: resistor do LED](03b-resistor-led.md) · [Próximo: guia prático →](03d-guia-pratico-led.md)

[← Voltar ao início](../README.md)
