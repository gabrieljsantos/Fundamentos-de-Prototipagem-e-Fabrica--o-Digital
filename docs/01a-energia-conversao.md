# Energia, conservação e conversão

[← Voltar ao início](../README.md)

## Conceitos deste arquivo

- [Energia](#energia)
- [Conservação da energia](#conservação-da-energia)
- [Conversão de energia](#conversão-de-energia)
- [Eficiência](#eficiência)

## Palavra-chave e conceito

### Energia

**Energia** é a capacidade de produzir uma mudança, como movimento, aquecimento, luz, som ou transformação química. Em um circuito, a fonte fornece energia e os componentes a transformam.

Energia não é sinônimo de tensão ou corrente. A tensão está relacionada à possibilidade de movimentar cargas; a corrente descreve o fluxo das cargas; a energia descreve o efeito acumulado ao longo do funcionamento. Suas unidades incluem joule (J) e watt-hora (Wh).

### Conservação da energia

O **princípio da conservação da energia** afirma que a energia não pode ser criada nem destruída. Ela pode ser transferida ou convertida.

Quando dizemos que um circuito “perde energia”, normalmente queremos dizer que parte dela se transformou em uma forma não desejada, principalmente calor. A energia não desapareceu.

### Conversão de energia

**Conversão de energia** é a transformação de uma forma de energia em outra. Um dispositivo real geralmente produz mais de uma forma de saída.

| Dispositivo | Energia recebida | Conversão principal | Conversões secundárias |
|---|---|---|---|
| Pilha alimentando circuito | Química | Elétrica | Calor |
| Motor | Elétrica | Mecânica | Calor e som |
| LED | Elétrica | Luminosa | Calor |
| Buzzer | Elétrica | Sonora | Calor e vibração |
| Resistor | Elétrica | Térmica | — |

### Eficiência

**Eficiência** é a fração da energia recebida que se transforma na forma útil desejada:

```text
eficiência = energia útil / energia recebida
```

Nenhum dispositivo real converte toda a energia somente na forma desejada.

## Relação com o microcontrolador

O microcontrolador manipula sinais, mas a energia da carga precisa vir de uma fonte adequada. Uma GPIO pode controlar um LED pequeno com resistor, mas não deve fornecer diretamente a energia exigida por um motor. Nesse caso, ela comanda um transistor ou driver, enquanto outra fonte alimenta o motor.

## Exemplo explicado

Quando uma pilha alimenta um motor, a pilha converte energia química em elétrica. O motor converte parte dessa energia elétrica em movimento. A resistência dos enrolamentos produz calor e as vibrações produzem som.

## Verifique se entendeu

1. Um motor cria energia mecânica ou converte energia?
2. Por que o aquecimento costuma ser tratado como perda?
3. Quais conversões ocorrem quando uma pilha acende um LED?

[Próximo: grandezas elétricas →](01b-grandezas-eletricas.md)

[← Voltar ao início](../README.md)
