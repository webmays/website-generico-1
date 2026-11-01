// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Galeria "Resultados Reais": curadoria de 6 itens (fotos e videos) em grade reta, que vira trilho no celular.
// [AI-DO-NOT-BREAK]: O ID "resultados" e alvo da navegacao. Nao repetir aqui fotos usadas nos cards de Procedimentos.

import { useEffect, useRef } from "react";
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
  return (
    <section id={CASES_CONTENT.id} className="results-section">
      <div className="container">
        <div className="results-head">
          <span className="meta-label">{CASES_CONTENT.metaLabel}</span>
          <EditorialTitle text={CASES_CONTENT.title} className="results-title" />
          <p className="results-subtitle">{CASES_CONTENT.subtitle}</p>
        </div>
      </div>

      <div className="results-gallery">
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

      <div className="container">
        <p className="results-disclaimer">{CASES_CONTENT.disclaimer}</p>
      </div>
    </section>
  );
}
