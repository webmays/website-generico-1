// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Os 13 procedimentos do catalogo TBA exibidos na Home (fonte unica). Textos lapidados a partir de "catalogo TBA.pdf".
// [AI-DO-NOT-BREAK]: `group` precisa existir em PROCEDURE_GROUPS. Nao repetir aqui fotos usadas na galeria de Resultados.

import { CONTACT_INFO } from "./siteContent";

// [AI-EDIT-ZONE]: Filtros exibidos acima do trilho
export const PROCEDURE_GROUPS = [
  { id: "todos", label: "Todos" },
  { id: "pacotes", label: "Pacotes Exclusivos" },
  { id: "sobrancelhas", label: "Sobrancelhas" },
  { id: "labios", label: "Lábios" },
  { id: "avancados", label: "Avançados/Micro" }
];

// [AI-EDIT-ZONE]: Procedimentos. Fotos em public/images/procedimentos/ (proporcao 4:5)
export const PROCEDURES = [
  {
    slug: "glow-relax",
    title: "Glow Relax",
    group: "pacotes",
    summary: "Seu momento de princesa: design natural com henna, buço e queixo na linha, revitalização facial, massagem capilar e cappuccino. 1h30 de cuidado e amor.",
    image: "/images/procedimentos/glow-relax.webp",
    alt: "Cliente com sobrancelhas definidas e pele iluminada após o Glow Relax"
  },
  {
    slug: "glow-diamond",
    title: "Glow Diamond",
    group: "pacotes",
    summary: "Aqui você é rainha: Lash Lifting, henna, buço, revitalização facial e labial, massagem capilar e cappuccino. 2h30 de puro cuidado e amor.",
    image: "/images/procedimentos/glow-diamond.webp",
    alt: "Cliente com sobrancelhas definidas e olhar realçado após o Glow Diamond"
  },
  {
    slug: "brow-boost",
    title: "Brow Boost",
    group: "pacotes",
    summary: "Brow Lamination com henna ou tintura e Brow Therapy, para fios alinhados, tratados e um olhar mais definido. Acompanha kit de pós-cuidados.",
    image: "/images/procedimentos/brow-boost.webp",
    alt: "Cliente com sobrancelhas alinhadas e naturais"
  },
  {
    slug: "glow-lash",
    title: "Glow Lash",
    group: "pacotes",
    summary: "Lash Lifting com tintura e Spa Labial: cílios curvados e realçados, lábios macios e renovados, tudo em um só atendimento.",
    image: "/images/procedimentos/glow-lash.webp",
    alt: "Cílios curvados após Lash Lifting"
  },
  {
    slug: "design-sobrancelhas",
    title: "Design de Sobrancelhas",
    group: "sobrancelhas",
    summary: "Análise facial completa, simetria e marcação profissional, com finalização na pinça e modelagem personalizada para os seus traços.",
    image: "/images/procedimentos/design-sobrancelhas.webp",
    alt: "Sobrancelha com design natural e bem definido"
  },
  {
    slug: "design-henna",
    title: "Design com Henna",
    group: "sobrancelhas",
    summary: "Pigmentação vegetal com efeito sombreado, ideal para realçar a forma das sobrancelhas e dar definição natural.",
    image: "/images/procedimentos/design-henna.webp",
    alt: "Cliente com sobrancelhas definidas após design com henna"
  },
  {
    slug: "design-tintura",
    title: "Design com Tintura",
    group: "sobrancelhas",
    summary: "Coloração delicada dos fios, que traz uniformidade às sobrancelhas e destaque ao olhar.",
    image: "/images/procedimentos/design-tintura.webp",
    alt: "Sobrancelha com fios uniformes e olhar em destaque"
  },
  {
    slug: "glow-lips-spa",
    title: "Glow Lips Spa",
    group: "labios",
    summary: "Spa labial com aplicação de henna: renovação, hidratação e lábios macios, com uma tonalidade naturalmente realçada.",
    image: "/images/procedimentos/glow-lips-spa.webp",
    alt: "Lábios com cor realçada"
  },
  {
    slug: "revigloss",
    title: "Revigloss",
    group: "labios",
    summary: "Revitalização labial que promove hidratação profunda, maciez e aparência mais saudável. Um glow imediato para os lábios.",
    image: "/images/procedimentos/revigloss.webp",
    alt: "Lábios hidratados e com brilho natural"
  },
  {
    slug: "lips-glow-up",
    title: "Lips Glow Up",
    group: "labios",
    summary: "Micropigmentação labial para lábios mais definidos e uniformes, com cor sofisticada e durabilidade, sem perder a naturalidade.",
    image: "/images/procedimentos/lips-glow-up.webp",
    alt: "Lábios com contorno definido e cor uniforme"
  },
  {
    slug: "nano-brow",
    title: "Nano Brow",
    group: "avancados",
    summary: "Micropigmentação com fios ultrafinos que acompanham o crescimento natural. Define e preenche pequenas falhas sem aparência marcada.",
    image: "/images/procedimentos/nano-brow.webp",
    alt: "Sobrancelhas com fios finos e aparência natural"
  },
  {
    slug: "hibrid-brow",
    title: "Hibrid Brow",
    group: "avancados",
    summary: "Une os fios delicados da técnica Nano ao efeito sombreado da Shadow, para uma sobrancelha mais preenchida, estruturada e natural.",
    image: "/images/procedimentos/hibrid-brow.webp",
    alt: "Closeup de sobrancelha com fios definidos, técnica Hibrid Brow"
  },
  {
    slug: "shadow",
    title: "Shadow",
    group: "avancados",
    summary: "Efeito esfumado e sofisticado, semelhante ao preenchimento suave de uma maquiagem, para mais definição e intensidade com harmonia.",
    image: "/images/procedimentos/shadow.webp",
    alt: "Rosto com sobrancelhas de efeito esfumado"
  }
];

/** Link do WhatsApp com a mensagem daquele procedimento. */
export const getProcedureWhatsappUrl = (title) =>
  `${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(`Olá, Steffani! Gostaria de agendar o procedimento ${title}.`)}`;
