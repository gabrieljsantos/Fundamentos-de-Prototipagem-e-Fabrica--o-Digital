# Manifesto editorial e pedagógico

Este documento define como os conteúdos e projetos de **Fundamentos de Prototipagem e Fabricação Digital** devem ser organizados.

## Títulos

- Use títulos curtos, naturais e nominais.
- O título identifica o assunto; não enumera os formatos usados na página.
- Não acrescente expressões como “diagrama, blocos e código”, “apoio pedagógico”, “guia visual”, “material convertido” ou equivalentes.
- Não crie um segundo título para repetir o nome que já aparece no topo da página.
- Quando o usuário fornecer um título, preserve-o.

Exemplo correto: **Pisca-LED**.

Exemplo incorreto: **Pisca-LED: conexão, diagrama, blocos e código**.

## Conceitos e projetos

O material possui duas camadas complementares:

1. **Conceitos:** explicam os componentes, princípios, cálculos, sinais e comandos.
2. **Projetos:** aplicam vários conceitos em uma montagem completa.

Os conceitos devem aparecer antes do projeto quando estiverem na mesma página. Um projeto não deve substituir a explicação conceitual, e uma explicação conceitual não deve repetir integralmente o projeto.

## Estrutura dos projetos

Um projeto deve usar somente o nome do que será construído. Quando houver montagem eletrônica e programação, a ordem padrão é:

1. identificação dos componentes e terminais;
2. diagrama e explicação da ligação;
3. programação em blocos;
4. código textual comentado;
5. erros comuns e diagnóstico, quando necessários.

Quando o projeto comparar formas diferentes de ligação, cada forma deve ter seu próprio diagrama. Uma ligação direta pela alimentação não pode reutilizar o diagrama de uma ligação controlada por GPIO. O texto deve dizer explicitamente de onde sai a alimentação ou o sinal e por que as duas ligações se comportam de maneira diferente.

Quando um pino específico for usado, informe quais outros pinos são compatíveis ou aponte para o conteúdo conceitual que explica essa escolha. Diferencie pinos de alimentação, GPIOs digitais, pinos reservados e GPIOs com PWM.

Blocos e código representam a mesma lógica. Eles devem aparecer em sequência, com os blocos primeiro e o código logo abaixo. O código deve conter comentários úteis, sem comentar o óbvio em excesso.

Todo exemplo de código que puder ser representado em blocos deve possuir a sequência equivalente imediatamente antes dele. A ausência dos blocos só é aceitável quando o ambiente visual não oferece os recursos necessários; nesse caso, registre essa limitação no texto.

Uma lista numerada não substitui uma representação em blocos. O desenho deve respeitar o encaixe usado nos simuladores: `no início` é um contêiner e envolve as configurações executadas uma vez; `para sempre` é outro contêiner e envolve todos os comandos repetidos. Não desenhe as configurações ou as ações do laço como blocos soltos no mesmo nível.

Os blocos devem corresponder a peças que o estudante consegue localizar e encaixar no Tinkercad Circuits. Não transforme uma sequência em uma frase explicativa, como “aumente o PWM de 0 até 255”. Represente a sequência com blocos elementares: definir variável, `repita`, escrever o valor no pino, alterar a variável e aguardar. Um bloco visual é uma instrução executável, não um comentário sobre o algoritmo.

Quando uma composição usar variáveis, mostre ao lado dos blocos uma preparação explícita para cada nome: abra **Variáveis**, escolha **Criar variável** e informe o nome exato. Não presuma que o estudante saiba que o bloco de atribuição depende dessa criação anterior.

Não crie uma variável manual quando o bloco de repetição já fornece um contador. Em gradientes, prefira usar diretamente os contadores `i`, `j` ou seguintes como valores de PWM. A instrução para criar variável só aparece quando o programa realmente depende de uma variável independente do laço.

Para laços contados, preserve a forma apresentada pelo Tinkercad Circuits: **contagem para cima/baixo por N para i de A a B fazer**. A direção e o incremento pertencem ao próprio bloco; não represente descida escrevendo um incremento negativo na interface.

Ao inserir a primeira contagem, indique que a variável `i` passa a aparecer na aba **Variáveis**. O estudante deve abrir essa aba e arrastar `i` para o campo de valor do comando executado dentro do laço, como **definir pino 9 como i**. Não basta escrever a letra dentro de um campo visualmente: a representação deve deixar claro que se trata do bloco de variável encaixado.

Em uma contagem posterior, é permitido reutilizar `i`. Quando o projeto optar por outro contador, como `j`, instrua o estudante a abrir **Variáveis**, criar a nova variável, selecioná-la no bloco de contagem e arrastá-la para os comandos internos. O nome usado no comando deve ser o mesmo selecionado no laço.

Operações como `255 - i`, comparações, mapeamento e restrição de faixa devem usar os blocos verdes da categoria **Matemática** encaixados nos comandos. Não escreva uma expressão matemática como texto simples dentro de um campo. Os operandos numéricos ocupam entradas brancas e as variáveis devem ser encaixadas como blocos da categoria **Variáveis**.

