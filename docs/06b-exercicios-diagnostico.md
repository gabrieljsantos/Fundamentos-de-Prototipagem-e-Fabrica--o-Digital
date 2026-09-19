# Exercícios, respostas e diagnóstico

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Exercícios de fundamentos](#exercícios-de-fundamentos)
- [Exercícios de conexão](#exercícios-de-conexão)
- [Gabarito comentado](#gabarito-comentado)
- [Método de diagnóstico](#método-de-diagnóstico)

## Exercícios de fundamentos

1. Diferencie energia, potência, tensão e corrente.
2. Calcule a corrente em um resistor de 1 kΩ submetido a 5 V.
3. Calcule o resistor de um LED com fonte de 5 V, `Vf = 2,1 V` e corrente desejada de 8 mA.
4. Explique por que dois LEDs em paralelo devem ter resistores individuais.
5. Explique a diferença entre PWM e uma tensão analógica contínua.

## Exercícios de conexão

1. Uma entrada limitada a 3,3 V pode receber diretamente um ECHO de 5 V?
2. Em `INPUT_PULLUP`, qual estado representa botão pressionado?
3. Por que um motor precisa de driver mesmo quando o código usa somente HIGH e LOW?
4. Por que uma fonte externa e a placa costumam compartilhar GND?
5. Um LCD acende o backlight, mas não mostra texto. Quais verificações devem ser feitas?
6. Por que o LM2596 deve ser ajustado antes de conectar uma placa?

## Gabarito comentado

1. Fundamentos: energia é capacidade de produzir mudanças; potência é energia por tempo; tensão é diferença de potencial; corrente é fluxo de cargas.
2. `I = 5/1000 = 0,005 A = 5 mA`.
3. `R = (5 − 2,1)/0,008 = 362,5 Ω`. Use valor comercial acima, como 390 Ω, e confira potência.
4. As tensões diretas variam. Sem resistores individuais, uma corrente maior pode se concentrar em um LED.
5. PWM alterna níveis digitais e muda o tempo ativo; saída analógica contínua assume valores intermediários de tensão.
6. Uma entrada de 3,3 V só pode receber 5 V se a documentação declarar tolerância. Caso contrário, use adaptação.
7. Em `INPUT_PULLUP`, pressionado normalmente é LOW.
8. A GPIO não suporta a corrente nem os picos indutivos do motor.
9. O GND comum fornece referência compartilhada para os sinais.
10. Confira contraste, endereço I²C, inicialização, fios, alimentação e pinos SDA/SCL.
11. A saída pode estar acima do limite da carga e causar dano imediato.

## Método de diagnóstico

### 1. Alimentação

Meça tensão, confira polaridade, capacidade da fonte e GND. Observe aquecimento e queda de tensão quando a carga atua.

### 2. Conexão

Compare fio por fio com a pinagem. Confirme fileiras da protoboard, continuidade e ausência de curtos.

### 3. Componente

Teste cada parte em um circuito mínimo conhecido. Confirme modelo, limites e funcionamento esperado.

### 4. Programa

Confira placa, porta, pinos, modos INPUT/OUTPUT, faixas numéricas e lógica invertida. Use Monitor Serial para observar estados.

### 5. Integração

Adicione um componente por vez. Se o circuito para de funcionar, investigue a última alteração antes de modificar várias coisas ao mesmo tempo.

[← Anterior: respostas do slide](06a-respostas-slide.md) · [Próximo: aprofundamento →](06c-aprofundamento.md)

[← Voltar ao início](../README.md)
