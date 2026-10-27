// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Catálogo oficial de procedimentos estéticos extraído integralmente do PDF 'catalogo TBA.pdf' (Single Source of Truth).
// [AI-DO-NOT-BREAK]: O parâmetro `slug` define a rota dinâmica `/procedimentos/:slug`. O campo `num` é usado na ordenação e no layout.

const cardImage = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;
const heroImage = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1400&auto=format&fit=crop`;

// [AI-EDIT-ZONE]: Textos institucionais compartilhados das páginas internas de procedimento
export const PROCEDURE_PAGE_LABELS = {
  breadcrumbHome: "INÍCIO",
  breadcrumbProcedures: "PROCEDIMENTOS",
  photoBadge: "Protocolo Clínico Personalizado",
  ctaSchedule: "Agendar Este Procedimento",
  ctaSeeAll: "Ver Todos",
  indicationsMeta: "Diagnóstico Individual",
  indicationsTitle: "Para Quem é Indicado",
  stepsMeta: "Como Acontece",
  stepsTitle: "Etapas do Tratamento",
  faqMeta: "Esclarecimentos",
  faqTitlePrefix: "Perguntas Sobre",
  relatedMeta: "Continue Explorando",
  relatedTitle: "Outros Procedimentos",
  relatedAction: "Ver todos",
  relatedCardAction: "Conhecer procedimento",
  bannerMeta: "Você é o Seu Maior Investimento",
  bannerTitle: "Pronta para revelar a beleza natural do seu olhar?",
  bannerSubtitle: "Agende seu momento de cuidado exclusivo com mais de 10 anos de experiência e estudo facial personalizado.",
  bannerCta: "Agendar no WhatsApp"
};

// [AI-EDIT-ZONE]: 13 Procedimentos Oficiais Extraídos do Catálogo TBA (Steffani Torres)
export const PROCEDURES = [
  // ==========================================
  // 1. PACOTES EXCLUSIVOS (COMBOS DE CUIDADO)
  // ==========================================
  {
    slug: "glow-relax",
    num: "01",
    title: "Glow Relax",
    tagline: "Seu momento de princesa chegou!",
    category: "Pacotes Exclusivos",
    price: "R$ 110,00",
    duration: "1h30",
    summary: "Seu momento de princesa chegou! Design natural com henna, buço e queixo na linha, revitalização facial, massagem capilar e cappuccino. 1h30 de cuidado & amor!",
    imageId: "1522337360788-8b13dee7a37e",
    alt: "Glow Relax — Momento de princesa com massagem, design e cuidados faciais",
    lead:
      "Seu momento de princesa chegou! O Glow Relax é um verdadeiro ritual de pausa e afeto que reúne o alinhamento das sobrancelhas com henna, epilação delicada na linha, massagem capilar relaxante e um cappuccino acolhedor. 1h30 de puro cuidado & amor!",
    includes: [
      "Design Natural de Sobrancelhas",
      "Pigmentação com Henna",
      "Buço na Linha",
      "Queixo na Linha",
      "Revitalização Facial",
      "Massagem Capilar Relaxante",
      "Cappuccino Especial do Ateliê"
    ],
    indications: [
      "Quem busca alinhar as sobrancelhas e relaxar da correria do dia a dia",
      "Mulheres que valorizam momentos de autocuidado completo",
      "Quem tem sensibilidade a ceras e prefere epilação facial na linha",
      "Preparação para finais de semana, eventos ou renovação da autoestima"
    ],
    steps: [
      { title: "Acolhimento & Café", desc: "Recepção calorosa no ateliê com cappuccino e análise do formato natural do seu rosto." },
      { title: "Design & Henna", desc: "Marcação profissional personalizada, simetria facial e pigmentação vegetal com efeito sombreado suave." },
      { title: "Epilação na Linha", desc: "Remoção higiênica e precisa dos pelos do buço e queixo com linha 100% hipoalergênica." },
      { title: "Revitalização & Massagem", desc: "Revitalização cutânea calmante finalizada com massagem capilar desestressante no couro cabeludo." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 110,00" },
      { label: "Duração", value: "1h30 de amor" },
      { label: "Técnica", value: "Design + Henna" },
      { label: "Incluso", value: "Massagem + Café" }
    ],
    faq: [
      {
        q: "A henna fica muito escura no Glow Relax?",
        a: "Não! Trabalhamos com pigmentação vegetal de tom personalizado para o seu fototipo, garantindo acabamento sombreado elegante e natural."
      },
      {
        q: "A epilação na linha dói?",
        a: "A linha é suave, rápida e não machuca nem queima a pele como ceras quentes. O processo é muito delicado e seguro."
      },
      {
        q: "Quanto tempo dura o efeito do ritual Glow Relax?",
        a: "O alinhamento do design dura de 20 a 30 dias e a pigmentação da henna permanece na pele e fios por 7 a 15 dias, proporcionando praticidade prolongada."
      },
      {
        q: "Como funciona a revitalização facial e massagem capilar inclusas?",
        a: "Aplicamos dermocosméticos calmantes e hidratantes com massagem suave facial e estímulo circulatório no couro cabeludo, aliviando tensões e renovando o viço da pele."
      }
    ]
  },
  {
    slug: "glow-diamond",
    num: "02",
    title: "Glow Diamond",
    tagline: "Aqui você é Rainha! haha",
    category: "Pacotes Exclusivos",
    price: "R$ 250,00",
    duration: "2h30",
    summary: "Aqui você é Rainha! haha. Lash Lifting, henna, buço, revitalização facial + labial, massagem capilar e cappuccino. 2h30 de puro cuidado & amor!",
    imageId: "1512496015851-a90fb38ba796",
    alt: "Glow Diamond — Experiência completa com Lash Lifting, cuidados labiais e faciais",
    lead:
      "Aqui você é Rainha! haha. O Glow Diamond é a experiência VIP mais completa do Ateliê Torres. São 2h30 de imersão total com curvatura e tratamento dos cílios naturais (Lash Lifting), sobrancelhas delineadas, revitalização labial e facial, massagem capilar e todo o mimo que você merece.",
    includes: [
      "Lash Lifting (Curvatura e Nutrição de Cílios)",
      "Design com Henna",
      "Buço na Linha",
      "Revitalização Facial",
      "Revitalização Labial",
      "Massagem Capilar",
      "Cappuccino Acolhedor"
    ],
    indications: [
      "Mulheres que querem uma transformação visual marcante e 100% natural",
      "Quem ama cílios curvados e volumosos sem manutenção de extensões",
      "Quem precisa de um 'dia de rainha' para renovar a energia e a expressão",
      "Noivas, formandas, aniversariantes ou presentes especiais de autocuidado"
    ],
    steps: [
      { title: "Consultoria Facial", desc: "Mapeamento dos cílios e sobrancelhas para planejar o curvamento e o tom perfeito." },
      { title: "Lash Lifting & Nutrição", desc: "Curvamento técnico dos fios naturais desde a raiz, proporcionando efeito de rímel duradouro." },
      { title: "Design & Lábios", desc: "Aplicação da henna facial e tratamento de revitalização com hidratação labial profunda." },
      { title: "Relaxamento Final", desc: "Revitalização da pele do rosto, massagem capilar aromática e cappuccino servido na poltrona." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 250,00" },
      { label: "Duração", value: "2h30 intensas" },
      { label: "Destaque", value: "Lash Lifting" },
      { label: "Incluso", value: "Spa Facial & Labial" }
    ],
    faq: [
      {
        q: "Quanto tempo dura o efeito do Lash Lifting?",
        a: "A curvatura dura em média de 6 a 8 semanas, acompanhando o ciclo natural de crescimento e renovação dos seus cílios."
      },
      {
        q: "Posso usar rímel após o Glow Diamond?",
        a: "Sim! Após as primeiras 24 horas, você pode usar rímel e maquiagem normalmente, embora a maioria das clientes prefira o efeito natural já conquistado."
      },
      {
        q: "O procedimento danifica os cílios ou os lábios?",
        a: "Nenhum dano. O protocolo é enriquecido com aminoácidos e queratina nos cílios, enquanto os lábios recebem ácido hialurônico e emolientes de alta pureza."
      },
      {
        q: "Preciso ir sem maquiagem para o atendimento?",
        a: "Recomendamos vir com a pele e olhos limpos para otimizar o tempo da sessão, mas realizamos a higienização completa antes de iniciar cada etapa."
      }
    ]
  },
  {
    slug: "brow-boost",
    num: "03",
    title: "Brow Boost",
    tagline: "Sobrancelhas cheias, alinhadas e disciplinadas com kit pós-cuidados",
    category: "Pacotes Exclusivos",
    price: "R$ 150,00",
    summary: "Brow Lamination, Henna ou Tintura, Brow Therapy e Kit pós-cuidados incluso para manutenção em casa.",
    imageId: "1556228720-195a672e8a03",
    alt: "Brow Boost — Brow Lamination e terapia com kit de cuidados em casa",
    lead:
      "A revolução para quem sonha com sobrancelhas volumosas, alinhadas e cheias de personalidade. O Brow Boost combina Brow Lamination para remodelar a direção dos fios, coloração personalizada com henna ou tintura e a exclusiva Brow Therapy para nutrir profundamente. Acompanha kit pós-cuidados!",
    includes: [
      "Brow Lamination (Alinhamento dos Fios)",
      "Henna ou Tintura Profissional",
      "Brow Therapy (Nutrição e Fortalecimento)",
      "Kit Pós-Cuidados Incluso para Levar para Casa"
    ],
    indications: [
      "Sobrancelhas com fios rebeldes, crespos ou que crescem para baixo",
      "Sobrancelhas finas que desejam efeito de maior volume e espessura",
      "Quem ama o visual 'fluffy brows' moderno e despojado",
      "Pessoas com pequenas falhas que querem disfarçar sem micropigmentação"
    ],
    steps: [
      { title: "Relaxamento & Alinhamento", desc: "Aplicação de solução biológica para amaciar e pentear os fios na direção desejada." },
      { title: "Fixação & Neutralização", desc: "Fixação da nova estrutura dos fios, garantindo flexibilidade e facilidade para pentear." },
      { title: "Coloração & Terapia", desc: "Coloração com tintura ou henna e infusão de óleos vegetais e vitaminas da Brow Therapy." },
      { title: "Kit Pós Cuidados", desc: "Entrega e orientação do kit exclusivo de cuidados para manter o alinhamento impecável em casa." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 150,00" },
      { label: "Diferencial", value: "Kit Incluso" },
      { label: "Durabilidade", value: "4 a 6 semanas" }
    ],
    faq: [
      {
        q: "O que vem no Kit Pós Cuidados?",
        a: "O kit inclui escovinha esterilizada e sérum hidratante de nutrição capilar formulado para manter os fios flexíveis e saudáveis."
      },
      {
        q: "Os fios ficam colados na testa?",
        a: "Não! Os fios ficam maleáveis. Você pode penteá-los mais arrepiados para cima ou alinhados suavemente de acordo com seu humor do dia."
      },
      {
        q: "Quem tem fios muito grossos ou ondulados pode fazer?",
        a: "Com certeza! É exatamente a indicação principal: o Brow Boost disciplina os fios mais resistentes, permitindo moldar a direção com total facilidade."
      },
      {
        q: "Quais são os cuidados nas primeiras 24 horas?",
        a: "Evite molhar a área, sauna, vapor quente e atividade física intensa no primeiro dia para que a nova estrutura dos fios estabilize perfeitamente."
      }
    ]
  },
  {
    slug: "glow-lash",
    num: "04",
    title: "Glow Lash",
    tagline: "Curvatura magnética, cor intensa e mimo surpresa",
    category: "Pacotes Exclusivos",
    price: "R$ 150,00",
    summary: "Lash Lifting, Tintura, Spa Labial e Mimo (presente) especial preparado com carinho.",
    imageId: "1596704017254-9b121068fb31",
    alt: "Glow Lash — Lash Lifting, tintura de cílios e spa labial com mimo",
    lead:
      "Destaque magnético para o seu olhar com a naturalidade dos seus próprios cílios! O Glow Lash entrega curvatura elegante desde a raiz, tintura preta profunda que dispensa o curvex, um delicioso spa labial renovador e um MIMO especial 🎁 💝 preparado com todo o carinho pelo ateliê.",
    includes: [
      "Lash Lifting Profissional",
      "Tintura Preta Intensa para Cílios",
      "Spa Labial",
      "Mimo (Presente Especial 🎁)"
    ],
    indications: [
      "Quem tem cílios retos, claros ou voltados para baixo",
      "Mulheres que não se adaptam ou não querem a manutenção de extensão de cílios",
      "Quem pratica esportes ou frequenta praia/piscina e quer olhar sempre pronto",
      "Quem deseja acordar com olhar iluminado sem precisar de maquiagem"
    ],
    steps: [
      { title: "Higienização & Proteção", desc: "Proteção ocular e seleção do molde ideal para o comprimento dos seus cílios naturais." },
      { title: "Curvatura Técnica", desc: "Aplicação da fórmula que eleva os fios da raiz, criando efeito de abertura instantânea do olhar." },
      { title: "Tintura & Brilho", desc: "Pigmentação dos fios da base até as pontas com efeito rímel natural e hidratação profunda." },
      { title: "Spa Labial & Mimo", desc: "Esfoliação e hidratação dos lábios com entrega de um mimo especial preparado para você." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 150,00" },
      { label: "Especial", value: "MIMO Incluso 🎁" },
      { label: "Durabilidade", value: "6 a 8 semanas" }
    ],
    faq: [
      {
        q: "O Lash Lifting estraga os cílios naturais?",
        a: "Pelo contrário! A fórmula que utilizamos possui queratina e aminoácidos que nutrem e fortalecem a fibra dos seus cílios."
      },
      {
        q: "Precisa de manutenção quinzenal?",
        a: "Não! O Lash Lifting não precisa de manutenção. O efeito vai saindo suavemente conforme os fios naturais se renovam em 2 meses."
      },
      {
        q: "Quem usa lentes de contato pode realizar o procedimento?",
        a: "Sim! Apenas recomendamos retirar as lentes de contato durante a sessão para seu total conforto ocular e recolocá-las logo após."
      },
      {
        q: "O que é o Spa Labial incluso no pacote?",
        a: "É uma esfoliação nutritiva com cristais e aplicação de balm restaurador com efeito ultra hidratante, deixando a boca macia e com brilho saudável."
      }
    ]
  },

  // ==========================================
  // 2. DESIGN DE SOBRANCELHAS
  // ==========================================
  {
    slug: "design-sobrancelhas",
    num: "05",
    title: "Design de Sobrancelhas",
    tagline: "Análise facial completa, simetria e marcação profissional",
    category: "Sobrancelhas",
    price: "R$ 40,00",
    duration: "40 min",
    summary: "Análise facial completa, simetria e marcação profissional. Finalização com pinça e modelagem personalizada.",
    imageId: "1508214751196-bcfd4ca60f91",
    alt: "Design de Sobrancelhas — Marcação geométrica facial e pinça",
    lead:
      "Harmonia e expressão para o seu olhar. O design de sobrancelhas valoriza seus traços naturais, realça a sua beleza e proporciona mais simetria ao seu rosto, com um resultado elegante e personalizado.",
    includes: [
      "Mapeamento Facial e Simetria",
      "Alinhamento dos Arcos Naturais",
      "Limpeza e Epilação Manual com Pinça",
      "Penteado e Finalização Refrescante"
    ],
    indications: [
      "Quem busca valorizar o desenho natural sem afinar as sobrancelhas",
      "Manutenção periódica de sobrancelhas saudáveis e elegantes",
      "Pessoas que tiveram designs inadequados e buscam recuperação do formato"
    ],
    steps: [
      { title: "Estudo Facial", desc: "Análise anatômica dos pontos de início, ponto alto e cauda de acordo com seu formato de rosto." },
      { title: "Marcação e Aprovação", desc: "Desenho prévio mostrado no espelho para validação da simetria e espessura." },
      { title: "Limpeza Precisa", desc: "Remoção meticulosa com pinça esterilizada fio a fio sem puxar a pele." },
      { title: "Calmante", desc: "Aplicação de loção refrescante para acalmar a região e deixar o olhar impecável." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 40,00" },
      { label: "Duração", value: "40 min" },
      { label: "Foco", value: "Estudo Facial" },
      { label: "Frequência", value: "20 a 30 dias" }
    ],
    faq: [
      {
        q: "Vocês usam cera para o design?",
        a: "Priorizamos a pinça para máxima precisão e segurança dos tecidos ao redor dos olhos, evitando flacidez prematura."
      },
      {
        q: "O design afina minhas sobrancelhas?",
        a: "Não. Nosso princípio visagista é valorizar a espessura natural dos seus fios, limpando apenas os excessos para abrir o olhar com elegância."
      },
      {
        q: "Com qual frequência devo refazer o design?",
        a: "O intervalo recomendado é de 20 a 30 dias para acompanhar o ciclo dos pelos e manter o arco sempre alinhado e simétrico."
      },
      {
        q: "Tenho falhas nas sobrancelhas, o design resolve?",
        a: "O design organiza os fios e alinha o formato visualmente. Caso deseje preenchimento temporário ou permanente, recomendamos a Henna ou a Nanopigmentação."
      }
    ]
  },
  {
    slug: "design-com-henna",
    num: "06",
    title: "Design com Henna",
    tagline: "Pigmentação vegetal com efeito sombreado e definição natural",
    category: "Sobrancelhas",
    price: "R$ 50,00",
    duration: "50 min",
    summary: "Pigmentação vegetal com efeito sombreado, ideal para realçar a forma e dar definição natural.",
    imageId: "1597225244660-1cd128c64284",
    alt: "Design com Henna — Pigmentação vegetal sombreada",
    lead:
      "A combinação do estudo facial com a pigmentação vegetal de alta qualidade. Ideal para quem deseja preencher falhas visuais, dar mais densidade aos arcos e acordar todos os dias com as sobrancelhas definidas de forma harmônica e sem aspecto artificial.",
    includes: [
      "Mapeamento e Design Facial Completo",
      "Preparação e Higienização da Pele",
      "Aplicação de Henna com Degrade Suave",
      "Higienização e Aplicação de Fixador"
    ],
    indications: [
      "Sobrancelhas com falhas de pelos ou pelos muito ralos",
      "Quem quer simular o efeito de maquiagem suave no dia a dia",
      "Quem deseja testar um visual mais preenchido antes de uma micropigmentação"
    ],
    steps: [
      { title: "Design Pré-Henna", desc: "Marcação precisa dos limites das sobrancelhas para garantir simetria exata." },
      { title: "Mistura Personalizada", desc: "Colorimetria ajustada ao tom do seu cabelo e pele para evitar tons alaranjados ou pretos pesados." },
      { title: "Aplicação Ombré", desc: "Aplicação técnica com início translúcido e cauda mais delineada para acabamento natural." },
      { title: "Remoção e Limpeza", desc: "Remoção controlada no tempo exato para o tom desejado." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 50,00" },
      { label: "Duração", value: "50 min" },
      { label: "Efeito", value: "Sombreado Suave" },
      { label: "Durabilidade", value: "7 a 15 dias" }
    ],
    faq: [
      {
        q: "A henna mancha a pele?",
        a: "A henna fixa suavemente na pele e nos pelos, com durabilidade de 7 a 15 dias dependendo da oleosidade da sua pele e cuidados."
      },
      {
        q: "As sobrancelhas vão ficar muito escuras ou artificiais?",
        a: "Não. Personalizamos a mistura de tons e o tempo de ação para criar um degradê ombré com início translúcido e natural."
      },
      {
        q: "O que fazer para a henna durar mais tempo?",
        a: "Evite passar sabonetes abrasivos, tônicos adstringentes ou óleos demaquilantes diretamente sobre as sobrancelhas ao lavar o rosto."
      },
      {
        q: "A henna é indicada para quem tem pele oleosa?",
        a: "Sim, a henna pode ser feita perfeitamente em pele oleosa. A durabilidade na derme pode ser ligeiramente menor, mas nos fios mantém o tom por semanas."
      }
    ]
  },
  {
    slug: "design-com-tintura",
    num: "07",
    title: "Design com Tintura",
    tagline: "Coloração delicada dos fios para dar uniformidade e destaque",
    category: "Sobrancelhas",
    price: "R$ 60,00",
    duration: "50 min",
    summary: "Coloração delicada dos fios para dar uniformidade e destaque ao olhar.",
    imageId: "1570172619644-dfd03ed5d881",
    alt: "Design com Tintura — Coloração de fios para sobrancelhas uniformes",
    lead:
      "Especialmente pensada para quem quer colorir especificamente a estrutura dos pelos sem tingir a pele de forma evidente. A tintura profissional cobre fios brancos e claros, encorpa a textura da sobrancelha e traz um brilho sedoso e uniforme para o olhar.",
    includes: [
      "Design e Mapeamento Facial",
      "Limpeza Minuciosa com Pinça",
      "Coloração com Tintura Oftalmologicamente Testada",
      "Nutrição e Brilho para os Fios"
    ],
    indications: [
      "Quem tem fios brancos ou grisalhos nas sobrancelhas",
      "Loiras ou ruivas com pelos muito claros e transparentes",
      "Quem prefere efeito natural sem marcação na pele"
    ],
    steps: [
      { title: "Design Facial", desc: "Definição do desenho anatômico com pinça." },
      { title: "Aplicação da Tintura", desc: "Pigmentação direta na haste dos pelos com cor ajustada ao seu cabelo." },
      { title: "Ação Rápida", desc: "Tempo de ação controlado para fixação impecável sem sensibilizar a pele." },
      { title: "Finalização Nutritiva", desc: "Aplicação de óleo reparador que sela a cutícula do fio." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 60,00" },
      { label: "Duração", value: "50 min" },
      { label: "Alvo", value: "Fios & Brancos" },
      { label: "Durabilidade", value: "Até 30 dias" }
    ],
    faq: [
      {
        q: "Qual a diferença entre Henna e Tintura?",
        a: "A henna pigmenta a pele e os pelos criando efeito sombreado. A tintura colore exclusivamente os fios, perfeita para cobrir brancos sem manchar a pele."
      },
      {
        q: "A tintura cobre completamente pelos brancos?",
        a: "Sim, formulada especificamente para a haste capilar das sobrancelhas, ela pigmenta 100% dos fios brancos com cobertura homogênea."
      },
      {
        q: "Quanto tempo dura a coloração dos fios?",
        a: "A cor nos pelos dura em média de 25 a 35 dias, saindo de forma progressiva conforme o crescimento natural dos novos fios."
      },
      {
        q: "Causa ardência ou alergia na pele?",
        a: "Usamos formulações dermatologicamente e oftalmologicamente testadas, desenvolvidas com segurança e delicadeza para a região ocular."
      }
    ]
  },

  // ==========================================
  // 3. PROCEDIMENTOS LABIAIS & SPA
  // ==========================================
  {
    slug: "glow-lips-spa",
    num: "08",
    title: "Glow Lips Spa",
    tagline: "Ritual de spa labial com henna para lábios corados e macios",
    category: "Lábios",
    price: "R$ 65,00",
    duration: "45 min",
    summary: "Um ritual de cuidado e beleza para lábios mais macios, hidratados e com tonalidade naturalmente realçada por henna.",
    imageId: "1616683693504-3ea7e9ad6fec",
    alt: "Glow Lips Spa — Ritual labial hidratante com toque corado de henna",
    lead:
      "Um ritual de cuidado e beleza para lábios mais macios, hidratados e com uma tonalidade naturalmente realçada. O Glow Lips Spa combina etapas de spa labial com a aplicação de henna, proporcionando renovação, hidratação e aquele efeito de lábios corados e bem cuidados.",
    includes: [
      "Esfoliação Suave com Cristais de Açúcar",
      "Remoção de Células Mortas e Texturas Ressecadas",
      "Aplicação de Henna Labial em Tom Natural",
      "Máscara Seladora com Ácido Hialurônico e Óleos Vegetais"
    ],
    indications: [
      "Lábios ressecados, com pelinhas ou sem viço",
      "Quem ama o efeito 'lip tint' natural para o dia a dia",
      "Mulheres que querem lábios saudáveis sem micropigmentação invasiva"
    ],
    steps: [
      { title: "Esfoliação Labial", desc: "Movimentos circulares delicados para desobstruir e renovar a pele dos lábios." },
      { title: "Pigmentação Sutil", desc: "Aplicação de henna vegetal especial para lábios, criando aspecto coradinho saudável." },
      { title: "Nutrição Térmica", desc: "Máscara com ativos emolientes para selar a hidratação e maciez." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 65,00" },
      { label: "Duração", value: "45 min" },
      { label: "Efeito", value: "Lábios Coradinhos" },
      { label: "Sensação", value: "Ultra Hidratado" }
    ],
    faq: [
      {
        q: "A cor fica muito forte?",
        a: "Não, o resultado é um efeito 'boca corada natural', como se você tivesse acabado de usar um balm colorido."
      },
      {
        q: "Quanto tempo dura o efeito coradinho?",
        a: "A pigmentação temporária permanece suave de 3 a 7 dias, enquanto a hidratação profunda e a maciez perduram por semanas."
      },
      {
        q: "Lábios com rachaduras podem realizar o spa?",
        a: "Sim! O ritual remove gentilmente o excesso de peles mortas e nutre a barreira lipídica, acelerando a cicatrização e regeneração da mucosa."
      },
      {
        q: "Substitui a micropigmentação labial?",
        a: "É uma alternativa não invasiva e temporária. Ideal para ocasiões especiais ou para quem deseja experimentar lábios corados sem agulhas."
      }
    ]
  },
  {
    slug: "revigloss",
    num: "09",
    title: "Revigloss",
    tagline: "Hidratação profunda, maciez e glow imediato para os lábios",
    category: "Lábios",
    price: "R$ 90,00",
    duration: "50 min",
    summary: "Tratamento de revitalização labial que promove hidratação profunda, maciez e aparência saudável com glow imediato.",
    imageId: "1560066984-138dadb4c035",
    alt: "Revigloss — Revitalização profunda e glow labial",
    lead:
      "Um tratamento de revitalização labial que promove hidratação profunda, maciez e aparência mais saudável aos lábios. Um glow imediato para os lábios que repara microfissuras e restaura o volume hídrico celular, deixando a boca radiante e aveludada.",
    includes: [
      "Peeling Enzimático Labial Delicado",
      "Infusão de Complexo de Vitaminas e Ácido Hialurônico",
      "Massagem Estimuladora de Circulação",
      "Gloss Protetor com Barreira Lipídica"
    ],
    indications: [
      "Lábios constantemente rachados, descamando ou desidratados",
      "Quem deseja glow e viço radiante para ensaios fotográficos ou eventos",
      "Manutenção de lábios macios em dias frios ou com ar condicionado"
    ],
    steps: [
      { title: "Limpeza Enzimática", desc: "Retirada suave de impurezas sem agredir a mucosa labial." },
      { title: "Infusão Hialurônica", desc: "Penetração de ativos hidratantes que atraem água para os tecidos." },
      { title: "Selagem Glossy", desc: "Aplicação de sérum nutritivo para acabamento espelhado e luminoso." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 90,00" },
      { label: "Duração", value: "50 min" },
      { label: "Ação", value: "Hidratação Profunda" },
      { label: "Resultado", value: "Imediato" }
    ],
    faq: [
      {
        q: "É doloroso?",
        a: "Zero dor! É um procedimento totalmente confortável e relaxante, focado em nutrição e saúde dos tecidos."
      },
      {
        q: "O Revigloss dá volume aos lábios?",
        a: "Ele não injeta preenchedores, mas restaura a retenção de água nas células através do ácido hialurônico tópico, criando um aspecto óptico de lábios mais viçosos e macios."
      },
      {
        q: "Posso passar batom após o Revigloss?",
        a: "Pode, mas recomendamos desfrutar do acabamento iluminado e hidratado original por pelo menos algumas horas para absorção completa dos ativos."
      },
      {
        q: "Qual a durabilidade dos efeitos do Revigloss?",
        a: "O viço radiante é imediato e a maciez dura de 2 a 4 semanas, sendo ideal para manutenção periódica ou antes de eventos."
      }
    ]
  },
  {
    slug: "lips-glow-up",
    num: "10",
    title: "Lips Glow Up (Micro Labial)",
    tagline: "Mais cor, mais definição e durabilidade — sem perder a naturalidade",
    category: "Lábios",
    price: "R$ 689,00",
    duration: "2h00",
    summary: "Micropigmentação labial sofisticada que realça o contorno, devolve vida e uniformiza o tom com elegância duradoura.",
    imageId: "1516914943479-89db7d9ae7f2",
    alt: "Lips Glow Up — Micropigmentação labial natural e contorno perfeito",
    lead:
      "A transformação para quem deseja lábios mais definidos, uniformes e com uma coloração sofisticada e natural. A micro labial realça o contorno e devolve vida aos lábios, respeitando suas características naturais para um resultado elegante e personalizado. Mais cor, mais definição e durabilidade — sem perder a naturalidade.",
    includes: [
      "Design e Desenho do Contorno Labial",
      "Análise de Colorimetria Personalizada",
      "Micropigmentação Labial com Agulha Nano Descartável",
      "Anestésico Tópico de Alto Conforto",
      "Orientação Completa de Pós-Procedimento"
    ],
    indications: [
      "Lábios pálidos, esbranquiçados ou arroxeados",
      "Perda de nitidez no contorno e arco do cupido com o passar dos anos",
      "Assimetrias leves no formato labial",
      "Mulheres que querem praticidade diária de acordar prontas"
    ],
    steps: [
      { title: "Desenho & Escolha da Cor", desc: "Mapeamento minucioso do contorno e teste de cores (rosados, pêssego ou tons naturais)." },
      { title: "Anestésico Tópico", desc: "Aplicação de anestésico confortável que garante uma experiência tranquila." },
      { title: "Implantação Suave", desc: "Técnica translúcida 'aquarelle' que pigmenta delicadamente sem efeito de batom pesado." },
      { title: "Cicatrização", desc: "Nos primeiros dias a cor clareia cerca de 40%, resultando em uma tonalidade perfeita e natural." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 689,00" },
      { label: "Duração", value: "2 horas" },
      { label: "Durabilidade", value: "1 a 2 anos" },
      { label: "Técnica", value: "Micro Labial Aquarela" }
    ],
    faq: [
      {
        q: "A boca vai ficar muito vermelha ou inchada?",
        a: "Pode haver leve inchaço passageiro nas primeiras horas. A cor nos primeiros dias parece mais viva, mas clareia até 40% na cicatrização, ficando muito suave."
      },
      {
        q: "Dói fazer a micro labial?",
        a: "Usamos anestésico tópico de uso profissional durante todo o procedimento para proporcionar o máximo de conforto."
      },
      {
        q: "Quanto tempo dura a micropigmentação labial?",
        a: "A durabilidade média é de 1 a 2 anos, clareando suavemente com a renovação dérmica sem manchar ou mudar de tonalidade."
      },
      {
        q: "Posso escolher a cor do pigmento?",
        a: "Sim! Realizamos um estudo visagista com teste de tons rosados, corais, pêssego ou nude saudável para harmonizar perfeitamente com seu subtom de pele."
      }
    ]
  },

  // ==========================================
  // 4. PROCEDIMENTOS AVANÇADOS (MICROPIGMENTAÇÃO)
  // ==========================================
  {
    slug: "nano-brow-micro",
    num: "11",
    title: "Nano Brow - Micro",
    tagline: "Fios ultrafinos e delicados no sentido do crescimento natural",
    category: "Micropigmentação",
    price: "R$ 689,00",
    duration: "2h00",
    summary: "Técnica que reproduz fios ultrafinos e delicados, ideal para preenchimento de pequenas falhas sem aparência marcada.",
    imageId: "1534528741775-53994a69daeb",
    alt: "Nano Brow Micro — Fios ultrafinos hiper-realistas para sobrancelhas",
    lead:
      "Técnica que reproduz fios ultrafinos e delicados, acompanhando o crescimento natural dos pelos. Ideal para quem busca um resultado extremamente natural, com definição e preenchimento de pequenas falhas sem aparência marcada. Mais de 10 anos de estudo anatômico para desenhar fios que se confundem com os seus.",
    includes: [
      "Estudo Facial e Mapeamento Geométrico",
      "Colorimetria Estrita para Não Desbotar com Tons Indesejados",
      "Implantação de Fios Nanoscópicos com Lâmina / Agulha Descartável",
      "Anestésico Tópico Confortável",
      "Kit de Cuidados Domiciliares"
    ],
    indications: [
      "Falhas causadas por pinça excessiva no passado ou cicatrizes",
      "Sobrancelhas ralas que precisam de preenchimento invisível",
      "Quem preza pela discrição absoluta: ninguém diz que é micropigmentação"
    ],
    steps: [
      { title: "Visagismo e Mapeamento", desc: "Desenho prévio do fluxo natural dos seus pelos aprovado por você no espelho." },
      { title: "Pigmento Personalizado", desc: "Seleção do tom exato do fio para integração perfeita com os pelos existentes." },
      { title: "Traçado Nanofio a Fio", desc: "Construção delicada na primeira camada da derme com controle de profundidade milimétrico." },
      { title: "Revisão e Acompanhamento", desc: "Acompanhamento detalhado do processo de regeneração e cicatrização." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 689,00" },
      { label: "Duração", value: "2 horas" },
      { label: "Acabamento", value: "Fio a Fio Invisível" },
      { label: "Durabilidade", value: "10 a 18 meses" }
    ],
    faq: [
      {
        q: "Fica azulada ou avermelhada com o tempo?",
        a: "Não! Utilizamos pigmentos de grau avançado sem metais pesados e com técnica superficial, evitando qualquer alteração para tons indesejados."
      },
      {
        q: "Qual a diferença entre Nano Brow e micropigmentação antiga?",
        a: "A Nano Brow atua na camada mais superficial da derme, desenhando fios com espessura milimétrica idêntica aos pelos naturais, sem aspecto de bloco ou tatuagem."
      },
      {
        q: "O procedimento é doloroso?",
        a: "Aplicamos anestésico tópico profissional antes e durante a sessão, garantindo conforto e sensação quase imperceptível."
      },
      {
        q: "Como é a cicatrização da Nano Brow?",
        a: "Nos primeiros dias os fios parecem mais definidos e escuros. Entre o 5º e 10º dia ocorre a renovação superficial e, a partir de 25 dias, a cor final suave se assenta."
      }
    ]
  },
  {
    slug: "hibrid-brow-micro",
    num: "12",
    title: "Hibrid Brow - Micro",
    tagline: "A combinação perfeita entre fios e efeito sombreado",
    category: "Micropigmentação",
    price: "R$ 689,00",
    duration: "2h00",
    summary: "Une fios delicados da técnica Nano com o efeito sombreado da Shadow para uma sobrancelha mais preenchida e estruturada.",
    imageId: "1524504388940-b1c1722653e1",
    alt: "Hibrid Brow Micro — Combinação de fios nano e sombreado shadow",
    lead:
      "A combinação perfeita entre naturalidade e definição. Une fios delicados da técnica Nano com o efeito sombreado da Shadow, criando uma sobrancelha mais preenchida, estruturada e, ao mesmo tempo, natural. Ideal para quem deseja corpo e volume com a leveza dos fios na entrada.",
    includes: [
      "Mapeamento Híbrido (Fios + Sombra)",
      "Traçado de Fios Nanoscópicos no Início e Borda",
      "Sombreado em Pontilhismo no Corpo e Cauda",
      "Anestésico Tópico de Conforto",
      "Orientação Pós-Procedimento"
    ],
    indications: [
      "Quem tem poucos pelos ou sobrancelhas muito ralas",
      "Quem busca sobrancelhas bem estruturadas sem perder o início suave",
      "Mulheres que gostam de sobrancelhas marcantes para dispensar maquiagem diária"
    ],
    steps: [
      { title: "Mapeamento Duplo", desc: "Definição de onde entram os fios e onde a densidade sombreada deve atuar." },
      { title: "Nanofios na Entrada", desc: "Criação de fios soltos e leves no início para preservar a naturalidade do olhar." },
      { title: "Sombra Aveludada", desc: "Efeito sombreado suave na cauda para trazer densidade e definição duradoura." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 689,00" },
      { label: "Duração", value: "2 horas" },
      { label: "Técnica", value: "Nano + Shadow" },
      { label: "Durabilidade", value: "12 a 24 meses" }
    ],
    faq: [
      {
        q: "Por que escolher a Híbrida em vez de só fios?",
        a: "A técnica híbrida oferece maior durabilidade e disfarça falhas maiores com mais eficácia do que apenas os fios isolados."
      },
      {
        q: "O início da sobrancelha fica marcado?",
        a: "Não! Mantemos a entrada exclusivamente em fios ultrafinos e espaçados, concentrando a sombra suave apenas do arco em direção à cauda."
      },
      {
        q: "Quem tem pele mista ou oleosa pode fazer?",
        a: "Sim, a técnica híbrida é altamente recomendada para peles mistas, pois o sombreado na cauda confere excelente fixação e estabilidade ao pigmento."
      },
      {
        q: "Precisa de retoque?",
        a: "Realizamos uma avaliação após 30 a 45 dias para verificar a fixação completa e, se necessário, realizar pequenos ajustes de simetria e cor."
      }
    ]
  },
  {
    slug: "shadow-micro",
    num: "13",
    title: "Shadow - Micro",
    tagline: "Efeito esfumado e sofisticado com intensidade equilibrada",
    category: "Micropigmentação",
    price: "R$ 689,00",
    duration: "2h00",
    summary: "Efeito esfumado semelhante ao pó suave de maquiagem, trazendo intensidade e harmonia sem rigidez.",
    imageId: "1507003211169-0a1dd7228f2d",
    alt: "Shadow Micro — Efeito esfumado elegante para sobrancelhas",
    lead:
      "Técnica que proporciona um efeito esfumado e sofisticado, semelhante ao preenchimento suave de uma maquiagem. Ideal para quem deseja mais definição e intensidade, sem perder a harmonia e a naturalidade do olhar. O degradê começa translúcido e ganha densidade elegante na cauda.",
    includes: [
      "Desenho de Simetria e Degrade Ombré",
      "Pigmentação em Pontilhismo Suave (Pixel / Powder)",
      "Colorimetria Translúcida",
      "Anestésico Tópico",
      "Protocolo de Cicatrização Acompanhado"
    ],
    indications: [
      "Quem tem pele oleosa (onde fios isolados podem expandir com o tempo)",
      "Quem ama o visual de sobrancelha preenchida com sombra/maquiagem",
      "Quem tem pigmentação antiga desbotada e deseja cobrir com elegância"
    ],
    steps: [
      { title: "Desenho Ombré", desc: "Marcação com efeito degradê que não pesa o olhar nem aproxima as sobrancelhas." },
      { title: "Pixelização em Camadas", desc: "Deposição em micropontos que simulam o pó aveludado da maquiagem." },
      { title: "Finalização Luminosa", desc: "Limpeza e aplicação de restaurador dérmico." }
    ],
    facts: [
      { label: "Investimento", value: "R$ 689,00" },
      { label: "Duração", value: "2 horas" },
      { label: "Acabamento", value: "Efeito Sombra Powder" },
      { label: "Durabilidade", value: "12 a 24 meses" }
    ],
    faq: [
      {
        q: "A Shadow fica muito marcada no início?",
        a: "De jeito nenhum! A técnica Ombré Shadow tem o início 100% translúcido e suave, garantindo leveza e jovialidade à expressão."
      },
      {
        q: "A Shadow cobre micropigmentações antigas avermelhadas ou acinzentadas?",
        a: "Na maioria dos casos conseguimos neutralizar o tom residual com colorimetria avançada e cobrir com o efeito esfumado. Avaliamos cada caso presencialmente."
      },
      {
        q: "Qual a durabilidade da técnica Shadow?",
        a: "Possui uma das maiores durabilidades da micropigmentação, variando entre 12 e 24 meses com clareamento uniforme e sem alterações de cor."
      },
      {
        q: "Como cuidar das sobrancelhas logo após o procedimento?",
        a: "Orientamos higienizar com soro fisiológico, não puxar casquinhas e aplicar a pomada cicatrizante recomendada durante os primeiros 7 a 10 dias."
      }
    ]
  }
].map((procedure) => ({
  ...procedure,
  image: cardImage(procedure.imageId),
  heroImage: heroImage(procedure.imageId)
}));

// [AI-DO-NOT-BREAK]: Função utilitária para busca de procedimento por slug
export const getProcedureBySlug = (slug) => PROCEDURES.find((procedure) => procedure.slug === slug);

// [AI-DO-NOT-BREAK]: Função utilitária geradora de URL interna
export const procedurePath = (slug) => `/procedimentos/${slug}`;



// [AI-EDIT-ZONE]: Cards das Classes de Procedimentos Estéticos (Fiel à Referência Visual)
export const PROCEDURE_CATEGORY_CARDS = [
  {
    id: "sobrancelhas",
    num: "01",
    title: "Sobrancelhas",
    description: "Design, coloração e técnicas avançadas para valorizar seu olhar.",
    image: "/images/procedimentos/categoria-sobrancelhas.jpg?v=6",
    alt: "Design e técnicas avançadas para valorizar seu olhar",
    objectPosition: "82% center",
    slugs: [
      "design-sobrancelhas",
      "design-com-henna",
      "design-com-tintura"
    ]
  },
  {
    id: "labiais",
    num: "02",
    title: "Tratamentos Labiais",
    description: "Hidratação, revitalização e micropigmentação para lábios mais saudáveis e bonitos.",
    image: "/images/procedimentos/categoria-labios.jpg?v=4",
    alt: "Hidratação e revitalização para lábios mais saudáveis e bonitos",
    objectPosition: "center center",
    slugs: [
      "glow-lips-spa",
      "revigloss",
      "lips-glow-up"
    ]
  },
  {
    id: "micropigmentacao",
    num: "03",
    title: "Micropigmentação",
    description: "Técnicas exclusivas para um resultado natural, sofisticado e duradouro.",
    image: "/images/procedimentos/categoria-micropigmentacao.jpg?v=6",
    alt: "Técnicas exclusivas para um resultado natural, sofisticado e duradouro",
    objectPosition: "58% center",
    slugs: [
      "nano-brow-micro",
      "hibrid-brow-micro",
      "shadow-micro"
    ]
  },
  {
    id: "experiencias",
    num: "04",
    title: "Pacotes Exclusivos",
    description: "Combos completos de autocuidado, pensados para você.",
    image: "/images/procedimentos/categoria-experiencias.jpg?v=4",
    alt: "Combos completos de autocuidado pensados para você",
    objectPosition: "68% center",
    slugs: [
      "glow-relax",
      "glow-diamond",
      "brow-boost",
      "glow-lash"
    ]
  }
];

