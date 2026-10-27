# 🧠 AI_CONTEXT.md — Diretrizes de Arquitetura AI-First & Manutenibilidade (Padrão Webmays)

> **Este arquivo é o mapa mental oficial do projeto Steffani Website para qualquer sessão de Inteligência Artificial.**  
> Antes de realizar qualquer modificação, adição de componente, ajuste de estilo ou alteração de rotas, **leia atentamente este documento**.

---

## 1. 🎨 Resumo do Design System Oficial

O projeto segue uma estética **editorial, minimalista, de alto padrão e luxo discreto**, concebida para transmitir autoridade e confiança nos serviços e cursos da Steffani.

### 1.1 Paleta de Cores (`@theme static`)
Mapeada em `src/styles/index.css` e consumida nativamente por classes Tailwind v4:

| Token Tailwind | Valor Hex | Finalidade / Aplicação |
| :--- | :--- | :--- |
| `bg-black` / `text-black` | `#111111` | Preto profundo: textos principais, títulos, CTA dark e contraste |
| `bg-white` / `bg-cream` | `#FAF8F5` | Branco creme / marfim editorial (substitui o branco frio/estéril) |
| `bg-off-white` / `text-off-white` | `#F6F3EE` | Fundo principal da página e cabeçalho (tom areia/editorial suave) |
| `bg-warm-white` | `#EEE8DF` | Branco aquecido / linho: seções intercaladas, cards e molduras |
| `text-brown` / `bg-brown` | `#5B4032` | Marrom sofisticado: cor de destaque institucional, botões e hover |
| `bg-dark-brown` | `#2F231E` | Marrom escuro: seções de autoridade, citação e footer |
| `bg-espresso` | `#261A13` | Marrom espresso profundo: contraste premium |
| `text-taupe` | `#B6A89C` | Taupe / Nude clínico: metadados, números de seção e labels |
| `text-muted-gold` | `#B18A57` | Dourado suave: números e linhas divisórias refinadas |
| `border-gold-border` | `#C5A059` | Borda dourada acetinada para botões de alto destaque |
| `bg-accent-yellow` | `#F7BF18` | Amarelo dourado vivo: sublinhado de destaque da Hero |
| `text-ochre` | `#B87A14` | Ocre dourado: indicador de seção ativa no scrollspy |
| `border-border` | `rgba(17,17,17,0.12)` | Borda padrão sutil para divisores e cards claros |

### 1.2 Regra das 3 Fontes Oficiais
Importadas via Google Fonts em `index.html` e registradas nas classes utilitárias do Tailwind:
1. **Títulos Principais e Destaques (`font-title` / `font-serif`):**
   - **`Cormorant Garamond`** (com fallback para `Playfair Display`, serif).
   - Uso: Títulos Didone, nomes da marca, citações e números de passos/procedimentos.
2. **Subtítulos, Botões e Metadados (`font-subheading` / `font-sans`):**
   - **`Montserrat`** (com fallback para `Manrope`, sans-serif).
   - Uso: Botões em pílula, itens da navbar, breadcrumbs, tags de categoria e labels em caixa-alta.
3. **Corpo de Texto e Leitura Contínua (`font-body`):**
   - **`Lora`** (com fallback serif/sans).
   - Uso: Parágrafos explicativos, detalhes de procedimentos, textos da biografia e respostas de FAQ.

### 1.3 Regras Rígidas de Acessibilidade (WCAG AA)
- **Área de Toque Mínima:** Todo botão, link de menu ou gatilho interativo DEVE ter altura mínima de `min-h-[48px]` (preferencialmente `52px`), garantindo navegabilidade mobile sem toques acidentais.
- **Tipografia Legível:** O tamanho de fonte padrão do corpo de texto nunca deve ser inferior a `16px` (`1rem`) em dispositivos móveis.
- **Contraste Seguro:** Nunca usar texto claro sobre fundos claros ou texto escuro sobre fundos pretos/marrom escuro.
- **Semântica:** Manter `aria-label`, `aria-expanded` e `aria-controls` nos botões de navegação e acordions.

---

## 2. 💎 Regra de Ouro Visual (Identidade Não-Genérica)

> ⚠️ **AVISO PARA IAs:** É ESTRITAMENTE PROIBIDO transformar este projeto em um template SaaS ou landing page genérica de marketing digital.

1. **Primeira Seção Detalhada e Poderosa:**
   - A **Hero** e a seção de **Autoridade** possuem composição assimétrica complexa, tipografia editorial de grande porte e o carrossel em arco radial contínuo (roleta perpétua).
2. **Seções Seguintes Minimalistas e Diretas:**
   - As dobras seguintes mantêm espaçamento generoso (`clamp(4rem, 7vw, 8rem)`), respiro visual, alinhamentos rigorosos e ausência de ruído.
