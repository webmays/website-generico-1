// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Mini-seção de Destaque e Estreia da Formação "Destrava Brow" (Fadas In Action).
// [AI-DO-NOT-BREAK]: Steffani 100% centralizada na esfera com gradiente radial, foto no topo no mobile com fade inferior e botão único de lista de espera.

import { UPCOMING_COURSE_DATA, getCourseWhatsappUrl } from "../../data/coursesData";

/**
 * [AI-COMPONENT]: CoursePremiere
 * @description Destaque oficial de estreia do curso Destrava Brow (Fadas In Action) em formato editorial de luxo.
 * @example <CoursePremiere />
 */
export function CoursePremiere() {
  const waitlistWhatsappUrl = getCourseWhatsappUrl(
    UPCOMING_COURSE_DATA.waitlistButton.whatsappMessage
  );

  return (
    <div className="course-premiere-container">
      <article
        id="destrava-brow"
        className="upcoming-course-card"
        aria-label="Estreia da nova formação Destrava Brow — Fadas In Action"
      >
        {/* Arcos Decorativos de Fundo */}
        {/* Arcos Decorativos de Fundo */}
        <div className="upcoming-arc-bottom-left" aria-hidden="true" />
        <div className="upcoming-glow-ambient" aria-hidden="true" />

        {/* Palco Visual (Steffani Centralizada na Esfera Radial + Fade Inferior no Mobile) */}
        <div className="upcoming-visual-stage" aria-hidden="true">
          <div className="upcoming-sphere-main" />
          <img
            src={UPCOMING_COURSE_DATA.image}
            alt={UPCOMING_COURSE_DATA.imageAlt}
            className="upcoming-model-img"
            loading="lazy"
            decoding="async"
          />
          <div className="upcoming-mobile-bottom-fade" />
        </div>

        {/* Conteúdo Textual Estruturado */}
        <div className="upcoming-card-body">
          <div className="upcoming-eyebrow-wrap">
            <span className="upcoming-eyebrow">{UPCOMING_COURSE_DATA.tag}</span>
          </div>

          <h3 className="upcoming-title">{UPCOMING_COURSE_DATA.title}</h3>

          <div className="upcoming-course-tag-wrap">
            <span className="upcoming-course-tag">{UPCOMING_COURSE_DATA.courseName}</span>
          </div>

          <p className="upcoming-subtitle">{UPCOMING_COURSE_DATA.subtitle}</p>

          <p className="upcoming-disclaimer-text">
            {UPCOMING_COURSE_DATA.disclaimer}
          </p>

          {/* Botão Único: Entrar na lista de espera */}
          <div className="upcoming-actions-row">

            <a
              href={waitlistWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-upcoming-waitlist"
              aria-label="Entrar na lista de espera da formação Destrava Brow pelo WhatsApp"
            >
              <span>{UPCOMING_COURSE_DATA.waitlistButton.text}</span>
              <span className="btn-chevron" aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
