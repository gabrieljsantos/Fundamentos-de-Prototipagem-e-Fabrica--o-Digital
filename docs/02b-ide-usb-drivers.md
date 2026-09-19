# Arduino IDE, USB, drivers e bibliotecas

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Arduino IDE](#arduino-ide)
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
