# LED comum, diodo, polaridade, ânodo e cátodo

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [LED](#led)
- [Diodo](#diodo)
- [Polaridade do LED](#polaridade-do-led)
- [Ânodo](#ânodo)
- [Cátodo](#cátodo)
- [Identificação dos terminais](#identificação-dos-terminais)

## LED

**LED** significa diodo emissor de luz. É um componente semicondutor que emite luz quando conduz corrente no sentido correto. Parte da energia elétrica também se transforma em calor.

A cor depende do material semicondutor e influencia a tensão de funcionamento. Cor, brilho e corrente não devem ser determinados apenas pela aparência; consulte a documentação quando o modelo for conhecido.

## Diodo

Um **diodo** é um componente que conduz corrente principalmente em um sentido. Um LED é um tipo de diodo desenvolvido para emitir luz.

Essa característica torna a orientação importante. Em polarização direta, o LED pode conduzir e acender. Em polarização reversa, normalmente não acende e pode sofrer dano se a tensão reversa ultrapassar seu limite.

## Polaridade do LED

A **polaridade do LED** é a orientação correta entre seus terminais e a fonte. Em uma ligação convencional, o ânodo fica voltado para o potencial mais alto e o cátodo para o potencial mais baixo.

```text
GPIO ou VCC ── resistor ── ânodo → LED → cátodo ── GND
```

O resistor pode ficar antes ou depois do LED, desde que permaneça em série.

## Ânodo

O **ânodo** é o terminal por onde a corrente convencional entra no LED quando ele está conduzindo. Em muitos LEDs novos de dois terminais, a perna mais longa indica o ânodo.

Essa regra visual ajuda, mas não substitui datasheet, símbolo, marcação da placa ou teste adequado.

## Cátodo

O **cátodo** é o terminal por onde a corrente convencional sai do LED em condução. Em muitos encapsulamentos, a perna curta e a face achatada indicam o cátodo.

No símbolo elétrico do diodo, a barra marca o lado do cátodo.

## Identificação dos terminais

Use, nesta ordem, as informações mais confiáveis disponíveis:

1. datasheet do modelo;
2. marcações na placa ou no encapsulamento;
3. símbolo do circuito;
4. perna longa, perna curta e face achatada;
5. modo de teste de diodo do multímetro, com corrente limitada.

## Verifique se entendeu

1. Por que um LED é chamado de diodo?
2. O que pode acontecer com polaridade invertida?
3. Qual terminal a barra do símbolo identifica?

[Próximo: resistor do LED →](03b-resistor-led.md)

[← Voltar ao início](../README.md)
