# Pull-up e pull-down

[← Voltar ao início](../README.md)

## Pull-down

Um **resistor pull-down** liga fracamente a entrada ao GND. Com o botão solto, o resistor estabelece `LOW`. Quando o botão conecta a entrada aos 5 V, a leitura muda para `HIGH`.

Um valor de **10 kΩ** é comum em experiências introdutórias. Ele mantém a entrada definida e limita a corrente quando o botão é pressionado. Nesse momento, há aproximadamente `5 V / 10 kΩ = 0,5 mA` pelo resistor.

O resistor de pull-down não substitui o resistor do LED: o pull-down define o estado da entrada; o resistor em série limita a corrente do LED.

## Pull-up

Um **resistor pull-up** liga fracamente a entrada aos 5 V. Com o botão solto, a leitura é `HIGH`; quando o botão conecta a entrada ao GND, a leitura muda para `LOW`.

No Arduino Uno, o pull-up interno pode ser ativado por programa:

```cpp
pinMode(2, INPUT_PULLUP);
bool pressionado = digitalRead(2) == LOW;
```

Essa lógica é chamada de **ativa em LOW**: pressionado significa `LOW`.

## Dois circuitos equivalentes

| Montagem | Repouso | Pressionado | Configuração |
| --- | --- | --- | --- |
| Botão para 5 V + resistor de 10 kΩ para GND | `LOW` | `HIGH` | `INPUT` |
| Botão para GND + pull-up interno | `HIGH` | `LOW` | `INPUT_PULLUP` |

Nenhuma das duas montagens deixa o pino sem referência. O projeto [Botão controla LED](04a-botoes-entradas.md) permite comparar as duas soluções.

## Ponte para o divisor de tensão

Pull-up e pull-down antecipam a ideia de um [divisor de tensão](04b-divisor-potenciometro-ldr.md): resistências ligadas entre 5 V e GND determinam a tensão observada no ponto central. Essa relação prepara o estudo do potenciômetro e do LDR.

## Verifique se entendeu

1. Qual estado o pull-down produz com o botão solto?
2. Por que pressionado significa `LOW` com `INPUT_PULLUP`?
3. Por que o resistor de 10 kΩ não substitui o resistor do LED?

[← Entrada digital](04a2-entrada-digital-flutuante.md) · [Próximo: ruído e debounce →](04a4-ruido-bounce-debounce.md)
