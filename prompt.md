# PROMPT INICIAL — PROJETO STEFFANI

## 1. Contexto do projeto

Você irá criar o website profissional da **Steffani**, profissional da área de estética que vende **procedimentos** e **cursos/formações**.

O objetivo do site não é apenas apresentar informações. Ele precisa transmitir **autoridade, sofisticação, confiança e desejo**, conduzindo a pessoa de forma natural até uma ação de compra, agendamento ou interesse em um curso.

A cliente descreveu o que espera do site com três ideias principais:

- **Fácil acesso**
- **Sofisticado**
- **Estratégico**

Ela quer que o visitante tenha a sensação de:

> “Quero fazer esse procedimento”  
> ou  
> “Quero aprender isso com ela”

O site deve ser visualmente forte, porém nunca pesado, confuso ou excessivamente comercial.

---

## 2. Antes de começar

### Leia as skills instaladas relevantes

Use principalmente as skills relacionadas a:

- frontend design;
- UI/UX;
- design systems;
- responsividade;
- acessibilidade;
- motion;
- visual QA;
- anti-AI-looking UI;
- frontend architecture.

Aplique essas skills de forma prática ao projeto.

### Analise as referências

Existe uma pasta chamada:

`/referencias`

Ela contém imagens enviadas pela cliente.

**Analise todas as imagens dessa pasta antes de definir o layout.**

Não copie literalmente nenhum layout.

Extraia delas:

- composição;
- ritmo;
- proporção entre texto e imagem;
- tipografia;
- espaçamento;
- hierarquia;
- uso de fotografia;
- estrutura das seções;
- forma de apresentar serviços;
- forma de apresentar processo;
- estilo de CTA;
- contraste entre seções.

As referências representam principalmente:

- minimalismo;
- editorial;
- moda;
- luxo discreto;
- marca pessoal;
- preto e branco;
- tons neutros;
- fotografia forte;
- layout sofisticado;
- bastante respiro;
- grids organizados;
- hierarquia limpa.

---

# 3. Direção visual

O site deve parecer uma mistura de:

**editorial de moda + marca pessoal premium + clínica/estética sofisticada + página estratégica de vendas**

Não deve parecer:

- template de SaaS;
- landing page genérica;
- site “feito por IA”;
- site de infoproduto agressivo;
- site feminino infantilizado;
- site rosa / “menininha”;
- site cheio de cards arredondados;
- site cheio de gradientes;
- site com glassmorphism desnecessário.

A cliente rejeitou referências que pareciam muito femininas ou “menininha”.

A sofisticação deve vir de:

- composição;
- fotografia;
- tipografia;
- espaço;
- contraste;
- alinhamento;
- ritmo visual.

Não de enfeites.

---

# 4. Paleta de cores

A base deve ser neutra e sofisticada.

### Cores principais

```css
--color-black: #111111;
--color-white: #FFFFFF;
--color-off-white: #F6F3EE;
--color-warm-white: #EEE8DF;
--color-brown: #5B4032;
--color-dark-brown: #2F231E;
--color-taupe: #B6A89C;
--color-muted-gold: #B18A57;
```

### Uso

**Preto**
- seções de impacto;
- títulos;
- rodapé;
- CTAs fortes;
- contraste.

**Branco / off-white**
- base principal;
- áreas com bastante respiro;
- conteúdo institucional;
- FAQs;
- blocos editoriais.

**Marrom**
- detalhes;
- fundos pontuais;
- elementos editoriais;
- divisões de seção;
- hover;
- pequenos blocos de destaque.

**Dourado fosco**
- usar MUITO pouco;
- linhas;
- detalhes finos;
- numeração;
- pequenos elementos de destaque.

Não transformar o site em preto + dourado genérico de “luxo”.

O dourado deve ser discreto e sofisticado.

---

# 5. Tipografia

A cliente gosta de tipografia sofisticada, porém deixou claro que **legibilidade é prioridade**.

Use no máximo duas famílias principais.

## Sugestão principal

### Headings
**Cormorant Garamond**

Uso:
- títulos grandes;
- títulos editoriais;
- números de processo;
- frases de impacto.

### Interface e corpo
**Manrope**

Uso:
- parágrafos;
- botões;
- menus;
- labels;
- cards;
- FAQ;
- informações práticas.

### Alternativa

Caso a Cormorant fique ornamental demais:

- Instrument Serif para headings;
- Inter ou Manrope para interface.

Evite:

- scripts;
- fontes manuscritas;
- fontes decorativas em textos;
- corpo serifado muito fino;
- peso extremamente light em textos pequenos.

---

# 6. Princípios de layout

## Equilíbrio

A cliente quer uma composição equilibrada:

- nem vazia demais;
- nem cheia demais.

Misture:

- áreas de respiro;
- fotografias;
- blocos informativos;
- pequenos detalhes gráficos.

## Ritmo

Não faça todas as seções com a mesma densidade.

