# Protoboard, curto-circuito, ESD e ruído elétrico

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Protoboard](#protoboard)
- [Curto-circuito](#curto-circuito)
- [ESD](#esd)
- [Ruído elétrico](#ruído-elétrico)
- [Bounce](#bounce)

## Protoboard

A **protoboard** é uma matriz de contatos para montar circuitos sem solda. É necessário conhecer as uniões metálicas internas; a proximidade visual dos furos não garante conexão.

Na região central, cada grupo curto de cinco furos costuma estar interligado. O canal central separa os lados e permite instalar circuitos integrados DIP. Os barramentos laterais costumam distribuir alimentação, mas podem ser interrompidos no meio.

Confirme as marcações ou use a continuidade do multímetro. Antes de energizar, verifique se VCC e GND não ocupam o mesmo grupo conectado.

## Curto-circuito

Um **curto-circuito** é uma conexão de resistência muito baixa entre pontos com diferença de potencial. A corrente pode ultrapassar os limites dos fios, da fonte ou da placa, causando aquecimento e danos.

Exemplos incluem unir VCC diretamente ao GND, deslocar um módulo uma fileira ou deixar uma peça metálica encostar na placa energizada.

Curto-circuito não é exatamente igual a **sobrecarga**. No curto, surge um caminho de resistência muito baixa. Na sobrecarga, a carga exige mais corrente do que a fonte ou o condutor suporta, mesmo sem ligação direta entre os polos.

## ESD

**ESD**, ou descarga eletrostática, é uma transferência rápida de carga acumulada entre objetos. Uma descarga pequena demais para ser sentida ainda pode danificar entradas eletrônicas.

Segure placas pelas bordas, evite tocar nos contatos, descarregue-se antes do manuseio e use pulseira e superfície antiestática quando disponíveis. A proteção ESD não substitui as proteções elétricas do circuito.

## Ruído elétrico

**Ruído elétrico** é uma variação indesejada misturada à alimentação ou ao sinal. Pode gerar leituras instáveis, falsos acionamentos, falhas de comunicação e reinicializações.

Fontes comuns incluem motores, relés, fontes chaveadas, cabos longos, entradas flutuantes e conexões ruins. Medidas possíveis incluem fios curtos, GND bem conectado, pull-up ou pull-down, capacitores de desacoplamento, separação entre sinal e potência, proteção de cargas indutivas e filtragem adequada.

## Bounce

**Bounce**, ou repique de contato, é a sequência rápida de aberturas e fechamentos que ocorre mecanicamente quando um botão muda de estado. O programa pode interpretar um único toque como vários.

Bounce e ruído não são sinônimos. O bounce tem origem no contato mecânico; o ruído pode vir de diversas fontes elétricas e eletromagnéticas. O debounce pode ser feito por hardware ou por software.

## Procedimento seguro

1. Desligue as fontes.
2. Confira as ligações internas da protoboard.
3. Identifique VCC, GND e polaridade.
4. Monte alimentação e proteção antes dos sinais.
5. Procure conexões diretas entre VCC e GND.
6. Energize por etapas e observe o comportamento.
7. Desligue imediatamente diante de fumaça, cheiro ou calor excessivo.

## Verifique se entendeu

1. Por que furos próximos podem não estar conectados?
2. Qual é a diferença entre curto-circuito e sobrecarga?
3. Como uma ESD imperceptível pode danificar um componente?
4. Qual é a diferença entre ruído e bounce?

[← Anterior: circuitos](01c-circuitos-alimentacao.md) · [Revisão dos fundamentos →](01-fundamentos.md)

[← Voltar ao início](../README.md)
