# Respostas comentadas das perguntas do slide

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Conversão de energia](#conversão-de-energia)
- [Conexão segura](#conexão-segura)
- [Sensores e módulos](#sensores-e-módulos)
- [Microcontrolador e GPIO](#microcontrolador-e-gpio)
- [Entrada, saída e PWM](#entrada-saída-e-pwm)

## Conversão de energia

**Pergunta:** quais são as principais conversões em um motor e em um LED?

**Resposta: A.** O motor converte energia elétrica principalmente em mecânica; o LED converte energia elétrica principalmente em luminosa. Ambos também dissipam calor.

## Conexão segura

**Pergunta:** o que verificar antes de conectar componente, fonte ou saída?

**Resposta: C.** Verifique tensão fornecida, capacidade de corrente, tensão e corrente suportadas pelo componente e necessidade de resistor ou circuito de interface. Programação não altera limites elétricos.

**Pergunta:** qual combinação permite ajuste manual do brilho e liga/desliga?

**Resposta: A.** No modelo conceitual, o potenciômetro varia o ajuste e o interruptor abre ou fecha o circuito. Em projeto com microcontrolador, é mais eficiente ler o potenciômetro no ADC e controlar o LED por PWM.

## Sensores e módulos

**Pergunta:** o que perguntar antes de escolher um sensor?

**Resposta: C.** Defina grandeza, faixa, precisão e velocidade. Depois estude instalação, alimentação, programação e interpretação.

**Pergunta:** qual sequência usar antes de trabalhar com módulo?

**Resposta: C.** Identifique a função, conexões, configuração no programa, alimentação e proteção.

**Pergunta:** por que não basta conectar fios e iniciar o programa?

**Resposta: B.** É preciso conhecer função, pinagem, alimentação, níveis lógicos, configuração e proteção.

## Microcontrolador e GPIO

**Pergunta:** o que diferencia um microcontrolador de um circuito fixo?

**Resposta: C.** Ele executa um programa e pode realizar sequências e decisões diferentes com o mesmo hardware.

**Pergunta:** o que diferencia uma GPIO?

**Resposta: C.** É uma porta de propósito geral configurável dentro das funções permitidas pelo hardware.

## Entrada, saída e PWM

**Pergunta:** como configurar a GPIO que controla liga/desliga?

**Resposta: C.** Como saída digital.

**Pergunta:** como configurar a GPIO que lê um interruptor?

**Resposta: B.** Como entrada digital, com pull-up ou pull-down.

**Pergunta:** qual recurso permite variar brilho?

**Resposta: D.** PWM, alterando o ciclo de trabalho.

**Pergunta:** o que acontece ao aumentar o valor PWM?

**Resposta: C.** Em lógica não invertida, aumenta a proporção de tempo ativo e a resposta média da carga. O sinal continua digital.

**Pergunta:** como classificar distância, interruptor e LED?

**Resposta: C, com uma ressalva.** Interruptor é entrada e LED é saída. Um ultrassônico típico usa saída para TRIG e entrada para ECHO; o módulo não se resume a uma única entrada.

[Próximo: exercícios e diagnóstico →](06b-exercicios-diagnostico.md)

[← Voltar ao início](../README.md)
