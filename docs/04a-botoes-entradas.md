# Botões, interruptores e entradas digitais

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Botão](#botão)
- [Interruptor](#interruptor)
- [Entrada flutuante](#entrada-flutuante)
- [Pull-up](#pull-up)
- [Pull-down](#pull-down)
- [Ruído](#ruído)
- [Bounce e debounce](#bounce-e-debounce)

## Botão

Um **botão** é um contato momentâneo: muda de estado enquanto está pressionado e retorna ao ser solto. O microcontrolador não “lê o botão” diretamente; ele lê a tensão produzida pelo circuito ligado ao botão.

## Interruptor

Um **interruptor** abre ou fecha um caminho e normalmente mantém a posição. Para o programa, botão e interruptor podem ser entradas digitais, mas seu comportamento mecânico e a lógica desejada são diferentes.

## Entrada flutuante

Uma **entrada flutuante** não está firmemente ligada a HIGH nem a LOW. Como uma entrada consome corrente mínima, interferências podem alterar sua tensão e produzir leituras imprevisíveis.

## Pull-up

Um **resistor pull-up** conecta fracamente a entrada ao VCC e define HIGH como estado de repouso. O botão pode conectar a entrada ao GND quando pressionado.

```cpp
pinMode(2, INPUT_PULLUP);
bool pressionado = digitalRead(2) == LOW;
```

Nesse circuito, solto significa HIGH e pressionado significa LOW.

## Pull-down

Um **resistor pull-down** conecta fracamente a entrada ao GND e define LOW como repouso. O botão conecta a entrada ao VCC ao ser pressionado. Algumas placas oferecem pull-down interno; outras exigem resistor externo.

O resistor impede estado flutuante. Ele também evita que o acionamento una VCC e GND diretamente quando o circuito está montado corretamente.

## Ruído

**Ruído** é uma variação indesejada no sinal. Cabos longos, motores, fontes chaveadas, GND ruim e entradas flutuantes podem causar falsos acionamentos.

Fios curtos, conexões firmes, pull-up/pull-down e filtragem adequada ajudam. A solução depende da origem do ruído.

## Bounce e debounce

**Bounce** é o repique mecânico do contato: durante alguns instantes, um único toque pode produzir várias transições. **Debounce** é o tratamento usado para aceitar apenas uma mudança válida.

```cpp
if (digitalRead(2) == LOW) {
  delay(20); // exemplo introdutório; projetos maiores preferem lógica sem bloqueio
  if (digitalRead(2) == LOW) {
    // toque confirmado
  }
}
```

## Verifique se entendeu

1. Por que pressionado equivale a LOW com `INPUT_PULLUP`?
2. Qual é a diferença entre botão e interruptor?
3. Por que debounce e combate a ruído não são exatamente a mesma coisa?

[Próximo: divisor e sensores resistivos →](04b-divisor-potenciometro-ldr.md)

[← Voltar ao início](../README.md)
