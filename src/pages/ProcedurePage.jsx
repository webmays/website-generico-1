// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Página interna padronizada de procedimentos estéticos (/procedimentos/:slug) com estética de luxo e alto padrão visual.
// [AI-DO-NOT-BREAK]:
//  - useParams captura o parâmetro :slug da rota.
//  - Hero marrom escuro com círculos e arcos luminosos dourados (estilo Cartaz Em Breve).
//  - Seção O Que Está Incluso no Seu Pacote: lista corrida elegante com números, sem cards e sem badges.
//  - Subseções: "Para Quem é Indicado" (com Saiba mais expansível) e "Etapas do Tratamento" (enumerada).
//  - Galeria de Resultados Reais correspondente à categoria do procedimento.
//  - Os 3 Pilares em painel único com claras divisórias.
//  - Continue Explorando replica os cards da página principal com detalhes expansíveis.

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router";
import {
  PROCEDURE_PAGE_LABELS,
  PROCEDURE_CATEGORY_CARDS,
  getProcedureBySlug
} from "../data/proceduresData";
import { getProcedureExperience } from "../data/procedureExperienceData";
import { CONTACT_INFO, BRAND, CASES_CONTENT } from "../data/siteContent";
import {
  CheckIcon,
  ChevronRight,
  ChevronDown,
  ArrowRightShort
} from "../components/ui/Icons";
import { useSmoothScroll } from "../context/SmoothScrollContext";
import { ProcedureCategoryModal } from "../components/ui/ProcedureCategoryModal";

/**
 * [AI-HELPER]: getIndicationDetail
 * @description Fornece explicação curta, técnica e reconfortante para o accordion "Saiba mais" das indicações.
 */
function getIndicationDetail(item) {
  const norm = (item || "").toLowerCase();
  if (norm.includes("sem afinar") || norm.includes("natural")) {
    return "Nosso estudo visagista preserva meticulosamente a densidade e a integridade dos seus fios originais, esculpindo apenas a linha do arco para dar amplitude e leveza ao olhar sem jamais afinar ou descaracterizar.";
  }
  if (norm.includes("manutenção") || norm.includes("periódica") || norm.includes("elegante")) {
    return "A manutenção a cada 20 a 30 dias respeita o ciclo de renovação dos folículos, estabilizando o formato ideal e mantendo seus traços sempre limpos, alinhados e sem pelos fora do lugar.";
  }
  if (norm.includes("inadequado") || norm.includes("recuperação") || norm.includes("falha")) {
    return "Mapeamos os pontos que sofreram afinamento ou erros anteriores e criamos um plano de recuperação gradual, estimulando as áreas com falhas para que o desenho original volte com força e saúde.";
  }
  if (norm.includes("sensibilidade") || norm.includes("cera") || norm.includes("linha")) {
    return "Técnica 100% livre de calor e de agressões à derme. Não causa flacidez palpebral precoce e é ideal para quem possui pele reativa, vascularizada ou faz uso de ácidos e dermocosméticos.";
  }
  if (norm.includes("evento") || norm.includes("autoestima") || norm.includes("cuidado") || norm.includes("princesa")) {
    return "Um atendimento relaxante que entrega luminosidade e alinhamento instantâneo, deixando você pronta e confiante para qualquer compromisso com efeito revigorado e sensação de bem-estar.";
  }
  if (norm.includes("lábio") || norm.includes("ressecad") || norm.includes("cor")) {
    return "Protocolo de hidratação e renovação celular que devolve o viço e a maciez à mucosa labial, restaurando a barreira contra ressecamento e conferindo uma tonalidade jovem e saudável.";
  }
  if (norm.includes("curvador") || norm.includes("cílios") || norm.includes("extensões")) {
    return "Elevação milimétrica da raiz que dispensa o curvador mecânico e não quebra a haste capilar, mantendo seus próprios cílios nutridos e curvados de forma duradoura.";
  }
  return "Protocolo individualizado que respeita sua saúde e anatomia, garantindo harmonia estética duradoura e um resultado sofisticado alinhado aos seus traços.";
}

