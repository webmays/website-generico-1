// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
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
  name: "TORRES",
  subtitle: "beleza & ensino",
  fullAcademyTitle: "Torres Beauty Academy",
  ariaLabel: "Torres Beauty Academy — Início",
  metaTitle: "TORRES BEAUTY ACADEMY — Beleza & Ensino",
  metaDescription: "Beleza com naturalidade e ensino de alto padrão. Procedimentos e formações profissionais com Steffani Torres na Torres Beauty Academy."
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
  eyebrow: "BELEZA & ENSINO",
  title: "TORRES BEAUTY ACADEMY",
  subtitle: "Técnica e cuidado para realçar a sua beleza natural.",
  ctaPrimary: "Agendar pelo WhatsApp",
  ctaSecondary: {
    label: "Ver procedimentos →",
    target: "procedimentos"
  }
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Procedimentos
export const PROCEDURES_HEADER_CONTENT = {
  metaLabel: "PROCEDIMENTOS & PROTOCOLOS",
  title: "Naturalidade com *padrão elevado*",
  filterLabel: "Filtrar procedimentos por categoria",
  trackLabel: "Lista de procedimentos",
  dragHint: "Arraste para o lado →",
  cardAction: "Agendar este procedimento →"
};



// [AI-EDIT-ZONE]: Conteúdo da Seção Nosso Espaço (Fotos do Salão em Modo Retrato)
export const SALON_CONTENT = {
  id: "espaco",
  metaLabel: "NOSSO ESPAÇO",
  title: "Um ambiente *projetado para você*",
  subtitle: "Conheça o espaço exclusivo do Torres Beauty Academy: conforto absoluto, atmosfera intimista e o mais rigoroso padrão de biossegurança.",
  photos: [
    {
      id: "01",
      title: "Lounge de Acolhimento",
      desc: "Espaço intimista com cantinho de café e espelho iluminado para relaxar antes do seu atendimento.",
      image: "/images/espaco/assets-salao01.JPEG",
      alt: "Lounge de acolhimento do Torres Beauty Academy com espelho iluminado e cantinho do café",
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
      alt: "Sala de consultoria e avaliação de visagismo do Torres Beauty Academy",
      objectPosition: "center center"
    },
    {
      id: "04",
      title: "Equipe Especializada",
      desc: "Especialistas qualificadas pela Torres Beauty Academy, prontas para cuidar de você com carinho e excelência.",
      image: "/images/espaco/assets-equipe.JPEG",
      alt: "Equipe de especialistas do Torres Beauty Academy com aventais profissionais bordados",
      objectPosition: "center 15%"
    }
  ]
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Resultados Reais (Showcase de Imagens - Torres Beauty Academy)
export const CASES_CONTENT = {
  id: "resultados",
  metaLabel: "RESULTADOS REAIS",
  title: "Resultados que *falam por si*",
  subtitle: "Aqui você encontra resultados reais de procedimentos realizados em nossas clientes. Beleza natural, técnica e personalização em cada detalhe.",
  // [AI-EDIT-ZONE]: Curadoria de 6 itens. Nao repetir fotos dos cards de Procedimentos.
  cards: [
    {
      id: "01",
      image: "/images/resultados/resultado-cicatrizacao.webp",
      alt: "Evolução de sobrancelhas: antes, pós imediato e cicatrizado"
    },
    {
      id: "02",
      image: "/images/resultados/resultado-lash.webp",
      alt: "Cílios antes e depois do Lash Lifting"
    },
    {
      id: "03",
      image: "/images/resultados/video03-poster.jpg",
      video: "/images/resultados/video03.mp4",
      alt: "Vídeo da transformação do olhar com Lash Lifting"
    },
    {
      id: "04",
      image: "/images/resultados/resultado-labios.webp",
      alt: "Lábios revitalizados e com contorno definido"
    },
    {
      id: "05",
      image: "/images/resultados/video05-poster.jpg",
      video: "/images/resultados/video05.mp4",
      alt: "Vídeo do alinhamento e da simetria das sobrancelhas"
    },
    {
      id: "06",
      image: "/images/resultados/resultado-masculino.webp",
      alt: "Sobrancelhas masculinas com design natural"
    }
  ],
  disclaimer: "* Resultados reais de procedimentos realizados no Torres Beauty Academy. Resultados podem variar de acordo com características biológicas individuais."
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Sobre Steffani
export const ABOUT_CONTENT = {
  image: "/images/sobre/assets-sobre01.jpg",
  imageAlt: "Retrato de Steffani Torres",
  metaLabel: "TRAJETÓRIA & COMPROMISSO",
  title: "Sobre *Steffani Torres*",
  paragraphs: [
    "Acredito que cuidar da própria imagem não é sobre transformar quem você é, mas sobre revelar a segurança que já existe em você. Ao longo da minha trajetória na beleza estética, desenvolvi um olhar atento aos detalhes para entregar resultados naturais, elegantes e pensados exclusivamente para valorizar os seus traços.",
    "Aqui, cada atendimento é um momento de pausa, escuta e cuidado real — para que você se olhe no espelho com orgulho e leveza todos os dias. E, através do ensino na Torres Beauty Academy, compartilho essa mesma técnica, ética e dedicação para formar mulheres prontas para construir carreiras sólidas e independentes no mercado da beleza."
  ],
  ctaButton: "Falar com a Steffani",
  ctaTarget: "contato"
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Cross-Sell Editorial
export const CROSS_SELL_CONTENT = {
  metaLabel: "Continue Explorando",
  title: "Outros cuidados que *combinam com você*",
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
  title: "Dúvidas *frequentes*",
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
  title: "Agende sua avaliação ou *avance em sua carreira*.",
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
  brandDescription: "Beleza com naturalidade, técnica e ensino profissional de alto padrão.",
  colNavTitle: "Navegação",
  colHoursTitle: "Atendimento",
  colContactTitle: "Contato Direto",
  copyright: "© Torres Beauty Academy. Todos os direitos reservados.",
  credits: "Design & Estratégia Editorial"
};

// [AI-EDIT-ZONE]: Conteúdo da Página 404
export const NOT_FOUND_CONTENT = {
  badge: "404",
  title: "Página não encontrada",
  description: "O conteúdo que você buscou não está disponível ou foi movido.",
  buttonLabel: "Voltar ao Início"
};
