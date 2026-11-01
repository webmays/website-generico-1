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
    alt: "Cliente relaxando com uma bebida quente em poltrona no espaço Torres Beauty Academy"
  },
  {
    slug: "glow-diamond",
    title: "Glow Diamond",
    group: "pacotes",
    summary: "Aqui você é rainha: Lash Lifting, henna, buço, revitalização facial e labial, massagem capilar e cappuccino. 2h30 de puro cuidado e amor.",
    image: "/images/procedimentos/glow-diamond.webp",
    alt: "Retrato elegante com mãos enluvadas junto ao rosto, para o pacote Glow Diamond"
  },
  {
    slug: "brow-boost",
    title: "Brow Boost",
    group: "pacotes",
    summary: "Brow Lamination com henna ou tintura e Brow Therapy, para fios alinhados, tratados e um olhar mais definido. Acompanha kit de pós-cuidados.",
    image: "/images/procedimentos/brow-boost.webp",
    alt: "Rosto com sobrancelhas naturais em foco, para o tratamento Brow Boost"
  },
  {
    slug: "glow-lash",
    title: "Glow Lash",
    group: "pacotes",
    summary: "Lash Lifting com tintura e Spa Labial: cílios curvados e realçados, lábios macios e renovados, tudo em um só atendimento.",
    image: "/images/procedimentos/glow-lash.webp",
    alt: "Closeup de cílios com curvatura natural de Lash Lifting"
  },
  {
    slug: "design-sobrancelhas",
    title: "Design de Sobrancelhas",
    group: "sobrancelhas",
    summary: "Análise facial completa, simetria e marcação profissional, com finalização na pinça e modelagem personalizada para os seus traços.",
    image: "/images/procedimentos/design-sobrancelhas.webp",
    alt: "Closeup de sobrancelha com design natural e bem definida"
  },
  {
    slug: "design-henna",
    title: "Design com Henna",
    group: "sobrancelhas",
    summary: "Pigmentação vegetal com efeito sombreado, ideal para realçar a forma das sobrancelhas e dar definição natural.",
    image: "/images/procedimentos/design-henna.webp",
    alt: "Sobrancelhas antes e depois do design com henna"
  },
  {
    slug: "design-tintura",
    title: "Design com Tintura",
    group: "sobrancelhas",
    summary: "Coloração delicada dos fios, que traz uniformidade às sobrancelhas e destaque ao olhar.",
    image: "/images/procedimentos/design-tintura.webp",
    alt: "Sobrancelhas antes e depois com fios mais uniformes"
  },
  {
    slug: "glow-lips-spa",
    title: "Glow Lips Spa",
    group: "labios",
    summary: "Spa labial com aplicação de henna: renovação, hidratação e lábios macios, com uma tonalidade naturalmente realçada.",
    image: "/images/procedimentos/glow-lips-spa.webp",
    alt: "Closeup de lábios com cor viva e hidratada"
  },
  {
    slug: "revigloss",
    title: "Revigloss",
    group: "labios",
    summary: "Revitalização labial que promove hidratação profunda, maciez e aparência mais saudável. Um glow imediato para os lábios.",
    image: "/images/procedimentos/revigloss.webp",
    alt: "Lábios hidratados e com cor realçada"
  },
  {
    slug: "lips-glow-up",
    title: "Lips Glow Up",
    group: "labios",
    summary: "Micropigmentação labial para lábios mais definidos e uniformes, com cor sofisticada e durabilidade, sem perder a naturalidade.",
    image: "/images/procedimentos/lips-glow-up.webp",
    alt: "Macro de lábios com cor uniforme e sofisticada"
  },
  {
    slug: "nano-brow",
    title: "Nano Brow",
    group: "avancados",
    summary: "Micropigmentação com fios ultrafinos que acompanham o crescimento natural. Define e preenche pequenas falhas sem aparência marcada.",
    image: "/images/procedimentos/nano-brow.webp",
    alt: "Sobrancelha com fios finos e naturais de nanopigmentação"
  },
  {
    slug: "hibrid-brow",
    title: "Hibrid Brow",
    group: "avancados",
    summary: "Une os fios delicados da técnica Nano ao efeito sombreado da Shadow, para uma sobrancelha mais preenchida, estruturada e natural.",
    // [AI-EDIT-ZONE]: FOTO PROVISORIA (IMG_1292), nenhuma foto esta identificada como Hibrid Brow.
    // Para trocar: substitua public/images/procedimentos/hibrid-brow.webp (640x800) ou altere este caminho.
    image: "/images/procedimentos/hibrid-brow.webp",
    alt: "Sobrancelhas preenchidas e estruturadas, antes e depois"
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