3. **O Que É Proibido (Regras Anti-AI-UI e Anti-Glassmorphism):**
   - ❌ **Proibido:** Branco puro sólido estéril (`#FFFFFF`) em superfícies principais, cabeçalho ou fundos.
   - ❌ **Proibido:** Efeito **glassmorphism**, desfoques (`backdrop-filter: blur`), transparências excessivas que lavem elementos ou fundos translúcidos em menus.
   - ❌ **Proibido:** Botões fantasmas ("ghost buttons") transparentes sem preenchimento ou com bordas finas lavadas que pareçam desbotadas ou desprovidas de cor.
   - ❌ **Proibido:** Sombras neon com brilho difuso branco/azul de IA (`box-shadow: 0 0 25px rgba(...)`).
   - ❌ **Proibido:** Criar seções de 3 colunas densas lotadas de ícones genéricos (estética corporativa tech/SaaS).
   - ❌ **Proibido:** Gradientes coloridos aleatórios, fundos roxos (*Purple Ban*) ou estética infantilizada com excesso de rosa.
   - ❌ **Proibido:** Cards empilhados genéricos com `rounded-xl` uniforme.

4. **Regra de Cores Sólidas em Tons Creme para Branco:**
   - ✅ **Superfícies Claras:** Utilizar tons de creme e marfim para branco (`#FAF8F5`, `#F6F3EE`, `#EEE8DF`), garantindo atmosfera de linho e areia de alta sofisticação.
   - ✅ **Cabeçalho / Menus:** Fundo em tom creme/off-white (`#F6F3EE`), sólido e opaco, sem transparência e sem branco frio hospitalar.
   - ✅ **Botões:** Preenchimento sólido rico (Preto `#111111`, Marrom `#5B4032`, Creme `#FAF8F5` com borda preta de 2px, ou Off-white `#F6F3EE`).

---

## 3. 📂 Mapa Mental de Arquivos (Arquitetura)

```text
c:\Users\senko\Desktop\Steffani website\
├── AI_CONTEXT.md               <- [ESTE ARQUIVO] Mapa mestre para Inteligências Artificiais
├── react-tailwind-migration.md  <- Diário de bordo da migração técnica
├── vite.config.js              <- Configuração do Vite + React + Tailwind v4
├── index.html                  <- HTML5 semântico com pré-conexão e fontes do Google
├── legacy/                     <- Arquivos estáticos originais para comparação e fallback
└── src/
    ├── main.jsx                <- Ponto de entrada React (BrowserRouter + SmoothScrollProvider)
    ├── App.jsx                 <- Shell da aplicação (Header, Drawer, ScrollWidgets, Rotas, Footer)
    ├── styles/
    │   ├── index.css           <- Tailwind v4 (@theme static, camadas e tokens)
    │   └── globals.css         <- Design System em @layer components (layout, botões, animações)
    ├── context/
    │   └── SmoothScrollContext.jsx <- Engine Lenis Smooth Scroll sincronizado ao GSAP ScrollTrigger
    ├── hooks/
    │   ├── useHeaderScroll.js  <- Controle de scroll da navbar e shift dinâmico
    │   ├── useScrollspy.js     <- Lógica matemática do indicador de 3 níveis e trilha de borda
    │   └── useGsapReveals.js   <- Animações ScrollTrigger com limpeza automática
    ├── data/
    │   ├── siteContent.js      <- [SINGLE SOURCE OF TRUTH] Textos de todas as seções e contatos
    │   ├── proceduresData.js   <- [SINGLE SOURCE OF TRUTH] Todos os procedimentos e páginas internas
    │   ├── heroFan.js          <- Geometria das 16 fatias do carrossel em arco SVG
    │   ├── site.js             <- Re-export de retrocompatibilidade para siteContent
    │   ├── content.js          <- Re-export de retrocompatibilidade para siteContent
    │   └── procedures.js       <- Re-export de retrocompatibilidade para proceduresData
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx              <- Navbar com física Framer Motion e shift
    │   │   ├── MobileDrawer.jsx        <- Gaveta móvel com molas e stagger
    │   │   ├── ScrollSectionWidget.jsx <- Indicador flutuante de 3 níveis (desktop)
    │   │   ├── ScrollEdgeRail.jsx      <- Marcador dinâmico deslizante na borda direita
    │   │   └── Footer.jsx              <- Rodapé editorial institucional
    │   ├── sections/
    │   │   ├── HeroSection.jsx         <- Hero Didone + Arco Radial rotativo
    │   │   ├── ProceduresSection.jsx   <- Grid 2x2 com links para rotas internas
    │   │   ├── AuthoritySection.jsx    <- Filosofia de Atendimento e citação
    │   │   ├── CourseSection.jsx       <- Linha do tempo dos 5 passos do curso
    │   │   ├── VideoSection.jsx        <- Bloco de demonstração em vídeo
    │   │   ├── CasesSection.jsx        <- Casos clínicos e registros
    │   │   ├── AboutSection.jsx        <- Trajetória e perfil da Steffani
    │   │   ├── CrossSellSection.jsx    <- Cards de cuidados complementares
    │   │   ├── FaqSection.jsx          <- Accordion com fechamento alternado
    │   │   └── FinalCtaSection.jsx     <- Chamada final escura com links de WhatsApp
    │   └── ui/
    │       ├── Icons.jsx               <- Ícones SVG acessíveis e sem dependências
    │       └── SectionLink.jsx         <- Link inteligente para âncoras locais ou cross-page
    └── pages/
        ├── HomePage.jsx                <- Montagem da Landing Page completa
        ├── ProcedurePage.jsx           <- Página interna dinâmica (/procedimentos/:slug)
        └── NotFoundPage.jsx            <- Página 404 editorial elegante
```

