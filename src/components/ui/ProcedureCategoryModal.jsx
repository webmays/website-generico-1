// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Modal editorial para exibição dos procedimentos de cada categoria (Sobrancelhas, Tratamentos Labiais, Micropigmentação, Experiências Exclusivas).
// [AI-DO-NOT-BREAK]: Suporta scroll nativo com `data-lenis-prevent`, pausa o Lenis smooth scroll enquanto aberto, ordena itens sequencialmente (01, 02...) e exibe duração apenas quando constar no catálogo oficial.

import { useEffect } from "react";
import { Link } from "react-router";
import { CloseLine, ArrowRightShort } from "./Icons";
import { getProcedureBySlug, procedurePath } from "../../data/proceduresData";
import { CONTACT_INFO } from "../../data/siteContent";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

/**
 * [AI-COMPONENT]: ProcedureCategoryModal
 * @description Modal acessível que lista os procedimentos detalhados de uma categoria ao clicar em "Ver procedimentos".
 */
export function ProcedureCategoryModal({ category, isOpen, onClose }) {
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (!isOpen) return;

    // Pausa o Lenis smooth scroll para permitir rolagem nativa suave dentro do modal
    if (lenis) {
      lenis.stop();
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (lenis) {
        lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, lenis]);

  if (!isOpen || !category) return null;

  const procedures = category.slugs
    .map((slug) => getProcedureBySlug(slug))
    .filter(Boolean);

  const getWhatsAppLink = (itemTitle) => {
    const text = encodeURIComponent(
      `Olá Steffani! Gostaria de agendar o procedimento "${itemTitle}" no Ateliê.`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div
      className="category-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-category-title"
      data-lenis-prevent
    >
      <div
        className="category-modal-panel"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Cabeçalho do Modal */}
        <div className="category-modal-header">
          <div className="modal-header-text">
            <span className="modal-badge">Classe {category.num}</span>
            <h3 id="modal-category-title" className="modal-title">
              {category.title}
            </h3>
            <p className="modal-subtitle">{category.description}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar janela de procedimentos"
          >
            <CloseLine className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Procedimentos da Categoria (Ordenados 01, 02, 03... com scroll garantido) */}
        <div className="category-modal-list" data-lenis-prevent>
          {procedures.map((proc, idx) => {
            // Ordenação sequencial clara 01, 02, 03... para os procedimentos da classe
            const displayNumber = String(idx + 1).padStart(2, "0");

            return (
              <div key={proc.slug} className="modal-proc-item">
                <div className="modal-proc-media">
                  <img
                    src={proc.image}
                    alt={proc.alt || proc.title}
                    className="modal-proc-img"
                    loading="lazy"
                  />
                </div>

                <div className="modal-proc-info">
                  <div className="modal-proc-top">
                    <span className="modal-proc-num">{displayNumber}</span>
                    <h4 className="modal-proc-name">{proc.title}</h4>
                  </div>
                  <p className="modal-proc-desc">{proc.summary}</p>

                  <div className="modal-proc-meta">
                    {proc.price && (
                      <span className="modal-proc-price">{proc.price}</span>
                    )}
                    {/* Exibe duração oficial apenas quando constar no catálogo (Glow Relax 1h30 e Glow Diamond 2h30) */}
                    {proc.duration && (
                      <span className="modal-proc-duration">• {proc.duration}</span>
                    )}
                  </div>
                </div>

                <div className="modal-proc-actions">
                  <Link
                    to={procedurePath(proc.slug)}
                    className="modal-btn-details"
                    onClick={onClose}
                  >
                    <span>Detalhes</span>
                    <ArrowRightShort className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppLink(proc.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn-whatsapp"
                  >
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
