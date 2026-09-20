# Revisão de LEDs e resistores

[← Voltar ao início](../README.md)

Este arquivo reúne a sequência de estudo do tópico 3. Use o índice do README para abrir diretamente qualquer conceito.

## Ordem recomendada

1. [LED comum, diodo, ânodo, cátodo e polaridade](03a-led-comum.md)
2. [Tensão direta, corrente e dimensionamento do resistor](03b-resistor-led.md)
3. [LED RGB e mistura de cores](03c-led-rgb.md)
4. [LED comum](03d-guia-pratico-led.md)
5. [Semáforo](03e-semaforo.md)
6. [LED RGB](03g-cores-definidas.md)

## Como os conceitos se relacionam

O LED conduz corrente em uma direção e converte parte da energia elétrica em luz. A fonte aplica tensão ao conjunto formado pelo LED e pelo resistor. O resistor recebe a tensão restante e limita a corrente. No LED RGB, três canais compartilham um terminal, mas cada canal precisa de seu próprio resistor e controle.

O projeto [Semáforo](03e-semaforo.md) usa três LEDs separados para aplicar saída digital, estados ordenados e temporização. O bônus mantém a montagem nos pinos PWM e permite comparar liga/desliga com intensidade intermediária.

## Questões de revisão

1. Qual é a diferença entre ânodo e cátodo?
2. Por que o LED precisa de resistor em série?
3. O que significa tensão direta?
4. Por que se escolhe normalmente um valor comercial acima do calculado?
5. Como verificar se o resistor suporta a potência dissipada?
6. Por que cada canal de um LED RGB deve ter resistor próprio?
7. Qual é a diferença entre RGB de ânodo comum e de cátodo comum?
8. Como o PWM altera o brilho percebido?

[← Voltar ao início](../README.md)
