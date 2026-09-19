# Motor DC, ponte H e servomotor

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Motor DC](#motor-dc)
- [Corrente de partida e travamento](#corrente-de-partida-e-travamento)
- [Ponte H](#ponte-h)
- [Direção e velocidade](#direção-e-velocidade)
- [Servomotor](#servomotor)
- [Fonte externa e GND comum](#fonte-externa-e-gnd-comum)

## Motor DC

Um **motor DC** converte energia elétrica em movimento de rotação. Inverter a polaridade aplicada pode inverter o sentido. Como é uma carga indutiva e consome corrente elevada, não deve ser ligado diretamente à GPIO.

## Corrente de partida e travamento

A **corrente de partida** surge quando o motor começa a girar. A **corrente de travamento** ocorre quando o eixo não consegue girar e costuma ser muito maior que a corrente em movimento livre.

Fonte, fios e driver devem suportar os picos previstos. Dimensionar apenas pela corrente sem carga pode causar queda de tensão, aquecimento e reinicialização.

## Ponte H

Uma **ponte H** é um arranjo de chaves eletrônicas que permite aplicar tensão ao motor nos dois sentidos. Módulos podem usar L9110S, TB6612FNG, L298N ou outros drivers, com pinagens e limites distintos.

Uma ponte H também pode frear ou deixar o motor livre, conforme as combinações aceitas. Nunca presuma a tabela lógica sem consultar o driver.

## Direção e velocidade

Entradas digitais definem a **direção**; PWM em uma entrada de habilitação ou controle ajusta a potência média e, aproximadamente, a velocidade.

```cpp
digitalWrite(in1, HIGH);
digitalWrite(in2, LOW);
analogWrite(enable, velocidade);
```

PWM não garante controle preciso de rotação sob cargas variáveis. Controle fechado exige medição de velocidade e realimentação.

## Servomotor

Um **servomotor** de posição reúne motor, engrenagens, sensor e controlador. Ele recebe pulsos periódicos cuja largura representa uma posição desejada.

```cpp
#include <Servo.h>
Servo servo;
void setup() { servo.attach(9); }
void loop() { servo.write(90); }
```

O bloco correspondente costuma ser “definir servo no pino para ângulo”. Nem todo servo cobre exatamente 0° a 180°; respeite limites mecânicos.

## Fonte externa e GND comum

Uma **fonte externa** fornece a corrente que a USB ou o regulador da placa talvez não suporte. Quando placa e driver trocam sinais sem isolamento, normalmente compartilham GND.

Unir GND não significa unir saídas positivas. Confira tensão do motor ou servo, capacidade de corrente, polaridade e forma segura de alimentar a placa simultaneamente.

## Verifique se entendeu

1. Por que a corrente de travamento importa?
2. Qual é a função da ponte H?
3. Por que PWM não garante velocidade constante?
4. Por que fonte externa e placa normalmente compartilham GND?

[← Anterior: sensores](05b-sensores.md) · [Próximo: LCD e LM2596 →](05d-lcd-lm2596.md)

[← Voltar ao início](../README.md)
