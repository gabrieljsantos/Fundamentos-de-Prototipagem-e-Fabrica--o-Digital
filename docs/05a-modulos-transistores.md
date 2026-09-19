# Módulos, pinagem e interfaces de potência

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Módulo](#módulo)
- [Datasheet e pinagem](#datasheet-e-pinagem)
- [Nível lógico](#nível-lógico)
- [Driver de potência](#driver-de-potência)
- [Transistor NPN](#transistor-npn)
- [Transistor PNP](#transistor-pnp)
- [Diodo de roda livre](#diodo-de-roda-livre)

## Módulo

Um **módulo** é uma placa que reúne um componente principal e circuitos auxiliares para executar uma função. Um módulo de sensor pode incluir regulador, resistores e comparador; um módulo de motor pode incluir driver e conectores.

O módulo simplifica a montagem, mas não elimina a necessidade de conhecer alimentação, sinais, limites e código.

## Datasheet e pinagem

O **datasheet** descreve características e limites. A **pinagem** associa cada terminal à sua função. Confira o código exato do módulo, pois placas visualmente parecidas podem trocar a ordem dos pinos.

Antes de usar, responda: o que mede ou controla, como alimenta, quais pinos são sinais, qual interface usa, quais níveis aceita e que proteção exige.

## Nível lógico

O **nível lógico** é a faixa de tensão reconhecida como LOW ou HIGH. Um módulo pode ser alimentado com 5 V e ainda usar sinais de 3,3 V, ou pode enviar 5 V a uma placa que não tolera esse valor. Alimentação compatível não garante sinais compatíveis.

## Driver de potência

Um **driver de potência** recebe sinais de controle e fornece tensão ou corrente adequada à carga. Ponte H, driver de LED e driver de relé são exemplos.

Driver USB é software do computador; driver de potência é circuito eletrônico.

## Transistor NPN

Um **transistor NPN** possui base, coletor e emissor. Como chave no lado do GND, uma corrente pequena de base permite controlar corrente maior na carga:

```text
VCC ── carga ── coletor
                 NPN
GPIO ─ resistor ─ base
GND ─────────── emissor
```

HIGH tende a ligar. O resistor de base limita corrente. Calcule o circuito conforme corrente da carga e ganho forçado adequado; não suponha que qualquer NPN serve para qualquer motor.

## Transistor PNP

Um **transistor PNP** costuma atuar no lado positivo, entre VCC e a carga. Ele conduz quando a base fica suficientemente abaixo do emissor, portanto a lógica tende a ser invertida.

Uma GPIO de 3,3 V pode não desligar diretamente um PNP com emissor em 5 V. Outro estágio ou driver pode ser necessário. NPN e PNP não são trocados apenas invertendo a peça.

## Diodo de roda livre

O **diodo de roda livre** fornece caminho para a corrente de uma carga indutiva quando ela é desligada, reduzindo o pico de tensão que poderia danificar o transistor ou a placa. É comum em bobinas, relés e motores controlados por um único transistor.

A orientação do diodo é importante. Em pontes H, a proteção pode já existir no driver; consulte o datasheet.

## Verifique se entendeu

1. Por que alimentação e nível lógico são verificações separadas?
2. Qual é a função do resistor de base?
3. Por que cargas indutivas geram preocupação ao desligar?

[Próximo: sensores →](05b-sensores.md)

[← Voltar ao início](../README.md)
