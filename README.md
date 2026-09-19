# Fundamentos de Prototipagem e Fabricação Digital

Material de apoio para revisar os conceitos e as práticas introdutórias da formação. O conteúdo segue uma ordem progressiva: fundamentos físicos, microcontroladores, componentes, conexões e projetos.

> **Segurança:** confira sempre tensão, corrente, polaridade e pinagem. Nunca ligue motores ou outras cargas de corrente elevada diretamente a uma GPIO. Não aplique 5 V em uma entrada limitada a 3,3 V.

## Sumário

Cada **tópico principal** abre a visão geral do grupo, mostrando a relação entre seus conceitos e uma sequência de estudo. Os **subitens** levam diretamente aos conteúdos específicos.

### 1. [Fundamentos físicos](docs/01-fundamentos.md)

- [Energia, conservação, conversão e eficiência](docs/01a-energia-conversao.md)
  - [Energia](docs/01a-energia-conversao.md#energia)
  - [Conservação da energia](docs/01a-energia-conversao.md#conservação-da-energia)
  - [Conversão de energia](docs/01a-energia-conversao.md#conversão-de-energia)
  - [Eficiência](docs/01a-energia-conversao.md#eficiência)
- [Grandezas elétricas e Lei de Ohm](docs/01b-grandezas-eletricas.md)
  - [Tensão](docs/01b-grandezas-eletricas.md#tensão)
  - [Corrente](docs/01b-grandezas-eletricas.md#corrente)
  - [Resistência](docs/01b-grandezas-eletricas.md#resistência)
  - [Potência](docs/01b-grandezas-eletricas.md#potência)
  - [Lei de Ohm](docs/01b-grandezas-eletricas.md#lei-de-ohm)
- [Circuitos, alimentação e polaridade](docs/01c-circuitos-alimentacao.md)
  - [Circuito elétrico](docs/01c-circuitos-alimentacao.md#circuito-elétrico)
  - [Ligação em série](docs/01c-circuitos-alimentacao.md#ligação-em-série)
  - [Ligação em paralelo](docs/01c-circuitos-alimentacao.md#ligação-em-paralelo)
  - [GND](docs/01c-circuitos-alimentacao.md#gnd)
  - [VCC, 5 V e 3,3 V](docs/01c-circuitos-alimentacao.md#vcc-5-v-e-33-v)
  - [Polaridade](docs/01c-circuitos-alimentacao.md#polaridade)
- [Montagem e segurança](docs/01d-montagem-seguranca.md)
  - [Protoboard](docs/01d-montagem-seguranca.md#protoboard)
  - [Curto-circuito](docs/01d-montagem-seguranca.md#curto-circuito)
  - [ESD](docs/01d-montagem-seguranca.md#esd)
  - [Ruído elétrico](docs/01d-montagem-seguranca.md#ruído-elétrico)
  - [Bounce](docs/01d-montagem-seguranca.md#bounce)

### 2. [Microcontroladores, Arduino e GPIO](docs/02-microcontroladores-gpio.md)

- [Microcontrolador e Arduino](docs/02a-microcontrolador-arduino.md)
  - [Microcontrolador](docs/02a-microcontrolador-arduino.md#microcontrolador)
  - [CPU](docs/02a-microcontrolador-arduino.md#cpu)
  - [Memória](docs/02a-microcontrolador-arduino.md#memória)
  - [Periféricos](docs/02a-microcontrolador-arduino.md#periféricos)
  - [Firmware](docs/02a-microcontrolador-arduino.md#firmware)
  - [Arduino](docs/02a-microcontrolador-arduino.md#arduino)
  - [Placa de desenvolvimento](docs/02a-microcontrolador-arduino.md#placa-de-desenvolvimento)
- [Arduino IDE, USB, drivers e bibliotecas](docs/02b-ide-usb-drivers.md)
  - [Arduino IDE](docs/02b-ide-usb-drivers.md#arduino-ide)
  - [Sketch](docs/02b-ide-usb-drivers.md#sketch)
  - [Compilação](docs/02b-ide-usb-drivers.md#compilação)
  - [Upload](docs/02b-ide-usb-drivers.md#upload)
  - [Porta USB](docs/02b-ide-usb-drivers.md#porta-usb)
  - [Porta serial](docs/02b-ide-usb-drivers.md#porta-serial)
  - [Driver USB](docs/02b-ide-usb-drivers.md#driver-usb)
  - [Pacote de placa](docs/02b-ide-usb-drivers.md#pacote-de-placa)
  - [Biblioteca](docs/02b-ide-usb-drivers.md#biblioteca)
  - [Monitor Serial](docs/02b-ide-usb-drivers.md#monitor-serial)
- [GPIO e sinais digitais](docs/02c-gpio-digital.md)
  - [GPIO](docs/02c-gpio-digital.md#gpio)
  - [Entrada digital](docs/02c-gpio-digital.md#entrada-digital)
  - [Saída digital](docs/02c-gpio-digital.md#saída-digital)
  - [Nível lógico](docs/02c-gpio-digital.md#nível-lógico)
  - [HIGH e LOW](docs/02c-gpio-digital.md#high-e-low)
  - [Pull-up e pull-down](docs/02c-gpio-digital.md#pull-up-e-pull-down)
- [Sinais analógicos, PWM e comunicação](docs/02d-sinais-comunicacao.md)
  - [ADC e entrada analógica](docs/02d-sinais-comunicacao.md#adc-e-entrada-analógica)
  - [PWM](docs/02d-sinais-comunicacao.md#pwm)
  - [Duty cycle](docs/02d-sinais-comunicacao.md#duty-cycle)
  - [Frequência](docs/02d-sinais-comunicacao.md#frequência)
  - [I²C](docs/02d-sinais-comunicacao.md#i²c)
  - [SPI](docs/02d-sinais-comunicacao.md#spi)
  - [UART](docs/02d-sinais-comunicacao.md#uart)

### 3. [LED comum, LED RGB e resistores](docs/03-leds-resistores.md)

- [LED comum e polaridade](docs/03a-led-comum.md)
  - [LED](docs/03a-led-comum.md#led)
  - [Diodo](docs/03a-led-comum.md#diodo)
  - [Polaridade do LED](docs/03a-led-comum.md#polaridade-do-led)
  - [Ânodo](docs/03a-led-comum.md#ânodo)
  - [Cátodo](docs/03a-led-comum.md#cátodo)
- [Tensão, corrente e resistor do LED](docs/03b-resistor-led.md)
  - [Tensão direta](docs/03b-resistor-led.md#tensão-direta)
  - [Corrente do LED](docs/03b-resistor-led.md#corrente-do-led)
  - [Resistor limitador](docs/03b-resistor-led.md#resistor-limitador)
  - [Cálculo do resistor](docs/03b-resistor-led.md#cálculo-do-resistor)
  - [Valor comercial](docs/03b-resistor-led.md#valor-comercial)
  - [Potência do resistor](docs/03b-resistor-led.md#potência-do-resistor)
  - [Código de cores](docs/03b-resistor-led.md#código-de-cores)
  - [Tolerância](docs/03b-resistor-led.md#tolerância)
- [LED RGB e mistura de cores](docs/03c-led-rgb.md)
  - [LED RGB](docs/03c-led-rgb.md#led-rgb)
  - [Canal de cor](docs/03c-led-rgb.md#canal-de-cor)
  - [Mistura aditiva](docs/03c-led-rgb.md#mistura-aditiva-de-cores)
  - [Cátodo comum](docs/03c-led-rgb.md#cátodo-comum)
  - [Ânodo comum](docs/03c-led-rgb.md#ânodo-comum)
  - [Resistor por canal](docs/03c-led-rgb.md#resistor-por-canal)
- [Guia prático de ligação e programação](docs/03d-guia-pratico-led.md)
  - [Ligar LED comum](docs/03d-guia-pratico-led.md#ligação-do-led-comum)
  - [Piscar LED](docs/03d-guia-pratico-led.md#piscar-led)
  - [Controlar brilho com PWM](docs/03d-guia-pratico-led.md#controle-de-brilho-com-pwm)
  - [Ligar LED RGB](docs/03d-guia-pratico-led.md#ligação-do-led-rgb)
  - [Controlar cores](docs/03d-guia-pratico-led.md#controle-de-cor)

### 4. [Entradas, buzzer e programação em blocos](docs/04-entradas-buzzer-blocos.md)

- [Botões, interruptores e entradas digitais](docs/04a-botoes-entradas.md)
  - [Botão](docs/04a-botoes-entradas.md#botão)
  - [Interruptor](docs/04a-botoes-entradas.md#interruptor)
  - [Entrada flutuante](docs/04a-botoes-entradas.md#entrada-flutuante)
  - [Pull-up](docs/04a-botoes-entradas.md#pull-up)
  - [Pull-down](docs/04a-botoes-entradas.md#pull-down)
  - [Ruído](docs/04a-botoes-entradas.md#ruído)
  - [Bounce e debounce](docs/04a-botoes-entradas.md#bounce-e-debounce)
- [Divisor de tensão, potenciômetro e LDR](docs/04b-divisor-potenciometro-ldr.md)
  - [Divisor de tensão](docs/04b-divisor-potenciometro-ldr.md#divisor-de-tensão)
  - [Potenciômetro](docs/04b-divisor-potenciometro-ldr.md#potenciômetro)
  - [Cursor](docs/04b-divisor-potenciometro-ldr.md#cursor)
  - [LDR](docs/04b-divisor-potenciometro-ldr.md#ldr)
  - [Leitura analógica](docs/04b-divisor-potenciometro-ldr.md#leitura-analógica)
  - [Mapeamento](docs/04b-divisor-potenciometro-ldr.md#mapeamento)
- [Buzzer, frequência e produção de som](docs/04c-buzzer-som.md)
  - [Buzzer ativo](docs/04c-buzzer-som.md#buzzer-ativo)
  - [Buzzer passivo](docs/04c-buzzer-som.md#buzzer-passivo)
  - [Frequência e período](docs/04c-buzzer-som.md#frequência-e-período)
  - [Tom e nota](docs/04c-buzzer-som.md#tom-e-nota)
  - [Ligação e proteção](docs/04c-buzzer-som.md#ligação-e-proteção)
- [Programação em blocos e código](docs/04d-blocos-codigo.md)
  - [Sequência](docs/04d-blocos-codigo.md#sequência)
  - [Variável](docs/04d-blocos-codigo.md#variável)
  - [Condição](docs/04d-blocos-codigo.md#condição)
  - [Repetição](docs/04d-blocos-codigo.md#repetição)
  - [Temporização](docs/04d-blocos-codigo.md#temporização)
  - [Mapeamento entre blocos e código](docs/04d-blocos-codigo.md#mapa-de-blocos-para-código)

### 5. [Módulos, sensores e atuadores](docs/05-modulos.md)

- [Módulos, pinagem e interfaces de potência](docs/05a-modulos-transistores.md)
  - [Módulo](docs/05a-modulos-transistores.md#módulo)
  - [Datasheet e pinagem](docs/05a-modulos-transistores.md#datasheet-e-pinagem)
  - [Nível lógico](docs/05a-modulos-transistores.md#nível-lógico)
  - [Driver de potência](docs/05a-modulos-transistores.md#driver-de-potência)
  - [Transistor NPN](docs/05a-modulos-transistores.md#transistor-npn)
  - [Transistor PNP](docs/05a-modulos-transistores.md#transistor-pnp)
  - [Diodo de roda livre](docs/05a-modulos-transistores.md#diodo-de-roda-livre)
- [Sensores ultrassônico e PIR](docs/05b-sensores.md)
  - [Sensor ultrassônico](docs/05b-sensores.md#sensor-ultrassônico)
  - [TRIG](docs/05b-sensores.md#trig)
  - [ECHO](docs/05b-sensores.md#echo)
  - [Tempo de voo](docs/05b-sensores.md#tempo-de-voo)
  - [Sensor PIR](docs/05b-sensores.md#sensor-pir)
  - [Detecção de presença](docs/05b-sensores.md#detecção-de-presença)
- [Motor DC, ponte H e servomotor](docs/05c-motores-servo.md)
  - [Motor DC](docs/05c-motores-servo.md#motor-dc)
  - [Corrente de partida e travamento](docs/05c-motores-servo.md#corrente-de-partida-e-travamento)
  - [Ponte H](docs/05c-motores-servo.md#ponte-h)
  - [Direção e velocidade](docs/05c-motores-servo.md#direção-e-velocidade)
  - [Servomotor](docs/05c-motores-servo.md#servomotor)
  - [Fonte externa e GND comum](docs/05c-motores-servo.md#fonte-externa-e-gnd-comum)
- [Display LCD e conversor LM2596](docs/05d-lcd-lm2596.md)
  - [Display LCD](docs/05d-lcd-lm2596.md#display-lcd)
  - [Interface I²C](docs/05d-lcd-lm2596.md#interface-i²c)
  - [Endereço I²C](docs/05d-lcd-lm2596.md#endereço-i²c)
  - [Contraste e backlight](docs/05d-lcd-lm2596.md#contraste-e-backlight)
  - [LM2596](docs/05d-lcd-lm2596.md#lm2596)
  - [Step-down](docs/05d-lcd-lm2596.md#step-down)
  - [Trimpot](docs/05d-lcd-lm2596.md#trimpot)
  - [Ajuste com multímetro](docs/05d-lcd-lm2596.md#ajuste-com-multímetro)

### 6. [Revisão geral e aprofundamento](docs/06-revisao.md)

- [Respostas comentadas das perguntas do slide](docs/06a-respostas-slide.md)
  - [Conversão de energia](docs/06a-respostas-slide.md#conversão-de-energia)
  - [Conexão segura](docs/06a-respostas-slide.md#conexão-segura)
  - [Sensores e módulos](docs/06a-respostas-slide.md#sensores-e-módulos)
  - [Microcontrolador e GPIO](docs/06a-respostas-slide.md#microcontrolador-e-gpio)
  - [Entrada, saída e PWM](docs/06a-respostas-slide.md#entrada-saída-e-pwm)
- [Exercícios, respostas e diagnóstico](docs/06b-exercicios-diagnostico.md)
  - [Exercícios de fundamentos](docs/06b-exercicios-diagnostico.md#exercícios-de-fundamentos)
  - [Exercícios de conexão](docs/06b-exercicios-diagnostico.md#exercícios-de-conexão)
  - [Gabarito comentado](docs/06b-exercicios-diagnostico.md#gabarito-comentado)
  - [Método de diagnóstico](docs/06b-exercicios-diagnostico.md#método-de-diagnóstico)
- [Roteiro de aprofundamento](docs/06c-aprofundamento.md)
  - [Medição elétrica](docs/06c-aprofundamento.md#medição-elétrica)
  - [Eletrônica de potência](docs/06c-aprofundamento.md#eletrônica-de-potência)
  - [Sinais e comunicação](docs/06c-aprofundamento.md#sinais-e-comunicação)
  - [Programação](docs/06c-aprofundamento.md#programação)
  - [Como aprender um componente novo](docs/06c-aprofundamento.md#como-aprender-um-componente-novo)
- [PictoBlox, Tinkercad e documentação](docs/06d-pictoblox-tinkercad.md)
  - [Documentação do PictoBlox](docs/06d-pictoblox-tinkercad.md#documentação-do-pictoblox)
  - [Stage Mode e Upload Mode](docs/06d-pictoblox-tinkercad.md#stage-mode-e-upload-mode)
  - [Arduino no PictoBlox](docs/06d-pictoblox-tinkercad.md#arduino-no-pictoblox)
  - [Tinkercad Circuits](docs/06d-pictoblox-tinkercad.md#tinkercad-circuits)
  - [Blocos, texto e simulação](docs/06d-pictoblox-tinkercad.md#blocos-texto-e-simulação)
  - [Limites do simulador](docs/06d-pictoblox-tinkercad.md#limites-do-simulador)

## Sumário de projetos

| Projeto | O que será praticado | Material de apoio |
|---|---|---|
| Pisca-LED | Saída digital, polaridade e temporização | [Abrir projeto](docs/03d-guia-pratico-led.md#piscar-led) |
| Controle de brilho | LED, resistor e PWM | [Abrir projeto](docs/03d-guia-pratico-led.md#controle-de-brilho-com-pwm) |
| Misturador de cores RGB | Três canais PWM e mistura aditiva | [Abrir projeto](docs/03c-led-rgb.md) |
| Botão para controlar LED | Entrada digital, pull-up e condição | [Material necessário](docs/04a-botoes-entradas.md) |
| Controle com potenciômetro | Divisor de tensão, ADC e mapeamento | [Material necessário](docs/04b-divisor-potenciometro-ldr.md) |
| Luz automática com LDR | Leitura analógica e decisão | [Material necessário](docs/04b-divisor-potenciometro-ldr.md#ldr) |
| Alarme sonoro | Buzzer, frequência e temporização | [Material necessário](docs/04c-buzzer-som.md) |
| Medidor de distância | TRIG, ECHO e tempo de voo | [Material necessário](docs/05b-sensores.md#sensor-ultrassônico) |
| Detector de movimento | PIR e entrada digital | [Material necessário](docs/05b-sensores.md#sensor-pir) |
| Controle de servomotor | Pulso de controle, ângulo e alimentação | [Material necessário](docs/05c-motores-servo.md#servomotor) |
| Controle de motor DC | Ponte H, direção, PWM e fonte externa | [Material necessário](docs/05c-motores-servo.md#motor-dc) |
| Fonte ajustável | LM2596 e medição com multímetro | [Material necessário](docs/05d-lcd-lm2596.md#lm2596) |
| Acionamento de carga | Transistor e driver de potência | [Material necessário](docs/05a-modulos-transistores.md#transistor-npn) |

## Dicas fundamentais

Antes de conectar qualquer componente ou módulo, responda:

- O que desejo medir ou controlar?
- Qual tensão alimenta o componente e quanta corrente ele consome?
- Qual é a função de cada terminal?
- A GPIO será entrada, saída ou terá função especial?
- O sinal é digital, analógico, PWM, I²C, SPI ou UART?
- Preciso de resistor, divisor, transistor, driver, diodo ou fonte externa?
- Os dispositivos precisam compartilhar GND?
- Qual bloco representa a ação e qual código ele gera?

Durante a montagem:

- desligue a alimentação antes de alterar conexões;
- confira polaridade e pinagem no datasheet;
- teste uma parte do circuito por vez;
- não deixe entradas digitais flutuando;
- interrompa o teste diante de aquecimento, cheiro ou comportamento anormal;
- registre as ligações e os valores usados para conseguir reproduzir o projeto.
