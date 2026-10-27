// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Perguntas Frequentes (FAQ) com accordion de fechamento alternado e recálculo do Lenis.
// [AI-DO-NOT-BREAK]: O recálculo `lenis.resize()` após 150ms é essencial para evitar saltos ou inconsistências na barra de rolagem ao expandir itens.

import { useState } from "react";
import { FAQ_CONTENT } from "../../data/siteContent";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

/**
 * [AI-COMPONENT]: FaqSection
 * @description Acordeão nativo com elemento `<details>` sincronizado e fechamento automático do item anterior ao abrir um novo.
 * @example <FaqSection />
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { lenis } = useSmoothScroll();

  const handleToggle = (index) => {
    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);
    if (lenis) {
      setTimeout(() => lenis.resize(), 120);
      setTimeout(() => lenis.resize(), 460);
    }
  };

  return (
    // [AI-STYLE-RULE]: Máxima largura de 860px centralizada, divisórias finas e ícone '+' que rotaciona 45 graus
    <section id="faq" className="section-spacing">
      <div className="container">
        <div className="text-center mb-12">
          <span className="meta-label">{FAQ_CONTENT.metaLabel}</span>
          <h2>{FAQ_CONTENT.title}</h2>
        </div>

        {/* [AI-EDIT-ZONE]: Perguntas e Respostas do FAQ */}
        <div className="faq-list" role="region" aria-label="Lista de perguntas frequentes">
          {FAQ_CONTENT.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-summary"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleToggle(index)}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true" />
                </button>
                <div
                  id={answerId}
                  className="faq-answer-collapse"
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <div className="faq-content">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
