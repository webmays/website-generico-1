// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção "Resultados Reais" da Steffani Torres com fotos em alta definição e vídeos reais de procedimentos, tanto no Desktop Bento Grid quanto nos 3 Carrosséis Temáticos Mobile.
// [AI-DO-NOT-BREAK]:
//  - O ID "resultados" é o alvo oficial do link na navbar e do scrollspy (useActiveSection).
//  - Desktop: Bento Grid com 16 cards (fotos e vídeos reais integrados, incluindo vídeo quadrado 1:1 maior e novas fotos).
//  - Mobile: Dividido em 3 carrosséis temáticos (Sobrancelhas, Olhar/Lash com vídeos, Lábios com vídeo e fotos) com navegação fluida por gestos.
//  - Regra "Tire os nomes": Cards visuais limpos sem texto sobreposto sobre a foto. Suporta reprodução silenciosa nativa de vídeo.

import { useState, useRef, useEffect } from "react";
import { CASES_CONTENT } from "../../data/siteContent";

/**
 * Grupos temáticos dos 3 carrosséis mobile
 */
const RESULTS_MOBILE_GROUPS = [
  {
    id: "sobrancelhas",
    num: "01",
    title: "Sobrancelhas & Fios",
    subtitle: "Design, micropigmentação, shadow e simetria precisa",
    cardIds: ["01", "12", "06", "05", "02", "08", "13"]
  },
  {
    id: "olhar",
    num: "02",
    title: "Lash Lifting & Olhar",
    subtitle: "Curvatura, elevação e definição natural em foto e vídeo",
    cardIds: ["11", "03", "07", "09", "10"]
  },
  {
    id: "labios",
    num: "03",
    title: "Lábios & Revitalização",
    subtitle: "Revitalização labial, hidratação profunda e cor natural",
    cardIds: ["14", "15", "04", "16"]
  }
];

/**
 * [AI-COMPONENT]: ResultsVideoPlayer
 * @description Reprodutor de vídeo para cards de resultados com controle inteligente de execução:
 * - No mobile: Se o usuário estiver em outro carrossel ou em outro slide, o vídeo é PAUSADO IMEDIATAMENTE (canPlay = false).
 * - Apenas o slide ativo do carrossel atualmente em foco executa (canPlay = true), eliminando qualquer concorrência ou looping.
 * - No desktop: Executa suavemente quando visível no Bento Grid via IntersectionObserver.
 */
function ResultsVideoPlayer({ card, canPlay = null }) {
  const videoRef = useRef(null);
  const isControlled = typeof canPlay === "boolean";
  const posterSrc = card.image || card.poster;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    // Se for controlado pelo carrossel mobile (apenas 1 vídeo ativo por vez no carrossel visível):
    if (isControlled) {
      if (canPlay) {
        video.muted = true;
        const p = video.play();
        if (p !== undefined) p.catch(() => {});
      } else {
        video.pause();
      }
      return;
    }

    // Controle para desktop (Bento Grid):
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          video.muted = true;
          const p = video.play();
          if (p !== undefined) p.catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.3] }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [canPlay, isControlled]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={`results-card-media results-card-media--video ${card.isSquare1x1 ? "results-card-media--square-video" : ""}`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className={`results-card-img results-card-video ${card.isSquare1x1 ? "results-card-video--square" : ""}`}
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Badge Sutil e Luxuoso de Vídeo */}
      <div className="results-video-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>Vídeo</span>
      </div>
    </div>
  );
}

/**
 * [AI-COMPONENT]: ResultsImageMedia
 * @description Card individual de resultado com suporte nativo a vídeo ou foto de alta definição.
 */
function ResultsImageMedia({ card, canPlay = null }) {
  const [hasError, setHasError] = useState(false);
  const hasVideo = Boolean(card.video);
  const hasValidImage = card.image && !hasError;

  return (
    <article
      className={`results-card ${card.isSquare1x1 ? "results-card--square-1x1" : ""}`}
      aria-label={card.procedure ? `Resultado de ${card.procedure}` : "Resultado de procedimento"}
    >
      {hasVideo ? (
        <ResultsVideoPlayer card={card} canPlay={canPlay} />
      ) : hasValidImage ? (
        <div className="results-card-media">
          <img
            src={card.image}
            alt={card.alt || `Resultado de ${card.procedure} — Ateliê Steffani Torres`}
            className="results-card-img"
            style={card.objectFit ? { objectFit: card.objectFit } : undefined}
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="results-placeholder">
          <div className="results-placeholder-center">
            <svg
              className="results-placeholder-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="results-placeholder-text">Aguardando Foto</span>
            <span className="results-placeholder-sub">public/images/resultados/</span>
          </div>
        </div>
      )}
    </article>
  );
}

/**
 * [AI-COMPONENT]: ResultsHoverScreen
 * @description Telinha de pré-visualização ampliada com animação suave no hover:
 * - Exibe a foto ou vídeo INTEIRO em alta definição sem cortes (object-fit: contain).
 * - Moldura de luxo com acabamento glassmorphic escuro, borda dourada delicada e sombra fluida.
 * - Suporta reprodução nativa silenciosa de vídeo e identificador do procedimento.
 */
