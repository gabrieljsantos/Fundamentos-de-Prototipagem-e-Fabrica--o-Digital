# Botões e interruptores

[← Voltar ao início](../README.md)

## Push button

Um **push button** é um contato momentâneo: muda de estado enquanto está pressionado e retorna ao ser solto. Ele é indicado quando a ação deve durar apenas durante o toque ou quando o programa deve registrar um acionamento.

## Interruptor de gangorra

Um **interruptor de gangorra** mantém a posição escolhida. No modelo SPDT de três terminais, o terminal central é o comum e se conecta a um dos dois terminais laterais, conforme a posição da chave.

Por isso, uma gangorra SPDT pode selecionar entre dois caminhos, como 5 V e GND. O terminal central nunca deve ser confundido com uma entrada fixa de alimentação: ele é o contato comum que muda de conexão.

## Diferença prática

| Componente | Comportamento mecânico | Uso típico |
| --- | --- | --- |
| Push button | retorna ao ser solto | toque, comando momentâneo e contagem |
| Gangorra | mantém a posição | seleção estável entre ligado/desligado ou dois caminhos |

O projeto [Botão controla LED](04a-botoes-entradas.md) aplica os dois componentes em controles diretos e em entradas do Arduino.

## Verifique se entendeu

1. Por que o push button é chamado de momentâneo?
2. Qual terminal de uma chave SPDT alterna entre os dois contatos laterais?
3. Em que situação uma gangorra é mais adequada que um push button?

[Próximo: entrada digital e entrada flutuante →](04a2-entrada-digital-flutuante.md)
