# Design System — Projeto Rei da VSL (Tokens Extraídos)

## Atualizado: 2026-05-04

---

## 1. reidavsl.com — LP Principal + Formulário (BASE)

### Cores
| Nome | Hex | RGB | Uso |
|---|---|---|---|
| Background Principal | `#06071B` | rgb(6, 7, 29) | Fundo dark do site |
| Texto Principal | `#ffffff` | — | Sobre dark bg |
| Texto Dark | `#333333` | rgb(51, 51, 51) | Sobre light bg (mais usado: 851 ocorrências) |
| Texto Muted | `#8a8a8a` | rgb(138, 138, 138) | Subtextos |
| Accent Rosa | `#CC3366` | rgb(204, 51, 102) | Links, destaques (176 ocorrências) |
| CTA Laranja | `#F67B01` | rgb(246, 123, 1) | Botão submit do form |
| Hover Rosa CTA | `#E2498A` | rgb(226, 73, 138) | Hover do botão CTA |
| Botão Secundário | `#69727D` | rgb(105, 114, 125) | Botão "Fazer Orçamento" |
| Dourado Badge | `#F4C421` | rgb(244, 196, 33) | Social icons, badges |
| Glow Dourado | `rgba(244, 181, 16, 0.4)` | — | Box-shadow botão |
| Border Input | `#69727D` | rgb(105, 114, 125) | Inputs do formulário |
| Border Divider | `#D5D8DC` | rgb(213, 216, 220) | Accordion |

### Tipografia
- **Headings**: DM Sans, weight 600, sizes 52px/44px/26px/22px, uppercase nos maiores
- **Body**: DM Sans / Roboto, weight 400, 16-18px, line-height 1.4-1.88
- **Buttons**: DM Sans / Roboto, 18px, weight 400
- **Captions**: System font, 13-14px
- **Google Fonts**: Roboto, Roboto Slab, DM Sans (variable fonts: sim)

### Superfícies
- Border Radius: 10px (inputs, cards), 12px (cards), 20px (buttons, accordion), 25px (cards grandes), 180px (pill CTA), 50% (circle badges)
- Sombras: `rgba(244, 181, 16, 0.4) 0 0 32px -2px` (glow), `rgba(0, 0, 0, 0.33) 0 4px 12px` (elevation)

### Botão CTA (Form Submit)
```css
background: #F67B01;
color: #06071B;
padding: 15px 40px;
border-radius: 20px;
border: 1px solid #fff (top/left only);
font: 400 18px 'DM Sans';
/* hover: bg #E2498A, box-shadow rgba(255,255,255,0.4) 0 0 32px -2px */
```

### Botão Secundário (Orçamento)
```css
background: #69727D;
color: #06071B;
padding: 20px 40px;
border-radius: 180px;
box-shadow: rgba(244, 181, 16, 0.4) 0 0 32px -2px;
font: 400 18px 'DM Sans';
/* hover: bg orange, glow branco, scale(0.5 → animação) */
```

### Input
```css
background: transparent;
color: #ffffff;
border: 1px solid #69727D;
border-radius: 10px;
padding: 6px 16px;
/* focus: bg #ED552D, border #18012C */
```

### Espaçamento (Escala base 8px)
5, 6, 8, 10, 11, 15, 20, 22, 25, 30, 50, 80px

---

## 2. site03.reidavsl.com — Portfólio Serviço + Infoproduto

### Cores
| Nome | Hex | Uso |
|---|---|---|
| Primary Dark | `#003d4c` | Botões, headings |
| Accent Teal | `#5d9fab` | Links, bordas, sombras |
| Highlight Blue | `#87dbf0` | Destaques |
| Success Green | `#3b9058` | Botão CTA alternativo |
| Texto Muted | `#d0d0d0` | Subtextos |

### Tipografia
- Font: **Sora**, weight 400-700
- Hero: 42-50px, Body: 16-18px

### Botão
```css
padding: 20px 60px;
border-radius: 20px / 100%;
box-shadow: rgba(255,255,255,0.145) 0 0 5px 5px inset, #5d9fab 0 5px 0 0;
font: 700 18px 'Sora';
/* hover: scale(1.05) */
```

---

## 3. site06.reidavsl.com/serum — Portfólio Nutra

### Cores
| Nome | Hex | Uso |
|---|---|---|
| Primary | `#000000` | Textos |
| Surface | `#383d38` | Headings |
| Accent Verde | `#84998f` | Botões |
| Background | `#f0f2f0` | Fundo claro |
| Border | `#d5d8dc` | Divisores |

### Tipografia
- Font: **Poppins**, weight 400-700
- Hero: 46-63px, Body: 16-18px

### Botão
```css
padding: 20px 60px;
border-radius: 30px;
background: #84998f;
color: #f0f2f0;
font: 700 18px 'Poppins';
/* hover: bg #acad98 */
```
