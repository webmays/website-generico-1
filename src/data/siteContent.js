// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Centralização absoluta de textos, links de contato e conteúdos de todas as seções (Single Source of Truth).
// [AI-DO-NOT-BREAK]: Qualquer alteração de texto, número de WhatsApp ou link institucional DEVE ser feita exclusivamente neste arquivo.

// [AI-EDIT-ZONE]: Informações de Contato e Redes Sociais
export const CONTACT_INFO = {
  whatsappUrl: "https://wa.me/5528999501731",
  whatsappRaw: "https://wa.me/5528999501731",
  phoneDisplay: "+55 (28) 99950-1731",
  phoneSub: "WHATSAPP OFICIAL",
  instagramUrl: "https://instagram.com/torresbeautyacademy",
  tiktokUrl: "https://www.tiktok.com/@storres1995",
  address: "R. Orozimbo Lima, nº 01, Edifício Tocaia, Sala 104",
  paymentMethods: "Dinheiro | Cartão | PIX",
  email: "torresbeautyacademy@gmail.com",
  openingHours: [
    "Segunda a Sexta — 09h às 19h",
    "Sábados — 09h às 14h",
    "Atendimento somente com hora marcada via whatsapp"
  ]
};

// [AI-EDIT-ZONE]: Identidade da Marca
export const BRAND = {
  name: "Steffani",
  subtitle: "Estética & Ensino",
  fullAcademyTitle: "Ateliê Steffani Torres",
  ariaLabel: "Steffani Início",
  metaTitle: "Ateliê Steffani Torres — Estética Avançada & Ensino",
  metaDescription: "Procedimentos estéticos com olhar clínico, sofisticação e naturalidade. Ateliê Steffani Torres."
};

// [AI-EDIT-ZONE]: Estrutura de Links de Navegação (Desktop, Mobile Drawer & Rodapé)
export const NAV_LINKS = {
  desktop: [
    { target: "procedimentos", label: "Procedimentos" },
    { target: "resultados", label: "Resultados" },
    { target: "sobre", label: "Sobre" },
    { target: "cursos", label: "Curso" },
    { target: "faq", label: "Dúvidas" }
  ],
  mobile: [
    { target: "procedimentos", label: "Procedimentos" },
    { target: "resultados", label: "Resultados Reais" },
    { target: "sobre", label: "Sobre Steffani" },
    { target: "cursos", label: "Curso" },
    { target: "faq", label: "Dúvidas Frequentes" }
  ],
  footer: [
    { target: "procedimentos", label: "Procedimentos" },
    { target: "resultados", label: "Resultados" },
    { target: "sobre", label: "Sobre" },
    { target: "cursos", label: "Curso" }
  ],
  ctaDesktop: "Agendar",
  ctaMobile: "Agendar"
};

