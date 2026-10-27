// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Dados reais dos cursos e mentorias da Steffani Torres, extraídos com fidelidade máxima dos PDFs oficiais.
// [AI-DO-NOT-BREAK]: Todos os botões conectam diretamente ao atendimento oficial da Steffani no WhatsApp com mensagens personalizadas.

import { CONTACT_INFO } from "./siteContent";

export const COURSES_HEADER_DATA = {
  eyebrow: "FORMAÇÃO QUE TRANSFORMA",
  title: "Cursos & Mentorias",
  subtitle: "Conheça as formações e mentorias profissionais da Steffani Torres e fale no WhatsApp para receber cronogramas, datas e valores de investimento.",
  ctaPill: "Falar no WhatsApp",
  bottomDisclaimer: "Informações completas, cronograma e valores de matrícula via WhatsApp oficial."
};

export const COURSES_LIST = [
  {
    id: "consultoria-micropigmentacao",
    category: "Mentoria VIP Individual • Presencial ou Online",
    title: "Consultoria de Micropigmentação",
    headline: "Aprimoramento técnico e estratégico para profissionais da área",
    description: "Mentoria cirúrgica individualizada de 4h a 5h com Steffani Torres, voltada para profissionais da área que buscam aprimorar suas habilidades. Você envia suas dúvidas prévias para a criação de um plano sob medida, corrigindo erros práticos e alavancando seus resultados na micropigmentação.",
    image: "/images/cursos/assets-consultoria.JPEG",
    urgencyText: "Atendimento 100% Individual • Vagas Limitadas",
    pillars: [
      {
        title: "Foco em Habilidades & Dificuldades",
        desc: "Diagnóstico cirúrgico dos seus pontos cegos com metodologia simples, direta e prática."
      },
      {
        title: "Correção de Técnica & Movimento",
        desc: "Ajuste milimétrico de ângulo, peso de mão, pele sintética, E.V.A., agulhas e colorimetria."
      },
      {
        title: "Prática Supervisionada em Modelo",
        desc: "Execução prática de caso real para você desbloquear o medo e dominar o procedimento."
      },
      {
        title: "Destrave de Vendas & Lucratividade",
        desc: "Estratégia de posicionamento para precificar melhor e atrair clientes de alto padrão."
      }
    ],
    buttonText: "Garantir Minha Vaga",
    whatsappMessage: "Olá Steffani! Gostaria de garantir minha vaga e realizar minha inscrição na Consultoria de Micropigmentação. Poderia me enviar as datas disponíveis e valores de investimento?"
  },
  {
    id: "metodo-brow-boost",
    category: "Especialização • Imersão Intensiva de 10 Horas",
    title: "Método Brow Boost",
    headline: "A técnica mais desejada e lucrativa para sobrancelhas naturais",
    description: "Curso intensivo em 1 dia (das 9h às 19h) para formar especialistas em Brow Lamination. Domine a técnica que realça a essência única dos fios naturais com segurança, biossegurança rigorosa e resultados duradouros que encantam clientes.",
    image: "/images/cursos/curso-browboost.jpg",
    urgencyText: "Turmas Reduzidas • Vagas Limitadas",
    pillars: [
      {
        title: "Imersão de 10 Horas em 1 Dia",
        desc: "Carga horária intensiva unindo fundamentos teóricos aprofundados e prática completa."
      },
      {
        title: "Material 100% Incluso & Kit MBB",
        desc: "Você recebe Ecobag exclusiva MBB Torres Beauty, Kit MBB, apostila e scripts de estudo."
      },
      {
        title: "Química, Anatomia & Coloração",
        desc: "Biossegurança, estrutura do pelo, química do produto, coloração e cuidados pré e pós."
      },
      {
        title: "Demonstração e Prática em Modelo",
        desc: "Prática supervisionada em modelo real, certificado impresso, coffee-break e suporte pós-curso."
      }
    ],
    buttonText: "Garantir Minha Vaga",
    whatsappMessage: "Olá Steffani! Gostaria de garantir minha vaga e realizar minha inscrição no curso Método Brow Boost. Poderia me enviar os detalhes de datas e valores de matrícula?"
  },
  {
    id: "curso-lash-lifting",
    category: "Especialização • Curvatura & Nutrição de Cílios",
    title: "Curso de Lash Lifting",
    headline: "Efeito rímel natural de alto valor e retorno financeiro imediato",
    description: "Formação técnica em curvatura, hidratação profunda e realce dos cílios naturais. Um procedimento de altíssima procura no ateliê, rápido de executar e com excelente margem de rentabilidade logo nas primeiras clientes.",
    image: "/images/cursos/curso-lashlifting.jpg",
    urgencyText: "Turmas Exclusivas • Vagas Limitadas",
    pillars: [
      {
        title: "Curvatura Biomecânica & Nutrição",
        desc: "Técnica de lifting com nutrição profunda para um olhar iluminado e fios saudáveis."
      },
      {
        title: "Coloração & Efeito Rímel Duradouro",
        desc: "Aplicação segura de tintura e protocolos para até 6 a 8 semanas de durabilidade."
      },
      {
        title: "Prática em Modelo Real",
        desc: "Domínio de moldes anatômicos, simetria e alinhamento preciso de cada fio."
      },
      {
        title: "Certificação & Lucro Imediato",
        desc: "Baixo custo de insumos e alta rentabilidade para recuperar o investimento rapidamente."
      }
    ],
    buttonText: "Garantir Minha Vaga",
    whatsappMessage: "Olá Steffani! Gostaria de garantir minha vaga e realizar minha inscrição no Curso de Lash Lifting. Poderia me enviar os detalhes de datas e valores de matrícula?"
  }
];

export function getCourseWhatsappUrl(message) {
  const base = CONTACT_INFO?.whatsappRaw || "https://wa.me/5528999501731";
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * [AI-DATA]: UPCOMING_COURSE_DATA
 * @description Dados oficiais da mini-seção de estreia do curso Destrava Brow (Fadas In Action) em formato idêntico ao modelo de referência.
 */
export const UPCOMING_COURSE_DATA = {
  id: "destrava-brow",
  badge: "Fadas In Action",
  tag: "NOVA FORMAÇÃO • FADAS IN ACTION",
  courseName: "Destrava Brow",
  title: "EM BREVE",
  subtitle: "Uma nova experiência de formação está chegando para elevar sua técnica, presença e resultados.",
  disclaimer: "DETALHES, DATAS E INSCRIÇÕES SERÃO DIVULGADOS EM BREVE.",
  waitlistButton: {
    text: "Entrar na lista de espera",
    whatsappMessage: "Olá Steffani! Gostaria de entrar na lista de espera para a nova formação Destrava Brow (Fadas In Action) e receber as informações em primeira mão."
  },
  image: "/images/cursos/Curso-Embreve.png",
  imageAlt: "Steffani Torres — Nova Formação Destrava Brow (Fadas In Action)"
};


