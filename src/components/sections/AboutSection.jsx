// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção "Sobre Steffani", destacando a trajetória, compromisso com a naturalidade e autoridade como mentora.
// [AI-DO-NOT-BREAK]: O botão "Falar com a Steffani" conecta-se diretamente à seção ou formulário de contato via SectionLink.

import { ABOUT_CONTENT } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";

/**
 * [AI-COMPONENT]: AboutSection
 * @description Apresentação biográfica da especialista e mentora Steffani em layout de 2 colunas assimétricas.
 * @example <AboutSection />
 */
export function AboutSection() {
  return (
    // [AI-STYLE-RULE]: Borda dourada inset da viewport, área da imagem preenchendo a coluna esquerda e texto equilibrado à direita
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Coluna Esquerda: Área da Imagem */}
          <div className="about-photo">
            {ABOUT_CONTENT.image ? (
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.title}
                className="about-image"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1797}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".photo-meta");
                  if (fallback) fallback.style.display = "inline-flex";
                }}
              />
            ) : (
              <span className="photo-meta">{ABOUT_CONTENT.photoPlaceholder}</span>
            )}
          </div>

          {/* Coluna Direita: Área de Conteúdo Textual (Área Vermelha) */}
          <div className="about-content">
            <span className="meta-label">{ABOUT_CONTENT.metaLabel}</span>
            <h2 className="about-title">{ABOUT_CONTENT.title}</h2>
            
            {/* [AI-EDIT-ZONE]: Parágrafos biográficos e de trajetória */}
            <div className="about-paragraphs">
              {ABOUT_CONTENT.paragraphs.map((par, idx) => (
                <p key={idx} className="about-text">
                  {par}
                </p>
              ))}
            </div>

            <div className="about-cta">
              <SectionLink target={ABOUT_CONTENT.ctaTarget} className="btn btn-secondary">
                {ABOUT_CONTENT.ctaButton}
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
