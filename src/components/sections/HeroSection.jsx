// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Hero: titulo TORRES BEAUTY ACADEMY, subtitulo, CTA dourado e retrato fundido ao fundo por mascaras (ver styles/hero.css).
// [AI-DO-NOT-BREAK]: O retrato nunca e esticado: width/height preservam a proporcao 2:3 e nao ha object-fit: fill.

import { HERO_CONTENT, CONTACT_INFO, BRAND } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { WhatsAppIcon } from "../ui/Icons";

/**
 * [AI-COMPONENT]: HeroSection
 * @example <HeroSection />
 */
export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__visual">
        <div className="hero__portrait-frame">
          <img
            src="/images/hero/torres-hero-1000.webp"
            srcSet="/images/hero/torres-hero-640.webp 640w, /images/hero/torres-hero-1000.webp 1000w, /images/hero/torres-hero-1400.webp 1400w"
            sizes="(max-aspect-ratio: 1/1) 100vw, (max-width: 900px) 100vw, 45vw"
            alt={`Steffani Torres, especialista da ${BRAND.fullAcademyTitle}`}
            className="hero__portrait"
            width="1400"
            height="2096"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="hero__content">
        <span className="meta-label hero__eyebrow">{HERO_CONTENT.eyebrow}</span>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-main">{HERO_CONTENT.titleMain}</span>{" "}
          <span className="hero__title-sub">{HERO_CONTENT.titleSub}</span>
        </h1>
        <p className="hero__subtitle">{HERO_CONTENT.subtitle}</p>

        <div className="hero__actions">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>{HERO_CONTENT.ctaPrimary}</span>
            <WhatsAppIcon />
          </a>
          <SectionLink target={HERO_CONTENT.ctaSecondary.target} className="hero__link">
            {HERO_CONTENT.ctaSecondary.label}
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
