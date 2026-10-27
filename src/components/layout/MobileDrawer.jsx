// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Menu lateral deslizante (Drawer) para dispositivos móveis com animações Framer Motion e molas elásticas.
// [AI-DO-NOT-BREAK]: Controla o bloqueio de rolagem do body (`overflow: hidden`) e o pause/start do Lenis smooth scroll.

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { NAV_LINKS, CONTACT_INFO } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { WhatsAppIcon, CloseIcon } from "../ui/Icons";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { useActiveSection } from "../../hooks/useActiveSection";

const SPRING_DRAWER_OPEN = { type: "spring", stiffness: 280, damping: 28, mass: 0.85 };
const SPRING_DRAWER_CLOSE = { type: "spring", stiffness: 340, damping: 32 };
const SPRING_LINKS = { type: "spring", stiffness: 340, damping: 26 };

/**
 * [AI-COMPONENT]: MobileDrawer
 * @description Gaveta de navegação móvel de alto padrão com animação de stagger e overlay desfocado.
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isOpen - Estado de visibilidade da gaveta
 * @param {Function} props.onClose - Função disparada para fechar a gaveta
 * @example <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
 */
export function MobileDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const { lenis, scrollTo } = useSmoothScroll();
  const activeSection = useActiveSection();

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    // 1. Desbloqueia a rolagem do body e reativa o motor Lenis imediatamente
    document.body.style.overflow = "";
    document.body.classList.remove("drawer-open");
    if (lenis && lenis.isStopped) {
      lenis.start();
    }

    // 2. Fecha a gaveta
    onClose();

    // 3. Executa a rolagem suave garantida após iniciar o fechamento
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        scrollTo(el, -75);
      } else {
        scrollTo(`#${targetId}`, -75);
      }
      try {
        window.history.replaceState(null, "", `#${targetId}`);
      } catch {
        // Ignora silenciosamente
      }
    }, 120);
  };

  useEffect(() => {
    if (isOpen) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");

      if (drawerRef.current) {
        animate(drawerRef.current, { x: ["100%", "0%"] }, SPRING_DRAWER_OPEN);
      }
      if (overlayRef.current) {
        animate(overlayRef.current, { opacity: [0, 1] }, { duration: 0.3 });
      }
      const links = drawerRef.current?.querySelectorAll(".mobile-nav-links a");
      if (links && links.length) {
        animate(
          links,
          { opacity: [0, 1], x: [28, 0] },
          { ...SPRING_LINKS, delay: stagger(0.045, { start: 0.12 }) }
        );
      }
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");

      if (drawerRef.current) {
        animate(drawerRef.current, { x: "100%" }, SPRING_DRAWER_CLOSE);
      }
      if (overlayRef.current) {
        animate(overlayRef.current, { opacity: 0 }, { duration: 0.25 });
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCloseBtnMouseEnter = (e) => {
    animate(e.currentTarget, { rotate: 90, scale: 1.06 }, { type: "spring", stiffness: 420, damping: 20 });
  };

  const handleCloseBtnMouseLeave = (e) => {
    animate(e.currentTarget, { rotate: 0, scale: 1 }, { type: "spring", stiffness: 420, damping: 24 });
  };

  return (
    <>
      <div
        ref={overlayRef}
        className={`mobile-drawer-overlay ${isOpen ? "is-active" : ""}`}
        id="drawerOverlay"
        aria-hidden={!isOpen}
        onClick={onClose}
        data-lenis-prevent
      />
      <aside
        ref={drawerRef}
        className={`mobile-drawer ${isOpen ? "is-active" : ""}`}
        id="mobileDrawer"
        aria-labelledby="mobileDrawerTitle"
        aria-hidden={!isOpen}
        data-lenis-prevent
      >
        <div className="mobile-drawer-header">
          <h2 className="mobile-drawer-title" id="mobileDrawerTitle">
            Menu
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="mobile-drawer-close"
            id="drawerCloseBtn"
            aria-label="Fechar menu"
            onClick={onClose}
            onMouseEnter={handleCloseBtnMouseEnter}
            onMouseLeave={handleCloseBtnMouseLeave}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <nav>
          <ul className="mobile-nav-links">
            {NAV_LINKS.mobile.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <li key={item.target}>
                  <a
                    href={`/#${item.target}`}
                    className={`mobile-nav-link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => handleNavLinkClick(e, item.target)}
                  >
                    <span className="mobile-nav-link-label">{item.label}</span>
                    {isActive && (
                      <span className="mobile-nav-active-badge" aria-hidden="true">
                        Atual
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
            <li className="mobile-nav-cta-item">
              <a
                href={CONTACT_INFO.whatsappRaw}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-drawer-cta-btn"
                onClick={onClose}
                aria-label="Agendar atendimento pelo WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{NAV_LINKS.ctaMobile}</span>
              </a>
            </li>
          </ul>
        </nav>

      </aside>
    </>
  );
}