Toda representação em blocos deve possuir, à direita, uma lista **Onde encontrar**. Para cada peça utilizada, informe seu nome e sua categoria na caixa de ferramentas do simulador, como **aguardar — Controle**, **definir pino — Saída**, **contador i — Variáveis** e **operação aritmética — Matemática**. A localização deve ser gerada pelo mesmo framework que desenha os blocos para permanecer sincronizada com o exemplo.

O catálogo de **Saída** do framework deve reproduzir os blocos disponíveis no simulador: LED incorporado, pino digital com `ALTO/BAIXO`, pino PWM com valor numérico, servo, reprodução e desativação de alto-falante, monitor serial, LED RGB e operações de configuração, impressão, posição e ação do LCD. Use o bloco especializado correspondente; não substitua essas peças por uma frase genérica.

O catálogo de **Entrada** deve disponibilizar os blocos roxos do simulador para leitura de pino digital, pino analógico, posição de servo, quantidade de caracteres seriais, dado serial, distância ultrassônica, temperatura e sensor infravermelho. Como são blocos de valor, devem ser encaixados dentro de condições, operações, atribuições ou comandos compatíveis, e não apresentados como instruções soltas.

Nos blocos em português, apresente `ALTO` e `BAIXO`, como na interface do simulador. O código C++ correspondente continua usando `HIGH` e `LOW`. A configuração `pinMode(..., OUTPUT)` pode aparecer no código gerado sem exigir um bloco visual separado quando o próprio bloco de saída permite ao simulador inferir essa configuração.

Novos projetos devem declarar sua programação por meio do framework em `scripts/tinkercad-blocks.mjs`. O catálogo de blocos desse framework é a fonte comum para a renderização; comandos novos só devem ser acrescentados quando corresponderem a um bloco disponível no simulador. As composições próprias de cada projeto ficam em `scripts/block-programs.mjs`.

## Indexação

- Cada projeto deve aparecer no índice de projetos da página inicial.
- O projeto também deve ser referenciado nos módulos conceituais diretamente relacionados.
- Itens ainda não desenvolvidos podem aparecer como texto simples, sem link.
- Links só devem ser criados quando a página de destino existir e estiver coerente.

## Inclusão de novos projetos

Todo novo projeto deve ser acompanhado de uma revisão conceitual antes de ser considerado completo. O projeto não pode pressupor conhecimentos que o material ainda não explicou.

Ao adicionar um projeto:

1. identifique todos os componentes, sinais, comandos, cálculos, protocolos e princípios físicos usados;
2. localize os tópicos conceituais existentes que explicam cada um deles;
3. inclua, no início do projeto, uma seção **Conceitos** com referências específicas para esses conteúdos;
4. quando um conceito necessário ainda não existir, crie ou acrescente um tópico conceitual no módulo pedagogicamente adequado;
5. no novo tópico conceitual, explique o funcionamento por trás da aplicação, sem apenas repetir as etapas do projeto;
6. faça o tópico conceitual apontar de volta para o projeto em que aquele conhecimento é aplicado;
7. atualize o índice, a navegação e os módulos relacionados.

Um projeto só está devidamente indexado quando o aluno consegue seguir dois percursos: partir do projeto para compreender seus fundamentos e partir de um conceito para encontrar uma aplicação prática. A existência de alguns conceitos relacionados não dispensa a verificação de lacunas introduzidas pelo novo projeto.

Não concentre toda explicação dentro do projeto. O projeto ensina a montar, programar, testar e diagnosticar; os tópicos conceituais explicam por que os componentes, sinais e comandos se comportam daquela maneira.

## Terminologia dos blocos

Nos blocos que representam comandos do Arduino, preserve os termos usados pela programação e pelos simuladores: `INPUT`, `OUTPUT`, `HIGH` e `LOW`. A explicação ao redor pode estar em português, mas o valor selecionado no bloco não deve ser traduzido para “entrada”, “saída”, “alto” ou “baixo”.

## Referências bidirecionais

A relação entre conceitos e projetos deve funcionar nos dois sentidos:

- o material conceitual aponta para o projeto que aplica aquele conceito;
- o projeto aponta para os materiais conceituais necessários para compreender sua montagem e seu código.

As referências devem ser específicas. Não use frases genéricas como “veja também” sem explicar a relação.

## Regra aplicada aos projetos de LED

O projeto **LED comum** referencia LED, polaridade, resistor limitador, GPIO, saída digital e PWM. Ele progride da ligação direta para o controle por tempo, brilho, gradiente e pulsação. O projeto **LED RGB** recomenda primeiro o LED comum e amplia os mesmos princípios para três canais, cores definidas, gradientes e sequências temporizadas. Os materiais conceituais apontam de volta para esses projetos.

## Revisão editorial

Antes de publicar:

- elimine títulos redundantes;
- procure explicações repetidas;
- confirme a ordem pedagógica;
- verifique se os links funcionam nos dois sentidos;
- confira se o diagrama, os blocos e o código descrevem o mesmo circuito;
- mantenha nomes de pinos, tensões e componentes consistentes.
