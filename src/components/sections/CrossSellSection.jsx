// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Cross-Sell Editorial ("Continue Explorando") para retenção e direcionamento de cuidados complementares.
// [AI-DO-NOT-BREAK]: Cada card utiliza o `link-editorial` com transição de sublinhado e altura mínima de toque de 44px.

import { CROSS_SELL_CONTENT } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";

/**
 * [AI-COMPONENT]: CrossSellSection
 * @description Sugestões de rotinas estéticas complementares (manutenção domiciliar, mentorias e avaliação anual).
 * @example <CrossSellSection />
 */
export function CrossSellSection() {
  return (
    // [AI-STYLE-RULE]: Fundo Branco Aquecido (Warm White #EEE8DF), cards com fundo Off-white e borda sutil
    <section className="cross-sell-section section-spacing-sm">
      <div className="container">
        <span className="meta-label">{CROSS_SELL_CONTENT.metaLabel}</span>
        <h2 className="mb-2">{CROSS_SELL_CONTENT.title}</h2>
        <p>{CROSS_SELL_CONTENT.subtitle}</p>

        {/* [AI-EDIT-ZONE]: Cards de Cross-sell */}
        <div className="cross-sell-grid">
          {CROSS_SELL_CONTENT.cards.map((card, idx) => (
            <div key={idx} className="cross-sell-card">
              <div>
                <span className="meta-label text-[0.7rem]">{card.label}</span>
                <h3 className="text-[1.35rem] mb-2">{card.title}</h3>
                <p className="text-[0.85rem]">{card.desc}</p>
              </div>
              <SectionLink target={card.target} className="link-editorial">
                {card.cta}
              </SectionLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