function ResultsHoverScreen({ card }) {
  const hasVideo = Boolean(card.video);

  return (
    <aside
      className="results-hover-screen"
      aria-label={`Visualização completa: ${card.procedure}`}
      aria-hidden="true"
    >
      {/* Moldura de Mídia Completa Sem Cortes */}
      <div className="results-hover-screen__media-frame">
        {hasVideo ? (
          <video
            src={card.video}
            poster={card.image}
            className="results-hover-screen__video"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          />
        ) : (
          <img
            src={card.image}
            alt={card.alt || card.procedure}
            className="results-hover-screen__img"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      {/* Legenda Editorial na Base */}
      <div className="results-hover-screen__caption">
        <span className="results-hover-screen__category">
          {card.category ? card.category.toUpperCase() : "RESULTADO REAL"}
        </span>
        <h4 className="results-hover-screen__title">{card.procedure}</h4>
      </div>
    </aside>
  );
}

/**
 * [AI-COMPONENT]: ResultsBentoCard
 * @description Item da grade Bento no Desktop com suporte à telinha ampliada no hover.
 */
function ResultsBentoCard({ card }) {
  const [isHovered, setIsHovered] = useState(false);

  const itemClasses = [
    "results-bento-item",
    card.isTall ? "results-bento-item--tall" : "",
    card.isLargeSquare ? "results-bento-item--large-square" : "",
    card.isSquare1x1 ? "results-bento-item--square-1x1" : "",
    card.id === "13" || card.id === "16" ? "results-bento-item--wide" : ""
  ].filter(Boolean).join(" ");

  return (
    <div
      className={itemClasses}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <ResultsImageMedia card={card} />
      {isHovered && <ResultsHoverScreen card={card} />}
    </div>
  );
}

/**
 * [AI-COMPONENT]: MobileResultsCarousel
 * @description Carrossel horizontal mobile com scroll snap nativo, contador e dots indicadores.
 * Gerencia a reprodução de vídeo para que APENAS o slide ativo execute quando o grupo estiver visível.
 */
function MobileResultsCarousel({ group, allCards }) {
  const groupRef = useRef(null);
  const trackRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const groupCards = group.cardIds
    .map((id) => allCards.find((c) => c.id === id))
    .filter(Boolean);

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ativa somente se este carrossel estiver visível no centro da tela
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      {
        threshold: [0, 0.35, 0.7],
        rootMargin: "-8% 0px -8% 0px"
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    const cardStep = clientWidth * 0.82 + 14;
    const index = Math.round(scrollLeft / cardStep);
    const clamped = Math.min(Math.max(index, 0), groupCards.length - 1);
    setActiveIndex((prev) => (prev !== clamped ? clamped : prev));
  };

  const scrollToSlide = (idx) => {
    if (!trackRef.current) return;
    const { clientWidth } = trackRef.current;
    const cardStep = clientWidth * 0.82 + 14;
    trackRef.current.scrollTo({
      left: idx * cardStep,
      behavior: "smooth"
    });
    setActiveIndex(idx);
  };

  return (
    <div className="results-mobile-group" ref={groupRef}>
      {/* Cabeçalho Editorial do Carrossel */}
      <div className="results-mobile-group-header">
        <div className="results-mobile-group-info">
          <span className="results-mobile-group-num">{group.num}</span>
          <div>
            <h3 className="results-mobile-group-title">{group.title}</h3>
            <p className="results-mobile-group-sub">{group.subtitle}</p>
          </div>
        </div>
        <div className="results-mobile-counter">
          <span className="results-mobile-counter-curr">{activeIndex + 1}</span>
          <span className="results-mobile-counter-sep">/</span>
          <span className="results-mobile-counter-tot">{groupCards.length}</span>
        </div>
      </div>

      {/* Track com Scroll Snap Horizontal */}
      <div
        className="results-mobile-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {groupCards.map((card, idx) => {
          const isCurrentActive = isInView && idx === activeIndex;

          return (
            <div
              key={card.id}
              className={`results-mobile-slide ${card.isSquare1x1 ? "results-mobile-slide--square" : ""}`}
            >
              <ResultsImageMedia card={card} canPlay={isCurrentActive} />
            </div>
          );
        })}
      </div>

      {/* Dots Indicadores Clicáveis */}
      <div className="results-mobile-dots" aria-label={`Navegação ${group.title}`}>
        {groupCards.map((card, idx) => (
          <button
            key={card.id}
            type="button"
            className={`results-mobile-dot ${idx === activeIndex ? "results-mobile-dot--active" : ""}`}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Ver item ${idx + 1} de ${group.title}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * [AI-COMPONENT]: CasesSection
 * @description Seção oficial de Resultados Reais, com Bento Grid no Desktop e 3 Carrosséis no Mobile com suporte completo a fotos e vídeos reais.
 */
export function CasesSection() {
  return (
    <section id={CASES_CONTENT.id || "resultados"} className="results-section">
      <div className="container">
        {/* Cabeçalho Editorial Centralizado com Ornamento */}
        <div className="results-header-centered">
          <div className="meta-label-ornament">
            <span className="ornament-line" aria-hidden="true" />
            <span className="meta-label">{CASES_CONTENT.metaLabel}</span>
            <span className="ornament-line" aria-hidden="true" />
          </div>

          <h2 className="results-title-main">{CASES_CONTENT.title}</h2>
          <p className="results-subtitle">{CASES_CONTENT.subtitle}</p>
        </div>

        {/* 1. Desktop & Tablet (> 768px): Bento Grid 16 Cards (Fotos + Vídeos) */}
        <div className="results-bento-grid">
          {CASES_CONTENT.cards.map((card) => (
            <ResultsBentoCard key={card.id} card={card} />
          ))}
        </div>

        {/* 2. Mobile (<= 768px): 3 Carrosséis Horizontais Temáticos */}
        <div className="results-mobile-carousels">
          {RESULTS_MOBILE_GROUPS.map((group) => (
            <MobileResultsCarousel
              key={group.id}
              group={group}
              allCards={CASES_CONTENT.cards}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-[0.75rem] text-[#111111]/50 max-w-xl mx-auto">
          {CASES_CONTENT.disclaimer}
        </p>
      </div>
    </section>
  );
}
