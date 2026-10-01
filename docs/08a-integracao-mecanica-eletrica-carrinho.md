# Integração mecânica e elétrica do carrinho

[← Voltar ao projeto](08-carrinho-wifi-esp32-pet-v1.md)

## Conceitos deste arquivo

- [Sistema e subsistemas](#sistema-e-subsistemas)
- [Protótipo modular](#protótipo-modular)
- [Vértices, arestas e faces](#vértices-arestas-e-faces)
- [Rigidez estrutural](#rigidez-estrutural)
- [Alinhamento](#alinhamento)
- [Centro de massa](#centro-de-massa)
- [Tração diferencial](#tração-diferencial)
- [Roda boba](#roda-boba)
- [Fixação e cola quente](#fixação-e-cola-quente)
- [Alívio de tensão](#alívio-de-tensão)
- [Manutenibilidade](#manutenibilidade)
- [Domínios de alimentação](#domínios-de-alimentação)
- [Distribuição de energia](#distribuição-de-energia)
- [Pico de corrente](#pico-de-corrente)
- [Corrente de travamento](#corrente-de-travamento)
- [Queda de tensão](#queda-de-tensão)
- [Continuidade elétrica](#continuidade-elétrica)
- [Comissionamento](#comissionamento)
- [Calibração de movimento](#calibração-de-movimento)
- [Teste por etapas](#teste-por-etapas)
- [Isolamento de falhas](#isolamento-de-falhas)

## Sistema e subsistemas

Um **sistema** reúne partes que cooperam para cumprir uma função. O carrinho pode ser dividido em subsistema estrutural, alimentação do ESP32, alimentação dos motores, controle lógico, comunicação Wi‑Fi, acionamento de potência e transmissão de movimento.

Dividir o projeto em subsistemas ajuda a montar e testar uma parte por vez. Uma falha de movimento pode estar no código, nos sinais, na ponte H, nos motores, na alimentação ou na mecânica.

## Protótipo modular

Um **protótipo modular** é formado por partes que podem ser combinadas, substituídas ou reorganizadas. O ModuBot permite variar a estrutura sem fabricar um chassi inteiramente novo.

Modularidade facilita experimentos, mas cada união precisa permanecer firme. Folgas acumuladas podem alterar alinhamento, estabilidade e posição dos componentes.

## Vértices, arestas e faces

No chassi deste projeto, os **vértices** são as peças impressas em 3D; as **arestas** são os palitinhos que conectam os vértices; e as **faces** são superfícies de papel-cartão ou papelão.

Os vértices definem pontos de união e podem possuir funções específicas. As arestas determinam distâncias e contornos. As faces fecham, apoiam ou protegem regiões, mas não devem bloquear manutenção, ventilação, conectores ou movimento.

## Rigidez estrutural

**Rigidez estrutural** é a resistência da estrutura a deformações. Um retângulo pode mudar de forma quando recebe força lateral; travamentos, faces bem fixadas ou triangulação ajudam a conservar a geometria.

Rigidez insuficiente pode fazer as rodas perderem alinhamento, soltar encaixes e forçar fios. Rigidez não significa excesso de cola: a estrutura deve permanecer reparável.

## Alinhamento

**Alinhamento** indica se motores, eixos e rodas estão posicionados nas direções planejadas. Motores desalinhados fazem o carrinho desviar mesmo quando recebem comandos iguais.

Antes de corrigir tudo por software, confira paralelismo dos eixos, posição das rodas, atrito e simetria da estrutura.

## Centro de massa

O **centro de massa** representa a posição média da massa do carrinho. Baterias e motores costumam ser os itens mais pesados.

Distribua os componentes para evitar excesso de peso sobre uma única roda, instabilidade em curvas ou perda de contato da roda boba. Fixações baixas e próximas do centro geralmente reduzem tombamento.

## Tração diferencial

Na **tração diferencial**, uma roda motriz fica de cada lado. O carrinho avança quando ambas giram para frente, recua quando ambas giram para trás e gira quando os lados recebem sentidos ou velocidades diferentes.

O sentido real depende da orientação mecânica e dos fios de cada motor. Por isso, a correspondência entre Motor A, Motor B, esquerda e direita precisa ser calibrada.

## Roda boba

A **roda boba** sustenta um ponto do chassi e acompanha mudanças de direção sem receber torque do motor. Ela reduz o arrasto que existiria se um apoio fixo raspasse no chão.

Sua altura influencia a distribuição de peso. Se estiver alta ou baixa demais, uma roda motriz pode perder contato ou receber peso excessivo.

## Fixação e cola quente

Uma fixação deve impedir deslocamento durante aceleração, vibração e transporte. A cola quente é útil em protótipos, mas amolece com calor e pode dificultar reparos.

Não cubra bornes, conectores, botões, antena, trimpot, dissipação ou inscrições necessárias. Aplique cola com a alimentação desligada, aguarde o resfriamento e evite pressão direta sobre componentes eletrônicos pequenos.

## Alívio de tensão

**Alívio de tensão** impede que puxões e vibrações sejam transmitidos diretamente às soldas. Prenda os cabos pelo isolamento, deixando uma pequena folga antes do terminal.

Um fio bem soldado ainda pode romper quando atua como elemento estrutural. A fixação mecânica e a conexão elétrica possuem funções diferentes.

## Manutenibilidade

**Manutenibilidade** é a facilidade de inspecionar, testar, remover e substituir partes. Deixe acessíveis as chaves, baterias, parafusos, porta USB, trimpot do LM2596 e bornes.

Identificação de fios, módulos removíveis e rotas organizadas reduzem erros em reparos e modificações.

## Domínios de alimentação

Um **domínio de alimentação** é uma parte do circuito alimentada por uma fonte definida. O carrinho possui um domínio para ESP32/LM2596 e outro para ponte H/motores.

Separar as fontes reduz a propagação das quedas causadas pelos motores. Os domínios continuam relacionados pelo GND comum usado como referência dos sinais.

## Distribuição de energia

**Distribuição de energia** descreve como tensão e corrente chegam às cargas. Fios, chaves, conectores, soldas e trilhas fazem parte do caminho e podem introduzir resistência.

Um diagrama deve mostrar origem, proteção, chaveamento, conversão e destino da energia. Organizar esse caminho facilita medir a tensão em cada etapa.

## Pico de corrente

Um **pico de corrente** é um aumento breve de consumo. Wi‑Fi durante transmissão e motores na partida podem exigir mais corrente do que em repouso.

Uma fonte pode apresentar tensão correta sem carga e cair durante um pico. Por isso, medições durante o funcionamento complementam a regulagem inicial.

## Corrente de travamento

**Corrente de travamento** é a corrente elevada consumida quando o motor recebe tensão, mas o eixo não consegue girar. Ela pode aquecer o motor, sobrecarregar a ponte H e causar queda de tensão.

Rodas presas, chassi raspando ou esforço mecânico excessivo aproximam o motor dessa condição. Desligue o sistema quando houver travamento.

## Queda de tensão

**Queda de tensão** ocorre quando a tensão medida na carga fica menor devido à resistência interna da fonte e do caminho elétrico. Bateria fraca, fio fino, contato ruim e solda defeituosa aumentam o problema.

No ESP32, uma queda pode causar brownout e reinicialização. Nos motores, reduz torque e velocidade.

## Continuidade elétrica

Um teste de **continuidade** verifica se existe caminho condutor entre dois pontos. Ele deve ser feito com o circuito desligado.

Continuidade confirma conexão, mas não confirma polaridade, tensão correta ou capacidade de corrente. Esses critérios exigem inspeção e medições adicionais.

## Comissionamento

**Comissionamento** é a sequência controlada de verificações antes de colocar todo o sistema em operação. Inclui inspeção, continuidade, ajuste do LM2596, confirmação de 5 V, teste dos LEDs, upload, acionamento suspenso e teste no chão.

Registrar cada resultado evita energizar o conjunto completo com uma falha ainda desconhecida.

## Calibração de movimento

**Calibração** ajusta a correspondência entre comandos e comportamento real. No carrinho, inclui confirmar frente, ré, esquerda, direita, alinhamento e resposta dos dois motores.

Diferenças entre motores e rodas podem exigir ajustes futuros de velocidade por PWM. Primeiro corrija montagem, atrito e polaridade; depois compense diferenças restantes no programa.

## Teste por etapas

No **teste por etapas**, cada subsistema é validado antes de integrar o próximo: estrutura, fontes, LM2596, ESP32, Wi‑Fi, ponte H, motores e movimento.

Essa ordem reduz o número de causas possíveis quando algo falha e evita expor todos os componentes a um erro inicial.

## Isolamento de falhas

**Isolar uma falha** significa dividir o sistema até encontrar a etapa que deixou de funcionar. Meça entrada e saída do LM2596, observe o ESP32 sozinho, teste a ponte H sem carga mecânica e examine cada motor separadamente.

Trocar várias ligações ao mesmo tempo dificulta descobrir a causa. Faça uma alteração por vez e repita o teste correspondente.

[← ESP32, Wi‑Fi e controle](07a-esp32.md) · [Voltar ao projeto](08-carrinho-wifi-esp32-pet-v1.md)
