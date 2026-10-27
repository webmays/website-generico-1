// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Hook que inicializa animações de revelação por ScrollTrigger do GSAP nas seções da Home com limpeza de contexto.
// [AI-DO-NOT-BREAK]: O método `ctx.revert()` na desmontagem do hook previne duplicação de instâncias GSAP ao alternar rotas.

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para registro seguro de animações de entrada por rolagem.
 * @param {React.RefObject} containerRef - Referência do elemento raiz do container para escopo das animações
 */
export function useGsapReveals(containerRef) {
  useEffect(() => {
    const scope = containerRef?.current || document;
    const ctx = gsap.context(() => {
      // 1. Cabeçalhos centralizados (Procedimentos, Resultados, Cursos e Espaço)
      const centeredHeaders = scope.querySelectorAll(".procedures-header-centered, .results-header-centered, .courses-header-centered, .salon-header-centered");
      centeredHeaders.forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          y: 32,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out"
        });
      });

      const procedureCards = scope.querySelectorAll(".procedure-card");
      if (procedureCards.length) {
        gsap.from(procedureCards, {
          scrollTrigger: {
            trigger: scope.querySelector(".procedures-cards-grid") || procedureCards[0],
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power2.out"
        });
      }

      // 2. O Método (Filosofia): Citação Editorial e Métricas
      const quoteBlock = scope.querySelector(".authority-quote");
      if (quoteBlock) {
        gsap.from(quoteBlock, {
          scrollTrigger: {
            trigger: quoteBlock,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out"
        });
      }


      // 3. Cursos: Card de Estreia Destrava Brow & Faixas de Cursos Profissionais
      const premiereCard = scope.querySelector(".upcoming-course-card");
      if (premiereCard) {
        gsap.from(premiereCard, {
          scrollTrigger: {
            trigger: premiereCard,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out"
        });
      }

      const courseCards = scope.querySelectorAll(".course-band-item, .course-card-item");
      if (courseCards.length) {
        gsap.from(courseCards, {
          scrollTrigger: {
            trigger: scope.querySelector(".courses-bands-list, .courses-grid-cards") || courseCards[0],
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // 4. Resultados Reais (Bento Grid Cards Antes & Depois)
      const resultCards = scope.querySelectorAll(".results-bento-grid .results-bento-item, .results-bento-grid .results-card, .cases-grid .case-photo");
      if (resultCards.length) {
        gsap.from(resultCards, {
          scrollTrigger: {
            trigger: scope.querySelector(".results-bento-grid, .cases-grid") || resultCards[0],
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power2.out"
        });
      }

      // 5. Sobre Steffani: Foto e Perfil (Entrada suave e imediata sem atraso no mobile)
      const aboutSection = scope.querySelector("#sobre");
      const aboutPhoto = scope.querySelector(".about-photo");
      const aboutContent = scope.querySelector(".about-content, .about-grid > div:last-child");
      if (aboutPhoto && aboutContent) {
        // A foto entra imediatamente assim que a seção Sobre entra no campo de visão (start: top 92%)
        gsap.from(aboutPhoto, {
          scrollTrigger: {
            trigger: aboutSection || aboutPhoto,
            start: "top 92%",
            toggleActions: "play none none none"
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        });

        // O conteúdo textual anima em sequência natural conforme a leitura
        gsap.from(aboutContent, {
          scrollTrigger: {
            trigger: aboutContent,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          y: 24,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out"
        });
      }

      // 6. Galeria do Ateliê / Salão (Modo Retrato)
      const salonCards = scope.querySelectorAll(".salon-portrait-card");
      if (salonCards.length) {
        gsap.from(salonCards, {
          scrollTrigger: {
            trigger: scope.querySelector(".salon-gallery-grid") || salonCards[0],
            start: "top 88%",
            toggleActions: "play none none none"
          },
          y: 28,
          opacity: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: "power2.out"
        });
      }

      // 7. Chamada Final (CTA)
      const finalCta = scope.querySelector(".final-cta-content");
      if (finalCta) {
        gsap.from(finalCta, {
          scrollTrigger: {
            trigger: finalCta,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 35,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out"
        });
      }
    }, scope);

    return () => {
      ctx.revert();
    };
  }, [containerRef]);
}
