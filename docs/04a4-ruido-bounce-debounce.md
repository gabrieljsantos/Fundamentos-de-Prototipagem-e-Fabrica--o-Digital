# Ruído, bounce e debounce

[← Voltar ao início](../README.md)

## Ruído

**Ruído** é uma variação indesejada no sinal. Cabos longos, motores, fontes chaveadas, GND ruim e entradas flutuantes podem causar falsos acionamentos. Fios curtos, conexões firmes e um pull-up ou pull-down adequado ajudam a estabilizar a leitura.

## Bounce

**Bounce**, ou repique mecânico, acontece porque os contatos do botão podem abrir e fechar várias vezes durante poucos milissegundos. Um único toque pode ser interpretado como vários acionamentos.

## Debounce

**Debounce** é o tratamento usado para aceitar apenas uma mudança válida. Uma introdução simples consiste em aguardar brevemente e confirmar a leitura:

```cpp
if (digitalRead(2) == LOW) {
  delay(20);
  if (digitalRead(2) == LOW) {
    // toque confirmado
  }
}
```

Esse atraso curto serve para experiências iniciais. Projetos maiores costumam usar temporização sem bloquear o restante do programa.

O projeto [Botão controla LED](04a-botoes-entradas.md) apresenta primeiro as ligações básicas; este tratamento pode ser acrescentado quando um toque precisa produzir apenas um evento.

## Verifique se entendeu

1. Qual é a diferença entre ruído elétrico e bounce mecânico?
2. Por que um toque pode ser contado mais de uma vez?
3. O que o segundo teste do botão confirma?

[← Pull-up e pull-down](04a3-pull-up-pull-down.md) · [Próximo: divisor e sensores resistivos →](04b-divisor-potenciometro-ldr.md)