// [AI-EDIT-ZONE]: Conteúdo da Hero Section
export const HERO_CONTENT = {
  eyebrow: "ESTÉTICA AVANÇADA",
  titleLine1: "ATELIÊ",
  titleLine2: "STEFFANI",
  titleLine3: "TORRES",
  subtitleLine1: "Estética, técnica e cuidado",
  subtitleLine2: "para realçar sua beleza natural.",
  ctaPrimary: {
    label: "Ver procedimentos",
    target: "procedimentos"
  },
  ctaSecondary: {
    label: "Entrar em contato",
    target: "contato"
  },
  whatsappText: "WhatsApp",
  phoneShort: "(28) 99950-1731"
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Procedimentos
export const PROCEDURES_HEADER_CONTENT = {
  metaLabel: "Catálogo Oficial • Torres Beauty",
  title: "Procedimentos Exclusivos",
  subtitle: "Você é o seu maior investimento! Técnicas precisas, estudo facial e muito cuidado & amor para realçar a beleza natural do seu olhar.",
  ctaPill: "Consultar horários no WhatsApp",
  cardActionText: "Ver detalhes completos"
};



// [AI-EDIT-ZONE]: Conteúdo da Seção Nosso Espaço (Fotos do Salão em Modo Retrato)
export const SALON_CONTENT = {
  id: "espaco",
  metaLabel: "NOSSO ATELIÊ",
  title: "Um Ambiente Projetado para Você",
  subtitle: "Conheça o espaço exclusivo do Ateliê Steffani Torres: conforto absoluto, atmosfera intimista e o mais rigoroso padrão de biossegurança.",
  photos: [
    {
      id: "01",
      title: "Lounge de Acolhimento",
      desc: "Espaço intimista com cantinho de café e espelho iluminado para relaxar antes do seu atendimento.",
      image: "/images/espaco/assets-salao01.JPEG",
      alt: "Lounge de acolhimento do Ateliê Steffani Torres com espelho iluminado e cantinho do café",
      objectPosition: "center center"
    },
    {
      id: "02",
      title: "Conforto & Sofisticação",
      desc: "Atmosfera serena e climatizada, pensada para desacelerar a sua rotina com total privacidade.",
      image: "/images/espaco/assets-salao02.JPEG",
      alt: "Área de circulação e espera com poltrona relaxante e acesso às salas de procedimento",
      objectPosition: "center center"
    },
    {
      id: "03",
      title: "Consultoria & Visagismo",
      desc: "Mesa de avaliação personalizada para planejar o design ideal aos seus traços naturais com precisão.",
      image: "/images/espaco/assets-salao03.JPEG",
      alt: "Sala de consultoria e avaliação de visagismo do Ateliê Steffani Torres",
      objectPosition: "center center"
    },
    {
      id: "04",
      title: "Equipe Especializada",
      desc: "Especialistas qualificadas pela Torres Beauty Academy, prontas para cuidar de você com carinho e excelência.",
      image: "/images/espaco/assets-equipe.JPEG",
      alt: "Equipe de especialistas do Ateliê Steffani Torres com aventais profissionais bordados",
      objectPosition: "center 15%"
    }
  ]
};

// [AI-DEPRECATED-ALIAS]: Mantido para compatibilidade regressiva
export const VIDEO_CONTENT = SALON_CONTENT;

// [AI-EDIT-ZONE]: Conteúdo da Seção Resultados Reais (Showcase de Imagens - Ateliê Steffani Torres)
export const CASES_CONTENT = {
  id: "resultados",
  metaLabel: "RESULTADOS REAIS",
  title: "Resultados que falam por si",
  subtitle: "Aqui você encontra resultados reais de procedimentos realizados em nossas clientes. Beleza natural, técnica e personalização em cada detalhe.",
  cards: [
    {
      id: "01",
      procedure: "Design de Sobrancelhas & Cílios",
      category: "sobrancelhas",
      image: "/images/resultados/imagem04.JPEG",
      alt: "Resultado de Sobrancelhas e Olhar — Ateliê Steffani Torres",
      isTall: true,
      isLargeSquare: true
    },
    {
      id: "02",
      procedure: "Sobrancelhas: Cicatrização",
      category: "sobrancelhas",
      image: "/images/resultados/imagem06.JPEG?v=2",
      alt: "Evolução de Sobrancelhas Antes, Pós Imediato e Cicatrizado — Ateliê Steffani Torres",
      objectFit: "contain"
    },
    {
      id: "03",
      procedure: "Lash Lifting",
      category: "olhar",
      image: "/images/resultados/imagem07.JPEG",
      alt: "Resultado de Lash Lifting Antes e Depois — Ateliê Steffani Torres"
    },
    {
      id: "04",
      procedure: "Revitalização Labial",
      category: "labios",
      image: "/images/resultados/imagem02.JPEG",
      alt: "Revitalização e Tratamento Labial — Ateliê Steffani Torres"
    },
    {
      id: "05",
      procedure: "Sobrancelhas Masculinas",
      category: "sobrancelhas",
      image: "/images/resultados/imagem05.JPEG?v=2",
      alt: "Design e Micropigmentação Masculina de Sobrancelhas — Ateliê Steffani Torres"
    },
    {
      id: "06",
      procedure: "Micropigmentação Shadow",
      category: "sobrancelhas",
      image: "/images/resultados/imagem08.png",
      video: "/images/resultados/imagem08-vid.mp4",
      alt: "Micropigmentação Shadow de Sobrancelhas em Vídeo — Ateliê Steffani Torres"
    },
    {
      id: "07",
      procedure: "Lash Lifting & Olhar",
      category: "olhar",
      image: "/images/resultados/imagem09.JPEG?v=2",
      alt: "Lash Lifting e Curvatura dos Cílios — Ateliê Steffani Torres"
    },
    {
      id: "08",
      procedure: "Nanopigmentação Fio a Fio",
      category: "sobrancelhas",
      image: "/images/resultados/imagem11.JPEG",
      alt: "Nanopigmentação Fio a Fio com Precisão — Ateliê Steffani Torres"
    },
    {
      id: "09",
      procedure: "Lash Lifting em Movimento",
      category: "olhar",
      image: "/images/resultados/video01-poster.jpg",
      video: "/images/resultados/video01.mp4",
      alt: "Lash Lifting em Movimento e Curvatura dos Cílios — Ateliê Steffani Torres"
    },
    {
      id: "10",
      procedure: "Curvatura & Alinhamento",
      category: "olhar",
      image: "/images/resultados/video02-poster.jpg",
      video: "/images/resultados/video02.mp4",
      alt: "Curvatura e Alinhamento Preciso dos Cílios — Ateliê Steffani Torres"
    },
    {
      id: "11",
      procedure: "Evolução do Olhar Antes e Depois",
      category: "olhar",
      image: "/images/resultados/video03-poster.jpg",
      video: "/images/resultados/video03.mp4",
      alt: "Transformação do Olhar com Lash Lifting em Vídeo — Ateliê Steffani Torres",
      isLargeSquare: true,
      isSquare1x1: true
    },
    {
      id: "12",
      procedure: "Design & Micropigmentação",
      category: "sobrancelhas",
      image: "/images/resultados/IMG_1292.JPEG",
      alt: "Design e Micropigmentação de Sobrancelhas Antes e Depois — Ateliê Steffani Torres"
    },
    {
      id: "13",
      procedure: "Simetria & Fios Naturais",
      category: "sobrancelhas",
      video: "/images/resultados/video05.mp4",
      image: "/images/resultados/video05-poster.jpg",
      alt: "Alinhamento e Simetria de Sobrancelhas em Vídeo — Ateliê Steffani Torres"
    },
    {
      id: "14",
      procedure: "Revitalização Labial & Gloss",
      category: "labios",
      image: "/images/resultados/imagem13.JPEG",
      alt: "Revitalização e Definição Labial de Alto Padrão — Ateliê Steffani Torres"
    },
    {
      id: "15",
      procedure: "Procedimento Labial em Vídeo",
      category: "labios",
      video: "/images/resultados/video04.mp4",
      image: "/images/resultados/video04-poster.jpg",
      alt: "Revitalização e Efeito Labial em Vídeo — Ateliê Steffani Torres"
    },
    {
      id: "16",
      procedure: "Harmonização e Cor Labial",
      category: "labios",
      image: "/images/resultados/assets-procedimentolabio.jpg",
      alt: "Preenchimento de Cor e Revitalização Labial — Ateliê Steffani Torres"
    }
  ],
  disclaimer: "* Resultados reais de procedimentos realizados no Ateliê Steffani Torres. Resultados podem variar de acordo com características biológicas individuais."
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Sobre Steffani
export const ABOUT_CONTENT = {
  image: "/images/sobre/assets-sobre01.jpg",
  photoPlaceholder: "[Retrato Editorial Steffani]",
  metaLabel: "Trajetória & Compromisso",
  title: "Sobre Steffani",
  paragraphs: [
    "Dedicada à estética de alto padrão, Steffani construiu sua carreira unindo o rigor científico à sensibilidade artística. Sua atuação é pautada na personalização absoluta, garantindo que cada paciente receba exatamente o que harmoniza com sua essência.",
    "Como mentora, ministra cursos focados em capacitar outros profissionais com segurança teórica, postura ética e domínio prático da rotina clínica."
  ],
  ctaButton: "Falar com a Steffani",
  ctaTarget: "contato"
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Cross-Sell Editorial
export const CROSS_SELL_CONTENT = {
  metaLabel: "Continue Explorando",
  title: "Outros Cuidados que Combinam com Você",
  subtitle: "A harmonização completa é resultado de hábitos consistentes e protocolos complementares.",
  cards: [
    {
      label: "Experiências Exclusivas",
      title: "Rituais de Autocuidado & Spa",
      desc: "Combos de princesa com massagem capilar relaxante, cappuccino acolhedor, design de sobrancelhas e revitalização.",
      cta: "Conhecer pacotes",
      target: "procedimentos"
    },
    {
      label: "Educação",
      title: "Mentorias Individuais",
      desc: "Acompanhamento exclusivo para profissionais em transição de carreira ou aprofundamento.",
      cta: "Ver detalhes",
      target: "cursos"
    },
    {
      label: "Diagnóstico",
      title: "Avaliação Completa",
      desc: "Mapeamento visual e postural para estruturar seu cronograma estético anual.",
      cta: "Quero saber mais",
      target: "contato"
    }
  ]
};

// [AI-EDIT-ZONE]: Dúvidas Frequentes da Landing Page (FAQ)
export const FAQ_CONTENT = {
  metaLabel: "Esclarecimentos",
  title: "Dúvidas Frequentes",
  items: [
    {
      q: "Como funciona a primeira avaliação?",
      a: "A avaliação consiste em uma análise facial ou corporal detalhada, onde conversamos sobre seus objetivos, histórico de saúde e traçamos um plano seguro e individualizado."
    },
    {
      q: "Os procedimentos exigem tempo de recuperação?",
      a: "A maioria dos nossos protocolos permite o retorno imediato ou em poucos dias às atividades habituais, com orientações precisas de cuidados domiciliares fornecidas na consulta."
    },
    {
      q: "Como funciona o curso com a Steffani?",
      a: "O curso mescla embasamento anatômico aprofundado e prática clínica direta supervisionada pela própria Steffani, em turmas reduzidas para assegurar domínio individual da técnica."
    },
    {
      q: "O curso emite certificado de conclusão?",
      a: "Sim. Todos os profissionais recebem certificação de conclusão e respaldo para aplicação dos protocolos clínicos aprendidos."
    }
  ]
};

// [AI-EDIT-ZONE]: Conteúdo do CTA Final
export const FINAL_CTA_CONTENT = {
  metaLabel: "Inicie Sua Jornada",
  title: "Agende sua avaliação ou avance em sua carreira estética.",
  subtitle: "Atendimento presencial com reserva antecipada e vagas do curso com vagas limitadas.",
  buttonProcedure: {
    label: "Quero Realizar um Procedimento",
    prefilledMessage: "Olá, gostaria de agendar um procedimento com a Steffani"
  },
  buttonCourse: {
    label: "Quero Conhecer o Curso",
    prefilledMessage: "Olá, gostaria de saber mais informações sobre os cursos da Steffani"
  }
};

// [AI-EDIT-ZONE]: Conteúdo do Rodapé (Footer)
export const FOOTER_CONTENT = {
  brandDescription: "Estética avançada, visão anatômica e curso profissional de alto padrão.",
  colNavTitle: "Navegação",
  colHoursTitle: "Atendimento",
  colContactTitle: "Contato Direto",
  copyright: "© Steffani. Todos os direitos reservados.",
  credits: "Design & Estratégia Editorial"
};

// [AI-EDIT-ZONE]: Conteúdo da Página 404
export const NOT_FOUND_CONTENT = {
  badge: "404",
  title: "Página não encontrada",
  description: "O conteúdo que você buscou não está disponível ou foi movido.",
  buttonLabel: "Voltar ao Início"
};