---

## 4. 🚀 Guia Passo a Passo de Manutenção (Single Source of Truth)

### 4.1 Como Adicionar um Novo (5º) Procedimento
**NUNCA altere componentes JSX para cadastrar um novo serviço.**
1. Abra `src/data/proceduresData.js`.
2. Adicione um novo objeto no array `PROCEDURES` com a seguinte estrutura:
```javascript
{
  slug: "novo-tratamento",
  num: "05",
  title: "Nome do Tratamento",
  summary: "Resumo curto que aparece no card da Home (1 a 2 linhas).",
  imageId: "1570172619644-dfd03ed5d881", // ID do Unsplash ou URL direta
  alt: "Descrição acessível da imagem",
  category: "Face / Corpo / Pele",
  lead: "Texto introdutório marcante para a página interna do procedimento.",
  indications: [
    "Primeira indicação clínica",
    "Segunda indicação clínica",
    "Terceira indicação clínica"
  ],
  steps: [
    { title: "Avaliação", desc: "Descrição da etapa 1" },
    { title: "Aplicação", desc: "Descrição da etapa 2" },
    { title: "Finalização", desc: "Descrição da etapa 3" }
  ],
  facts: [
    { label: "Duração", value: "45 min" },
    { label: "Recuperação", value: "Imediata" },
    { label: "Resultado", value: "Em 7 dias" },
    { label: "Manutenção", value: "Semestral" }
  ],
  faq: [
    { q: "Pergunta frequente sobre o tratamento?", a: "Resposta explicativa e acolhedora." }
  ]
}
```
3. **Pronto!** Automaticamente:
   - O card aparecerá na Home com numeração `05`.
   - A rota dinâmica `/procedimentos/novo-tratamento` estará ativa, responsiva e com breadcrumbs.
   - O botão de agendamento montará o link do WhatsApp com mensagem pré-preenchida para o novo serviço.

### 4.2 Como Alterar Contatos, WhatsApp, E-mail ou Horários
1. Abra `src/data/siteContent.js`.
2. Edite o objeto `CONTACT_INFO`:
   - `whatsappUrl`: Link direto da API do WhatsApp.
   - `phoneDisplay`: Telefone formatado exibido na interface.
   - `email`: E-mail de atendimento.
   - `openingHours`: Lista de horários do footer.
3. Toda a aplicação atualizará instantaneamente.

### 4.3 Como Adicionar uma Nova Seção na Home
1. Crie o componente em `src/components/sections/NovaSecao.jsx` seguindo a estrutura semântica e os comentários `[AI-STYLE-RULE]`.
2. Registre os textos em `src/data/siteContent.js`.
3. Adicione a seção no array `SECTIONS` em `src/data/siteContent.js` se desejar que ela entre no indicador de rolagem (Scrollspy).
4. Importe e posicione o componente em `src/pages/HomePage.jsx`.

---

## 5. 🏷️ Dicionário de Tags Semânticas (`AI-Tags`)

Todo o código deste repositório utiliza tags padronizadas em comentários para guiar a IA e desenvolvedores:

| Tag | Local de Uso | Significado e Regra |
| :--- | :--- | :--- |
| `// [AI-FILE-PURPOSE]:` | 1ª linha do arquivo | Explica em 2 linhas a finalidade do arquivo, de onde ele consome dados e quais componentes afeta. |
| `// [AI-DO-NOT-BREAK]:` | Blocos sensíveis | Estrutura crítica (ex: rotas dinâmicas, classes do design system, scroll helpers, acessibilidade). **Não remover.** |
| `// [AI-EDIT-ZONE]:` | Blocos editáveis | Área segura para adicionar itens, trocar imagens, textos e novos links. |
| `// [AI-STYLE-RULE]:` | Antes de blocos visuais | Regra estética da seção (ex: fundo, cores permitidas, padding e botões). |
| `/** [AI-COMPONENT]: ... */` | Antes da declaração do componente | Documentação JSDoc formal com `props` esperadas e exemplo de uso. |

---

## 6. 🛡️ Protocolo de Build e Verificação
Após qualquer alteração no código:
1. Execute `npm run build` no terminal para certificar-se de que não há erros de compilação ou TypeScript/JSX inválido.
2. Certifique-se de que a página estática de fallback em `legacy/` permanece intocada para fins de auditoria visual.
