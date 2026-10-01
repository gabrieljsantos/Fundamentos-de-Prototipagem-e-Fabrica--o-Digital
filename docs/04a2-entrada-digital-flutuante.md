# Entrada digital e entrada flutuante

[← Voltar ao início](../README.md)

## HIGH e LOW

O Arduino não “lê o botão” diretamente. Ele mede a tensão presente no pino de entrada:

| Tensão no pino | Estado lido |
| --- | --- |
| Próxima de 5 V | `HIGH` |
| Próxima de 0 V, ligada ao GND | `LOW` |

O circuito deve definir um desses estados quando o botão está pressionado e também quando está solto.

## Entrada flutuante

Uma **entrada flutuante** não está firmemente ligada a 5 V nem ao GND. Como a entrada consome corrente mínima, ruído elétrico, cabos longos e até a aproximação da mão podem alterar a leitura.

**Aberto não é o mesmo que LOW.** Quando um botão aberto deixa o pino sem referência, o programa pode alternar entre `HIGH` e `LOW` sem um comando real.

Uma chave SPDT pode selecionar diretamente entre 5 V e GND. Um push button oferece apenas os estados aberto e fechado; por isso, normalmente precisa de pull-up ou pull-down para definir o estado aberto.

## Estado de repouso

Um circuito confiável define os dois momentos:

- o estado produzido quando o botão está acionado;
- o estado de repouso produzido quando ele está solto.

O projeto [Botão controla LED](04a-botoes-entradas.md) mostra uma chave que seleciona `HIGH` ou `LOW` e duas maneiras de manter um push button fora do estado flutuante.

## Verifique se entendeu

1. Por que um botão aberto não garante uma leitura `LOW`?
2. O que significa dizer que uma entrada está flutuante?
3. Quais tensões representam `HIGH` e `LOW` no exemplo com Arduino Uno?

[← Botões e interruptores](04a1-botoes-interruptores.md) · [Próximo: pull-up e pull-down →](04a3-pull-up-pull-down.md)