Alterne:

**seção rica em conteúdo → seção limpa → seção visual → seção informativa → seção de impacto**

Exemplo:

- hero forte;
- categorias simples;
- seção visual;
- curso mais detalhado;
- processo limpo;
- resultados;
- conteúdo leve;
- vídeo;
- FAQ;
- CTA.

## Estrutura

Use grids fortes, alinhamento preciso e hierarquia clara.

A cliente gosta tanto de:

- estrutura organizada;
- blocos definidos;

quanto de:

- pequenos elementos orgânicos;
- composição menos rígida.

Portanto:

**a base deve ser estruturada, mas algumas imagens podem quebrar discretamente o grid.**

---

# 7. Fotografia

A imagem da Steffani é uma parte importante da venda.

Não limite fotos pessoais a uma seção “Sobre”.

Use fotografias dela em pontos estratégicos:

- hero;
- curso;
- seção de autoridade;
- transições;
- CTA;
- depoimentos;
- áreas editoriais;
- páginas de serviço.

As fotos devem participar da composição.

Evite simplesmente colocar:

`imagem à esquerda + texto à direita`

repetidamente.

Experimente:

- crops verticais;
- imagem ocupando borda;
- imagens sobrepostas;
- mosaicos;
- grids editoriais;
- recortes assimétricos controlados.

---

# 8. Experiência de navegação

O site precisa ser imediatamente compreensível.

A cliente gostou da ideia de:

- abas;
- categorias;
- “cartela” de opções;
- navegação rápida.

Logo no início deve ser fácil entender:

1. quem é a Steffani;
2. o que ela oferece;
3. como realizar um procedimento;
4. onde estão os cursos;
5. como entrar em contato.

Não esconda informação importante atrás de interações complicadas.

---

# 9. Estratégia comercial

O site deve vender o tempo todo, mas **sem parecer que está vendendo o tempo todo**.

Essa é uma regra central.

A pessoa deve ser conduzida naturalmente.

Use CTAs contextuais.

Exemplos:

- Conheça o procedimento
- Ver detalhes
- Quero agendar
- Conheça o curso
- Ver formação
- Entenda o método
- Ver resultados
- Quero saber mais
- Falar com a Steffani

Não repetir o mesmo botão em todas as seções.

---

# 10. Cross-sell

A cliente gosta da ideia de apresentar outros serviços ao final de uma área.

Crie blocos como:

### Talvez isso também seja para você

ou

### Continue explorando

ou

### Outros cuidados que podem combinar com você

Apresente de 2 a 4 opções relacionadas.

O objetivo é manter o usuário navegando e aumentar a descoberta dos serviços.

---

# 11. Página inicial — direção sugerida

Não trate esta estrutura como template rígido.

Use-a como orientação.

## Hero

O hero precisa comunicar imediatamente:

- Steffani;
- estética;
- autoridade;
- procedimentos;
- cursos.

Fotografia grande.

Título editorial forte.

Pouco texto.

No máximo dois CTAs principais.

Evite frases genéricas como:

> Realce sua melhor versão.

A menos que exista uma justificativa forte.

## Navegação rápida

Logo depois do hero, criar uma área visual para:

- Procedimentos
- Cursos
- Resultados
- Sobre
- Contato

Pode usar miniaturas/fotos.

Precisa parecer mais editorial que “dashboard”.

---

# 12. Procedimentos

A cliente quer conteúdo em vídeo mostrando procedimentos.

Criar uma área do tipo:

### Veja como funciona

Vídeo principal grande.

Ao lado ou abaixo:

- pequenos vídeos;
- etapas;
- informações rápidas;
- cuidados;
- detalhes relevantes.

A experiência deve passar segurança e conhecimento técnico.

---

# 13. Curso

O curso não deve parecer apenas “mais um produto”.

Apresentá-lo como uma jornada de aprendizado.

Usar uma seção de processo.

Exemplo:

### Sua jornada

**01 — Fundamentos**  
**02 — Técnica**  
**03 — Prática**  
**04 — Acompanhamento**  
**05 — Certificação**

Visualmente, pode utilizar:

- timeline;
- linhas;
- números grandes;
- composição editorial;
- scroll progressivo.

Evitar simplesmente cinco cards iguais.

---

# 14. Resultados

Quando houver material real:

- antes/depois;
- resultados;
- depoimentos;
- casos.

Nunca inventar resultados.

Nunca inventar números.

Nunca inventar clientes.

Se ainda não houver conteúdo real, use placeholders claramente identificados no código.

---

# 15. Sobre a Steffani

A cliente quer contar sua história.

A seção deve transmitir:

- autoridade;
- personalidade;
- experiência;
- proximidade.

Evite uma autobiografia enorme.

Pode combinar:

- retrato forte;
- texto curto;
- pequenos fatos;
- formação;
- filosofia profissional.

---

# 16. Serviços

