# Plano de Implementação: Correção e Refinamento Premium (Rei da VSL)

Após análise rigorosa do `.planejamento`, do feedback do Jerônimo e da estrutura atual do projeto, trago o mapeamento do que foi feito, onde estamos e o que falta para atingirmos o nível exigido.

## 1. O que fizemos e Onde Estamos

**Estrutura Base:** Mudamos a abordagem de uma única aplicação para **4 aplicações separadas**. Isso permite deploys independentes e melhor gestão do portfólio.
*   **`rei-da-vsl`**: Landing Page Principal e Formulário Consultivo (Rodando na porta `5173`).
*   **`portfolio-servico`**: LP para Serviços baseada no modelo `agencia-camaleao` (Next.js) (Rodando na porta `3000`).
*   **`portfolio-infoproduto`**: LP para Infoprodutos (Rodando na porta `5174`).
*   **`portfolio-nutra`**: LP para Nutra/Encapsulados (Rodando na porta `5175`).

**Design System:** Extraímos e consolidamos os tokens de design das referências no arquivo `design-system-tokens.md`, focando na paleta Dark/Orange/Pink e tipografias DM Sans/Sora.

## 2. O que Falta (Correções com base no Feedback)

Jerônimo foi claro: **as páginas estão muito genéricas**. Precisamos aplicar sistemas mais sofisticados, mockups, efeitos e corrigir as chamadas.

### [Componente] Efeitos e UI Premium
Jerônimo solicitou um aspecto menos genérico.
- **[MODIFY] Mockups e Glassmorphism:** Integrar fundos em glassmorphism e mockups visuais nas seções de serviço.
- **[MODIFY] Efeito "vslplay":** Implementar miniaturas de vídeo estilo YouTube com botões de play vermelhos e "Assista no YouTube" nos depoimentos e seções de vídeo.

### [Componente] Ajustes de Copy e Estrutura
- **[MODIFY] Textos:** Trocar "locução" por "criativos dopaminéticos", remover "sound design" e adicionar "tráfego e funil estratégico". A lista final será: *vsl, criativo, tráfego, pagina de vendas, copy, edição profissional*.
- **[MODIFY] Vitrine de Serviços:** Embaixo de cada serviço (VSL, Criativo, LP), adicionar o botão/link: `"ver portfólio de [nicho] completo"`.

### [Componente] Depoimentos e Cores Específicas
- **[MODIFY] Depoimentos:** Garantir que o nome das pessoas seja visível e os rostos estejam em zoom. **Remover Daniel Penin.**
- **[MODIFY] Highlights:** Usar amarelo para "MÚLTIPLOS 7 DÍGITOS" e verde para os botões "Fazer Orçamento".

---

## 3. Próximos Passos (Ordem de Execução)

1.  **Refinar a Home (`rei-da-vsl`)**: Aplicar o efeito "vslplay" no hero/depoimentos, ajustar os textos conforme a lista atualizada e aplicar as cores específicas (Verde/Amarelo).
2.  **Melhorar o Formulário**: Garantir que as opções VSL (R$ 800) e Criativos (R$ 500) estejam perfeitamente alinhadas com o novo design.
3.  **Refinar as Páginas de Portfólio (`servico`, `infoproduto`, `nutra`)**: Remover o aspecto genérico aplicando o mesmo sistema premium (mockups, glassmorphism e links de "ver portfólio completo").
