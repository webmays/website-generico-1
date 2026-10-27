// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Rodapé editorial institucional com links de navegação, horários de atendimento, contatos e créditos.
// [AI-STYLE-RULE]: Fundo #0b0b0b quase preto, tipografia suave em tons de off-white e taupe.

import { BRAND, CONTACT_INFO, NAV_LINKS, FOOTER_CONTENT } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";

/**
 * [AI-COMPONENT]: Footer
 * @description Rodapé completo da aplicação consumindo dados centralizados de atendimento e links institucionais.
 * @example <Footer />
 */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{BRAND.name}</h3>
          <p className="text-off-white/50 text-[0.85rem]">
            {FOOTER_CONTENT.brandDescription}
          </p>
        </div>

        <div className="footer-col">
          <h4>{FOOTER_CONTENT.colNavTitle}</h4>
          <ul className="footer-links">
            {NAV_LINKS.footer.map((item) => (
              <li key={item.target}>
                <SectionLink target={item.target}>{item.label}</SectionLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{FOOTER_CONTENT.colHoursTitle}</h4>
          <ul className="footer-links">
            {CONTACT_INFO.openingHours.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{FOOTER_CONTENT.colContactTitle}</h4>
          <ul className="footer-links">
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            {CONTACT_INFO.tiktokUrl && (
              <li>
                <a href={CONTACT_INFO.tiktokUrl} target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            )}
            <li>
              <a href={CONTACT_INFO.whatsappRaw} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom-copy">
          <span>{FOOTER_CONTENT.copyright}</span>
        </div>
        <span>{FOOTER_CONTENT.credits}</span>
      </div>
    </footer>
  );
}
