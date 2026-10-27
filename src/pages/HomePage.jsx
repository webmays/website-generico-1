// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Página Inicial (Landing Page), orquestrando todas as seções e gerenciando animações GSAP ScrollTrigger e hash scrolling.
// [AI-DO-NOT-BREAK]: O hook useGsapReveals realiza o bind de ScrollTrigger com gsap.context para evitar vazamento de memória ou animações duplicadas.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { ProceduresSection } from "../components/sections/ProceduresSection";
import { AboutSection } from "../components/sections/AboutSection";
import { CourseSection } from "../components/sections/CourseSection";
import { SalonSection } from "../components/sections/SalonSection";
import { CasesSection } from "../components/sections/CasesSection";
import { CrossSellSection } from "../components/sections/CrossSellSection";
import { FaqSection } from "../components/sections/FaqSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { useGsapReveals } from "../hooks/useGsapReveals";
import { useSmoothScroll } from "../context/SmoothScrollContext";

/**
 * [AI-COMPONENT]: HomePage
 * @description Rota raiz ('/') renderizando a composição editorial completa da Steffani com suporte a rolagem suave Lenis e restauração de âncoras.
 * @example <HomePage />
 */
export function HomePage() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { scrollTo } = useSmoothScroll();

  useGsapReveals(containerRef);

  // [AI-DO-NOT-BREAK]: Tratamento de âncoras cross-route (ex: navegação de /procedimentos/:slug para /#cursos)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          scrollTo(el, -40);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, scrollTo]);

  return (
    <main ref={containerRef} id="main-content">
      <HeroSection />
      <ProceduresSection />
      <CasesSection />
      <AboutSection />
      <CourseSection />
      <SalonSection />
      <CrossSellSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
