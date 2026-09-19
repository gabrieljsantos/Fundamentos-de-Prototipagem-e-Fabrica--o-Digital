# PictoBlox, Tinkercad e documentação

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Documentação do PictoBlox](#documentação-do-pictoblox)
- [Stage Mode e Upload Mode](#stage-mode-e-upload-mode)
- [Arduino no PictoBlox](#arduino-no-pictoblox)
- [Tinkercad Circuits](#tinkercad-circuits)
- [Blocos, texto e simulação](#blocos-texto-e-simulação)
- [Limites do simulador](#limites-do-simulador)
- [Links de estudo](#links-de-estudo)

## Documentação do PictoBlox

O **PictoBlox** é um ambiente educacional que oferece programação em blocos e Python, além de extensões para placas e componentes. Na interface em blocos, um script é formado por blocos encaixados em uma sequência.

A documentação oficial deve ser o primeiro lugar para conferir instalação, compatibilidade, nomes atuais dos menus, placas suportadas e comportamento dos blocos:

- [Documentação oficial do PictoBlox](https://ai.thestempedia.com/docs/pictoblox/)
- [Introdução ao PictoBlox e à interface](https://ai.thestempedia.com/docs/pictoblox/pictoblox-tutorials/getting-started-with-pictoblox/)
- [Extensão do Arduino Uno e seus blocos](https://ai.thestempedia.com/extension/arduino-uno-extension-pictoblox/)
- [Solução de problemas do PictoBlox](https://ai.thestempedia.com/docs/pictoblox/troubleshooting-guide-for-pictoblox/)

## Stage Mode e Upload Mode

No **Stage Mode**, o PictoBlox interage com a placa em tempo real. A placa precisa permanecer conectada ao computador, e algumas placas precisam receber firmware de comunicação.

No **Upload Mode**, os blocos são convertidos e gravados na placa. Depois do upload, a placa pode executar o programa sem continuar conectada ao PictoBlox, desde que receba alimentação.

| Necessidade | Modo indicado |
|---|---|
| Interagir com personagens e palco em tempo real | Stage Mode |
| Observar rapidamente sensores no computador | Stage Mode |
| Fazer robô ou circuito funcionar sozinho | Upload Mode |
| Comparar blocos com o código C++ equivalente | Upload Mode, quando a interface oferecer a visualização |

## Arduino no PictoBlox

Fluxo geral, sujeito à versão e à placa:

1. Instale ou abra o PictoBlox.
2. Escolha o ambiente de blocos.
3. Selecione a placa correta.
4. Conecte a placa por um cabo USB com dados.
5. Escolha a porta serial.
6. Adicione a extensão necessária.
7. Escolha Stage Mode ou Upload Mode.
8. Monte o script e teste.

No Upload Mode, um bloco inicial como “quando Arduino iniciar” corresponde ao começo da execução. Blocos de repetição representam laços; blocos de pino digital representam configuração, leitura ou escrita.

Consulte o tutorial oficial de [Arduino Uno com PictoBlox e pisca-LED](https://ai.thestempedia.com/docs/pictoblox/arduino-uno-with-pictoblox/program-arduino-board-with-pictoblox/).

## Tinkercad Circuits

O **Tinkercad Circuits** permite montar circuitos virtuais, inserir Arduino e protoboard, programar e iniciar uma simulação. Ele é útil para observar conexões e testar uma ideia antes da montagem física.

Comece em:

- [Área de aprendizagem do Tinkercad](https://www.tinkercad.com/learn)
- [Guia oficial de introdução ao Tinkercad Circuits](https://images.tinkercad.com/jl5ii4oqrdmc/1eTWASZYKjnMX9u5ioLh8Y/bb2dfb24cfc4bd66adc485baaecedf97/Tinkercad_Getting_Started_Guide_ISTE.pdf)
- [Visão geral oficial de circuitos da Autodesk](https://www.autodesk.com/solutions/circuit-design-software)

Fluxo geral:

1. Abra a área de circuitos e crie um circuito.
2. Posicione Arduino, protoboard e componentes.
3. Configure valores e faça as conexões.
4. Abra o editor de código.
5. Escolha blocos, blocos com texto ou texto, conforme disponível.
6. Inicie a simulação.
7. Observe o comportamento e pare a simulação antes de alterar o circuito.

## Blocos, texto e simulação

Blocos e código textual representam os mesmos elementos fundamentais:

| Intenção | Bloco comum | Código Arduino |
|---|---|---|
| iniciar configuração | quando iniciar | `setup()` |
| repetir continuamente | sempre | `loop()` |
| preparar pino | definir pino como entrada/saída | `pinMode()` |
| comandar saída | definir pino ALTO/BAIXO | `digitalWrite()` |
| ler entrada | ler pino digital | `digitalRead()` |
| ler ADC | ler entrada analógica | `analogRead()` |
| decidir | se / senão | `if / else` |
| esperar | aguardar | `delay()` |

Não memorize somente o nome do bloco. Identifique a intenção, as entradas do bloco, o valor produzido e a instrução equivalente.

## Limites do simulador

Uma simulação ajuda a verificar lógica e conexões, mas não garante que a montagem real funcionará. Ela pode simplificar:

- tolerâncias e variação entre componentes;
- ruído e mau contato;
- aquecimento e dissipação;
- corrente de partida de motores;
- limites reais da fonte e dos fios;
- componentes ou bibliotecas não disponíveis;
- diferenças entre modelos semelhantes.

Depois da simulação, consulte o datasheet, recalcule proteção e teste a montagem real por etapas.

## Links de estudo

### PictoBlox

- [Página principal da documentação](https://ai.thestempedia.com/docs/pictoblox/)
- [Primeiro script](https://ai.thestempedia.com/docs/pictoblox/pictoblox-tutorials/getting-started-with-pictoblox/)
- [Arduino Uno no PictoBlox](https://ai.thestempedia.com/docs/pictoblox/arduino-uno-with-pictoblox/program-arduino-board-with-pictoblox/)
- [Sensores com Arduino no PictoBlox](https://ai.thestempedia.com/docs/pictoblox/arduino-uno-with-pictoblox/interface-sensors-with-arduino-using-pictoblox/)
- [Catálogo de extensões](https://ai.thestempedia.com/extension/)

### Tinkercad

- [Aprender Tinkercad](https://www.tinkercad.com/learn)
- [Guia introdutório de circuitos](https://images.tinkercad.com/jl5ii4oqrdmc/1eTWASZYKjnMX9u5ioLh8Y/bb2dfb24cfc4bd66adc485baaecedf97/Tinkercad_Getting_Started_Guide_ISTE.pdf)
- [Circuitos na Autodesk](https://www.autodesk.com/solutions/circuit-design-software)

[← Anterior: aprofundamento](06c-aprofundamento.md) · [Revisão do tópico 6 →](06-revisao.md)

[← Voltar ao início](../README.md)
