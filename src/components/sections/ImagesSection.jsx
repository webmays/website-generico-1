// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Secao de avaliacoes (imagens) logo antes da Localizacao, com cabecalho editorial igual ao das outras secoes.
// [AI-DO-NOT-BREAK]: Textos e fotos vem de IMAGES_CONTENT. Com a lista vazia, mostra espacos reservados tracejados.

import { IMAGES_CONTENT } from "../../data/siteContent";
import { EditorialTitle } from "../ui/EditorialTitle";

const PLACEHOLDER_COUNT = 3;

/**
 * [AI-COMPONENT]: ImagesSection
 * @example <ImagesSection />
 */
export function ImagesSection() {
  const { images } = IMAGES_CONTENT;
  const items = images.length ? images : Array.from({ length: PLACEHOLDER_COUNT }, () => null);

  return (
    <section id={IMAGES_CONTENT.id} className="images-section" aria-labelledby="images-title">
      <div className="container">
        <div className="images-header-centered">
          <div className="meta-label-ornament">
            <span className="ornament-line" aria-hidden="true" />
            <span className="meta-label">{IMAGES_CONTENT.metaLabel}</span>
            <span className="ornament-line" aria-hidden="true" />
          </div>

          <EditorialTitle text={IMAGES_CONTENT.title} className="images-title-main" id="images-title" />
          <p className="images-subtitle">{IMAGES_CONTENT.subtitle}</p>
        </div>

        <div className="images-grid">
          {items.map((img, idx) =>
            img ? (
              <figure key={img.src} className="images-item reveal">
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </figure>
            ) : (
              <div key={idx} className="images-item images-item--empty" aria-hidden="true" />
            )
          )}
        </div>
      </div>
    </section>
  );
}