Evite uma grade genérica cheia de cards.

Preferir:

- imagens;
- categorias;
- linhas;
- tabs;
- composição editorial;
- navegação por blocos.

Cada serviço deve apresentar rapidamente:

- nome;
- finalidade;
- benefício;
- ação.

---

# 17. FAQ

FAQ limpo.

Accordion simples.

Sem exagero visual.

Perguntas possíveis:

- Como funciona o procedimento?
- Existe recuperação?
- Quanto tempo dura?
- Como faço para agendar?
- Como funciona o curso?
- O curso oferece certificado?

Não invente respostas clínicas ou comerciais que não estejam no conteúdo fornecido.

---

# 18. CTA final

Evite um bloco enorme e agressivo.

Criar algo elegante.

Pode misturar:

- retrato;
- fundo escuro;
- título;
- dois caminhos.

Exemplo:

**Quero realizar um procedimento**  
**Quero conhecer os cursos**

---

# 19. Motion

O motion deve ser sofisticado e discreto.

Permitido:

- fade;
- reveal;
- parallax extremamente leve;
- clipping de imagem;
- hover em fotografia;
- linhas desenhando;
- pequenas transições;
- stagger.

Evite:

- elementos pulando;
- bounce;
- zoom exagerado;
- animações em tudo;
- efeitos que atrasem navegação.

O usuário nunca deve esperar uma animação terminar para acessar conteúdo.

---

# 20. Responsividade

Mobile não é uma versão espremida do desktop.

Redesenhe quando necessário.

No mobile:

- priorize fotografia;
- títulos menores mas ainda editoriais;
- CTA fácil de tocar;
- navegação clara;
- seções mais curtas;
- grids convertidos adequadamente;
- vídeos responsivos.

Evite carrosséis para tudo.

---

# 21. Acessibilidade

Garantir:

- contraste;
- tamanho mínimo confortável;
- navegação por teclado;
- focus states;
- labels;
- semântica HTML;
- alt text;
- botões claros;
- links distinguíveis;
- preferência de reduced motion.

Não usar dourado claro em texto pequeno sobre fundo claro.

---

# 22. Regras anti “AI UI”

NÃO:

- colocar tudo dentro de cards;
- usar rounded-xl em tudo;
- usar glassmorphism;
- usar blur sem motivo;
- usar gradientes aleatórios;
- usar ícones em toda linha;
- usar pills demais;
- centralizar todas as seções;
- repetir layouts;
- usar blobs decorativos genéricos;
- exagerar nas sombras;
- usar textos genéricos de IA;
- criar métricas falsas;
- inventar depoimentos;
- inventar certificações;
- inventar procedimentos;
- inventar preços.

---

# 23. Qualidade visual esperada

Antes de considerar uma página pronta:

1. compare com as imagens em `/referencias`;
2. analise alinhamentos;
3. confira espaçamento;
4. confira tipografia;
5. confira densidade;
6. confira responsividade;
7. confira legibilidade;
8. confira consistência;
9. procure elementos com “cara de template”;
10. elimine qualquer componente genérico desnecessário.

Pergunte:

> Isto parece uma marca pessoal premium ou apenas um template bonito?

Se parecer template, refine.

---

# 24. Desenvolvimento

Criar componentes reutilizáveis sem transformar tudo em abstração.

Manter:

- estrutura clara;
- código legível;
- componentes pequenos quando fizer sentido;
- tokens centralizados;
- imagens otimizadas;
- carregamento eficiente;
- boa performance.

Não sacrificar qualidade visual para criar componentes genéricos demais.

---

# 25. Conteúdo

Não invente conteúdo sensível ou comercial.

Quando não houver:

- preço;
- nome exato de procedimento;
- duração;
- dados profissionais;
- certificações;
- métricas;
- depoimentos;
- resultados;

use placeholders temporários claramente identificados.

A prioridade inicial é criar:

**estrutura + direção visual + UX + sistema de design.**

---

# 26. Primeira tarefa

Antes de implementar a página inteira:

1. Leia todas as imagens em `/referencias`.
2. Leia as skills relevantes.
3. Identifique os padrões principais das referências.
4. Defina o design system.
5. Defina grid, tipografia, cores e spacing.
6. Planeje as seções da Home.
7. Construa primeiro:
   - navbar;
   - hero;
   - navegação rápida / serviços.
8. Faça uma revisão visual.
9. Somente depois continue para as demais seções.

Não construa o site inteiro de uma vez sem validar a linguagem visual inicial.

---

# Objetivo final

O resultado deve transmitir:

**sofisticação sem ostentação**  
**minimalismo sem vazio**  
**autoridade sem frieza**  
**venda sem agressividade**  
**feminilidade sem infantilização**  
**modernidade sem tendências genéricas**

A Steffani deve ser o centro da marca.

O design deve valorizar sua imagem, seus resultados, seus procedimentos e seu conhecimento profissional.
