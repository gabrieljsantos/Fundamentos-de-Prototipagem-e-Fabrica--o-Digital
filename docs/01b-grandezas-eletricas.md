# Tensão, corrente, resistência, potência e Lei de Ohm

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Tensão](#tensão)
- [Corrente](#corrente)
- [Resistência](#resistência)
- [Potência](#potência)
- [Lei de Ohm](#lei-de-ohm)

## Palavra-chave e conceito

### Tensão

**Tensão elétrica** é a diferença de potencial entre dois pontos. Ela indica a capacidade de produzir movimento de cargas em um caminho elétrico. Sua unidade é o volt (V).

Uma tensão sempre precisa de referência. Um pino em 5 V geralmente está 5 V acima do GND do circuito.

### Corrente

**Corrente elétrica** é o fluxo ordenado de cargas. Sua unidade é o ampere (A). Em eletrônica, usamos muito o miliampere: `1 mA = 0,001 A`.

A corrente máxima escrita em uma fonte informa quanto ela consegue fornecer dentro de determinadas condições. Isso não significa que a fonte forçará toda essa corrente através de qualquer componente.

### Resistência

**Resistência elétrica** é a oposição à corrente. Sua unidade é o ohm (Ω). Resistores limitam corrente, definem estados lógicos e formam divisores de tensão.

Quando a tensão permanece igual, aumentar a resistência reduz a corrente. Por isso um resistor em série protege o LED e a GPIO.

### Potência

**Potência elétrica** indica a rapidez da transferência ou conversão de energia. Sua unidade é o watt (W).

Um resistor pode ter o valor correto em ohms e queimar se dissipar mais potência que sua especificação permite.

### Lei de Ohm

A **Lei de Ohm** relaciona tensão, corrente e resistência:

```text
V = R × I
I = V / R
R = V / I
```

Ela não diz que todo componente possui resistência constante. LEDs, motores e transistores têm comportamentos mais complexos, embora a lei continue útil para analisar os resistores do circuito.

### Relações de potência

```text
P = V × I
P = I² × R
P = V² / R
```

## Exemplo completo

Um resistor de 330 Ω recebe 3 V:

```text
I = 3 / 330 = 0,00909 A ≈ 9,1 mA
P = 3 × 0,00909 ≈ 0,027 W
```

Um resistor de 1/4 W, que corresponde a 0,25 W, atende com folga a esse exemplo.

## Verifique se entendeu

1. Por que a tensão não existe de forma isolada em um único ponto?
2. Se a resistência dobrar e a tensão permanecer igual, o que ocorre com a corrente?
3. Por que o valor em ohms não é a única especificação de um resistor?

[← Anterior: energia](01a-energia-conversao.md) · [Próximo: circuitos →](01c-circuitos-alimentacao.md)

[← Voltar ao início](../README.md)
