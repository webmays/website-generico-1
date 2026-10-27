// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Apresentação do Espaço / Ateliê com galeria editorial projetada para fotos em Modo Retrato (3:4).
// [AI-DO-NOT-BREAK]:
//  - Proporção 3:4 mantida para receber fotos verticais de smartphones e câmeras.
//  - Suporte a scroll-snap horizontal no mobile e grade de 4 colunas no desktop.
//  - Fallback automático para placeholder de luxo enquanto o usuário insere as fotos em public/images/espaco/.

import { useState } from "react";
import { SALON_CONTENT } from "../../data/siteContent";

/**
 * [AI-COMPONENT]: SalonPortraitCard
 * @description Card individual em modo retrato com suporte a imagem real com scrim de legenda ou placeholder elegante.
 */
function SalonPortraitCard({ photo }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasValidImage = Boolean(photo.image);

  return (
    <article
      className="salon-portrait-card"
      aria-label={photo.title || "Foto do Ateliê Steffani Torres"}
    >
      {hasValidImage ? (
        <div className="salon-card-media">
          <img
            src={photo.image}
            alt={photo.alt || photo.title || "Ambiente do Ateliê Steffani Torres"}
            className={`salon-card-img ${isLoaded ? "is-loaded" : ""}`}
            style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
          {/* Scrim gradiente inferior com legenda */}
          <div className="salon-card-scrim">
            <h3 className="salon-card-caption-title">{photo.title}</h3>
            {photo.desc && <p className="salon-card-caption-desc">{photo.desc}</p>}
          </div>
        </div>
      ) : (
        /* Placeholder de Luxo caso não haja foto definida */
        <div className="salon-placeholder">
          <div className="salon-placeholder-badge">
            <svg
              className="salon-placeholder-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span className="salon-placeholder-title">Ateliê Steffani Torres</span>
          </div>

          <div className="salon-placeholder-footer">
            <h3 className="salon-placeholder-area-title">{photo.title}</h3>
            {photo.desc && <p className="salon-placeholder-area-desc">{photo.desc}</p>}
          </div>
        </div>
      )}
    </article>
  );
}

/**
 * [AI-COMPONENT]: SalonSection
 * @description Seção do Ateliê / Salão em substituição ao antigo bloco de vídeo, apresentando fotos em modo retrato com requinte editorial.
 * @example <SalonSection />
 */
export function SalonSection() {
  return (
    <section id={SALON_CONTENT.id || "espaco"} className="salon-section">
      <div className="container">
        {/* Cabeçalho Editorial Centralizado */}
        <div className="salon-header-centered">
          <div className="meta-label-ornament">
            <span className="ornament-line" aria-hidden="true" />
            <span className="meta-label">{SALON_CONTENT.metaLabel}</span>
            <span className="ornament-line" aria-hidden="true" />
          </div>

          <h2 className="salon-title-main">{SALON_CONTENT.title}</h2>
          <p className="salon-subtitle">{SALON_CONTENT.subtitle}</p>
        </div>

        {/* Galeria em Modo Retrato (4 Colunas Desktop / Swipe Horizontal Mobile) */}
        <div className="salon-gallery-grid">
          {SALON_CONTENT.photos.map((photo) => (
            <SalonPortraitCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
