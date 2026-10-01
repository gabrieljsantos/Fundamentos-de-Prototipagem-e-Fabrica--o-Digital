# Circuitos em série e paralelo, GND, VCC e polaridade

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Circuito elétrico](#circuito-elétrico)
- [Ligação em série](#ligação-em-série)
- [Pilhas em série](#pilhas-em-série)
- [Ligação em paralelo](#ligação-em-paralelo)
- [Pilhas em paralelo](#pilhas-em-paralelo)
- [GND](#gnd)
- [GND comum entre ESP32 e ponte H](#gnd-comum-entre-esp32-e-ponte-h)
- [VCC, 5 V e 3,3 V](#vcc-5-v-e-33-v)
- [Polaridade](#polaridade)

## Circuito elétrico

Um **circuito elétrico** é um conjunto de componentes conectados para formar caminhos de corrente e de sinais. Para existir corrente contínua, normalmente deve haver um caminho fechado entre os terminais da fonte.

Um interruptor aberto interrompe o caminho. Fechado, ele permite continuidade. Isso não significa que qualquer caminho fechado seja seguro: o circuito precisa conter uma carga adequada.

## Ligação em série

Componentes estão **em série** quando a mesma corrente percorre todos eles. As quedas de tensão se distribuem entre os componentes.

Um LED e seu resistor limitador ficam em série. O resistor pode estar antes ou depois do LED, pois a mesma corrente atravessa ambos.

## Pilhas em série

Em uma associação de pilhas em série, liga-se o positivo de uma ao negativo da seguinte. As tensões se somam, mas a capacidade em ampère-hora não se soma da mesma forma. Seis pilhas alcalinas de `1,5 V` em série fornecem aproximadamente `9 V`; seis pilhas NiMH de `1,2 V`, aproximadamente `7,2 V`.

Todas as pilhas do conjunto devem possuir a mesma química, capacidade e estado de carga. Uma unidade invertida, descarregada ou diferente limita o conjunto e pode aquecer ou vazar.

## Ligação em paralelo

Componentes estão **em paralelo** quando seus terminais se conectam aos mesmos dois nós. Eles recebem a mesma tensão, enquanto a corrente total se divide entre os ramos.

Dois LEDs em paralelo devem ter resistores individuais. Pequenas diferenças entre os LEDs podem fazer um deles conduzir corrente excessiva quando ambos compartilham apenas um resistor.

## Pilhas em paralelo

Em paralelo, os polos positivos são ligados entre si e os negativos também. A tensão permanece igual à de uma pilha ou bateria, enquanto a capacidade e a corrente disponível podem aumentar. Duas baterias de `9 V` em paralelo continuam fornecendo aproximadamente `9 V`; elas não formam `18 V`.

Fontes conectadas diretamente em paralelo podem trocar corrente entre si quando suas tensões são diferentes. Por isso, não improvise o paralelo com baterias de marcas, químicas, capacidades, idades ou cargas diferentes. Para alimentar um ESP32 com maior corrente, prefira uma fonte dimensionada corretamente ou um suporte projetado para células iguais em paralelo e com a proteção apropriada. Uma bateria retangular de 9 V descarregada ou inadequada não se torna uma boa fonte apenas pela adição improvisada de outra bateria.

## GND

**GND** é o ponto escolhido como referência de 0 V. As demais tensões são medidas em relação a ele. GND não significa obrigatoriamente terra físico nem é um lugar onde a energia “desaparece”.

Quando dois dispositivos trocam sinais elétricos, geralmente compartilham GND para concordarem sobre HIGH, LOW e valores analógicos. Sistemas com isolamento elétrico são uma exceção.

## GND comum entre ESP32 e ponte H

O ESP32 envia níveis HIGH e LOW para as entradas da ponte H. Para interpretar esses níveis, os dois módulos precisam usar a mesma referência de `0 V`; por isso, um `GND` do ESP32 deve ser ligado ao `GND` da ponte H, mesmo quando motores e ESP32 usam fontes positivas diferentes.

Sem esse GND comum, as entradas da ponte H ficam sem uma referência confiável para os sinais do ESP32. Os motores podem não responder, responder de forma intermitente, girar apenas em alguns comandos ou apresentar comportamento imprevisível. A conexão de GND comum fornece referência aos sinais; ela não une as linhas positivas das duas fontes.

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
