# Unificação e Refatoração do Ecossistema Rei da VSL

O objetivo é centralizar as 3 páginas de portfólio (Serviço, Infoproduto, Nutra) sob um único projeto Vite (o `rei-da-vsl`), eliminando a necessidade de múltiplos repositórios (como o projeto Next.js atual). Cada página residirá em um diretório próprio (ex: `/servico/index.html`) dentro do projeto.

## Referências de Design Extraídas

### 1. Portfólio de Serviço (Referência: AbacatePay)
*   **Conceito:** Clean, elegante, profissional e confiável.
*   **Tipografia:** Fustat (Headings) e Inter Tight (Corpo/Botões).
*   **Paleta de Cores:** Verde Escuro (`#244c4e`), Azul Metálico (`#4c5267`), Cinza Claro (`#e2e7f1`), Branco (`#ffffff`) e Verde Destaque (`#66a25e`).
*   **UI/UX:** Uso massivo de botões pílula (`border-radius: 9999px`) e cartões com bordas suaves (`8px` a `12px`).

### 2. Portfólio de Infoproduto (Referência: NetworkPro)
*   **Conceito:** Impactante, moderno, voltado para conversão e autoridade.
*   **Tipografia:** Space Grotesk (Peso 900, muito uso de uppercase em títulos).
*   **Paleta de Cores:** Fundo Preto (`#000000`), Branco (`#ffffff`), Roxo Neon (`#9333ea`), e tons de cinza escuro/claro.
*   **UI/UX:** Cartões com `border-radius: 12px/16px`, contraste altíssimo, botões pílula.

### 3. Portfólio de Nutra (Referência: Imagem Anexada)
*   **Conceito:** Saúde, ciência, premium e conversão direta.
*   **Tipografia:** Fontes limpas e legíveis (ex: Inter ou Roboto).
*   **Paleta de Cores:** Fundo Azul Profundo, Destaques em Azul Elétrico e Dourado (para selos de garantia e atenção).
*   **Estrutura:** 
    *   Hero com frascos em destaque.
    *   Ingredientes em formato circular.
    *   Kits de venda com cartões brilhantes (glow effect no kit intermediário).
    *   Seções de benefícios alternando texto e imagem.
    *   Selo de garantia dourado.

## Workflow de Execução
1.  **Unificação:** Mover as lógicas das LPs para pastas dentro do `rei-da-vsl` (`/servico`, `/infoproduto`, `/nutra`).
2.  **Serviço:** Descartar a complexidade do Next.js e criar Vanilla HTML/CSS com o visual limpo do AbacatePay.
3.  **Infoproduto:** Criar do zero com estética dark/roxa baseada no NetworkPro.
4.  **Nutra:** Construir baseado na imagem, focando nos kits de conversão e apelo visual da área de saúde.
