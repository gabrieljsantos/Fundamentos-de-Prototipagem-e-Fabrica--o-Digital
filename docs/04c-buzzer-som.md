# Buzzer, frequência e produção de som

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Buzzer ativo](#buzzer-ativo)
- [Buzzer passivo](#buzzer-passivo)
- [Frequência e período](#frequência-e-período)
- [Tom e nota](#tom-e-nota)
- [Ligação e proteção](#ligação-e-proteção)

## Buzzer ativo

Um **buzzer ativo** possui oscilador interno. Quando recebe a alimentação correta, produz um tom predeterminado. O programa normalmente apenas liga e desliga.

## Buzzer passivo

Um **buzzer passivo** não possui oscilador completo e precisa receber pulsos. A frequência dos pulsos determina a altura do som, permitindo produzir notas diferentes.

Um teste contínuo em DC pode produzir apenas um clique em um buzzer passivo.

## Frequência e período

**Frequência** é a quantidade de ciclos por segundo, medida em hertz. **Período** é a duração de um ciclo:

```text
T = 1 / f
```

Aumentar a frequência tende a produzir som mais agudo; diminuir, som mais grave.

## Tom e nota

Um **tom** é um sinal sonoro associado a determinada frequência. Uma **nota musical** corresponde a uma frequência dentro de um sistema de afinação; por exemplo, Lá pode ser representado por 440 Hz.

```cpp
tone(8, 440);
delay(500);
noTone(8);
```

Em blocos, use “tocar tom no pino com frequência”, “aguardar” e “parar tom”. Frequência e duração são controles diferentes.

## Ligação e proteção

Confira tipo, polaridade, tensão e corrente. Um buzzer pequeno pode ser acionado diretamente somente se ficar dentro dos limites da GPIO. Para corrente maior, use transistor, resistor de base ou gate e fonte apropriada.

Se o dispositivo for eletromagnético e indutivo, verifique a necessidade de diodo de proteção. Buzzers piezoelétricos e magnéticos não devem ser tratados como componentes idênticos.

## Verifique se entendeu

1. Por que um buzzer ativo não precisa receber uma frequência musical?
2. O que ocorre ao dobrar a frequência de um buzzer passivo?
3. Quando é necessário usar transistor?

[← Anterior: divisor e sensores](04b-divisor-potenciometro-ldr.md) · [Próximo: blocos e código →](04d-blocos-codigo.md)

[← Voltar ao início](../README.md)
