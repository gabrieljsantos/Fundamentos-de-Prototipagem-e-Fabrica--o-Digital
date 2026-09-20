# Programação em blocos e código

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Sequência](#sequência)
- [Estados e sequenciamento](#estados-e-sequenciamento)
- [Variável](#variável)
- [Condição](#condição)
- [Repetição](#repetição)
- [Temporização](#temporização)
- [Mapa de blocos para código](#mapa-de-blocos-para-código)

## Sequência

Uma **sequência** é a ordem em que as instruções executam. Ler o sensor antes de testar seu valor é diferente de testar uma variável antiga e só depois atualizar a leitura.

## Estados e sequenciamento

Um **estado** reúne as saídas que devem permanecer ativas durante uma etapa do funcionamento. Um semáforo simples pode ser descrito por três estados ordenados: vermelho, verde e amarelo. Em cada estado, o programa define explicitamente os três LEDs e mantém essa combinação durante um intervalo.

O **sequenciamento** determina qual estado vem depois do outro. Quando a última etapa termina, o `loop()` reinicia o ciclo. Projetos maiores podem guardar o estado atual em uma variável e usar `millis()` para trocar de fase sem bloquear outras tarefas.

O projeto [Semáforo](03e-semaforo.md) aplica estados, sequência e temporização primeiro com `delay()` e depois apresenta controle de brilho por PWM.

## Variável

Uma **variável** guarda um valor com nome. Pode armazenar leitura, estado, tempo ou resultado de cálculo.

```cpp
int distancia = 20;
bool ligado = true;
```

## Condição

Uma **condição** escolhe ações conforme uma expressão verdadeira ou falsa.

```cpp
if (distancia < 20) {
  digitalWrite(led, HIGH);
} else {
  digitalWrite(led, LOW);
}
```

Corresponde aos blocos “se” e “senão”.

## Repetição

Uma **repetição** executa instruções mais de uma vez. O `loop()` já repete continuamente no Arduino. Blocos “repita N vezes” e “enquanto” correspondem a estruturas como `for` e `while`.

## Temporização

**Temporização** controla quando uma ação ocorre. `delay()` pausa o programa inteiro; é simples para introdução, mas pode impedir outras tarefas. `millis()` permite verificar tempo sem interromper toda a execução.

## Mapa de blocos para código

| Bloco comum | Código ou estrutura |
|---|---|
| ao iniciar | `setup()` |
| sempre | `loop()` |
| definir variável | declaração ou atribuição |
| se / senão | `if / else` |
| repetir N vezes | `for` |
| enquanto | `while` |
| aguardar | `delay()` |
| ler pino digital | `digitalRead()` |
| ler pino analógico | `analogRead()` |
| definir saída | `digitalWrite()` |
| definir PWM | `analogWrite()` ou função equivalente |
| mapear valor | `map()` ou cálculo proporcional |
| tocar tom | `tone()` |

Os nomes e o código gerado variam entre Tinkercad, mBlock e outras plataformas. Compare a intenção do bloco, não apenas o texto.

## Exemplo integrado

```cpp
int leitura = analogRead(A0);
int brilho = map(leitura, 0, 1023, 0, 255);

if (brilho > 128) {
  tone(8, 440);
} else {
  noTone(8);
}
```

## Verifique se entendeu

1. Por que a ordem das instruções importa?
2. Qual é a função de uma variável?
3. Qual é a limitação de `delay()`?

[← Anterior: buzzer](04c-buzzer-som.md) · [Revisão do tópico 4 →](04-entradas-buzzer-blocos.md)

[← Voltar ao início](../README.md)
