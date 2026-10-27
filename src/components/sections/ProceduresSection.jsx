// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Procedimentos preservando cabeçalho e fundo originais da seção, atualizando exclusivamente os cards que separam os procedimentos fiel à referência visual.
// [AI-DO-NOT-BREAK]: A seção mantém seu fundo e cabeçalho originais. Os cards 2x2 separam: Sobrancelhas, Tratamentos Labiais, Micropigmentação e Experiências Exclusivas.

import { useState } from "react";
import { PROCEDURE_CATEGORY_CARDS } from "../../data/proceduresData";
import { PROCEDURES_HEADER_CONTENT } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { ArrowDownLine, ArrowRightShort } from "../ui/Icons";
import { ProcedureCategoryModal } from "../ui/ProcedureCategoryModal";

/**
 * [AI-COMPONENT]: ProceduresSection
 * @description Seção de procedimentos preservando cabeçalho e fundo originais, exibindo os 4 cards da referência para separar os procedimentos.
 * @example <ProceduresSection />
 */
export function ProceduresSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="procedimentos" className="procedures-section section-spacing">
      <div className="container">
        {/* Cabeçalho Rigorosamente Original da Seção */}
        <div className="procedures-header-centered">
          <div className="meta-label-ornament">
            <span className="ornament-line" />
            <span className="meta-label">{PROCEDURES_HEADER_CONTENT.metaLabel}</span>
            <span className="ornament-line" />
          </div>
          <h2 className="procedures-title-main">{PROCEDURES_HEADER_CONTENT.title}</h2>
          <p className="procedures-subtitle">
            {PROCEDURES_HEADER_CONTENT.subtitle}
          </p>
          <div className="procedures-header-action">
            <SectionLink target="contato" className="btn-procedures-pill">
              <span>{PROCEDURES_HEADER_CONTENT.ctaPill}</span>
              <ArrowDownLine />
            </SectionLink>
          </div>
        </div>

        {/* [AI-EDIT-ZONE]: Cards que Separam Cada Procedimento (Igual à Referência) */}
        <div className="procedure-category-grid">
          {PROCEDURE_CATEGORY_CARDS.map((card) => (
            <article
              key={card.id}
              className="procedure-category-card"
              onClick={() => setSelectedCategory(card)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCategory(card);
                }
              }}
              aria-label={`Ver procedimentos de ${card.title}`}
            >
              {/* Conteúdo Textual à Esquerda */}
              <div className="category-card-content">
                <div className="category-card-num-wrap">
                  <span className="category-card-num">{card.num}</span>
                  <span className="category-card-line" />
                </div>

                <div>
                  <h3 className="category-card-title">{card.title}</h3>
                  <p className="category-card-desc">{card.description}</p>
                </div>

                {/* Botão Pílula com Círculo e Seta (Fiel à Referência) */}
                <button
                  type="button"
                  className="category-card-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(card);
                  }}
                  aria-label={`Ver procedimentos de ${card.title}`}
                >
                  <span>Ver procedimentos</span>
                  <span className="btn-arrow-circle" aria-hidden="true">
                    <ArrowRightShort className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>

              {/* Mídia à Direita com Efeito de Fade Gradiente */}
              <div className="category-card-media">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="category-card-img"
                  style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-card-overlay" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Interativo com os Procedimentos Detalhados da Classe */}
      <ProcedureCategoryModal
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
