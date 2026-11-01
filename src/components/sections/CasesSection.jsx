// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Galeria "Resultados Reais": curadoria de 6 itens (fotos e videos) em grade reta, que vira trilho no celular.
// [AI-DO-NOT-BREAK]: O ID "resultados" e alvo da navegacao. Nao repetir aqui fotos usadas nos cards de Procedimentos.

import { useEffect, useRef, useState } from "react";
import { CASES_CONTENT } from "../../data/siteContent";
import { EditorialTitle } from "../ui/EditorialTitle";

/**
 * [AI-COMPONENT]: ResultVideo
 * @description Video mudo em loop que so toca enquanto esta visivel.
 */
function ResultVideo({ item }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={item.video}
      poster={item.image}
      aria-label={item.alt}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}

/**
 * [AI-COMPONENT]: CasesSection
 * @example <CasesSection />
 */
export function CasesSection() {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const total = CASES_CONTENT.cards.length;

  // No celular a galeria vira trilho: acompanha o item visivel para os indicadores
  const handleScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const item = gallery.firstElementChild;
    if (!item) return;
    const step = item.getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).columnGap || 0);
    const index = Math.round(gallery.scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), total - 1));
    if (gallery.scrollLeft > 8) setHasSwiped(true);
  };

  const scrollToIndex = (index) => {
    const target = galleryRef.current?.children[index];
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section id={CASES_CONTENT.id} className="results-section">
      <div className="container">
        <div className="results-head">
          <span className="meta-label">{CASES_CONTENT.metaLabel}</span>
          <EditorialTitle text={CASES_CONTENT.title} className="results-title" />
          <p className="results-subtitle">{CASES_CONTENT.subtitle}</p>
        </div>
      </div>

      <div
        ref={galleryRef}
        className={`results-gallery ${hasSwiped ? "has-swiped" : ""}`}
        role="group"
        aria-label={CASES_CONTENT.galleryLabel}
        onScroll={handleScroll}
      >
        {CASES_CONTENT.cards.map((item) => (
          <figure key={item.id} className="results-item">
            {item.video ? (
              <ResultVideo item={item} />
            ) : (
              <img src={item.image} alt={item.alt} width="900" height="900" loading="lazy" decoding="async" />
            )}
          </figure>
        ))}
      </div>

      {/* Navegacao do trilho: so aparece no celular (ver results.css) */}
      <div className="container results-nav reveal">
        <span className={`results-swipe-hint ${hasSwiped ? "is-hidden" : ""}`} aria-hidden="true">
          {CASES_CONTENT.swipeHint}
          <span className="results-swipe-arrow">→</span>
        </span>
        <div className="results-dots">
          {CASES_CONTENT.cards.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`results-dot ${idx === activeIndex ? "is-active" : ""}`}
              aria-label={`Ver resultado ${idx + 1} de ${total}`}
              aria-current={idx === activeIndex ? "true" : undefined}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <p className="results-disclaimer reveal">{CASES_CONTENT.disclaimer}</p>
      </div>
    </section>
  );
}
