# Roteiro de aprofundamento

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Medição elétrica](#medição-elétrica)
- [Eletrônica de potência](#eletrônica-de-potência)
- [Sinais e comunicação](#sinais-e-comunicação)
- [Programação](#programação)
- [Como aprender um componente novo](#como-aprender-um-componente-novo)

## Medição elétrica

Estude o uso correto do multímetro para tensão, corrente, resistência, continuidade e teste de diodo. Depois avance para leis de Kirchhoff, análise de divisores, potência e tolerâncias.

Nunca meça corrente colocando o multímetro diretamente em paralelo com a fonte. Entenda o borne e a escala antes de medir.

## Eletrônica de potência

Estude transistor BJT, MOSFET, saturação, resistores de base e gate, diodo de roda livre, relé, driver, dissipação térmica e dimensionamento de fonte.

O objetivo é compreender como um sinal lógico controla energia maior sem ultrapassar a GPIO.

## Sinais e comunicação

Aprofunde frequência, período, duty cycle, ADC, resolução, referência, filtragem, amostragem, UART, I²C e SPI. Compare velocidade, quantidade de fios, endereçamento e distância adequada.

## Programação

Avance por variáveis, tipos, operadores, condições, laços, funções, arrays, temporização com `millis()`, máquinas de estados, bibliotecas, depuração e organização em módulos.

Aprenda a separar leitura de entradas, decisão e atualização de saídas.

## Como aprender um componente novo

1. Identifique o código exato.
2. Localize datasheet e documentação confiável.
3. Anote função, pinagem, alimentação e limites.
4. Classifique cada terminal como alimentação, entrada, saída ou comunicação.
5. Verifique níveis lógicos e corrente.
6. Desenhe o caminho da energia e o caminho da informação.
7. Monte um teste mínimo.
8. Relacione cada bloco às instruções de código.
9. Teste falhas previsíveis e registre o resultado.
10. Só depois integre ao projeto completo.

## Critério de domínio

Você compreendeu um componente quando consegue explicar sua função, justificar cada fio, prever a faixa das leituras, indicar os limites perigosos e reproduzir o teste em blocos ou código.

[← Anterior: exercícios](06b-exercicios-diagnostico.md) · [Próximo: PictoBlox e Tinkercad →](06d-pictoblox-tinkercad.md)

[← Voltar ao início](../README.md)
