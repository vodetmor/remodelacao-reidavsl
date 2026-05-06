# Design System Extraído: Network PRO

## 1. Identidade Visual e Comunicação de Marca
*   **Conceito (Vibe):** Impactante, imersivo, "Hacker/Elite", voltado puramente para performance, conversão e exclusividade. Foco absoluto no Dark Mode.
*   **Tom de Voz (Copy):** Agressivo, imperativo e ancorado em resultados rápidos e pertencimento de elite. Usa gatilhos de escassez e exclusividade de forma nativa no design.
*   **Sentimento Transmitido:** "Isso é o que há de mais avançado. Quem não está aqui, está perdendo."

## 2. Tipografia e Hierarquia Visual
A tipografia age como bloco de design principal, quase "esmagando" o layout de tanta presença.
*   **Fonte Primária (Headings):** Space Grotesk (Google Fonts).
    *   *Uso:* H1 (Hero), H2 e números focais (preço, dados estatísticos).
    *   *Peso:* Extra Bold (800) ou Black (900).
    *   *Estilo:* Letras Maiúsculas (Uppercase) na maioria dos títulos, com tracking negativo `-1px` ou `-2px`. Isso cria o "bloco monolítico" característico do Network PRO.
*   **Fonte Secundária (Body):** Inter ou Roboto.
    *   *Uso:* Descrição de módulos e itens da oferta.
    *   *Peso:* Regular (400) ou Medium (500).
    *   *Estilo:* Cinza com line-height em 1.5 para conforto.

## 3. Paleta de Cores e Tokens
Cores baseadas em altíssimo contraste para impacto máximo em telas AMOLED/OLED.
*   `--color-bg-primary`: `#000000` (Preto Absoluto - O vazio que destaca as cores neon).
*   `--color-bg-elevated`: `#0a0a0a` a `#121212` (Variações super sutis para destacar faixas ou cartões).
*   `--color-text-primary`: `#ffffff` (Branco Neve para queimar a retina em constraste com o preto).
*   `--color-text-secondary`: `#9ca3af` (Cinza 400 - Recua o texto de apoio para não brigar com o título).
*   `--color-brand-neon`: `#9333ea` (Roxo Neon Eletrizante - para os glows radiais que geram o clima cibernético).
*   `--color-cta`: Cores saturadas (ex: `#22c55e` Verde Vivo) ou Branco Sólido com texto preto para o botão "Assinar/Comprar".

## 4. UI/UX: Superfícies, Formas e Espaçamentos
*   **Botões Principais (CTAs):**
    *   *Forma:* Quadrados com bordas levemente suavizadas (`border-radius: 8px`) ou pílulas grandes se misturados. No estilo original, costuma ser sólido e pesado.
    *   *Hover:* Pode incluir um `box-shadow` que brilha na mesma cor do botão (ex: `0 0 20px rgba(34, 197, 94, 0.4)`).
*   **Cartões de Conteúdo (Módulos/Benefícios):**
    *   *Estilo:* Fundo transparente ou preto puro com bordas definidas.
    *   *Bordas Físicas:* `1px solid rgba(255,255,255, 0.1)` (Em sites assim, a borda "Hairline" brilhante no fundo escuro dá todo o charme técnico).
    *   *Border Radius:* `--radius-md: 12px` ou `16px`.
*   **Espaçamento (Grids):**
    *   Layout blococado. Uso de Grids com lacunas (`gap: 24px`) onde cada módulo se encaixa milimetricamente.

## 5. Elementos Interativos e Animações
*   **Glow Effects (O Segredo do Site):** O uso de sombras radiais gigantescas `radial-gradient` desfocadas com `blur(100px)` no fundo, geralmente em roxo neon, criando atmosferas atrás do logo, do título e das caixas dos produtos 3D.
*   **Imagens Poup-out:** As mockups dos produtos (smartphones, caixas 3D) saem do fundo escuro, acentuadas pelo glow neon.

## Referência Oficial
*   [https://www.networkpro.site/](https://www.networkpro.site/)
