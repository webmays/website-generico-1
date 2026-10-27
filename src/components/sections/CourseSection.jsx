// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Cursos da Steffani com cabeçalho padrão idêntico a Procedimentos e grade 2x2 uniforme de formações profissionais.
// [AI-DO-NOT-BREAK]: Todos os botões conectam diretamente ao atendimento oficial da Steffani no WhatsApp com mensagens personalizadas.

import { COURSES_HEADER_DATA, COURSES_LIST, getCourseWhatsappUrl } from "../../data/coursesData";
import { CheckIcon, WhatsAppIcon } from "../ui/Icons";
import { CoursePremiere } from "./CoursePremiere";

/**
 * [AI-COMPONENT]: CourseSection
 * @description Apresentação das formações profissionais da Steffani em faixas alternadas de alto impacto visual, fotografia dominante e pilares comerciais que vendem.
 * @example <CourseSection />
 */
export function CourseSection() {
  const generalWhatsappUrl = getCourseWhatsappUrl("Olá Steffani! Tenho interesse em saber mais sobre os cursos oferecidos por você. Gostaria de receber mais informações.");

  return (
    <section id="cursos" className="courses-section">
      <div className="container">
        {/* Cabeçalho Rigorosamente Padrão (Igual à Seção de Procedimentos) */}
        <div className="courses-header-centered">
          <div className="meta-label-ornament">
            <span className="ornament-line" />
            <span className="meta-label">{COURSES_HEADER_DATA.eyebrow}</span>
            <span className="ornament-line" />
          </div>

          <h2 className="courses-title-main">{COURSES_HEADER_DATA.title}</h2>

          <p className="courses-subtitle">
            {COURSES_HEADER_DATA.subtitle}
          </p>

          <p className="courses-header-note">
            {COURSES_HEADER_DATA.bottomDisclaimer}
          </p>

          <div className="courses-header-action">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-courses-pill"
              aria-label="Falar no WhatsApp sobre os cursos oferecidos pela Steffani"
            >
              <span>{COURSES_HEADER_DATA.ctaPill}</span>
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      {/* [AI-EDIT-ZONE]: Mini-seção de Destaque e Estreia — Destrava Brow (Fadas In Action) */}
      <CoursePremiere />

      {/* [AI-EDIT-ZONE]: Faixas Horizontais Alternadas (Branca e Marrom) de Ponta a Ponta */}
      <div className="courses-bands-list">
        {COURSES_LIST.map((course, idx) => {
          const courseWhatsappUrl = getCourseWhatsappUrl(course.whatsappMessage);
          const isReversed = idx % 2 === 1;
          const isDarkTheme = idx % 2 === 1; // Alternância: 0 = Branca, 1 = Marrom, 2 = Branca, 3 = Marrom

          return (
            <article
              key={course.id}
              className={`course-band-item ${isDarkTheme ? "is-dark-theme" : "is-light-theme"} ${isReversed ? "is-reversed" : ""}`}
              id={`curso-${course.id}`}
            >
              <div className="container course-band-inner">
                {/* Mídia Fotográfica da Faixa (Ampliada e Sem Badge Artificial) */}
                <div className="course-band-media">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-band-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="course-media-overlay-subtle" />
                </div>

                {/* Conteúdo Textual Estruturado da Faixa */}
                <div className="course-band-body">
                  <div className="course-band-header">
                    <h3 className="course-band-title">{course.title}</h3>
                    {course.headline && (
                      <p className="course-band-headline">{course.headline}</p>
                    )}
                  </div>

                  <p className="course-band-desc">{course.description}</p>

                  {/* Pilares Comerciais Expressivos (Sem Cara de Badges / IA) */}
                  <div className="course-value-pillars">
                    <div className="course-pillars-heading-wrap">
                      <span className="course-pillars-heading">Diferenciais e Entrega da Formação:</span>
                      <span className="course-pillars-line" aria-hidden="true" />
                    </div>

                    <div className="course-pillars-grid">
                      {course.pillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="course-pillar-item">
                          <span className="pillar-check-icon" aria-hidden="true">
                            <CheckIcon className="w-3.5 h-3.5" />
                          </span>
                          <div className="pillar-text-group">
                            <h4 className="pillar-title">{pillar.title}</h4>
                            <p className="pillar-desc">{pillar.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botão de Ação Direta no WhatsApp */}
                  <div className="course-band-action-row">
                    <a
                      href={courseWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-course-band-cta"
                      aria-label={`Garantir minha vaga na formação ${course.title} pelo WhatsApp`}
                    >
                      <span>{course.buttonText}</span>
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
