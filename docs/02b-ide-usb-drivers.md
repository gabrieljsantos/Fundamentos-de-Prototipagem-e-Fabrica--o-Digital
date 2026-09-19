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

A **Arduino IDE** é o ambiente usado para editar o programa, verificar erros, compilar, carregar o código na placa, instalar suporte a placas e bibliotecas e acessar a comunicação serial.

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

## Compilação

**Compilação** é a tradução do código escrito pelo estudante para instruções adequadas ao microcontrolador. O processo também detecta erros de sintaxe e combina o sketch com bibliotecas e arquivos da placa.

Compilar com sucesso não garante que a ligação elétrica ou a lógica estejam corretas.

## Upload

**Upload**, ou carregamento, é o envio do programa compilado à memória da placa. Ele depende da placa correta, porta correta, cabo com dados, driver reconhecido e mecanismo de gravação funcionando.

Depois do upload, o microcontrolador pode executar sem o computador, desde que receba alimentação adequada.

## Porta USB

A **porta USB** pode fornecer alimentação e transportar dados. Algumas placas possuem conversor USB/serial; outras implementam USB diretamente no microcontrolador.

Um cabo que serve apenas para carga pode acender a placa, mas não permite upload. Evite puxar pelo fio, forçar o conector ou desconectar durante a gravação. Motores e servos não devem depender indiscriminadamente da alimentação USB.

## Porta serial

A **porta serial** é o canal lógico que o sistema operacional apresenta para comunicação com a placa. No Windows pode aparecer como COM; em Linux e macOS, como um dispositivo com outro padrão de nome.

Se mais de uma placa estiver conectada, identifique qual porta aparece ou desaparece ao conectar e desconectar o dispositivo com segurança.

## Driver USB

O **driver USB** é o software que permite ao sistema operacional reconhecer e operar a interface da placa. Algumas interfaces usam drivers já incluídos no sistema; outras exigem driver do fabricante, como em certas placas com CH340 ou CP210x.

Instale drivers somente de fonte confiável e compatível com o componente da placa.

## Pacote de placa

O **pacote de placa** fornece à IDE compilador, definições de pinos e métodos de upload para uma família. O suporte ao ESP32, por exemplo, não é a mesma coisa que uma biblioteca de sensor.

## Biblioteca

Uma **biblioteca** é código reutilizável que oferece funções para componentes ou tarefas. Ela pode simplificar LCD, servo ou sensor, mas não corrige alimentação e fiação erradas.

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

## Fluxo de trabalho

1. Conecte a placa com cabo de dados.
2. Selecione o modelo e a porta.
3. Verifique ou compile o sketch.
4. Corrija os erros apresentados.
5. Carregue o programa.
6. Use o Monitor Serial quando necessário.

## Verifique se entendeu

1. Por que uma placa pode acender sem aparecer na IDE?
2. Qual é a diferença entre compilação e upload?
3. Qual é a diferença entre driver, pacote de placa e biblioteca?

[← Anterior: microcontrolador](02a-microcontrolador-arduino.md) · [Próximo: GPIO digital →](02c-gpio-digital.md)

[← Voltar ao início](../README.md)
