// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Secao de Procedimentos: filtros por categoria e trilho horizontal arrastavel com os 13 cards do catalogo TBA.
// [AI-DO-NOT-BREAK]: O ID "procedimentos" e alvo da navegacao. Toque e teclado usam o scroll nativo; o arraste por pointer vale so para mouse.

import { useEffect, useMemo, useRef, useState } from "react";
import { PROCEDURES, PROCEDURE_GROUPS, getProcedureWhatsappUrl } from "../../data/proceduresData";
import { PROCEDURES_HEADER_CONTENT } from "../../data/siteContent";
import { EditorialTitle } from "../ui/EditorialTitle";

const DRAG_THRESHOLD = 6;

/**
 * [AI-COMPONENT]: ProceduresSection
 * @example <ProceduresSection />
 */
export function ProceduresSection() {
  const [activeGroup, setActiveGroup] = useState("todos");
  const [canScroll, setCanScroll] = useState(false);
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const visible = useMemo(
    () => (activeGroup === "todos" ? PROCEDURES : PROCEDURES.filter((p) => p.group === activeGroup)),
    [activeGroup]
  );

  // O aviso de arraste so aparece quando ha conteudo fora da tela
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    track.scrollLeft = 0;
    const update = () => setCanScroll(track.scrollWidth > track.clientWidth + 1);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [visible]);

  const handlePointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { active: true, startX: e.clientX, startLeft: trackRef.current.scrollLeft, moved: false };
  };

  const handlePointerMove = (e) => {
    const state = drag.current;
    if (!state.active) return;
    const delta = e.clientX - state.startX;
    if (!state.moved && Math.abs(delta) > DRAG_THRESHOLD) {
      state.moved = true;
      trackRef.current.classList.add("is-dragging");
    }
    if (state.moved) trackRef.current.scrollLeft = state.startLeft - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
    trackRef.current?.classList.remove("is-dragging");
  };

  // Evita abrir o WhatsApp ao soltar o mouse depois de arrastar
  const handleClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="procedimentos" className="procedures-section" aria-labelledby="procedures-title">
      <div className="container procedures-head">
        <span className="meta-label">{PROCEDURES_HEADER_CONTENT.metaLabel}</span>
        <EditorialTitle text={PROCEDURES_HEADER_CONTENT.title} className="procedures-title" id="procedures-title" />

        <div className="procedures-toolbar">
          <div className="procedures-filters" role="group" aria-label={PROCEDURES_HEADER_CONTENT.filterLabel}>
            {PROCEDURE_GROUPS.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`procedures-filter ${activeGroup === group.id ? "is-active" : ""}`}
                aria-pressed={activeGroup === group.id}
                onClick={() => setActiveGroup(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>
          <span className={`procedures-hint ${canScroll ? "" : "is-hidden"}`} aria-hidden={!canScroll}>
            {PROCEDURES_HEADER_CONTENT.dragHint}
          </span>
        </div>
      </div>

      <div
        ref={trackRef}
        className="procedures-track"
        role="group"
        aria-label={PROCEDURES_HEADER_CONTENT.trackLabel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {visible.map((procedure) => (
          <article key={procedure.slug} className="procedure-card">
            <div className="procedure-card__media">
              <img
                src={procedure.image}
                alt={procedure.alt}
                width="640"
                height="800"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
            <h3 className="procedure-card__title">{procedure.title}</h3>
            <p className="procedure-card__summary">{procedure.summary}</p>
            <a
              href={getProcedureWhatsappUrl(procedure.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="procedure-card__action"
              aria-label={`Agendar ${procedure.title} pelo WhatsApp`}
            >
              {PROCEDURES_HEADER_CONTENT.cardAction}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
