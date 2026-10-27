// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Hook que gerencia o estado de scroll da barra de navegação (.is-scrolled) e o recálculo do deslocamento horizontal `--nav-hero-shift`.
// [AI-DO-NOT-BREAK]: O cálculo geométrico de `--nav-hero-shift` garante que o menu fique posicionado à esquerda no topo e se centralize no scroll.

import { useEffect, useState } from "react";
import { useSmoothScroll } from "../context/SmoothScrollContext";

/**
 * Hook para controle dinâmico da navbar da Steffani.
 * @param {Object} refs - Referências DOM dos elementos da navbar
 * @param {React.RefObject} refs.navContainerRef - Container geral da navegação
 * @param {React.RefObject} refs.brandLogoRef - Logo da marca à esquerda
 * @param {React.RefObject} refs.desktopNavRef - Lista de links centrais
 * @returns {{ isScrolled: boolean }}
 */
export function useHeaderScroll({ navContainerRef, brandLogoRef, desktopNavRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    let lastScrolled = false;
    const updateNavHeroShift = () => {
      if (window.innerWidth < 992 || !navContainerRef?.current || !brandLogoRef?.current || !desktopNavRef?.current) {
        document.documentElement.style.removeProperty("--nav-hero-shift");
        return;
      }
      const containerWidth = navContainerRef.current.clientWidth;
      const heroNavWidth = Math.max(540, Math.min(680, window.innerWidth * 0.38));
      const centeredLeft = (containerWidth - heroNavWidth) / 2;

      const logoRect = brandLogoRef.current.getBoundingClientRect();
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const logoRightRel = logoRect.right - containerRect.left;
      const targetHeroMargin = Math.max(24, Math.min(48, window.innerWidth * 0.025));
      const targetHeroLeft = logoRightRel + targetHeroMargin;

      const shift = targetHeroLeft - centeredLeft;
      if (shift < 0) {
        document.documentElement.style.setProperty("--nav-hero-shift", `${Math.round(shift)}px`);
      } else {
        document.documentElement.style.removeProperty("--nav-hero-shift");
      }
    };

    const handleScroll = (e) => {
      const scrollPos =
        (e && typeof e.scroll === "number")
          ? e.scroll
          : (typeof window !== "undefined" ? (window.scrollY || document.documentElement.scrollTop || 0) : 0);
      const nextScrolled = scrollPos > 40;
      if (lastScrolled !== nextScrolled) {
        lastScrolled = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateNavHeroShift, { passive: true });

    updateNavHeroShift();
    handleScroll();

    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavHeroShift);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, [lenis, navContainerRef, brandLogoRef, desktopNavRef]);

  return { isScrolled };
}
