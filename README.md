# Rei da VSL - Arquitetura de Portfólios Unificados

Este repositório contém o código-fonte do ecossistema front-end do projeto "Rei da VSL". A arquitetura foi refatorada para um modelo Multi-Page Application (MPA) utilizando HTML, CSS (Vanilla) e JavaScript, servido e empacotado através do Vite. 

O objetivo desta transição foi eliminar a verbosidade e a dependência de frameworks baseados em estado (como Next.js e React) para páginas exclusivamente informacionais e voltadas para conversão (Landing Pages), garantindo performance máxima (Zero JavaScript overhead de UI) e controle absoluto sobre estilos e carregamento de assets.

## Estrutura do Ecossistema

O projeto está dividido em aplicações independentes, cada uma com seu respectivo escopo de negócios e sistema de design (Design System) aprovado na fase de planejamento:

- `/` (Raiz): Landing Page Principal (Home) com roteamento para formulários e subdiretórios.
- `/servico/`: Portfólio destinado a serviços do tipo Agência B2B. Implementado seguindo a estética e estrutura baseada na referência "AbacatePay", priorizando bordas arredondadas, gradientes suaves, sombras difusas e botões "pílula".
- `/infoproduto/`: Portfólio destinado a Infoprodutores e Lançamentos. Implementado seguindo o padrão "NetworkPRO", com foco no modo escuro (Dark Mode absoluto), fontes Grotesk, tipografia de alto contraste e uso da cor Roxo Neon como destaque interativo.
- `/nutra/`: Portfólio destinado a VSLs de encapsulados médicos e de saúde. Implementado no padrão Clínico, utilizando fundo branco imaculado, Azul Médico profundo e acentos em Dourado para transmitir autoridade e confiança cirúrgica.
- `/formulario.html`: Interface global de captação de leads.

## Memória e Planejamento (Essencial para IA)

Toda a fundamentação arquitetural, o processo de descobrimento de padrões visuais (Tokens) e a governança do projeto encontram-se armazenados no diretório estrito de `.planejamento/`. 

As próximas IAs ou mantenedores que vierem a trabalhar neste código DEVEM, impreterivelmente, ler os seguintes documentos antes de iniciar qualquer modificação:

1. `.planejamento/implementation_plan.md`: Contém a visão técnica e o histórico das abordagens arquiteturais validadas.
2. `.planejamento/aprendizados_referencias.md`: Contém as heurísticas e insights extraídos durante a análise de sites concorrentes.
3. `.planejamento/design-systems/`: Contém os arquivos Markdown (.md) documentando a paleta de cores exata, os estilos tipográficos e a linguagem visual para cada portfólio (Serviço, Infoproduto, Nutra). Não aplique estilos globais arbitrários sem consultar a diretriz específica do diretório em que está trabalhando.

## Contexto da Demanda e Visão de Negócio (Instrução Estratégica)

A diretriz originária para a refatoração do Rei da VSL baseou-se na modernização visual ("Visão 2025") e na qualificação eficiente dos leads. O mercado frequentemente apresenta objeções ou falta de entendimento do valor real do produto (ex: confundir "VSL" com "Criativo", ou buscar preços muito baixos, quando as VSLs partem de R$ 800 e combos de criativos de R$ 500).

Os pilares da demanda executada e do que está por vir exigem:
1. **Reconstrução da Landing Page e do Formulário (Quiz):** Modernização profunda da LP principal para filtrar melhor os clientes (focando em *leads* de alto *ticket*) e direcioná-los para um formulário qualificador. O objetivo final é salvar os dados em um Google Sheets e automatizar o follow-up via ferramenta n8n.
2. **Criação de 3 Portfólios Especializados:** Apresentar aos leads páginas setorizadas criadas visando alta conversão:
   - **Serviço (`/servico`):** Agências e B2B (Design SaaS Premium).
   - **Infoproduto (`/infoproduto`):** Lançamentos e Perpétuo (Design Dark/Neon).
   - **Nutra (`/nutra`):** Encapsulados (Design Clínico e Autoridade).

Qualquer desenvolvimento futuro deve considerar que o ecossistema serve estritamente para **filtrar clientes desqualificados, elevar drasticamente a percepção de valor (através de estética premium) e automatizar o funil de vendas.**

## Organização do Código-Fonte e Estilos Globais

A base de código utiliza folhas de estilo rigorosamente divididas para garantir coesão visual e evitar poluição de classes:

- `src/css/design-system.css`: Define variáveis CSS estritas (cores globais, espaçamentos, famílias tipográficas, grid base e transições).
- `src/css/components.css`: Componentes utilitários de ampla adoção (estrutura universal do cabeçalho de navegação, cards genéricos, formulários).
- `src/css/landing.css`: Estilos aplicados estritamente à Landing Page raiz, não importados nos subdiretórios de portfólio.
- `<diretório>/<nome>.css`: Cada portfólio carrega seu respectivo arquivo CSS final, que consome as variáveis do `design-system.css` mas sobrepõe suas particularidades visuais independentes.

## Instruções de Inicialização e Build

Para iniciar o projeto em ambiente de desenvolvimento, utilize o gerenciador de pacotes da sua preferência:

1. Instale as dependências através de `npm install`.
2. Inicie o servidor em modo de desenvolvimento executando `npm run dev`. Nota: devido a potenciais conflitos de processos legados na porta 3000, o Vite está programado para localizar portas adjacentes automaticamente (ex: 3001, 3002).
3. Para compilar o código visando produção, execute `npm run build`. O arquivo `vite.config.js` está explicitamente configurado via `rollupOptions` para reconhecer as múltiplas entradas HTML nos diretórios paralelos e processá-las adequadamente para a pasta `dist/`.

## Requisitos para Manutenção Futura

Para preservar a sanidade da base de código:
- Não reinstale o Next.js ou bibliotecas React no diretório raiz. A aplicação é Vanilla.
- Nunca adicione tags globais no `<style>` ou folhas genéricas que conflitem com `design-system.css`.
- Ao criar novos componentes de UI que possam ser reaproveitados em mais de um portfólio, adicione-os obrigatoriamente em `components.css`.
- Siga as especificações dos documentos no diretório de planejamento para manter a fidelidade estética e conversional desejada pelos gestores do projeto.
