# Tensão, corrente e resistor do LED

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Tensão direta](#tensão-direta)
- [Corrente do LED](#corrente-do-led)
- [Resistor limitador](#resistor-limitador)
- [Cálculo do resistor](#cálculo-do-resistor)
- [Valor comercial](#valor-comercial)
- [Potência do resistor](#potência-do-resistor)
- [Código de cores](#código-de-cores)
- [Tolerância](#tolerância)

## Tensão direta

A **tensão direta**, indicada frequentemente por `Vf`, é a queda de tensão aproximada no LED quando ele conduz determinada corrente. Ela varia com cor, modelo, corrente e temperatura.

Não trate `Vf` como um valor universal. Use o datasheet; em atividade introdutória, use o valor fornecido no exercício.

## Corrente do LED

A **corrente do LED** determina seu funcionamento e influencia o brilho. Ultrapassar o limite pode reduzir a vida útil ou causar dano. A corrente escolhida também deve respeitar o limite da GPIO.

Mais corrente não deve ser usada automaticamente como sinônimo de “melhor brilho”. Muitos LEDs modernos já ficam visíveis com poucos miliamperes.

## Resistor limitador

O **resistor limitador** fica em série com o LED e controla a corrente. Sem ele, uma pequena variação de tensão pode provocar grande aumento de corrente.

O resistor recebe a diferença entre a tensão da fonte e a tensão direta do LED.

## Cálculo do resistor

```text
R = (Vfonte − Vf_LED) / I_LED
```

Exemplo com 5 V, `Vf = 2 V` e corrente desejada de 10 mA:

```text
10 mA = 0,010 A
R = (5 − 2) / 0,010 = 300 Ω
```

Se `Vfonte` não for maior que `Vf`, esse cálculo simples não representa uma ligação funcional. Se o LED for controlado por GPIO, use a tensão real do nível HIGH e respeite os limites da porta.

## Valor comercial

**Valor comercial** é um valor padronizado fabricado e vendido. Quando o cálculo resulta em 300 Ω e esse valor não está disponível, escolher 330 Ω reduz um pouco a corrente e oferece margem de segurança.

Não substitua por um valor menor sem recalcular corrente, potência e limites.

## Potência do resistor

A **potência do resistor** é a energia por segundo que ele dissipa como calor. Calcule:

```text
P = I² × R
```

Para 10 mA e 330 Ω:

```text
P = 0,010² × 330 = 0,033 W
```

Um resistor de 1/4 W suporta nominalmente 0,25 W e oferece folga nesse exemplo. Condições térmicas e especificações do fabricante continuam relevantes.

## Código de cores

No resistor de quatro faixas, as duas primeiras representam dígitos, a terceira é o multiplicador e a quarta é a tolerância.

| Cor | Dígito | Multiplicador | Tolerância comum |
|---|---:|---:|---:|
| Preto | 0 | ×1 | — |
| Marrom | 1 | ×10 | ±1% |
| Vermelho | 2 | ×100 | ±2% |
| Laranja | 3 | ×1 k | — |
| Amarelo | 4 | ×10 k | — |
| Verde | 5 | ×100 k | ±0,5% |
| Azul | 6 | ×1 M | ±0,25% |
| Violeta | 7 | ×10 M | ±0,1% |
| Cinza | 8 | ×100 M | ±0,05% |
| Branco | 9 | ×1 G | — |
| Dourado | — | ×0,1 | ±5% |
| Prateado | — | ×0,01 | ±10% |

Laranja, laranja, marrom e dourado representam `33 × 10 = 330 Ω ±5%`.

## Tolerância

A **tolerância** informa quanto o valor real pode variar ao redor do nominal. Um resistor de 330 Ω ±5% pode apresentar valor dentro da faixa definida por essa porcentagem.

Use multímetro quando o valor real for importante ou quando houver dúvida na leitura das cores.

## Verifique se entendeu

1. Calcule o resistor para 3,3 V, LED de 2 V e 8 mA.
2. Por que normalmente escolhemos um valor comercial acima?
3. O que representa a última faixa de um resistor de quatro faixas?

[← Anterior: LED comum](03a-led-comum.md) · [Próximo: LED RGB →](03c-led-rgb.md)

[← Voltar ao início](../README.md)
