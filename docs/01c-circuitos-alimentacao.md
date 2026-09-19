# Circuitos em série e paralelo, GND, VCC e polaridade

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Circuito elétrico](#circuito-elétrico)
- [Ligação em série](#ligação-em-série)
- [Ligação em paralelo](#ligação-em-paralelo)
- [GND](#gnd)
- [VCC, 5 V e 3,3 V](#vcc-5-v-e-33-v)
- [Polaridade](#polaridade)

## Circuito elétrico

Um **circuito elétrico** é um conjunto de componentes conectados para formar caminhos de corrente e de sinais. Para existir corrente contínua, normalmente deve haver um caminho fechado entre os terminais da fonte.

Um interruptor aberto interrompe o caminho. Fechado, ele permite continuidade. Isso não significa que qualquer caminho fechado seja seguro: o circuito precisa conter uma carga adequada.

## Ligação em série

Componentes estão **em série** quando a mesma corrente percorre todos eles. As quedas de tensão se distribuem entre os componentes.

Um LED e seu resistor limitador ficam em série. O resistor pode estar antes ou depois do LED, pois a mesma corrente atravessa ambos.

## Ligação em paralelo

Componentes estão **em paralelo** quando seus terminais se conectam aos mesmos dois nós. Eles recebem a mesma tensão, enquanto a corrente total se divide entre os ramos.

Dois LEDs em paralelo devem ter resistores individuais. Pequenas diferenças entre os LEDs podem fazer um deles conduzir corrente excessiva quando ambos compartilham apenas um resistor.

## GND

**GND** é o ponto escolhido como referência de 0 V. As demais tensões são medidas em relação a ele. GND não significa obrigatoriamente terra físico nem é um lugar onde a energia “desaparece”.

Quando dois dispositivos trocam sinais elétricos, geralmente compartilham GND para concordarem sobre HIGH, LOW e valores analógicos. Sistemas com isolamento elétrico são uma exceção.

## VCC, 5 V e 3,3 V

**VCC** designa frequentemente uma linha positiva de alimentação. Pinos marcados 5 V e 3,3 V fornecem ou recebem tensões específicas, conforme a placa. Eles não são GPIOs e não devem ser unidos diretamente.

Alimentação fornece energia. GPIO transporta sinais e suporta apenas correntes pequenas. Essa diferença explica por que uma GPIO não deve alimentar um motor.

## Polaridade

**Polaridade** indica que os terminais têm orientação elétrica definida. Pilhas, LEDs, diodos, capacitores eletrolíticos e muitos módulos precisam ser conectados no sentido correto.

- LED: ânodo e cátodo não são equivalentes.
- Fonte DC: positivo e negativo não devem ser trocados.
- Módulo: inverter VCC e GND pode causar dano imediato.
- Resistor comum: não possui polaridade e pode ser instalado nos dois sentidos.

## Exemplo do caminho elétrico

```text
VCC → resistor → LED → GND
```

A fonte estabelece tensão entre VCC e GND. O resistor limita a corrente, o LED converte energia em luz e o caminho se fecha pelo GND.

## Verifique se entendeu

1. O que permanece igual em componentes ligados em série?
2. O que permanece igual nos ramos em paralelo?
3. Por que GND comum ajuda dois dispositivos a interpretar um sinal?
4. Quais componentes comuns possuem polaridade?

[← Anterior: grandezas](01b-grandezas-eletricas.md) · [Próximo: montagem segura →](01d-montagem-seguranca.md)

[← Voltar ao início](../README.md)
