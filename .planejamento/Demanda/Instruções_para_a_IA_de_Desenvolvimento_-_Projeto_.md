# Instruções para a IA de Desenvolvimento - Projeto Rei da VSL

## Objetivo Geral

Desenvolver e implementar soluções digitais para o "Rei da VSL" com foco em modernização, qualificação de leads e demonstração de capacidades de IA, seguindo as especificações detalhadas abaixo.

## Entregas

O projeto consiste nas seguintes entregas, a serem realizadas na ordem especificada:

1.  **Reconstrução do Formulário de Qualificação**: Implementar um novo formulário para qualificação de leads.
2.  **Refatoração da Landing Page Principal (reidavsl.com)**: Modernizar e reconstruir a página principal do "Rei da VSL".
3.  **Criação de 3 Páginas de Portfólio com IA**: Desenvolver três novas páginas de portfólio, destacando o uso de IA.
4.  **Implementação de Automação com n8n**: Configurar fluxos de follow-up e segmentação de leads.

---

## 1. Reconstrução do Formulário de Qualificação

### Objetivo

Criar um formulário de qualificação de leads que filtre e pré-qualifique os potenciais clientes antes do contato comercial, abordando problemas de desalinhamento de expectativas e conhecimento.

### Problemas Atuais a Resolver

*   **Desconhecimento sobre VSL e Criativo**: Muitos leads não distinguem VSL (Video Sales Letter) de criativo para anúncios, chegando com expectativas incorretas.
*   **Expectativa de Preço Baixa**: Leads frequentemente esperam preços muito abaixo do valor de mercado. Informar que VSLs iniciam em R$ 800 e criativos (combo com 5) em R$ 500.

### Requisitos Técnicos

*   **Armazenamento de Dados**: Salvar todas as respostas do formulário em uma planilha do Google Sheets associada à conta `jeronimoerei@gmail.com`.
*   **Design**: O formulário deve apresentar um visual moderno e intuitivo.
*   **Foco**: Priorizar a qualificação do lead em vez de apenas a captação.

### Campos Obrigatórios Sugeridos (a serem implementados)

*   **Tipo de Serviço**: Pergunta de múltipla escolha: "O que você precisa?" (Opções: VSL / Criativo / Não sei a diferença).
*   **Nicho/Produto**: Campo de texto: "Qual seu produto/serviço?".
*   **Orçamento**: Pergunta de múltipla escolha: "Você tem orçamento acima de R$ 800?" (Opções: Sim / Não).
*   **Experiência com VSL**: Pergunta de múltipla escolha: "Já fez VSL antes?" (Opções: Sim / Não).
*   **Como Conheceu**: Campo de texto: "Como nos encontrou?".

---

## 2. Refatoração da Landing Page Principal (reidavsl.com)

### Objetivo

Refatorar completamente a landing page principal do "Rei da VSL" (reidavsl.com) para refletir uma estética de 2025, incorporando a visão de "páginas feitas com IA" como um diferencial competitivo. O conteúdo existente no portfólio atual (`https://reidavsl.com/portfolio-de-pagina-de-vendas/`) deve ser migrado e adaptado ao novo design.

### Referências Visuais e Estruturais para o Novo Design

Analisar as seguintes URLs como inspiração para o layout, design e fluxo da nova LP principal, que deve ter uma visão "2025" e destacar o uso de IA:

*   **LP de Serviço (Referência de Design IA)**: `https://site03.reidavsl.com/`
*   **LP de Nutra/Infoproduto (Referência de Design IA)**: `https://site06.reidavsl.com/serum/`

### Diretrizes de Desenvolvimento

*   **Estética**: Atualizar o layout, copy e estrutura para uma aparência moderna e alinhada com as tendências de 2025, utilizando as referências de design de IA.
*   **Proposta de Valor**: Integrar a narrativa de "páginas feitas com IA" de forma proeminente na LP.
*   **Conteúdo**: Migrar e adaptar o conteúdo relevante do portfólio atual (`https://reidavsl.com/portfolio-de-pagina-de-vendas/`) para o novo design da LP principal.
*   **Qualidade**: A LP deve estar no mesmo nível de qualidade e persuasão das páginas de referência fornecidas.

---

## 3. Criação de 3 Páginas de Portfólio com IA

### Objetivo

Desenvolver três páginas de portfólio que demonstrem a capacidade do "Rei da VSL" em criar Landing Pages utilizando Inteligência Artificial, servindo como ferramenta de vendas para novos clientes. Estas páginas devem seguir o padrão de design das referências de IA.

### Referências Visuais e Estruturais para as Páginas de Portfólio

As páginas de portfólio devem seguir o estilo e a qualidade das seguintes referências de design de IA:

*   **LP de Serviço (Referência de Design IA)**: `https://site03.reidavsl.com/`
*   **LP de Nutra/Infoproduto (Referência de Design IA)**: `https://site06.reidavsl.com/serum/`

### Especificações das Páginas

Cada página deve simular uma Landing Page real para um nicho específico:

1.  **Nicho**: Prestador de Serviço (Ex: Agência, freelancer, consultor).
2.  **Nicho**: Infoproduto (Ex: Curso online, mentoria, e-book).
3.  **Nicho**: Nutra / Encapsulado (Ex: Suplemento, produto físico de saúde).

### Requisitos

*   **Realismo**: As páginas devem parecer LPs de clientes reais, com conteúdo e design convincentes para cada nicho.
*   **Branding**: Posicionar as páginas como parte do portfólio do "Rei da VSL".
*   **Diferencial IA**: Destacar implicitamente ou explicitamente que essas páginas foram "feitas com IA" como um argumento de venda.

---

## 4. Implementação de Automação com n8n

### Objetivo

Configurar fluxos de automação no n8n para monitorar leads e realizar follow-up automático, otimizando o processo de vendas.

### Funcionalidades

*   **Monitoramento**: Monitorar novas entradas na planilha do Google Sheets (onde os dados do formulário serão salvos).
*   **Follow-up Automático**: Enviar mensagens de follow-up para leads que preencheram o formulário, mas não entraram em contato posteriormente.
*   **Segmentação por Etiquetas**: Desenvolver fluxos automatizados baseados em etiquetas (ex: lead qualificado, lead desqualificado) para direcionar ações específicas.

### Prioridade

**Esta entrega possui baixa prioridade e deve ser iniciada SOMENTE após a conclusão e validação das entregas 1, 2 e 3.**

---

## Ordem de Execução Detalhada

1.  Desenvolvimento e integração do novo Formulário de Qualificação com Google Sheets.
2.  Refatoração e modernização da Landing Page principal (reidavsl.com), utilizando `https://site03.reidavsl.com/` e `https://site06.reidavsl.com/serum/` como referências de design e conteúdo para LPs feitas com IA. O conteúdo do portfólio atual (`https://reidavsl.com/portfolio-de-pagina-de-vendas/`) deve ser migrado.
3.  Criação das 3 Páginas de Portfólio (Prestador de Serviço, Infoproduto, Nutra/Encapsulado), seguindo o padrão de design das referências de IA (`https://site03.reidavsl.com/` e `https://site06.reidavsl.com/serum/`).
4.  Configuração dos fluxos de automação no n8n.

---

## Observações Importantes

*   A implementação do n8n é a **última etapa** do projeto.

---

*Documento gerado em 04/05/2026 por Manus AI.*
