# Arduino IDE, USB, drivers e bibliotecas

[← Voltar ao início](../README.md)

## Conceitos

- [Arduino IDE](#arduino-ide)
- [Como instalar a Arduino IDE](#como-instalar-a-arduino-ide)
- [Como configurar a placa ESP32-WROOM](#como-configurar-a-placa-esp32-wroom)
- [Drivers USB do ESP32](#drivers-usb-do-esp32)
- [Como encontrar a porta no Windows](#como-encontrar-a-porta-no-windows)
- [Sketch](#sketch)
- [Compilação](#compilação)
- [Upload](#upload)
- [Porta USB](#porta-usb)
- [Porta serial](#porta-serial)
- [Driver USB](#driver-usb)
- [Pacote de placa](#pacote-de-placa)
- [Biblioteca](#biblioteca)
- [Monitor Serial](#monitor-serial)

## Arduino IDE

A **Arduino IDE** é o ambiente usado para editar o programa, verificar erros, compilar, carregar o código na placa, instalar suporte a placas e bibliotecas e acessar a comunicação serial. No menu **Ferramentas**, normalmente são escolhidos a placa, a porta, o programador e opções como frequência, partição e velocidade de upload.

Na IDE 2, a barra lateral reúne o editor, o gerenciador de placas, o gerenciador de bibliotecas, o Monitor Serial e o Serial Plotter. A IDE 1.x oferece as mesmas funções em menus diferentes. O importante é conferir a versão da IDE e seguir a documentação da placa instalada.

## Como instalar a Arduino IDE

1. Acesse a página oficial de software do Arduino: [arduino.cc/en/software](https://www.arduino.cc/en/software).
2. Baixe a versão da Arduino IDE correspondente ao seu sistema operacional. No Windows, escolha o instalador adequado à arquitetura do computador.
3. Execute o instalador e acompanhe as etapas apresentadas. Permita a instalação dos componentes do Arduino quando o Windows solicitar.
4. Abra a Arduino IDE depois da instalação.
5. Conecte a placa usando um cabo USB com transmissão de dados. Cabos destinados somente a carregamento podem acender a placa sem criar uma porta de comunicação.

## Como configurar a placa ESP32-WROOM

O texto `ESP32-WROOM-32` normalmente identifica o módulo instalado sobre a placa de desenvolvimento, e não necessariamente o nome exato da DevKit. Quando a placa possuir uma identificação própria, use o modelo correspondente. Para uma DevKit genérica com ESP32-WROOM-32, use **ESP32 Dev Module**.

1. Abra **Arquivo → Preferências** na Arduino IDE.
2. Em **URLs adicionais para Gerenciadores de Placas**, adicione a URL estável oficial da Espressif: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`.
3. Abra **Ferramentas → Placa → Gerenciador de Placas**.
4. Pesquise por `esp32` e instale **esp32 by Espressif Systems**.
5. Abra **Ferramentas → Placa → esp32** e selecione **ESP32 Dev Module** para a DevKit genérica com ESP32-WROOM-32.
6. Mantenha inicialmente as demais opções nos valores padrão. Altere frequência, flash, partições ou velocidade somente quando houver uma necessidade identificada.
7. Selecione também a porta COM correspondente à placa antes de carregar o programa.

Escolher a placa errada pode provocar erro de compilação, falha no upload ou configuração incompatível de memória. A documentação oficial da Espressif recomenda selecionar o modelo específico quando estiver disponível e usar o módulo genérico correspondente quando a placa não aparecer na lista.

## Drivers USB do ESP32

O ESP32-WROOM não cria sozinho uma porta USB. A placa de desenvolvimento costuma possuir um conversor USB/serial, frequentemente das famílias **CP210x** ou **CH340/CH341**. O driver necessário depende do conversor realmente instalado na sua placa.

Antes de instalar um driver:

1. observe as inscrições do pequeno circuito integrado próximo ao conector USB;
2. consulte o anúncio, o esquema ou a documentação do fabricante da DevKit;
3. verifique no Gerenciador de Dispositivos do Windows como o dispositivo foi identificado;
4. baixe o driver somente do fabricante do conversor ou da documentação oficial da placa.

Não instale vários drivers aleatórios para tentar descobrir por tentativa. Se a porta já aparece corretamente, talvez o Windows já tenha instalado o driver necessário.

## Como encontrar a porta no Windows

1. Desconecte o ESP32 do computador.
2. Pressione `Win + X` e abra **Gerenciador de Dispositivos**.
3. Expanda **Portas (COM e LPT)**. Se essa categoria não estiver visível, mantenha a janela aberta.
4. Conecte o ESP32 com um cabo USB de dados e observe qual item aparece. Ele pode ser mostrado como `USB Serial`, `CP210x`, `CH340`, `CH341` ou outro nome acompanhado de `COM` e um número.
5. Anote a porta, por exemplo `COM3` ou `COM7`.
6. Na Arduino IDE, abra **Ferramentas → Porta** e selecione a mesma porta COM.

Uma forma segura de confirmar é desconectar e reconectar a placa, observando qual porta desaparece e reaparece. Na Arduino IDE 2, a opção **Ferramentas → Porta** pode não aparecer quando nenhuma porta é detectada.

Se nenhuma porta surgir, teste nesta ordem: outro cabo de dados, outra porta USB do computador, conexão sem hub, inspeção do conector da placa e instalação do driver correto do conversor USB/serial. Um LED aceso comprova alimentação, mas não comprova comunicação USB.

## Sketch

**Sketch** é o nome tradicional de um programa ou projeto Arduino. Sua estrutura básica contém:

```cpp
void setup() {
  // Executa uma vez ao ligar ou reiniciar.
}

void loop() {
  // Repete enquanto a placa estiver funcionando.
}
```

Um sketch pode ser dividido em arquivos `.ino`, `.h` e `.cpp`. Variáveis globais, constantes, funções auxiliares e classes ajudam a separar responsabilidades. Por exemplo, a leitura de um sensor pode ficar em uma função `lerTemperatura()` e o controle do atuador em `acionarRele()`, deixando o `loop()` mais fácil de entender.

## Compilação

**Compilação** é a tradução do código escrito pelo estudante para instruções adequadas ao microcontrolador. O processo também detecta erros de sintaxe e combina o sketch com bibliotecas e arquivos da placa.

Compilar com sucesso não garante que a ligação elétrica ou a lógica estejam corretas.

Erros comuns incluem biblioteca ausente, nome de função digitado incorretamente, variável fora de escopo, falta de ponto e vírgula e conflito entre duas bibliotecas com o mesmo nome. O aviso de memória informa quanto do programa e da RAM está sendo utilizado; pouca RAM pode causar travamentos mesmo quando a compilação termina.

## Upload

**Upload**, ou carregamento, é o envio do programa compilado à memória da placa. Ele depende da placa correta, porta correta, cabo com dados, driver reconhecido e mecanismo de gravação funcionando.

Depois do upload, o microcontrolador pode executar sem o computador, desde que receba alimentação adequada.

Em placas como Arduino Uno, o bootloader recebe o código pela serial. Em algumas placas ESP32, é necessário manter o botão **BOOT** pressionado durante parte do processo; outras entram automaticamente no modo de gravação. Nunca interrompa a alimentação durante a escrita da memória e confirme a mensagem final de sucesso.

## Porta USB

A **porta USB** pode fornecer alimentação e transportar dados. Algumas placas possuem conversor USB/serial; outras implementam USB diretamente no microcontrolador.

Um cabo que serve apenas para carga pode acender a placa, mas não permite upload. Evite puxar pelo fio, forçar o conector ou desconectar durante a gravação. Motores e servos não devem depender indiscriminadamente da alimentação USB.

Também existem diferenças entre USB 2.0 e USB 3.x, hubs, extensões e conectores USB-C. Uma falha intermitente pode ser causada por cabo ruim, queda de tensão, mau contato ou excesso de corrente. Para diagnosticar, teste outro cabo de dados, outra porta do computador e a placa sem periféricos conectados.

## Porta serial

A **porta serial** é o canal lógico que o sistema operacional apresenta para comunicação com a placa. No Windows pode aparecer como COM; em Linux e macOS, como um dispositivo com outro padrão de nome.

Se mais de uma placa estiver conectada, identifique qual porta aparece ou desaparece ao conectar e desconectar o dispositivo com segurança.

## Driver USB

O **driver USB** é o software que permite ao sistema operacional reconhecer e operar a interface da placa. Algumas interfaces usam drivers já incluídos no sistema; outras exigem driver do fabricante, como em certas placas com CH340 ou CP210x.

Instale drivers somente de fonte confiável e compatível com o componente da placa.

Exemplos frequentes de interfaces USB/serial são **ATmega16U2**, **CH340/CH341**, **CP2102/CP210x** e **FT232**. O driver não é a biblioteca do sensor e não é o pacote da placa: ele atua no sistema operacional para criar a comunicação USB. Sinais de problema incluem porta que não aparece, dispositivo desconhecido ou porta que desaparece durante o upload.

## Pacote de placa

O **pacote de placa** fornece à IDE compilador, definições de pinos, variantes de placa, arquivos de inicialização e métodos de upload para uma família. Exemplos: **Arduino AVR Boards** para Uno/Nano/Mega, **esp32 by Espressif Systems** para placas ESP32, **esp8266 by ESP8266 Community** e pacotes para RP2040.

O pacote é instalado em **Ferramentas → Placa → Gerenciador de Placas**. Depois da instalação, selecione o modelo exato, pois “ESP32 Dev Module”, “NodeMCU-32S”, Uno e Nano podem ter memórias, bootloaders e pinagens diferentes. Atualizar um pacote pode alterar opções de compilação; registre a versão quando um projeto precisar ser reproduzido.

## Biblioteca

Uma **biblioteca** é código reutilizável que oferece funções para componentes ou tarefas. Ela pode simplificar LCD, servo ou sensor, mas não corrige alimentação e fiação erradas.

Exemplos de bibliotecas e usos:

- **Servo**: gera sinais para servomotores, usando `attach()` e `write()`.
- **Wire**: implementa I²C, com `begin()`, `beginTransmission()` e `requestFrom()`.
- **SPI**: controla periféricos SPI, como cartões SD, displays e conversores.
- **LiquidCrystal_I2C**: facilita o uso de LCD 16x2 ou 20x4 com módulo I²C.
- **Adafruit GFX** e bibliotecas de display: desenham texto, linhas e formas em OLED/TFT.
- **DHT sensor library**: lê sensores DHT11/DHT22, respeitando o intervalo entre leituras.
- **DallasTemperature** e **OneWire**: trabalham com sensores DS18B20.
- **PubSubClient**: implementa publicação e assinatura MQTT em projetos conectados.
- **WiFi** ou **WiFi.h**: conecta placas compatíveis a redes sem fio.
- **ArduinoJson**: cria e interpreta objetos JSON para APIs, MQTT e configurações.

No **Gerenciador de Bibliotecas**, pesquise pelo nome, leia o autor, a versão, a arquitetura suportada e os exemplos antes de instalar. Depois, use **Arquivo → Exemplos** para abrir um sketch de teste. Bibliotecas instaladas manualmente normalmente ficam na pasta `libraries` do diretório do usuário e podem exigir reinício da IDE.

Uma biblioteca pode depender de outra. Por exemplo, uma biblioteca de sensor I²C pode exigir `Wire`; uma biblioteca de display pode depender de uma biblioteca gráfica. Conflitos aparecem quando duas bibliotecas oferecem o mesmo arquivo ou quando o código foi escrito para uma versão diferente. Fixar versões e registrar dependências ajuda a reproduzir o projeto.

## Monitor Serial

O **Monitor Serial** envia e recebe texto ou dados pela comunicação serial. Ele ajuda a acompanhar leituras e depurar decisões.

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Programa em execução");
  delay(1000);
}
```

A velocidade escolhida no monitor deve corresponder ao valor configurado no programa.

Além de `Serial.println()`, use rótulos e unidades para tornar a leitura útil, por exemplo `Serial.print("Temperatura: "); Serial.print(valor); Serial.println(" °C");`. O monitor também pode enviar comandos: `Serial.read()`, `Serial.readStringUntil('\n')` e `Serial.available()` permitem criar menus e alterar parâmetros sem recompilar.

O **Serial Plotter** transforma números enviados em linhas gráficas, útil para observar temperatura, luz, aceleração ou ruído. Evite imprimir mensagens de texto no mesmo fluxo quando precisar de um gráfico limpo. Em placas com mais de uma UART, confira se está usando `Serial`, `Serial1` ou `Serial2` e quais pinos correspondem a cada porta.

## Fluxo de trabalho

1. Conecte a placa com cabo de dados.
2. Selecione o modelo e a porta.
3. Verifique ou compile o sketch.
4. Corrija os erros apresentados.
5. Carregue o programa.
6. Use o Monitor Serial quando necessário.

Para um projeto com sensor, um fluxo recomendado é: instalar o pacote da placa; instalar a biblioteca; abrir o exemplo da biblioteca; testar o sensor sozinho; conferir a alimentação e a pinagem; integrar o código ao projeto; registrar placa, versão do pacote, bibliotecas e velocidade serial.

## Verifique se entendeu

1. Por que uma placa pode acender sem aparecer na IDE?
2. Qual é a diferença entre compilação e upload?
3. Qual é a diferença entre driver, pacote de placa e biblioteca?
4. Qual biblioteca e pacote de placa são necessários para um ESP32 conectado por Wi‑Fi?
5. Por que um cabo USB de carga pode acender a placa sem permitir upload?
6. Como verificar se uma biblioteca possui exemplo compatível com o seu componente?

[← Anterior: microcontrolador](02a-microcontrolador-arduino.md) · [Próximo: GPIO digital →](02c-gpio-digital.md)

[← Voltar ao início](../README.md)
