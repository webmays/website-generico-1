// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Secao "Sobre Steffani Torres": retrato, narrativa em primeira pessoa e CTA dourado.

import { ABOUT_CONTENT } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { EditorialTitle } from "../ui/EditorialTitle";

/**
 * [AI-COMPONENT]: AboutSection
 * @example <AboutSection />
 */
export function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-photo">
            <img
              src={ABOUT_CONTENT.image}
              alt={ABOUT_CONTENT.imageAlt}
              className="about-image"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1797}
            />
          </div>

          <div className="about-content">
            <span className="meta-label">{ABOUT_CONTENT.metaLabel}</span>
            <EditorialTitle text={ABOUT_CONTENT.title} className="about-title" />

            <div className="about-paragraphs">
              {ABOUT_CONTENT.paragraphs.map((par, idx) => (
                <p key={idx} className="about-text">
                  {par}
                </p>
              ))}
            </div>

            <div className="about-cta">
              <SectionLink target={ABOUT_CONTENT.ctaTarget} className="btn btn-primary">
                {ABOUT_CONTENT.ctaButton}
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