function ProcedureResultsCarousel({ cards }) {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const [activePage, setActivePage] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // No desktop exibe 3 fotos por página; no mobile cada card é um slide
  const pageCount = useMemo(() => {
    if (!cards || cards.length === 0) return 1;
    if (isMobile) return cards.length;
    return Math.max(1, Math.ceil(cards.length / 3));
  }, [cards, isMobile]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0, 0.35, 0.7], rootMargin: "-8% 0px -8% 0px" }
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      if (!isInView) {
        video.pause();
      }
    });
  }, [isInView]);

  useEffect(
    () => () => {
      videoRefs.current.forEach((video) => video?.pause());
    },
    []
  );

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < maxScroll - 10);

    if (maxScroll <= 10) {
      setActivePage(0);
      return;
    }

    // Proporção de scroll real e contínua (0 a 1) mapeada precisamente aos dots
    const scrollRatio = Math.max(0, Math.min(1, scrollLeft / maxScroll));
    const newPage = Math.min(pageCount - 1, Math.round(scrollRatio * (pageCount - 1)));
    setActivePage(newPage);
  }, [pageCount]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollToPage = (pageIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    const targetScroll = (pageIndex / Math.max(1, pageCount - 1)) * maxScroll;
    track.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActivePage(pageIndex);
  };

  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = isMobile ? track.clientWidth * 0.85 : track.clientWidth;
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = isMobile ? track.clientWidth * 0.85 : track.clientWidth;
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="proc-gallery-carousel" ref={carouselRef}>
      {/* Seta Lateral Esquerda */}
      <button
        type="button"
        className="proc-gallery-side-btn proc-gallery-side-btn--prev"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Resultados anteriores"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
      </button>

      {/* Track com exatamente 3 fotos por vez no desktop */}
      <div className="proc-gallery-track" ref={trackRef} onScroll={updateScrollState}>
        {cards.map((card, index) => {
          const hasVideo = Boolean(card.video);
          return (
            <article
              key={card.id}
              className="proc-gallery-slide"
              aria-label={card.procedure ? `Resultado de ${card.procedure}` : "Resultado de procedimento"}
            >
              <div className="proc-gallery-slide-media">
                {hasVideo ? (
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    src={card.video}
                    poster={card.image}
                    className="proc-gallery-slide-video"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onClick={(event) => {
                      const video = event.currentTarget;
                      if (video.paused) video.play().catch(() => {});
                      else video.pause();
                    }}
                  />
                ) : (
                  <img
                    src={card.image}
                    alt={card.alt || card.procedure}
                    className="proc-gallery-slide-image"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {hasVideo && (
                  <div className="proc-gallery-video-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Vídeo</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Seta Lateral Direita */}
      <button
        type="button"
        className="proc-gallery-side-btn proc-gallery-side-btn--next"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Próximos resultados"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores de Página */}
      {pageCount > 1 && (
        <div className="proc-gallery-dots" aria-label="Navegação dos resultados">
          {Array.from({ length: pageCount }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              className={`proc-gallery-dot ${pageIndex === activePage ? "is-active" : ""}`}
              onClick={() => scrollToPage(pageIndex)}
              aria-label={`Ver página ${pageIndex + 1} de ${pageCount}`}
              aria-current={pageIndex === activePage ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * [AI-COMPONENT]: ProcedurePage
 * @description Página oficial padronizada para todos os procedimentos do catálogo.
 * @example <ProcedurePage />
 */
export function ProcedurePage() {
  const { slug } = useParams();
  const procedure = getProcedureBySlug(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [expandedIndications, setExpandedIndications] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { lenis } = useSmoothScroll();

  const handleFaqToggle = (index) => {
    const nextIndex = openFaqIndex === index ? null : index;
    setOpenFaqIndex(nextIndex);
    if (lenis) {
      setTimeout(() => lenis.resize(), 120);
      setTimeout(() => lenis.resize(), 460);
    }
  };

  // Redirecionamento preventivo se o slug não existir no catálogo
  if (!procedure) {
    return <Navigate to="/" replace />;
  }

  const experienceItems = getProcedureExperience(procedure);
  const ritualImages = [
    "/images/procedimentos/ritual/centro.jpg",
    "/images/procedimentos/ritual/step2.jpg",
    "/images/procedimentos/ritual/step3.jpg",
    "/images/procedimentos/ritual/step4.jpg"
  ];
  const whatsappUrl = `${CONTACT_INFO?.whatsappRaw || "https://wa.me/5528999501731"}?text=${encodeURIComponent(
    `Olá Steffani! Gostaria de agendar o procedimento ${procedure.title} no Ateliê.`
  )}`;

  const toggleIndication = (idx) => {
    setExpandedIndications((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleCategoryDetails = (categoryId) => {
    setExpandedCategoryId((currentId) =>
      currentId === categoryId ? null : categoryId
    );
  };

  // Filtragem dos Resultados Reais específicos da categoria do procedimento
  const categoryKey = (procedure.category || "").toLowerCase();
  const procedureCases = CASES_CONTENT.cards
    .filter((card) => {
      if (categoryKey.includes("sobrancelha") || categoryKey.includes("micro")) {
        return card.category === "sobrancelhas";
      }
      if (categoryKey.includes("labia") || categoryKey.includes("lábio") || categoryKey.includes("labio")) {
        return card.category === "labios";
      }
      if (categoryKey.includes("lash") || categoryKey.includes("olhar") || categoryKey.includes("cílio")) {
        return card.category === "olhar";
      }
      return card.category === "sobrancelhas";
    });

  const resultsTitle = categoryKey.includes("labia") || categoryKey.includes("lábio")
    ? "Resultados Reais de Lábios"
    : categoryKey.includes("lash") || categoryKey.includes("olhar")
    ? "Resultados Reais de Lash & Olhar"
    : "Resultados Reais de Sobrancelhas";

  return (
    <main id="main-content" className="proc-page-main">
      {/* ====================================================================
          1. HERO SECTION (PADRÃO HERO PRINCIPAL COM RETRATO DE STEFFANI)
          ==================================================================== */}
      <section className="hero hero-proc" id="hero-procedure" aria-labelledby="hero-proc-title">
        <div className="hero-proc__content">
          {/* Breadcrumb Editorial */}
          <nav aria-label="Breadcrumb" className="hero-proc__breadcrumb">
            <Link to="/">{PROCEDURE_PAGE_LABELS.breadcrumbHome}</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/#procedimentos">{PROCEDURE_PAGE_LABELS.breadcrumbProcedures}</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active">{procedure.category.toUpperCase()}</span>
          </nav>

          {/* Eyebrow de Categoria */}
          <span className="hero-proc__eyebrow">{procedure.category.toUpperCase()}</span>

          {/* Título Editorial Imponente */}
          <h1 id="hero-proc-title" className="hero-proc__title">
            {procedure.title}
          </h1>

          {/* Descrição Equilibrada e Espaçosa */}
          <p className="hero-proc__subtitle">
            {procedure.lead || procedure.summary}
          </p>

          {/* CTA Principal de Agendamento + Ação Secundária Editorial */}
          <div className="hero-proc__cta">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn hero-btn--primary hero-proc__btn"
              aria-label={`Agendar ${procedure.title} pelo WhatsApp`}
            >
              <span>Agendar este procedimento</span>
              <ChevronRight className="hero-btn__icon" />
            </a>

            <a
              href="#proc-package-title"
              className="btn hero-btn hero-btn--secondary hero-proc__btn-secondary"
            >
              <span>Conhecer o que está incluso</span>
              <ChevronRight className="hero-btn__icon" />
            </a>
          </div>

          {/* Informações Rápidas Soltas Abaixo dos Botões (sem badges e sem pontos) */}
          <div className="hero-proc__quick-info">
            {procedure.duration && (
              <div className="hero-proc__info-item">
                <span className="hero-proc__info-label">Duração:</span>
                <span className="hero-proc__info-val">{procedure.duration}</span>
              </div>
            )}
            {procedure.price && (
              <div className="hero-proc__info-item">
                <span className="hero-proc__info-label">Investimento:</span>
                <span className="hero-proc__info-val">{procedure.price}</span>
              </div>
            )}
            {procedure.facts?.find((f) => f.label === "Técnica") && (
              <div className="hero-proc__info-item">
                <span className="hero-proc__info-label">Técnica:</span>
                <span className="hero-proc__info-val">
                  {procedure.facts.find((f) => f.label === "Técnica").value}
                </span>
              </div>
            )}
            {procedure.facts?.find((f) => f.label === "Incluso") && (
              <div className="hero-proc__info-item">
                <span className="hero-proc__info-label">Incluso:</span>
                <span className="hero-proc__info-val">
                  {procedure.facts.find((f) => f.label === "Incluso").value}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Visual: Círculo Geométrico e Retrato Recortado de Steffani */}
        <div className="hero__visual hero-proc__visual">
          <div className="hero__circle" aria-hidden="true" />
          <img
            src="/images/hero/assets01-hero.png"
            alt={`${BRAND.name} Torres, especialista do ${BRAND.fullAcademyTitle}`}
            className="hero__portrait"
            width="1024"
            height="1536"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* ====================================================================
          2. EXPERIÊNCIA ORGÂNICA: O QUE ESTÁ INCLUSO NO SEU PACOTE & DETALHES
          Inspirado na referência orgânica: flores botânicas, fotos arqueadas e composição fluida
          ==================================================================== */}
      <section className="proc-organic-experience-section" aria-label="Experiência Completa do Pacote">
        {/* Decorações Florais Fornecidas com Cuidado de Transparência e Pointer-Events */}
        <div className="proc-floral-corner proc-floral-corner--left" aria-hidden="true">
          <img
            src="/images/flores-esquerda.png"
            alt=""
            className="proc-floral-img proc-floral-img--left"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="proc-floral-corner proc-floral-corner--right" aria-hidden="true">
          <img
            src="/images/flores-direita.png"
            alt=""
            className="proc-floral-img proc-floral-img--right"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="proc-organic-container">
          {/* Cabeçalho da Seção */}
          <div className="proc-organic-header procedures-header-centered">
            <div className="meta-label-ornament">
              <span className="ornament-line" aria-hidden="true" />
              <span className="meta-label">EXPERIÊNCIA COMPLETA</span>
              <span className="ornament-line" aria-hidden="true" />
            </div>
            <h2 id="proc-package-title" className="procedures-title-main proc-organic-title">
              O Que Está Incluso no Seu Pacote
            </h2>
            <p className="procedures-subtitle proc-organic-subtitle">
              Transparência, acolhimento e afeto em cada etapa. Conheça tudo o que foi preparado com carinho para o seu momento no ateliê:
            </p>
          </div>

          {/* PARTE SUPERIOR: Os 4 Passos Editoriais com Textos Grandes (Sem Fotos) */}
          <div className="proc-arch-steps-grid">
            {experienceItems.slice(0, 4).map((item, idx) => (
              <div key={item.num || idx} className="proc-arch-step-item">
                <span className="proc-arch-step-num" aria-hidden="true">{item.num}</span>
                <h3 className="proc-arch-step-title">{item.title}</h3>
                <p className="proc-arch-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* PARTE INFERIOR: Composição em 3 Colunas (Indicações, Foto Central Quadrada, Etapas) */}
          <div className="proc-organic-lower-grid">
            {/* Coluna Esquerda: Para Quem é Indicado */}
            <div className="proc-organic-indications-col">
              <span className="proc-section-meta">DIAGNÓSTICO INDIVIDUAL</span>
              <h3 className="proc-organic-col-title">Para Quem é Indicado</h3>
              <p className="proc-organic-col-lead">
                {procedure.slug === "design-sobrancelhas"
                  ? "Ideal para quem busca valorizar o desenho natural sem afinar as sobrancelhas, mantendo um resultado saudável, elegante e em harmonia com seus traços."
                  : procedure.lead || "Ideal para quem busca valorizar o desenho natural sem afinar as sobrancelhas, mantendo um resultado saudável, elegante e em harmonia com seus traços."}
              </p>

              <ul className="proc-organic-checklist">
                {procedure.indications &&
                  procedure.indications.map((item, idx) => (
                    <li key={idx} className="proc-organic-check-item">
                      <span className="pillar-check-icon proc-check-icon-circle" aria-hidden="true">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span className="proc-organic-check-text">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Coluna Direita: Etapas do Tratamento */}
            <div className="proc-organic-steps-col">
              <span className="proc-section-meta">COMO ACONTECE</span>
              <h3 className="proc-organic-col-title">Etapas do Tratamento</h3>
              <p className="proc-organic-col-lead">
                Um processo planejado para que você relaxe, desfrute do momento e saia com o resultado impecável.
              </p>

              <div className="proc-organic-steps-timeline">
                {procedure.steps &&
                  procedure.steps.map((step, idx) => (
                    <div key={idx} className="proc-organic-timeline-step">
                      <span className="proc-organic-timeline-badge">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="proc-organic-timeline-content">
                        <h4 className="proc-organic-timeline-title">{step.title}</h4>
                        <p className="proc-organic-timeline-desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. NOVA SEÇÃO: GALERIA DE RESULTADOS REAIS (DA CATEGORIA)
          ==================================================================== */}
      {procedureCases.length > 0 && (
        <section className="proc-gallery-section" aria-labelledby="proc-gallery-title">
          <div className="proc-gallery-container">
            <div className="proc-gallery-header">
              <div className="meta-label-ornament">
                <span className="ornament-line" aria-hidden="true" />
                <span className="meta-label">TRANSFORMAÇÕES REAIS</span>
                <span className="ornament-line" aria-hidden="true" />
              </div>
              <h2 id="proc-gallery-title" className="results-title-main proc-gallery-title">
                {resultsTitle}
              </h2>
              <p className="results-subtitle proc-gallery-subtitle">
                Registros autênticos de procedimentos realizados no Ateliê Steffani Torres. Arraste ou passe o mouse para conferir a delicadeza dos detalhes:
              </p>
            </div>

            <ProcedureResultsCarousel cards={procedureCases} />
          </div>
        </section>
      )}



      {/* ====================================================================
          6. FAQ / ESCLARECIMENTOS ESPECÍFICOS DO PROCEDIMENTO
          ==================================================================== */}
      {procedure.faq && procedure.faq.length > 0 && (
        <section className="proc-faq-section" aria-labelledby="proc-faq-title">
          {/* Decoração Floral Orgânica */}
          <div className="proc-floral-corner proc-floral-corner--faq-left" aria-hidden="true">
            <img
              src="/images/flores-esquerda.png"
              alt=""
              className="proc-floral-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="proc-faq-container">
            <div className="proc-faq-header procedures-header-centered">
              <div className="meta-label-ornament">
                <span className="ornament-line" aria-hidden="true" />
                <span className="meta-label">{PROCEDURE_PAGE_LABELS.faqMeta}</span>
                <span className="ornament-line" aria-hidden="true" />
              </div>
              <h2 id="proc-faq-title" className="procedures-title-main proc-faq-title">
                {PROCEDURE_PAGE_LABELS.faqTitlePrefix} {procedure.title}
              </h2>
              <p className="procedures-subtitle proc-faq-subtitle">
                Tire todas as suas dúvidas sobre cuidados, durabilidade, indicações e o protocolo exclusivo do Ateliê:
              </p>
            </div>

            <div className="faq-list" role="region" aria-label="Lista de perguntas frequentes do procedimento">
              {procedure.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                const answerId = `proc-faq-answer-${idx}`;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="faq-summary"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => handleFaqToggle(idx)}
                    >
                      <span className="faq-question-text">{item.q}</span>
                      <span className="faq-toggle-icon" aria-hidden="true" />
                    </button>
                    <div id={answerId} className="faq-answer-collapse" role="region">
                      <div className="faq-answer-inner">
                        <div className="faq-content">{item.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          7. CONTINUE EXPLORANDO (REPLICANDO EXATAMENTE OS 4 CARDS DA HOMEPAGE)
          ==================================================================== */}
      <section className="proc-explore-categories-section" aria-labelledby="proc-explore-title">
        {/* Decoração Floral Orgânica no canto da Seção de Outros Procedimentos */}
        <div className="proc-floral-corner proc-floral-corner--explore-right" aria-hidden="true">
          <img
            src="/images/flores-direita.png"
            alt=""
            className="proc-floral-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="proc-explore-categories-container">
          <div className="proc-explore-categories-header procedures-header-centered">
            <div className="meta-label-ornament">
              <span className="ornament-line" aria-hidden="true" />
              <span className="meta-label">CONTINUE EXPLORANDO</span>
              <span className="ornament-line" aria-hidden="true" />
            </div>
            <h2 id="proc-explore-title" className="procedures-title-main proc-explore-categories-title">
              Outros Procedimentos do Ateliê
            </h2>
            <p className="procedures-subtitle proc-explore-categories-subtitle">
              Navegue pelas nossas categorias e descubra o protocolo perfeito para realçar a sua beleza natural:
            </p>
          </div>

          {/* Cards que Separam Cada Procedimento (Exatamente Idênticos à Página Principal) */}
          <div className="procedure-category-grid">
            {PROCEDURE_CATEGORY_CARDS.map((card) => (
              <article
                key={card.id}
                className="procedure-category-card"
                onClick={() => setSelectedCategory(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCategory(card);
                  }
                }}
                aria-label={`Ver procedimentos de ${card.title}`}
              >
                {/* Conteúdo Textual à Esquerda */}
                <div className="category-card-content">
                  <div className="category-card-num-wrap">
                    <span className="category-card-num">{card.num}</span>
                    <span className="category-card-line" />
                  </div>

                  <div>
                    <h3 className="category-card-title">{card.title}</h3>
                    <p className="category-card-desc">{card.description}</p>
                  </div>

                  {/* Botão Pílula com Círculo e Seta (Fiel à Referência) */}
                  <button
                    type="button"
                    className="category-card-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(card);
                    }}
                    aria-label={`Ver procedimentos de ${card.title}`}
                  >
                    <span>Ver procedimentos</span>
                    <span className="btn-arrow-circle" aria-hidden="true">
                      <ArrowRightShort className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>

                {/* Mídia à Direita com Efeito de Fade Gradiente */}
                <div className="category-card-media">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="category-card-img"
                    style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="category-card-overlay" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Modal Interativo com os Procedimentos Detalhados da Classe */}
        <ProcedureCategoryModal
          category={selectedCategory}
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      </section>

    </main>
  );
}
