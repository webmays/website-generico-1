# 🧠 AI_CONTEXT.md — Diretrizes de Arquitetura AI-First & Manutenibilidade (Padrão Webmays)

> **Este arquivo é o mapa mental oficial do projeto TORRES BEAUTY ACADEMY para qualquer sessão de Inteligência Artificial.**
> Antes de realizar qualquer modificação, adição de componente, ajuste de estilo ou alteração de rotas, **leia atentamente este documento**.

---

## 1. 🎨 Resumo do Design System Oficial

O projeto segue uma estética **editorial, minimalista, de alto padrão e luxo discreto**, construída a partir do redesign TORRES BEAUTY ACADEMY: marrons escuros, neutros e frios, dourado champagne de assinatura e tipografia serifada com contraste itálico.

### 1.1 Paleta de Cores (tokens em `src/styles/globals.css` e `src/styles/index.css`)

| Token CSS | Valor Hex | Finalidade / Aplicação |
| :--- | :--- | :--- |
| `--bg-dark-main` | `#1C1917` | Espresso frio (Hero, CTA final) |
| `--bg-dark-surface` | `#262220` | Taupe escuro frio (Sobre, cards escuros, Rodapé) |
| `--bg-light-main` | `#F5F3EF` | Alabastro — fundo principal das seções claras |
| `--bg-light-surface` | `#EBE7E0` | Greige — containers e fundo de cards claros |
| `--text-light` / `--text-light-muted` | `#F7F5F2` / `#B8B0A8` | Textos sobre fundo escuro |
| `--text-dark` / `--text-dark-muted` | `#221E1C` / `#635B55` | Textos sobre fundo claro |
| `--accent-gold` / `--accent-gold-hover` | `#C99E67` / `#B58952` | Dourado de assinatura — CTAs, eyebrows em fundo escuro |
| `--accent-gold-on-light` | `#86673C` | Dourado escurecido para contraste AA sobre fundo claro |

**Regra de ouro:** ao ajustar a paleta, mude só os tokens acima (`:root` em `globals.css`); os CSS de seção (`hero.css`, `courses.css`, `salon.css`, `coursePremiere.css`) já consomem `var(--bg-dark-main)` etc., não cores fixas.

### 1.2 Tipografia (2 famílias, via Google Fonts em `index.html`)
1. **`--font-serif` (Cormorant Garamond):** `<h1>`, `<h2>`, logo `TORRES`, citações. Itálico (`<em>`) para o contraste intratítulo.
2. **`--font-sans` (DM Sans):** corpo, botões, eyebrows, navegação.

**Fórmula de cabeçalho de seção:** eyebrow em `.meta-label` (dourado) + `<h2>` com `<em>` via `<EditorialTitle text="Texto *em itálico*" />` (`src/components/ui/EditorialTitle.jsx`).

### 1.3 Botões (`src/styles/buttons.css` — fonte única)
Todos os botões têm `border-radius: 0`, `min-height: 48px` e preenchimento dourado (`.btn-primary`, `.btn-nav-cta`, `.btn-courses-pill` etc.) ou filete dourado sobre fundo escuro (`.btn-dark-outline`). Não declare cor de botão fora deste arquivo.

### 1.4 Acessibilidade
- Área de toque mínima `48px` em todo botão/link de navegação.
- Animações de scroll respeitam `prefers-reduced-motion` (ver §4.4).
- Foco visível em dourado (`:focus-visible`).

---

## 2. 📂 Mapa Mental de Arquivos

```text
c:\Users\senko\Desktop\Steffani website\
├── AI_CONTEXT.md                <- [ESTE ARQUIVO]
├── vite.config.js
├── index.html                   <- Fontes Cormorant Garamond + DM Sans
├── legacy/                      <- Fallback estático original (não tocar)
├── Referencias - Steffani/      <- Fora do git (.gitignore); inclui
│   └── Fontes-Imagens-Originais/   fotos em alta resolução usadas como
│                                   origem dos .webp servidos (recortar
│                                   de novo a partir daqui se precisar)
└── src/
    ├── main.jsx
    ├── App.jsx                  <- Shell, rotas (/procedimentos/* redireciona para /#procedimentos)
    ├── styles/
    │   ├── index.css            <- Tailwind v4 (@theme static) + ordem das camadas
    │   ├── globals.css          <- Tokens de cor, layout, cabeçalhos de seção, scroll reveal
    │   ├── buttons.css          <- [FONTE ÚNICA] Todas as variantes de botão
    │   ├── hero.css / procedures.css / results.css / salon.css / courses.css / coursePremiere.css
    ├── context/SmoothScrollContext.jsx  <- Lenis (sem GSAP)
    ├── hooks/
    │   ├── useHeaderScroll.js   <- Shift e estado `.is-scrolled` da navbar
    │   ├── useActiveSection.js  <- Scrollspy
    │   └── useScrollReveal.js   <- Animação de entrada via IntersectionObserver nativo
    ├── data/
    │   ├── siteContent.js       <- [SINGLE SOURCE OF TRUTH] Textos e contatos de todas as seções
    │   ├── proceduresData.js    <- [SINGLE SOURCE OF TRUTH] Os 13 procedimentos da Home
    │   └── coursesData.js       <- Cursos/mentorias e o card "Em Breve"
    ├── components/
    │   ├── layout/ (Header, MobileDrawer, Footer, BackToTop)
    │   ├── sections/
    │   │   ├── HeroSection.jsx       <- TORRES BEAUTY ACADEMY + foto (ver §3)
    │   │   ├── ProceduresSection.jsx <- Trilho arrastável + filtro por categoria
    │   │   ├── CasesSection.jsx      <- Galeria "Resultados" (6 itens, fotos+vídeos)
    │   │   ├── AboutSection.jsx      <- Sobre Steffani Torres
    │   │   ├── CourseSection.jsx / CoursePremiere.jsx
    │   │   ├── SalonSection.jsx / CrossSellSection.jsx / LocationSection.jsx / FinalCtaSection.jsx
    │   └── ui/
    │       ├── BrandLogo.jsx         <- Logo TORRES / beleza & ensino
    │       ├── EditorialTitle.jsx    <- Títulos com `*itálico*`
    │       ├── Icons.jsx / SectionLink.jsx
    └── pages/
        ├── HomePage.jsx          <- Monta todas as seções + useScrollReveal
        └── NotFoundPage.jsx
```

