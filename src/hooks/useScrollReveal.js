// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Animacoes de entrada por rolagem via IntersectionObserver nativo, sem dependencia do GSAP.
// [AI-DO-NOT-BREAK]: Respeita prefers-reduced-motion (so opacidade, sem deslocamento) e nunca re-anima um item ja revelado.
// Usa atributo data-revealed, e nao classe: o React reescreve className em itens com classe dinamica (ex: FAQ
// com is-open) e apagaria uma classe adicionada por fora, devolvendo o item a opacity:0.
// Um MutationObserver cobre elementos criados depois do mount (ex: cards remontados ao trocar de filtro em
// Procedimentos), que de outra forma nunca seriam observados e ficariam presos em opacity:0 (ver AI_CONTEXT.md).

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
  ".final-cta-content",
  ".reveal"
].join(", ");

const STAGGER_GROUPS = [".procedures-track", ".results-gallery", ".courses-bands-list", ".salon-gallery-grid", ".cross-sell-grid"];

function applyStaggerDelay(el) {
  const group = el.closest(STAGGER_GROUPS.join(", "));
  if (!group) return;
  const siblings = Array.from(group.children).filter((c) => c.matches(SELECTOR));
  const index = siblings.indexOf(el);
  if (index > 0) {
    el.style.setProperty("--reveal-delay", `${Math.min(index * 90, 540)}ms`);
  }
}

/**
 * [AI-HOOK]: useScrollReveal
 * @description Aplica o atributo data-revealed (ver globals.css) na primeira vez que cada elemento entra na viewport,
 * inclusive em elementos criados dinamicamente depois do mount (filtros, listas que trocam de item).
 * @param {React.RefObject} containerRef - Raiz onde procurar os elementos a revelar
 */
export function useScrollReveal(containerRef) {
  useEffect(() => {
    const scope = containerRef?.current || document;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealImmediately = (el) => el.setAttribute("data-revealed", "instant");

    let observer = null;
    if (!reduceMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-revealed", "");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
    }

    const register = (el) => {
      if (el.hasAttribute("data-revealed")) return;
      applyStaggerDelay(el);
      if (reduceMotion) {
        revealImmediately(el);
        return;
      }
      // Cards dentro de um trilho com arraste (ex: Procedimentos) ja foram "escolhidos" pelo usuario ao
      // abrir um filtro ou arrastar; revela direto (com a transicao) em vez de esperar cruzar a viewport,
      // que pode nao acontecer num arraste rapido e longo (ver AI_CONTEXT.md).
      if (el.closest(".procedures-track")) {
        requestAnimationFrame(() => requestAnimationFrame(() => el.setAttribute("data-revealed", "")));
        return;
      }
      observer.observe(el);
    };

    scope.querySelectorAll(SELECTOR).forEach(register);

    // Cobre elementos adicionados depois do mount (ex: cards remontados ao trocar de filtro)
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches(SELECTOR)) register(node);
          node.querySelectorAll?.(SELECTOR).forEach(register);
        });
      }
    });
    mutationObserver.observe(scope, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [containerRef]);
}
