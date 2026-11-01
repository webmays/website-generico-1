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
      if (window.innerWidth <= 1080 || !navContainerRef?.current || !brandLogoRef?.current || !desktopNavRef?.current) {
        document.documentElement.style.removeProperty("--nav-hero-shift");
        return;
      }

      if (lastScrolled) {
        document.documentElement.style.removeProperty("--nav-hero-shift");
        return;
      }

      const containerRect = navContainerRef.current.getBoundingClientRect();
      const logoRect = brandLogoRef.current.getBoundingClientRect();
      const navRect = desktopNavRef.current.getBoundingClientRect();

      const computedStyle = window.getComputedStyle(desktopNavRef.current);
      const matrix = new DOMMatrixReadOnly(computedStyle.transform);
      const currentShift = matrix.m41;
      const unshiftedNavLeft = (navRect.left - containerRect.left) - currentShift;
      const logoRightRel = logoRect.right - containerRect.left;
      const minSafeNavLeft = logoRightRel + 36; // Folga mínima sagrada de 36px para nunca colidir com o logo

      if (unshiftedNavLeft <= minSafeNavLeft) {
        document.documentElement.style.removeProperty("--nav-hero-shift");
        return;
      }

      const targetLeft = Math.max(minSafeNavLeft, containerRect.width * 0.16);
      const desiredShift = targetLeft - unshiftedNavLeft;

      if (desiredShift < 0 && (unshiftedNavLeft + desiredShift >= minSafeNavLeft)) {
        document.documentElement.style.setProperty("--nav-hero-shift", `${Math.round(desiredShift)}px`);
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
