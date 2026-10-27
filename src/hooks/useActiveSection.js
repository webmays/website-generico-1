// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Hook que gerencia o scrollspy e sincroniza a seção ativa na viewport tanto para desktop quanto para mobile.
// [AI-DO-NOT-BREAK]: O cálculo monitora os IDs das seções em ordem de leitura ("hero", "procedimentos", "resultados", "sobre", "cursos", "faq", "contato") e responde à rolagem de Lenis e nativa.

import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useSmoothScroll } from "../context/SmoothScrollContext";

// Ordem estrita das seções principais no DOM da HomePage
const DOM_SECTIONS = [
  "hero",
  "procedimentos",
  "resultados",
  "sobre",
  "cursos",
  "faq",
  "contato"
];

/**
 * [AI-HOOK]: useActiveSection
 * @description Detecta em tempo real qual seção o usuário está lendo no scroll ou página interna.
 * @returns {string} ID da seção ativa correspondente aos links de navegação (ex: "procedimentos", "cursos", "metodo", "sobre", "faq") ou "" se estiver na Hero/topo.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    // 1. Em páginas internas (ex: /procedimentos/:slug), destaca a categoria "procedimentos"
    if (location.pathname.startsWith("/procedimentos")) {
      setActiveSection("procedimentos");
      return;
    }

    // Se estiver em outra página interna não-home
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    let rafId = null;

    const checkActiveSection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Se o usuário está no topo da página (Hero)
      if (scrollY < 180) {
        setActiveSection("");
        return;
      }

      // Se o usuário alcançou o rodapé da página
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection("faq");
        return;
      }

      // Linha de disparo na viewport (abaixo do header)
      const triggerLine = Math.min(220, windowHeight * 0.35);

      let matchedId = "";

      for (const id of DOM_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Se o topo da seção alcançou ou passou da triggerLine
        if (rect.top <= triggerLine) {
          matchedId = id;
        }
      }

      // Normaliza para os targets usados nos menus de navegação
      let finalTarget = "";
      if (matchedId === "procedimentos") finalTarget = "procedimentos";
      else if (matchedId === "resultados") finalTarget = "resultados";
      else if (matchedId === "sobre") finalTarget = "sobre";
      else if (matchedId === "cursos") finalTarget = "cursos";
      else if (matchedId === "faq" || matchedId === "contato") finalTarget = "faq";
      // Se matchedId for "hero", finalTarget continua ""

      setActiveSection(finalTarget);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    // Checagem imediata ao montar
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [location.pathname, lenis]);

  return activeSection;
}
