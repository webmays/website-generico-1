// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Chamada Final (CTA) em fundo escuro contrastante com ações diretas para WhatsApp de procedimentos ou cursos.
// [AI-DO-NOT-BREAK]: O ID "contato" é o alvo principal de todos os botões de conversão e do scrollspy.

import { FINAL_CTA_CONTENT, CONTACT_INFO } from "../../data/siteContent";

/**
 * [AI-COMPONENT]: FinalCtaSection
 * @description Seção de fechamento em fundo preto (#111111) com texto off-white e dois botões de conversão via WhatsApp.
 * @example <FinalCtaSection />
 */
export function FinalCtaSection() {
  const whatsappProcedureUrl = `${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(FINAL_CTA_CONTENT.buttonProcedure.prefilledMessage)}`;
  const whatsappCourseUrl = `${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(FINAL_CTA_CONTENT.buttonCourse.prefilledMessage)}`;

  return (
    // [AI-STYLE-RULE]: Fundo Preto #111111, texto em Off-white #F6F3EE e botões com contraste invertido e hover com brilho sutil
    <section id="contato" className="final-cta-section section-spacing">
      <div className="container">
        <div className="final-cta-content">
          <span className="meta-label text-taupe">{FINAL_CTA_CONTENT.metaLabel}</span>
          <h2 className="final-cta-title">{FINAL_CTA_CONTENT.title}</h2>
          <p className="final-cta-subtitle">
            {FINAL_CTA_CONTENT.subtitle}
          </p>

          {/* [AI-EDIT-ZONE]: Ações de CTA e Mensagens Pré-definidas de WhatsApp (Cores Sólidas) */}
          <div className="final-cta-actions">
            <a
              href={whatsappProcedureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta-light"
            >
              {FINAL_CTA_CONTENT.buttonProcedure.label}
            </a>
            <a
              href={whatsappCourseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark-outline"
            >
              {FINAL_CTA_CONTENT.buttonCourse.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
