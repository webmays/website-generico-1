// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Barra de navegação principal (Header) com logo, links com mola Framer Motion, botão de CTA WhatsApp e botão hambúrguer.
// [AI-DO-NOT-BREAK]: O hook useHeaderScroll calcula a variável CSS `--nav-hero-shift` e o estado `.is-scrolled` para centralização suave.

import { useRef } from "react";
import { Link } from "react-router";
import { BRAND, NAV_LINKS, CONTACT_INFO } from "../../data/siteContent";
import { SectionLink } from "../ui/SectionLink";
import { WhatsAppIcon } from "../ui/Icons";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useActiveSection } from "../../hooks/useActiveSection";

/**
 * [AI-COMPONENT]: Header
 * @description Cabeçalho fixo sólido editorial com shift dinâmico de links e botão de agendamento acessível.
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isDrawerOpen - Indica se o menu mobile está atualmente visível
 * @param {Function} props.onToggleDrawer - Função chamada para abrir/fechar o menu mobile
 * @example <Header isDrawerOpen={isOpen} onToggleDrawer={() => setIsOpen(!isOpen)} />
 */
export function Header({ isDrawerOpen, onToggleDrawer }) {
  const headerRef = useRef(null);
  const navContainerRef = useRef(null);
  const brandLogoRef = useRef(null);
  const desktopNavRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const { isScrolled } = useHeaderScroll({
    navContainerRef,
    brandLogoRef,
    desktopNavRef
  });

  const activeSection = useActiveSection();



  return (
    <header
      ref={headerRef}
      className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div ref={navContainerRef} className="nav-container">
        {/* [AI-DO-NOT-BREAK]: Logo oficial da Steffani com tipografia serifada e subtítulo editorial */}
        <Link
          to="/"
          ref={brandLogoRef}
          className="brand-logo"
          aria-label={BRAND.ariaLabel}
        >
          {BRAND.name}
          <span>{BRAND.subtitle}</span>
        </Link>

        {/* Menu Desktop */}
        <nav ref={desktopNavRef} aria-label="Navegação desktop">
          <ul className="nav-menu">
            {NAV_LINKS.desktop.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <li key={item.target}>
                  <SectionLink
                    target={item.target}
                    className={`nav-link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    <span className="nav-link-text">{item.label}</span>
                  </SectionLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          {/* [AI-DO-NOT-BREAK]: Botão de Agendamento Verde na Navbar */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-nav-cta btn-nav-schedule"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            <span>Agendar</span>
            <span className="nav-schedule-icon-wrap" aria-hidden="true">
              <WhatsAppIcon />
            </span>
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            className={`mobile-nav-toggle ${isDrawerOpen ? "is-active" : ""}`}
            id="menuToggleBtn"
            aria-label={isDrawerOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isDrawerOpen}
            aria-controls="mobileDrawer"
            onClick={onToggleDrawer}
          >
            <span className="hamburger-box">
              <span
                ref={line1Ref}
                className="hamburger-line line-1"
                style={
                  isDrawerOpen
                    ? { transform: "translateY(5.5px) rotate(45deg)" }
                    : undefined
                }
              />
              <span
                className="hamburger-line line-mid"
                style={
                  isDrawerOpen
                    ? { opacity: 0 }
                    : undefined
                }
              />
              <span
                ref={line2Ref}
                className="hamburger-line line-2"
                style={
                  isDrawerOpen
                    ? { transform: "translateY(-5.5px) rotate(-45deg)" }
                    : undefined
                }
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
