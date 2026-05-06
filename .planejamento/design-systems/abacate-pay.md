# Design System Extraído: AbacatePay

## 1. Identidade Visual e Comunicação de Marca
*   **Conceito (Vibe):** "SaaS Premium", fintech amigável, minimalista, orgânico e absurdamente limpo. Uso extensivo de *White Space* (respiro) para transmitir luxo, clareza e zero atrito cognitivo.
*   **Tom de Voz (Copy):** Sofisticado, transparente, humano e empático. Foco na facilidade de uso e taxas competitivas, sem soar agressivo.
*   **Sentimento Transmitido:** "A plataforma é tão fácil de usar quanto parece, e somos confiáveis e inovadores."

## 2. Tipografia e Hierarquia Visual
A tipografia é o coração deste layout, usando pesos e espaçamentos precisos.
*   **Fonte Primária (Headings):** Fustat (Google Fonts).
    *   *Uso:* Títulos super elegantes (H1, H2, H3).
    *   *Peso:* SemiBold (600) ou Bold (700).
    *   *Tracking:* Letter-spacing levemente comprimido `-1px` ou `-1.5px` (Característica vital para o aspecto moderno/fintech).
*   **Fonte Secundária (Body/Buttons):** Inter Tight (Google Fonts) ou Inter.
    *   *Uso:* Subtítulos, parágrafos, inputs e botões.
    *   *Peso:* Medium (500).
    *   *Estilo:* Ultra clean, line-height gigante (1.6 a 1.8) para respiro de leitura.

## 3. Paleta de Cores e Tokens
Baseada na clareza extrema e toques "abacate" (orgânicos).
*   `--color-bg-main`: `#ffffff` (Branco Absoluto - dominância total).
*   `--color-bg-alt`: `#f6f8fa` (Cinza Gelo claríssimo para separar seções suavemente).
*   `--color-text-main`: `#121818` (Preto Slate / Carvão, não agride a vista como o #000).
*   `--color-text-muted`: `#4c5267` (Slate Azulado para microcópias e subtítulos finos).
*   `--color-brand-primary`: `#66a25e` (Verde Abacate Brilhante/Orgânico) ou `#22c55e`.
*   `--color-brand-secondary`: `#244c4e` (Verde Escuro Profundo para contraste).
*   `--color-borders`: `#e2e7f1` (Cinza muito sutil, quase invisível).

## 4. UI/UX: Superfícies, Formas e Espaçamentos
*   **Botões e Badges (Tags):**
    *   *Forma:* Pílula Absoluta (`border-radius: 9999px`).
    *   *Padding:* Extenso nas laterais para formar a pílula perfeita (ex: `16px 48px`).
    *   *Estilo:* Primários são cheios (Verde com texto branco), secundários são minimalistas (Outline verde ou texto com hover background).
*   **Cartões (Cards):**
    *   *Forma:* Retângulos muito limpos, sem bordas pesadas.
    *   *Border Radius:* `--radius-md: 16px` ou `--radius-lg: 24px`.
    *   *Box Shadow:* Sombras "macias" super difusas (ex: `box-shadow: 0 10px 40px rgba(0,0,0,0.03)`), criando a ilusão de flutuação em vez de caixas fechadas.
*   **Layout / Spacing:**
    *   Extremamente espaçado. Container principal contido (`max-width: 1200px`) com grandes respiros (`120px` a `150px` entre seções).

## 5. Elementos Interativos e Animações
*   **Microinterações (Hover):** Cartões sobem apenas `-2px` (`transform: translateY(-2px)`) e a sombra sutilmente dobra a opacidade. Extremamente orgânico.
*   **Ícones e Gráficos:** Estilo linha (Stroke 1.5px ou 2px) e UI Mockups flutuantes em vez de ilustrações 3D pesadas.

## Referência Oficial
*   [https://www.abacatepay.com/](https://www.abacatepay.com/)
