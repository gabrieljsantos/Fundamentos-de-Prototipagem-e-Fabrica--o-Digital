# Divisor de tensão, potenciômetro e LDR

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Divisor de tensão](#divisor-de-tensão)
- [Potenciômetro](#potenciômetro)
- [Cursor](#cursor)
- [LDR](#ldr)
- [Leitura analógica](#leitura-analógica)
- [Mapeamento](#mapeamento)

## Divisor de tensão

Um **divisor de tensão** usa dois resistores em série para produzir uma fração da tensão de entrada:

```text
Vin ── R1 ──┬── Vout
            R2
             │
            GND

Vout = Vin × R2 / (R1 + R2)
```

Com 5 V, R1 de 10 kΩ e R2 de 20 kΩ, a saída ideal é aproximadamente 3,33 V. Um divisor é apropriado para sinais de pequena corrente. A carga conectada à saída altera o resultado, por isso ele não substitui regulador para alimentar motores ou módulos.

## Potenciômetro

Um **potenciômetro** contém uma pista resistiva e três terminais. A resistência total entre as extremidades costuma ser fixa; a posição mecânica altera a divisão produzida pelo terminal central.

Para leitura, ligue as extremidades a VCC e GND e o terminal central ao ADC, respeitando a tensão máxima da entrada.

## Cursor

O **cursor** é o contato móvel ligado ao terminal central do potenciômetro. Ele percorre a pista resistiva e fornece uma fração variável da tensão.

Se VCC e GND forem trocados nas extremidades, o potenciômetro continua funcionando, mas o sentido de aumento da leitura se inverte.

## LDR

Um **LDR**, ou fotoresistor, altera sua resistência conforme a luz. O ADC não mede resistência diretamente, então o LDR é combinado com um resistor fixo em um divisor.

A posição do LDR no divisor define se a tensão medida cresce ou diminui com a luminosidade. O valor também depende do modelo e das condições, por isso limiares devem ser calibrados.

## Leitura analógica

A **leitura analógica** converte a tensão do ADC em um número:

```cpp
int leitura = analogRead(A0);
```

A faixa numérica e a tensão de referência dependem da placa. No Uno clássico, é comum encontrar 0 a 1023; no ESP32, resolução e configuração podem mudar.

## Mapeamento

**Mapeamento** converte uma faixa numérica em outra. Por exemplo, uma leitura de 0 a 1023 pode controlar PWM de 0 a 255:

```cpp
int leitura = analogRead(A0);
int brilho = map(leitura, 0, 1023, 0, 255);
analogWrite(9, brilho);
```

`map()` não limita valores automaticamente nem cria precisão adicional. Confira as faixas reais.

## Verifique se entendeu

1. Por que a carga altera a saída de um divisor?
2. Qual terminal do potenciômetro fornece o sinal variável?
3. Por que o LDR precisa de outro resistor?

[← Anterior: botões](04a-botoes-entradas.md) · [Próximo: buzzer →](04c-buzzer-som.md)

[← Voltar ao início](../README.md)
