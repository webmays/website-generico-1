// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Secao "Localizacao": informacoes de atendimento a esquerda e mapa do Google a direita (empilha no celular).
// [AI-DO-NOT-BREAK]: O ID "localizacao" e alvo da navegacao e do scrollspy. Endereco e horarios vem de CONTACT_INFO.

import { CONTACT_INFO, LOCATION_CONTENT } from "../../data/siteContent";
import { EditorialTitle } from "../ui/EditorialTitle";

/**
 * [AI-COMPONENT]: LocationSection
 * @example <LocationSection />
 */
export function LocationSection() {
  const { labels } = LOCATION_CONTENT;
  const fullAddress = [CONTACT_INFO.address, LOCATION_CONTENT.cityState].filter(Boolean).join(", ");
  const query = encodeURIComponent(fullAddress);
  const mapSrc = LOCATION_CONTENT.mapEmbedUrl || `https://www.google.com/maps?q=${query}&hl=pt-BR&z=17&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <section id={LOCATION_CONTENT.id} className="location-section" aria-labelledby="location-title">
      <div className="container location-grid">
        <div className="location-info reveal">
          <span className="meta-label">{LOCATION_CONTENT.metaLabel}</span>
          <EditorialTitle text={LOCATION_CONTENT.title} className="location-title" id="location-title" />
          <p className="location-subtitle">{LOCATION_CONTENT.subtitle}</p>

          <dl className="location-list">
            <div className="location-item">
              <dt>{labels.address}</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div className="location-item">
              <dt>{labels.hours}</dt>
              <dd>
                {CONTACT_INFO.openingHours.map((line) => (
                  <span key={line} className="location-line">{line}</span>
                ))}
              </dd>
            </div>
            <div className="location-item">
              <dt>{labels.contact}</dt>
              <dd>
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp {CONTACT_INFO.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="location-item">
              <dt>{labels.payment}</dt>
              <dd>{CONTACT_INFO.paymentMethods}</dd>
            </div>
          </dl>

          <a className="btn btn-primary location-cta" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            {LOCATION_CONTENT.directionsLabel}
          </a>
        </div>

        <div className="location-map reveal">
          <iframe
            src={mapSrc}
            title={LOCATION_CONTENT.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
