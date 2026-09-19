# Sensores ultrassônico e PIR

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Sensor ultrassônico](#sensor-ultrassônico)
- [TRIG](#trig)
- [ECHO](#echo)
- [Tempo de voo](#tempo-de-voo)
- [Sensor PIR](#sensor-pir)
- [Detecção de presença](#detecção-de-presença)

## Sensor ultrassônico

Um **sensor ultrassônico** de distância emite som acima da faixa audível e mede o tempo até o eco retornar. O HC-SR04 é um exemplo comum, mas tensão e pinagem devem ser confirmadas no modelo usado.

Superfícies pequenas, macias ou inclinadas podem produzir leituras ruins. Temperatura também altera a velocidade do som.

## TRIG

**TRIG** é a entrada do módulo usada para solicitar uma medição. Do ponto de vista do microcontrolador, o pino ligado a TRIG funciona como saída.

No HC-SR04, usa-se normalmente um pulso curto conforme a documentação.

## ECHO

**ECHO** é a saída do módulo que permanece ativa durante um tempo relacionado ao percurso do som. Do ponto de vista do microcontrolador, o pino ligado a ECHO é entrada.

Em certos módulos alimentados com 5 V, ECHO também chega a 5 V. Uma placa de 3,3 V pode exigir divisor ou conversor de nível.

## Tempo de voo

**Tempo de voo** é o intervalo entre emissão e retorno. Como o som percorre ida e volta:

```text
distância = velocidade do som × tempo / 2
```

```cpp
digitalWrite(trig, LOW);  delayMicroseconds(2);
digitalWrite(trig, HIGH); delayMicroseconds(10);
digitalWrite(trig, LOW);
long tempo = pulseIn(echo, HIGH);
float distanciaCm = tempo * 0.0343 / 2.0;
```

## Sensor PIR

Um **sensor PIR** detecta mudanças de radiação infravermelha no campo de visão. Movimento de corpos quentes pode alterar o sinal. O módulo normalmente fornece uma saída digital.

Alguns possuem trimpots de sensibilidade e duração e precisam de tempo de estabilização.

## Detecção de presença

**Detecção de presença** no PIR significa identificar uma mudança compatível com movimento, não reconhecer pessoa nem medir distância. Um objeto parado pode deixar de ser detectado mesmo permanecendo na área.

Posição, direção do movimento, fontes de calor e ambiente influenciam o resultado.

## Verifique se entendeu

1. Por que a distância é dividida por dois?
2. TRIG e ECHO correspondem a quais direções de sinal?
3. Por que um PIR não substitui um ultrassônico?

[← Anterior: módulos e transistores](05a-modulos-transistores.md) · [Próximo: motores →](05c-motores-servo.md)

[← Voltar ao início](../README.md)