**Não existe mais** página individual de procedimento (`ProcedurePage.jsx`), modal de categoria, nem `procedure-page.css`/`procedure-cards.css` — tudo foi incorporado à `ProceduresSection` na Home.

---

## 3. 🚀 Guia de Manutenção

### 3.1 Como Adicionar/Editar um Procedimento
1. Abra `src/data/proceduresData.js`.
2. Edite ou adicione um objeto em `PROCEDURES` (`slug`, `title`, `group`, `summary`, `image`, `alt`). `group` precisa existir em `PROCEDURE_GROUPS`.
3. A foto deve estar em `public/images/procedimentos/<slug>.webp`, proporção 4:5 (640×800 recomendado). Gere com `sharp` a partir de uma foto real em `Referencias - Steffani/Fontes-Imagens-Originais/` — use apenas imagens fornecidas nas pastas, nunca recortes de PDF ou banco de imagens. Card sem foto: `image: null` (mostra painel marrom com o nome).
4. O card, o filtro e o link do WhatsApp (`getProcedureWhatsappUrl`) são gerados automaticamente.

### 3.2 Como Alterar Contatos, WhatsApp, E-mail ou Horários
Edite `CONTACT_INFO` em `src/data/siteContent.js`.

### 3.3 Como Trocar a Foto da Hero
1. Coloque a imagem original em `Referencias - Steffani/` (fora do git).
2. Gere 3 larguras em WebP com `sharp` (`640`, `1000`, `1400` — ver histórico de commits para o script).
3. Atualize `src/components/sections/HeroSection.jsx` (`src`/`srcSet`) e, se a proporção mudar, o `aspect-ratio` e `--hero-photo-edge` (cor medida nas bordas da foto) em `src/styles/hero.css`.

### 3.4 Como Adicionar uma Nova Seção na Home
1. Crie o componente em `src/components/sections/`.
2. Registre textos em `siteContent.js`.
3. Importe e posicione em `src/pages/HomePage.jsx`.
4. Se a seção tiver cabeçalho/cards que devem animar ao rolar, adicione os seletores correspondentes em `src/hooks/useScrollReveal.js` (`SELECTOR`) e no bloco "SCROLL REVEAL EDITORIAL" de `globals.css`.

---

## 4. 🛡️ Regras Técnicas

### 4.1 Imagens
- Todo asset servido ao navegador é `.webp` (gerado com `sharp`, qualidade 78–82).
- `public/images/` contém **apenas** o que é referenciado em `src/` — nada de fotos-fonte em alta resolução (ficam em `Referencias - Steffani/Fontes-Imagens-Originais/`, fora do git).
- `fetchPriority="high"` só na foto da Hero; `loading="lazy"` + `decoding="async"` em todo o resto.

### 4.2 Scroll Reveal (sem GSAP)
`useScrollReveal` (IntersectionObserver nativo) adiciona o atributo `data-revealed` (nunca classe: o React apagaria ao reescrever `className` dinamico, ex. FAQ aberto) na primeira vez que o elemento entra na viewport. Com `prefers-reduced-motion: reduce`, todos os itens recebem `data-revealed="instant"` imediatamente (sem `translateY`, só fade curto). Não reintroduza GSAP/ScrollTrigger — a dependência foi removida do `package.json`.

### 4.3 Botões e Cantos
`border-radius: 0` em todo o projeto. Qualquer variante nova de botão entra em `src/styles/buttons.css`, nunca em CSS de seção.

### 4.4 Protocolo de Build e Verificação
Após qualquer alteração:
1. `npm run build` — sem erros.
2. Testar 320/375/390/414/480/768/820/1024/1280/1366/1440px: sem rolagem horizontal, botões ≥ 48px.
3. Conferir que nenhuma imagem nova pesa mais que ~300KB e que `public/images/` continua enxuto (`du -sh public/images`).
4. O fallback estático em `legacy/` permanece intocado para fins de auditoria visual.
