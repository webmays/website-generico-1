// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Animacoes de entrada por rolagem via IntersectionObserver nativo, sem dependencia do GSAP.
// [AI-DO-NOT-BREAK]: Respeita prefers-reduced-motion (so opacidade, sem deslocamento) e nunca re-anima um item ja revelado.

import { useEffect } from "react";

const SELECTOR = [
  ".procedures-head",
  ".results-head",
  ".courses-header-centered",
  ".salon-header-centered",
  ".procedure-card",
  ".results-item",
  ".course-band-item",
  ".salon-portrait-card",
  ".upcoming-course-card",
  ".about-photo",
  ".about-content",
  ".cross-sell-card",
  ".final-cta-content"
].join(", ");

const STAGGER_GROUPS = [".procedures-track", ".results-gallery", ".courses-bands-list", ".salon-gallery-grid", ".cross-sell-grid"];

/**
 * [AI-HOOK]: useScrollReveal
 * @description Aplica a classe "is-revealed" (ver globals.css) na primeira vez que cada elemento entra na viewport.
 * @param {React.RefObject} containerRef - Raiz onde procurar os elementos a revelar
 */
export function useScrollReveal(containerRef) {
  useEffect(() => {
    const scope = containerRef?.current || document;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(scope.querySelectorAll(SELECTOR));
    if (!elements.length) return undefined;

    // Atraso escalonado para os itens dentro dos trilhos/grades (cards, galeria, cursos)
    elements.forEach((el) => {
      const group = el.closest(STAGGER_GROUPS.join(", "));
      if (!group) return;
      const siblings = Array.from(group.children).filter((c) => elements.includes(c));
      const index = siblings.indexOf(el);
      if (index > 0) {
        el.style.setProperty("--reveal-delay", `${Math.min(index * 90, 540)}ms`);
      }
    });

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("is-revealed", "no-motion"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}
