# Manifesto dos tutoriais da Ender 3

Este documento organiza o material bruto da pasta `MAterial para o tutorial de impresssora ender 3` e define como ele deve ser usado nos três futuros tutoriais. Os nomes originais foram preservados abaixo para que cada decisão continue rastreável.

## Princípio de uso

- **Fotografias da máquina** devem aparecer diretamente nos tutoriais. Elas mostram posição, orientação, peças físicas e ações manuais que uma ilustração de interface não substitui.
- **Fotografias do visor** são referências de conteúdo e navegação. As telas devem ser reconstruídas com o componente HTML/CSS `<ender3-display>`, evitando baixa legibilidade, reflexos, inclinação e inconsistência entre fotos. Fotografias marcadas como “parte 1” e “parte 2” representam posições de rolagem da mesma lista e devem ser consolidadas em um único menu.
- **Os menus não possuem título.** O primeiro item mostra o nome da tela anterior e uma seta para cima; ele faz parte da lista e não deve ser transformado em cabeçalho nem em um botão genérico “Voltar”.
- **Marcações coloridas** existentes nas fotografias físicas podem ser mantidas quando ajudam a localizar uma peça. Futuramente, elas podem ser refeitas como anotações HTML sobre a imagem.
- **`ignorar.mp4` não deve ser publicado nem convertido.** O próprio nome do arquivo o exclui do acervo.

## Fotografias físicas

| Arquivo original | O que mostra | Uso principal |
| --- | --- | --- |
| `Visão geral do lado direito da impressora que ennder 3 que pode ser visualizado o botão de ligab e desliga.jpeg` | Lateral direita e posição do interruptor | Contextualizar onde ligar e desligar a Ender 3 |
| `botão lateral de desligar a impressora , ligar temabem.jpeg` | Interruptor de energia em detalhe | Passo de ligar/desligar com segurança |
| `encode que pode ser usado para navegar e usar a impressora.jpeg` | Encoder rotativo do painel | Explicar girar para navegar e pressionar para confirmar |
| `visão geral da estruzora maracando em amarelo a estruzora e em vermelho marcando a lavanca que destrava o filamento.jpeg` | Extrusora e alavanca de liberação | Localizar o mecanismo antes de retirar o filamento |
| `Furo que fica do lado esquerdo da impressora , na extruzora.jpeg` | Entrada do filamento na extrusora | Mostrar por onde o filamento entra e sai |
| `bico do hotend que pode ser visualizado se o filamento chegou ate o fim e stá saindo.jpeg` | Bico do hotend | Confirmar visualmente a chegada do filamento; não usar como instrução para tocar no bico |
| `mesa com impresão e destaque na prisilhas que devem ser removidasd .jpeg` | Mesa, peça pronta e presilhas | Mostrar quais presilhas liberar antes de retirar a mesa |
| `mesa destacada da impressora.jpeg` | Mesa removida | Demonstrar a retirada da mesa para soltar a peça longe da máquina |
| `pressionandoaprisilhadaextruzora-ezgif.com-resize.gif` | Pressão da alavanca da extrusora | Demonstração curta da ação manual para liberar o filamento |

## Referências de visor a reconstruir

| Arquivo original | Estado no componente | Conteúdo identificado |
| --- | --- | --- |
| `dialogo principal que mostra as informações.jpeg` | `status` | Tela de estado, temperaturas, eixos, progresso e tempo |
| `dialogo da janela princpal que aperece quando esta aquecendo pŕa impressão.jpeg` | `heating` | Estado de aquecimento antes da impressão |
| `dialogo de menu prinpal parte 2.jpeg` | `print-menu` | Menu durante uma impressão: Informações, pausar, parar, ajustar e temperatura |
| `dialogo menu principal parte 2.jpeg` | `main-menu` | Menu sem impressão: temperatura, configuração, cartão SD e sobre |
| `dialogo sunbmenu temperatura.jpeg` | `temperature` | Parte superior da lista única: Menu principal ↑, bocal, mesa, ventoinha e PLA |
| `dialogo sunbmenu temperatura parte 2.jpeg` | `temperature` | Continuação da mesma lista com pré-aquecimento PLA e ABS |
| `dialogo submenu de pre aquecer PLA.jpeg` | `preheat-pla` | Temperatura, ventoinha e comandos de pré-aquecimento PLA |
| `dialogo que mostra botão , voltar para o menu principal, e alista de conteudo que pode ser impressso que está no cartão sd .jpeg` | `sd-browser` | Lista de arquivos G-code do cartão SD |
| `dialogo com curso sob a opção de esolher um item do sd pra imprimir.jpeg` | `sd-selection` | Arquivo selecionado na lista |
| `dialogo que aparece depois de escolher um gcode do sd.jpeg` | `print-confirmation` | Confirmação para iniciar a impressão do arquivo escolhido |
| `dialogo de pausar a impressora.jpeg` | `stop-confirmation` | Confirmação para parar a impressão |

As grafias exibidas nas fotos devem ser tratadas como evidência da interface instalada nessa máquina, não como texto editorial. Antes de publicar cada tutorial, compare o estado reconstruído com a Ender 3 disponível, pois versões diferentes de firmware podem mudar rótulos e ordem dos itens.

O menu principal sem impressão usado nesta Ender 3 é: `Informações ↑`, `Movimento →`, `Temperatura →`, `Configuração →`, `Release SD Card`, `Select from SD Card →` e `Sobre →`. `Release SD Card` é o único item dessa lista sem seta para a direita.

## Roteiro de uso por tutorial

### Colocar algo para imprimir na Ender 3

1. Fotografia da lateral para localizar o interruptor.
2. Fotografia do interruptor em detalhe.
3. Fotografia do encoder para explicar a interação.
4. Tela reconstruída `main-menu`.
5. Telas reconstruídas `sd-browser` e `sd-selection`.
6. Tela reconstruída `print-confirmation`.
7. Telas reconstruídas `heating` e `status`.

### Remover a impressão da Ender 3

1. Tela reconstruída `status` para conferir que o trabalho terminou.
2. Fotografia da mesa com a peça e as presilhas destacadas.
3. Fotografia da mesa já removida.
4. Aviso editorial: aguardar o resfriamento da mesa e nunca forçar a peça ainda quente.

### Remover o filamento da Ender 3 e guardar

1. Fotografia do encoder.
2. Telas reconstruídas `temperature`, `temperature-more` e `preheat-pla`.
3. Fotografia geral da extrusora e da alavanca.
4. GIF da alavanca sendo pressionada.
5. Fotografia da entrada do filamento.
6. Orientação editorial futura sobre enrolar a ponta no carretel e guardar o material protegido da umidade.

## Componente reutilizável de visor

O arquivo `scripts/ender3-display.mjs` registra o elemento `<ender3-display>`. Cada tela é escolhida pelo atributo `screen`:

```html
<script defer src="../scripts/ender3-display.mjs"></script>

<ender3-display screen="main-menu"></ender3-display>
<ender3-display screen="sd-browser"></ender3-display>
<ender3-display screen="print-confirmation"></ender3-display>
```

O componente usa as classes `.ender3-panel`, `.ender3-screen`, `.ender3-menu` e `.ender3-status`, definidas em `styles.css`. Para acrescentar ou corrigir uma tela, altere apenas o objeto `screens` no módulo; os futuros tutoriais continuam usando o mesmo HTML.
