// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Botão flutuante 'Voltar ao Topo' elegante no canto inferior direito.
// [AI-DO-NOT-BREAK]: Aparece suavemente após 350px de rolagem e utiliza o Lenis Smooth Scroll para retorno ao topo.

import { useState, useEffect } from "react";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { ArrowUpIcon } from "../ui/Icons";

/**
 * [AI-COMPONENT]: BackToTop
 * @description Botão flutuante que permite ao usuário retornar suavemente ao topo da página após a rolagem.
 * @example <BackToTop />
 */
export function BackToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollTo, lenis } = useSmoothScroll();

  useEffect(() => {
    let lastVisible = false;
    const handleScroll = (e) => {
      const scrollPos =
        (e && typeof e.scroll === "number")
          ? e.scroll
          : (typeof window !== "undefined" ? (window.scrollY || document.documentElement.scrollTop || 0) : 0);
      const isVisible = scrollPos > 350;
      if (lastVisible !== isVisible) {
        lastVisible = isVisible;
        setShowScrollTop(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, [lenis]);

  const handleScrollToTop = () => {
    if (scrollTo) {
      scrollTo(0);
    } else if (lenis) {
      if (lenis.isStopped) {
        lenis.start();
      }
      lenis.scrollTo(0, {
        offset: 0,
        duration: 1.4,
        immediate: false,
        force: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`back-to-top ${showScrollTop ? "is-visible" : ""}`}
      onClick={handleScrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao início da página"
    >
      <ArrowUpIcon className="back-to-top-arrow w-4 h-4 flex-shrink-0" />
      <span className="back-to-top-label"><span className="back-to-top-full">Voltar ao </span>Topo</span>
    </button>
  );
}
