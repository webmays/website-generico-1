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
    { target: "avaliacoes", label: "Avaliações" },
    { target: "localizacao", label: "Localização" }
  ],
  mobile: [
    { target: "procedimentos", label: "Procedimentos" },
    { target: "resultados", label: "Resultados Reais" },
    { target: "sobre", label: "Sobre Steffani" },
    { target: "cursos", label: "Curso" },
    { target: "avaliacoes", label: "Avaliações" },
    { target: "localizacao", label: "Localização" }
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
  eyebrow: "SOBRANCELHAS, CÍLIOS E LÁBIOS",
  title: "TORRES Beauty Academy",
  // "TORRES" em destaque e "Beauty Academy" menor, na mesma composicao (ver hero.css)
  titleMain: "TORRES",
  titleSub: "Beauty Academy",
  subtitle: "Quem experimenta a experiência Torres Beauty nunca mais quer outra!",
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
  cardAction: "Agendar →"
};



// [AI-EDIT-ZONE]: Conteúdo da Seção Nosso Espaço (Fotos do Salão em Modo Retrato)
export const SALON_CONTENT = {
  id: "espaco",
  metaLabel: "NOSSO ESPAÇO",
  title: "Um ambiente *projetado para você*",
  subtitle: "Conheça o espaço exclusivo do Torres Beauty Academy: conforto absoluto, atmosfera intimista e alto padrão de biossegurança.",
  photos: [
    {
      id: "01",
      title: "Lounge de Acolhimento",
      desc: "Espaço intimista com cantinho de café e espelho iluminado para relaxar antes do seu atendimento.",
      image: "/images/espaco/assets-salao01.webp",
      alt: "Lounge de acolhimento do Torres Beauty Academy com espelho iluminado e cantinho do café",
      objectPosition: "center center"
    },
    {
      id: "02",
      title: "Conforto & Sofisticação",
      desc: "Atmosfera serena e climatizada, pensada para desacelerar a sua rotina com total privacidade.",
      image: "/images/espaco/assets-salao02.webp",
      alt: "Área de circulação e espera com poltrona relaxante e acesso às salas de procedimento",
      objectPosition: "center center"
    },
    {
      id: "03",
      title: "Consultoria & Visagismo",
      desc: "Mesa de avaliação personalizada para planejar o design ideal aos seus traços naturais com precisão.",
      image: "/images/espaco/assets-salao03.webp",
      alt: "Sala de consultoria e avaliação de visagismo do Torres Beauty Academy",
      objectPosition: "center center"
    },
    {
      id: "04",
      title: "Equipe Especializada",
      desc: "Especialistas qualificadas pela Torres Beauty Academy, prontas para cuidar de você com carinho e excelência.",
      // TODO: nova imagem. Com image vazio o card mostra o placeholder discreto no mesmo formato 3:4 (SalonSection).
      // Ao receber a foto: salvar em public/images/espaco/ e preencher image e alt.
      image: "",
      alt: "",
      objectPosition: "center center"
    }
  ]
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Resultados (vídeos verticais em carrossel + fotos em grade)
export const CASES_CONTENT = {
  id: "resultados",
  metaLabel: "RESULTADOS REAIS",
  title: "Resultados que *transformam*",
  subtitle: "Transformações reais, feitas aqui, com técnica e cuidado em cada detalhe.",
  // [AI-EDIT-ZONE]: Vídeos do carrossel. Formato ideal: vertical 9:16, mp4 (H.264) leve + poster jpg/webp do 1º quadro.
  // TODO: novos vídeos. Os 5 cards abaixo estão vazios (placeholder "Em breve", 9:16), prontos para receber vídeos.
  // Para preencher um card, salve o mp4 e o poster em public/images/resultados/ e troque { id } por, por exemplo:
  //   { id: "video-1", src: "/images/resultados/video01.mp4", poster: "/images/resultados/video01-poster.jpg", width: 480, height: 854 }
  // width/height = dimensões do vídeo. O card segue essa proporção (vertical, quadrado ou horizontal), então o poster
  // aparece inteiro, sem corte; todos os cards têm a mesma altura. Para ter mais ou menos cards, adicione ou remova linhas.
  // Sem legenda visível: o leitor de tela anuncia "Vídeo de resultado N" (playLabel/videoAlt abaixo).
  videos: [
    { id: "video-1" },
    { id: "video-2" },
    { id: "video-3" },
    { id: "video-4" },
    { id: "video-5" }
  ],
  // [AI-EDIT-ZONE]: Fotos de resultado (grade de 3). Nao repetir fotos dos cards de Procedimentos, hero, cursos ou sobre.
  // TODO: novas fotos. Os 3 cards estao vazios e aparecem como placeholder discreto ("Em breve", quadrado).
  // Para preencher: salve a foto em public/images/resultados/ e informe { image, width, height } do card.
  // width/height definem a proporcao da caixa, entao a foto aparece inteira, sem corte (qualquer proporcao serve).
  cards: [
    { id: "foto-1", image: "", width: 900, height: 900 },
    { id: "foto-2", image: "", width: 900, height: 900 },
    { id: "foto-3", image: "", width: 900, height: 900 }
  ],
  photoAlt: "Foto de resultado real",
  videoAlt: "Vídeo de resultado real",
  reelsLabel: "Vídeos de resultados",
  reelsPrev: "Vídeos anteriores",
  reelsNext: "Próximos vídeos",
  playLabel: "Assistir vídeo de resultado",
  closeLabel: "Fechar vídeo",
  placeholderLabel: "Em breve",
  cta: {
    label: "Quero ser a próxima",
    prefilledMessage: "Olá, Steffani! Vi os resultados no site e quero ser a próxima. Pode me ajudar?"
  },
  swipeHint: "Deslize para ver mais",
  galleryLabel: "Galeria de resultados",
  disclaimer: "* Resultados reais de procedimentos realizados no Torres Beauty Academy. Resultados podem variar de acordo com características biológicas individuais."
};

// [AI-EDIT-ZONE]: Conteúdo da Seção Sobre Steffani
export const ABOUT_CONTENT = {
  image: "/images/sobre/sobre-steffani.webp",
  imageAlt: "Retrato de Steffani Torres",
  metaLabel: "A ESSÊNCIA POR TRÁS DA MARCA",
  // A frase de apresentacao e o proprio titulo da secao (o trecho entre asteriscos sai em italico)
  title: "Muito prazer, sou *Steffani Torres.*",
  paragraphs: [
    "Empreendedora, micropigmentadora, educadora e apaixonada por transformar vidas através da beleza e do conhecimento.",
    "Minha trajetória começou em 2016, movida por um sonho e pela coragem de construir meu próprio caminho.",
    "Ao longo de uma década, transformei minha paixão em profissão, minha experiência em conhecimento e meu conhecimento em oportunidade para outras mulheres.",
    "Hoje, à frente da Torres Beauty Academy, carrego um propósito que vai além de realçar a beleza: elevar a autoestima, compartilhar conhecimento e inspirar mulheres a reconhecerem o próprio potencial. Se você chegou até aqui, esse propósito também é para você.",
    "Porque, para mim, o sucesso não acontece por acaso. Ele é construído com coragem, propósito e persistência."
  ],
  ctaButton: "Falar comigo",
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

// [AI-EDIT-ZONE]: Secao de Localizacao (mapa do Google + informacoes de atendimento)
// O endereco e os horarios vem de CONTACT_INFO. O mapa usa "endereco + cityState"; para um pino exato,
// cole em mapEmbedUrl o link do Google Maps em Compartilhar > Incorporar um mapa (apenas o valor do src).
export const IMAGES_CONTENT = {
  id: "avaliacoes",
  metaLabel: "AVALIAÇÕES",
  title: "Quem viveu a experiência *recomenda*",
  subtitle: "Veja o carinho e os recados das clientes que já passaram pela Torres Beauty Academy e confiaram no nosso cuidado.",
  // Para adicionar fotos: coloque o arquivo em public/images/avaliacoes/ e inclua aqui:
  // { src: "/images/avaliacoes/foto-01.webp", alt: "Descricao da imagem" }
  images: []
};

export const LOCATION_CONTENT = {
  id: "localizacao",
  metaLabel: "LOCALIZAÇÃO",
  title: "Venha nos *visitar*",
  subtitle: "Atendimento presencial com hora marcada, em um espaço pensado para o seu conforto.",
  labels: { address: "Endereço", hours: "Horários", contact: "Contato", payment: "Pagamento" },
  directionsLabel: "Como chegar →",
  mapTitle: "Mapa com a localização da Torres Beauty Academy",
  cityState: "",
  mapEmbedUrl: ""
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
