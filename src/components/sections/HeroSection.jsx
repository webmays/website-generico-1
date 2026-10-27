// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Hero Section do Ateliê Steffani Torres — título em escada, CTAs, contato WhatsApp e retrato recortado sobre círculo geométrico.
// [AI-DO-NOT-BREAK]: A ordem do DOM (título → retrato → CTAs) define a composição vertical no mobile. No desktop o retrato é absoluto (ver src/styles/hero.css).

import { HERO_CONTENT, CONTACT_INFO, BRAND } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { ChevronRight, WhatsAppIcon } from "../ui/Icons";

/**
 * [AI-COMPONENT]: HeroSection
 * @description Primeira dobra da Landing Page, reproduzindo fielmente a referência editorial do ateliê.
 * @example <HeroSection />
 */
export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__eyebrow-wrap">
          <div className="hero__eyebrow-line" aria-hidden="true" />
          <span className="hero__eyebrow">{HERO_CONTENT.eyebrow}</span>
        </div>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-line">{HERO_CONTENT.titleLine1}</span>
          <span className="hero__title-line hero__title-line--2">{HERO_CONTENT.titleLine2}</span>
          <span className="hero__title-line hero__title-line--3">{HERO_CONTENT.titleLine3}</span>
        </h1>

        <p className="hero__subtitle">
          {HERO_CONTENT.subtitleLine1}
          <br />
          {HERO_CONTENT.subtitleLine2}
        </p>

        <div className="hero__cta">
          <div className="hero__actions">
            <SectionLink target={HERO_CONTENT.ctaPrimary.target} className="btn hero-btn hero-btn--primary">
              <span>{HERO_CONTENT.ctaPrimary.label}</span>
              <ChevronRight className="hero-btn__icon" />
            </SectionLink>
            <SectionLink target={HERO_CONTENT.ctaSecondary.target} className="btn hero-btn hero-btn--secondary">
              <span>{HERO_CONTENT.ctaSecondary.label}</span>
              <ChevronRight className="hero-btn__icon hero-btn__icon--secondary" />
            </SectionLink>
          </div>

          <hr className="hero__rule" />

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__whatsapp"
            aria-label={`Conversar pelo WhatsApp: ${HERO_CONTENT.phoneShort || CONTACT_INFO.phoneDisplay}`}
          >
            <WhatsAppIcon className="hero__whatsapp-icon" />
            <span className="hero__whatsapp-divider" aria-hidden="true">|</span>
            <span className="hero__whatsapp-text">
              <span className="hero__whatsapp-number">{HERO_CONTENT.phoneShort || CONTACT_INFO.phoneDisplay}</span>
              <span className="hero__whatsapp-label">{HERO_CONTENT.whatsappText}</span>
            </span>
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__circle" aria-hidden="true" />
        <img
          src="/images/hero/assets01-hero.png"
          alt={`${BRAND.name} Torres, especialista do ${BRAND.fullAcademyTitle}, de luva preta e camiseta preta`}
          className="hero__portrait"
          width="1024"
          height="1536"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}
