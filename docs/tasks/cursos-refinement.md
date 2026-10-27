# Plano de Refinamento Visual — Seção de Cursos (#cursos)

## 1. Diagnóstico do Estado Atual
- **Header:** Tipografia do título (`Conheça os cursos`) e subtítulo estavam desproporcionalmente pequenas em relação à área total, com respiro vazio excessivo. Faltavam os ornamentos laterais de linha no eyebrow e o botão de ação rápida característicos da seção de Procedimentos.
- **Mini-cards internos:** Estavam com número heterogêneo de itens (Card 3 com 5 itens vs. outros com 4), rótulos longos que quebravam em múltiplas linhas, sem container padronizado (parecendo textos quebrados/flutuantes) e desalinhando a altura dos cards irmãos.
- **Alinhamento Geral ("Torto"):** A variação de texto e altura do conteúdo interno fazia com que os botões "Saiba mais" ficassem em alturas diferentes entre o card da esquerda e o da direita na mesma linha da grade.
- **Botões:** Necessidade de remover o glifo de seta (`→`) e deixar apenas o rótulo limpo `"Saiba mais"`.

---

## 2. Solução Arquitetural & Design System

### A. Cabeçalho Idêntico ao de Procedimentos
- **Eyebrow com ornamentos laterais:**
  `<span className="ornament-line" /> FORMAÇÃO QUE TRANSFORMA <span className="ornament-line" />`
- **Título Serifado de Alto Impacto:**
  Mesma escala de `.procedures-title-main` (`clamp(2.5rem, 4.5vw, 4.2rem)`, peso 500, letter-spacing refinado).
- **Subtítulo Envolvente & Proporcional:**
  Mesma escala de `.procedures-subtitle` (`clamp(1.05rem, 1.25vw, 1.22rem)`, max-width 700px).
- **Botão de Ação no Cabeçalho:**
  Botão pílula elegante igual ao de procedimentos (`btn-procedures-pill`): `"Consultar turmas no WhatsApp"`.
- **Espaçamento e Respiro Controlado:**
  Margens verticais harmoniosas idênticas a Procedimentos (`margin: 0 auto clamp(2rem, 3.2vw, 3.25rem)`), eliminando o vazio desconexo.

### B. Padronização Rigorosa dos "Mini-Cards" (4 por curso)
- Cada card terá **exatamente 4 mini-cards estruturados**.
- **Container estruturado:** Fundo sutil `#FAF8F5`, borda refinada `1px solid rgba(91, 64, 50, 0.09)`, cantos arredondados `12px`, padding `0.65rem 0.35rem`, altura fixa e idêntica em todos os cards (`min-height: 82px`).
- **Grade 4 colunas perfeitamente simétrica:** `display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.55rem;`.
- **Rótulos padronizados e concisos (sem quebras desordenadas):**
  - **Fadas in Action:** 1. Aulas práticas | 2. Modelos reais | 3. Certificado | 4. Suporte pós-curso
  - **Consultoria TBA:** 1. Presencial/Online | 2. Treino prático | 3. Correção técnica | 4. Suporte VIP
  - **Método Brow Boost:** 1. Brow Lamination | 2. Prática modelo | 3. Apostila inclusa | 4. Certificação
  - **Curso de Lash Lifting:** 1. Turma reduzida | 2. Prática real | 3. Material incluso | 4. Certificação

### C. Alinhamento Perfeito ("Grid Locking")
- Ambos os cards de cada linha terão altura travada (`display: flex; flex-direction: column; justify-content: space-between`).
- A linha dos mini-cards e o botão `"Saiba mais"` ficarão na mesma coordenada Y nos cards adjacentes.
- Botão padronizado sem seta: apenas `"Saiba mais"`, marrom suave sólido `#523B2E`.

---

## 3. Tarefas de Implementação
1. **[Data] `src/data/coursesData.js`:** Padronizar os 4 recursos de cada curso para 4 itens concisos e simétricos.
2. **[Componente] `src/components/sections/CourseSection.jsx`:**
   - Adicionar o padrão do cabeçalho com ornamentos (`.meta-label-ornament`) e botão pílula do WhatsApp no topo.
   - Atualizar a estrutura interna dos cards para a grade padronizada de mini-cards.
   - Remover as setas dos botões "Saiba mais".
3. **[CSS] `src/styles/courses.css`:**
   - Adicionar estilos para o cabeçalho idêntico ao de procedimentos.
   - Criar classes de mini-cards estruturados (`.course-mini-card`, `.course-mini-card-icon`, `.course-mini-card-label`).
   - Ajustar o alinhamento de base dos botões e o travamento de altura.
4. **[Verificação] Build & Navegador:**
   - Executar `npm.cmd run build`.
   - Executar subagente do navegador para capturar screenshot em 1440x900 e inspecionar alinhamento.
