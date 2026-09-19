# Microcontrolador, Arduino e seus elementos

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Microcontrolador](#microcontrolador)
- [CPU](#cpu)
- [Memória](#memória)
- [Periféricos](#periféricos)
- [Firmware](#firmware)
- [Arduino](#arduino)
- [Placa de desenvolvimento](#placa-de-desenvolvimento)

## Microcontrolador

Um **microcontrolador** é um circuito integrado programável que reúne processamento, memória e periféricos. Ele lê entradas, executa instruções e altera saídas.

Um circuito eletrônico fixo realiza a função definida por suas conexões. Um microcontrolador pode mudar de comportamento quando recebe outro programa, sem que todo o circuito precise ser reconstruído.

## CPU

A **CPU**, ou unidade central de processamento, busca, interpreta e executa as instruções do programa. Ela realiza cálculos, comparações e decisões e coordena os periféricos.

A frequência da CPU ajuda a determinar quantas operações podem ocorrer por segundo, mas não representa sozinha o desempenho total.

## Memória

**Memória** é o local onde programa e dados são armazenados. Em termos introdutórios:

- memória de programa conserva o firmware mesmo sem energia;
- RAM armazena variáveis temporárias durante a execução;
- alguns microcontroladores possuem memória não volátil adicional para dados.

RAM limitada pode causar falhas mesmo quando ainda existe espaço para o programa.

## Periféricos

**Periféricos** são blocos internos que ligam a CPU ao mundo externo. Exemplos incluem GPIO, temporizadores, ADC, PWM e controladores de I²C, SPI ou UART.

O software configura esses blocos, mas suas capacidades e limites pertencem ao hardware.

## Firmware

**Firmware** é o programa gravado no dispositivo para controlar seu funcionamento. Ele permanece armazenado quando a alimentação é removida e volta a executar após ligar ou reiniciar.

No contexto da aula, o sketch compilado e gravado na placa passa a fazer parte do firmware executado pelo microcontrolador.

## Arduino

**Arduino** é um ecossistema que reúne placas, ferramentas de programação, bibliotecas e uma comunidade educacional. Arduino não é apenas uma placa nem somente uma linguagem.

Placas Arduino podem usar microcontroladores diferentes. Por isso, pinagem, tensão, memória, resolução e recursos variam entre modelos.

## Placa de desenvolvimento

Uma **placa de desenvolvimento** monta o microcontrolador junto de circuitos que facilitam seu uso, como regulador, interface USB, botão de reset, oscilador e conectores.

O microcontrolador é o circuito integrado principal. A placa é o conjunto completo. Essa distinção explica por que duas placas com aparência semelhante podem possuir capacidades diferentes.

## Exemplo de funcionamento

1. O sensor envia um sinal a uma entrada.
2. Um periférico transforma ou registra esse sinal.
3. A CPU executa o firmware e toma uma decisão.
4. Uma saída comanda LED, buzzer ou circuito de potência.

## Verifique se entendeu

1. Por que um microcontrolador pode executar funções diferentes com o mesmo hardware?
2. Qual é a diferença entre memória de programa e RAM?
3. Cite três periféricos internos.
4. Qual é a diferença entre microcontrolador e placa de desenvolvimento?

[Próximo: IDE, USB e drivers →](02b-ide-usb-drivers.md)

[← Voltar ao início](../README.md)
