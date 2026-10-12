# Plano de Refatoração & Hero Mobile — Steffani Ateliê Torres Beauty

> **Objetivo:** Limpeza profunda e refatoração do código CSS/HTML, seguida pela implementação do novo layout Hero 100% responsivo para smartphones, com o círculo na base de ponta a ponta e hierarquia de texto invertida.

---

## 1. Diagnóstico do Código Atual (Code Smell & Oportunidades)

### 1.1. CSS Fragmentado e Classes Mortas em `styles/globals.css`
- **Classes legadas sem uso:** `.hero-grid`, `.hero-photo-main`, `.hero-badge`, `.hero-cta-group` (restos do layout anterior que foram substituídos pela versão editorial Didone com arco radial).
- **Media queries duplicadas e conflitantes:** 
  - Bloco 1: `@media (max-width: 991px)` nas linhas ~1060-1102 (com transformações quebradas do estágio do carrossel).
  - Bloco 2: `@media (max-width: 1024px)`, `@media (max-width: 991px)`, `@media (max-width: 768px)` nas linhas ~1540-1650.
- **Vazamento visual no mobile:** O carrossel atual na coluna da direita invade a tela lateralmente e sobrepõe o botão hambúrguer e textos no smartphone.

### 1.2. Hierarquia do Conteúdo Mobile
- **Desktop atual:** Categoria ("Estética Avançada...") → Título ("Ateliê Torres Beauty") → Botões → Features → Contatos | Carrossel na direita.
- **Mobile exigido pelo usuário:**
  1. **Topo:** Título `"ATELIÊ TORRES BEAUTY"`
  2. **Abaixo do título:** Categoria `"ESTÉTICA AVANÇADA / CURSOS & ENSINO"`
  3. **Logo abaixo:** Botões `"Agendar Avaliação"` + `"Ver Procedimentos"`
  4. **Base da tela (Primeira Dobra):** Círculo rotativo de ponta a ponta do smartphone (100% responsivo).
  5. **Logo após o círculo:** Cards secundários (*Harmonização*, *Bioestimuladores*, *Cursos*) e contatos rápidos.

---

## 2. Metodologia de Execução (Fases)

### Fase 1: Limpeza & Refatoração (Clean Code & Simplify)
1. **Auditoria de remoção de código morto:**
   - Remover seletores `.hero-grid`, `.hero-photo-main`, `.hero-badge`, `.hero-cta-group` em `styles/globals.css`.
   - Limpar regras CSS duplicadas ou sobrescritas desnecessariamente.
2. **Consolidação das Media Queries:**
   - Unificar o breakpoint tablet/mobile principal (`max-width: 991px`) e telas pequenas (`max-width: 480px`).
   - Isolar a seção Hero em um bloco CSS moderno, modular e autodocumentado.

### Fase 2: Hierarquia Flex/Grid Mobile sem Quebrar o Desktop
1. Em `styles/globals.css`, configurar `.hero-content-col` no mobile com CSS Flexbox reordenado:
   - `order: 1` para `.hero-title`
   - `order: 2` para `.hero-meta-breadcrumb`
   - `order: 3` para `.hero-actions-row`
   - `order: 5` para `.hero-features-row` e `.hero-contacts-dock` (posicionados após o visual)
2. Ajustar tipografia fluida com `clamp()`:
   - Título legível, imponente e compacto: `clamp(2.3rem, 10.5vw, 3.2rem)`.
   - Espaçamento harmônico para garantir que a primeira dobra caiba perfeitamente no viewport mobile (sem empurrar o círculo para fora da tela).

### Fase 3: Geometria Responsiva do Círculo na Base Mobile
1. **Posicionamento e Dimensionamento do Arco:**
   - `.hero-visual-col` no mobile terá `order: 4`, posicionado na base da primeira dobra.
   - Largura: `100%` da largura da tela (`width: 100vw; margin-left: calc(-50vw + 50%);` ou container relativo centralizado).
   - O SVG rotativo será centralizado horizontalmente com a curvatura superior formando um domo/arco de ponta a ponta na base do smartphone.
   - `overflow: hidden` na seção para garantir zero scroll lateral horizontal no mobile.
2. **Animação Contínua:**
   - Preservar a rotação perpétua suave `rotateHeroFan` funcionando a 60fps/120fps em GPU com `will-change: transform`.

### Fase 4: Seção Pós-Círculo (Cards & Contatos)
1. Exibir `.hero-features-row` e `.hero-contacts-dock` logo abaixo do círculo na base, em formato de grid ou lista limpa com toques confortáveis (mínimo 44px de área de interação).
2. Transição visual suave para a próxima seção editorial.

### Fase 5: Verificação Rigorosa & Testes Visuais
1. **Testes automatizados com subagente de navegador:**
   - iPhone SE / Telas pequenas: 375x667
   - iPhone padrão: 390x844
   - iPhone Pro Max / Telas grandes: 428x926
   - Telas Android comuns: 412x915
2. **Teste de Não-Regressão Desktop:**
   - Verificar 1440x900 para garantir que o carrossel lateral direito e a navbar ajustada permaneçam 100% intactos.

---

## 3. Matriz de Responsabilidades dos Agentes

| Agente | Responsabilidade | Status |
|--------|------------------|--------|
| `@project-planner` | Estruturação e aprovação do plano formal | ✅ Concluído |
| `@frontend-specialist` | Refatoração CSS e implementação da geometria mobile | ✅ Concluído |
| `@test-engineer` | Verificação visual com subagente em múltiplos viewports | ✅ Concluído |
