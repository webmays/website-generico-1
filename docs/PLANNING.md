# Planejamento — Steffani Website

## Objetivo
Criar um website profissional focado na venda de procedimentos e cursos da Steffani, transmitindo autoridade, sofisticação e desejo, sem parecer uma landing page genérica. O design deve ser minimalista, editorial e intuitivo.

## Público
Mulheres adultas em busca de estética e procedimentos premium, além de profissionais buscando cursos e formação na área.

## Referências Analisadas
- **Padrões Encontrados:** Minimalismo com espaços de respiro, uso estratégico de preto para contraste, branco/off-white como base, marrom para detalhes e fotografia ocupando papel central (composições editoriais, cortes verticais e detalhes fotográficos).
- **Direção Visual:** Sofisticado, moderno, feminino adulto (sem excesso de rosa, focado em tons neutros), navegação intuitiva e fluida.

## Sitemap
1. **Home** (Navegação principal e apresentação)
2. **Procedimentos** (Detalhes, vídeos e CTA)
3. **Cursos** (Jornada, etapas e certificação)
4. **Sobre** (Steffani, autoridade e filosofia)
5. **Contato / Agendamento**

## Estrutura da Home
- Navbar
- Hero (Fotografia forte, mensagem curta, nome Steffani)
- Navegação Rápida
- Procedimentos em Destaque
- Foto de Autoridade
- Cursos (Apresentação como jornada)
- Processos em Etapas
- Resultados (Sem dados irreais, uso de placeholders temporários se necessário)
- Sobre Steffani
- Depoimentos
- FAQ
- CTA Final
- Footer

## Arquitetura e Stack
- **Framework:** Next.js (App Router)
- **Estilização:** Tailwind CSS (Customizado com design tokens)
- **Animações:** Motion discreto (Framer Motion ou CSS Transitions respeitando prefers-reduced-motion)

## Design System
- **Cores:**
  - Base: `#111111` (Black), `#FFFFFF` (White), `#F6F3EE` (Off-white), `#EEE8DF` (Warm white)
  - Detalhes: `#5B4032` (Brown), `#2F231E` (Dark brown), `#B6A89C` (Taupe)
  - Destaque sutil: `#B18A57` (Muted gold)
- **Tipografia:**
  - Headings: `Cormorant Garamond` (ou `Instrument Serif`)
  - Interface: `Manrope` (ou `Inter`)

## Estratégia de Conversão
- CTAs sutis e variados (ex: "Conheça o procedimento", "Quero agendar", "Falar com Steffani")
- Cross-sell estratégico ao fim das seções ("Continue explorando", "Conheça também")
- Venda guiada pela jornada e autoridade.

## Etapas de Implementação
1. Configuração de repositório, dependências e estrutura de pastas.
2. Definição do Design System em CSS/Tailwind (Cores, Tipografia, Espaçamento).
3. Criação de componentes base (Layout, Navbar, Footer, Botões).
4. Implementação da Home.
5. Integração de páginas internas e navegação.
6. Refinamento responsivo e acessibilidade (Visual QA).
7. Ajustes finos de motion e performance.
