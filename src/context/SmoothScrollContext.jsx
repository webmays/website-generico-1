// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Provedor de contexto React para o motor Lenis Smooth Scroll e sincronização de 60/120fps com o GSAP Ticker.
// [AI-DO-NOT-BREAK]: O método `ticker.add` do GSAP atualiza os gatilhos do ScrollTrigger e a rolagem suave sem travamentos.

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {}
});

/**
 * [AI-COMPONENT]: SmoothScrollProvider
 * @description Fornece a instância ativa do Lenis e o método utilitário `scrollTo(target, offset)` para qualquer componente da árvore.
 * @param {Object} props - Propriedades do provider
 * @param {React.ReactNode} props.children - Elementos filhos envelopados pelo contexto
 * @example <SmoothScrollProvider><App /></SmoothScrollProvider>
 */
export function SmoothScrollProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inicialização do Lenis com autoRaf ativo e sem bloqueio por prefers-reduced-motion do sistema
    const lenis = new Lenis({
      autoRaf: true,
      respectReducedMotion: false,
      duration: 1.45,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.25,
      infinite: false
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target, offset = -80) => {
    if (target === undefined || target === null) return;
    
    // Suporte a coordenadas numéricas (ex: 0 para Voltar ao Topo)
    if (typeof target === "number") {
      if (lenisRef.current) {
        if (lenisRef.current.isStopped) {
          lenisRef.current.start();
        }
        lenisRef.current.scrollTo(target, {
          offset: 0,
          duration: 1.4,
          immediate: false,
          force: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
      return;
    }

    if (lenisRef.current) {
      if (lenisRef.current.isStopped) {
        lenisRef.current.start();
      }
      lenisRef.current.scrollTo(target, {
        offset,
        duration: 1.45,
        immediate: false,
        force: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

/**
 * Hook customizado para consumir a instância e helpers do Lenis Smooth Scroll.
 * @returns {{ lenis: Lenis|null, scrollTo: Function }}
 */
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
