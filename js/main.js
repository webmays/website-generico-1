/**
 * Steffani — Comportamentos, Navegação & Micro-interações
 * Animações orquestradas com GSAP 3 + ScrollTrigger + Lenis Smooth Scroll & Framer Motion
 * Física de Spring: stiffness, damping, mass e stagger reais em micro-interações
 * Rolagem de luxo amortecida (inertia smooth scroll) a 60/120fps
 */

const HAMBURGER_OFFSET_PX = 4.25;
const SPRING_HAMBURGER_OPEN = { type: "spring", stiffness: 440, damping: 22 };
const SPRING_HAMBURGER_CLOSE = { type: "spring", stiffness: 420, damping: 26 };
const SPRING_DRAWER_OPEN = { type: "spring", stiffness: 280, damping: 28, mass: 0.85 };
const SPRING_DRAWER_CLOSE = { type: "spring", stiffness: 340, damping: 32 };
const SPRING_LINKS = { type: "spring", stiffness: 340, damping: 26 };

document.addEventListener("DOMContentLoaded", () => {
  const motionEnabled = Boolean(window.Motion);
  const hasGsap = Boolean(window.gsap);
  const hasScrollTrigger = Boolean(window.ScrollTrigger);
  const hasLenis = Boolean(window.Lenis);

  // 0. Lenis Smooth Scroll Engine + GSAP ScrollTrigger
  let lenis = null;

  if (hasGsap && hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (hasLenis) {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false
    });

    if (hasGsap && hasScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }

  // Função auxiliar de rolagem suave com fallback gracioso
  const scrollToTarget = (targetEl, offset = -30) => {
    if (!targetEl) return;
    if (lenis) {
      lenis.scrollTo(targetEl, { offset, duration: 1.3 });
    } else {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 1. Navbar transparente na Hero e transição glassmorphism com centralização suave ao scrollar
  const header = document.querySelector(".site-header");
  const navContainer = document.querySelector(".nav-container");
  const brandLogo = document.querySelector(".brand-logo");
  const desktopNav = document.querySelector(".site-header nav");

  const updateNavHeroShift = () => {
    if (window.innerWidth < 992 || !navContainer || !brandLogo || !desktopNav) {
      document.documentElement.style.removeProperty("--nav-hero-shift");
      return;
    }
    const containerWidth = navContainer.clientWidth;
    const heroNavWidth = Math.max(425, Math.min(520, window.innerWidth * 0.315));
    const centeredLeft = (containerWidth - heroNavWidth) / 2;

    const logoRect = brandLogo.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    const logoRightRel = logoRect.right - containerRect.left;
    const targetHeroMargin = Math.max(24, Math.min(48, window.innerWidth * 0.025));
    const targetHeroLeft = logoRightRel + targetHeroMargin;

    const shift = targetHeroLeft - centeredLeft;
    if (shift < 0) {
      document.documentElement.style.setProperty("--nav-hero-shift", `${Math.round(shift)}px`);
    }
  };

  const updateHeaderScrollState = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  if (header) {
    window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
    window.addEventListener("resize", updateNavHeroShift, { passive: true });
    updateNavHeroShift();
    updateHeaderScrollState();
  }

  // 1.0. Sincronização responsiva do viewBox da Hero SVG (Arco no mobile vs Carrossel lateral no desktop)
  const heroFanSvg = document.querySelector(".hero-fan-svg");
  const updateHeroSvgViewBox = () => {
    if (!heroFanSvg) return;
    if (window.innerWidth < 992) {
      if (heroFanSvg.getAttribute("viewBox") !== "680 -460 1680 840") {
        heroFanSvg.setAttribute("viewBox", "680 -460 1680 840");
      }
    } else {
      if (heroFanSvg.getAttribute("viewBox") !== "0 0 1440 760") {
        heroFanSvg.setAttribute("viewBox", "0 0 1440 760");
      }
    }
  };
  window.addEventListener("resize", updateHeroSvgViewBox, { passive: true });
  updateHeroSvgViewBox();

  // 1.1. Widget Flutuante de Indicador de Seções (Scrollspy Dinâmico de 3 Níveis)
  const scrollWidget = document.getElementById("scrollSectionWidget");
  let updateScrollWidget = null;

  if (scrollWidget) {
    const SECTIONS_CONFIG = [
      { id: "hero", num: "01", name: "Início" },
      { id: "procedimentos", num: "02", name: "Procedimentos" },
      { id: "metodo", num: "03", name: "Método" },
      { id: "cursos", num: "04", name: "Curso" },
      { id: "sobre", num: "05", name: "Sobre" },
      { id: "faq", num: "06", name: "Dúvidas" },
      { id: "contato", num: "07", name: "Contato" }
    ];

    const slotPrev = scrollWidget.querySelector(".slot-prev");
    const slotCurrent = scrollWidget.querySelector(".slot-current");
    const slotNext = scrollWidget.querySelector(".slot-next");

    let activeSectionIndex = -1;

    const renderSlot = (slotEl, item) => {
      if (!slotEl) return;
      if (!item) {
        slotEl.classList.add("is-hidden");
        slotEl.removeAttribute("data-target-id");
      } else {
        slotEl.classList.remove("is-hidden");
        slotEl.setAttribute("data-target-id", item.id);
        const numEl = slotEl.querySelector(".step-num");
        const nameEl = slotEl.querySelector(".step-name");
        if (numEl) numEl.textContent = item.num;
        if (nameEl) nameEl.textContent = item.name;
      }
    };

    updateScrollWidget = () => {
      const scrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let matchedIndex = 0;

      if (scrollPos + viewportHeight >= docHeight - 80) {
        matchedIndex = SECTIONS_CONFIG.length - 1;
      } else {
        const checkLine = scrollPos + viewportHeight * 0.42;
        for (let i = 0; i < SECTIONS_CONFIG.length; i++) {
          const el = document.getElementById(SECTIONS_CONFIG[i].id);
          if (el) {
            const elTop = el.getBoundingClientRect().top + scrollPos;
            const elBottom = elTop + el.offsetHeight;
            if (checkLine >= elTop && checkLine < elBottom) {
              matchedIndex = i;
              break;
            }
          }
        }
      }

      // Atualiza posição do marcador dinâmico da borda direita em tempo real
      const edgeThumb = document.getElementById("scrollEdgeThumb");
      const edgeRail = document.getElementById("scrollEdgeRail");
      if (edgeThumb) {
        const maxScroll = docHeight - viewportHeight;
        const scrollPercent = maxScroll > 0 ? Math.min(1, Math.max(0, scrollPos / maxScroll)) : 0;
        const thumbHeight = edgeThumb.offsetHeight || 52;
        const availableHeight = viewportHeight - thumbHeight;
        edgeThumb.style.transform = `translateY(${Math.round(scrollPercent * availableHeight)}px)`;
      }

      if (matchedIndex !== activeSectionIndex) {
        activeSectionIndex = matchedIndex;

        const prevItem = activeSectionIndex > 0 ? SECTIONS_CONFIG[activeSectionIndex - 1] : null;
        const currentItem = SECTIONS_CONFIG[activeSectionIndex];
        const nextItem = activeSectionIndex < SECTIONS_CONFIG.length - 1 ? SECTIONS_CONFIG[activeSectionIndex + 1] : null;

        renderSlot(slotPrev, prevItem);
        renderSlot(slotCurrent, currentItem);
        renderSlot(slotNext, nextItem);

        // Atualiza estado ativo dos ticks da borda
        const edgeTicks = document.querySelectorAll(".edge-tick");
        edgeTicks.forEach((tick, idx) => {
          if (idx === activeSectionIndex) {
            tick.classList.add("is-active");
          } else {
            tick.classList.remove("is-active");
          }
        });

        // Alternância de tema escuro nos indicadores quando sobre seções escuras
        const isDarkSection = Boolean(currentItem && (currentItem.id === "contato" || currentItem.id === "metodo"));
        if (isDarkSection) {
          scrollWidget.classList.add("is-dark-theme");
          edgeRail?.classList.add("is-dark-theme");
        } else {
          scrollWidget.classList.remove("is-dark-theme");
          edgeRail?.classList.remove("is-dark-theme");
        }
      }
    };

    [slotPrev, slotCurrent, slotNext].forEach(slot => {
      if (slot) {
        slot.addEventListener("click", () => {
          const targetId = slot.getAttribute("data-target-id");
          if (targetId) {
            const targetEl = document.getElementById(targetId);
            scrollToTarget(targetEl);
          }
        });
      }
    });

    document.querySelectorAll(".edge-tick").forEach(tick => {
      tick.addEventListener("click", () => {
        const targetId = tick.getAttribute("data-target");
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          scrollToTarget(targetEl);
        }
      });
    });

    window.addEventListener("scroll", updateScrollWidget, { passive: true });
    updateScrollWidget();
  }

  // Notificar listeners de scroll durante a rolagem suave do Lenis
  if (lenis) {
    lenis.on("scroll", () => {
      updateHeaderScrollState();
      if (typeof updateScrollWidget === "function") {
        updateScrollWidget();
      }
    });
  }

  // 2. Micro-interações táteis para Navbar Desktop com Framer Motion Spring
  if (motionEnabled) {
    const { animate } = window.Motion;

    // Links de navegação: elevação no eixo Y com mola suave
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("mouseenter", () => {
        animate(link, { y: -2 }, { type: "spring", stiffness: 450, damping: 22 });
      });
      link.addEventListener("mouseleave", () => {
        animate(link, { y: 0 }, { type: "spring", stiffness: 450, damping: 25 });
      });
    });

    // Botão de agendamento (WhatsApp): física elástica de clique e hover
    const navCta = document.querySelector(".btn-nav-cta");
    if (navCta) {
      navCta.addEventListener("mouseenter", () => {
        animate(navCta, { scale: 1.025 }, { type: "spring", stiffness: 480, damping: 18 });
      });
      navCta.addEventListener("mouseleave", () => {
        animate(navCta, { scale: 1 }, { type: "spring", stiffness: 420, damping: 22 });
      });
      navCta.addEventListener("mousedown", () => {
        animate(navCta, { scale: 0.97 }, { type: "spring", stiffness: 600, damping: 25 });
      });
      navCta.addEventListener("mouseup", () => {
        animate(navCta, { scale: 1.025 }, { type: "spring", stiffness: 500, damping: 20 });
      });
    }
  }

  // 3. Menu Mobile / Gaveta com Framer Motion (Física de Mola Real & Stagger)
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const line1 = document.querySelector(".hamburger-line.line-1");
  const line2 = document.querySelector(".hamburger-line.line-2");
  let isDrawerOpen = false;

  // Micro-interação no botão de fechar da gaveta
  if (drawerCloseBtn && motionEnabled) {
    const { animate } = window.Motion;
    drawerCloseBtn.addEventListener("mouseenter", () => {
      animate(drawerCloseBtn, { rotate: 90, scale: 1.06 }, { type: "spring", stiffness: 420, damping: 20 });
    });
    drawerCloseBtn.addEventListener("mouseleave", () => {
      animate(drawerCloseBtn, { rotate: 0, scale: 1 }, { type: "spring", stiffness: 420, damping: 24 });
    });
  }

  // Estado sem animação (movimento reduzido ou Motion indisponível): troca instantânea e consistente
  const setHamburgerInstant = (isOpen) => {
    if (!line1 || !line2) return;
    line1.style.transform = isOpen ? `translateY(${HAMBURGER_OFFSET_PX}px) rotate(45deg)` : "";
    line2.style.transform = isOpen ? `translateY(-${HAMBURGER_OFFSET_PX}px) rotate(-45deg)` : "";
  };

  const openDrawer = () => {
    if (!mobileDrawer || isDrawerOpen) return;
    isDrawerOpen = true;

    if (lenis) lenis.stop();

    mobileDrawer.classList.add("is-active");
    drawerOverlay?.classList.add("is-active");
    menuToggleBtn?.classList.add("is-active");
    mobileDrawer.setAttribute("aria-hidden", "false");
    menuToggleBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    document.body.classList.add("drawer-open");

    if (!motionEnabled) {
      mobileDrawer.style.transform = "translateX(0)";
      if (drawerOverlay) drawerOverlay.style.opacity = "1";
      setHamburgerInstant(true);
      return;
    }

    const { animate, stagger } = window.Motion;

    // 1. Linhas do hambúrguer transformam-se em 'X' via mola coordenada (y + rotate)
    if (line1 && line2) {
      animate(line1, { y: HAMBURGER_OFFSET_PX, rotate: 45 }, SPRING_HAMBURGER_OPEN);
      animate(line2, { y: -HAMBURGER_OFFSET_PX, rotate: -45 }, SPRING_HAMBURGER_OPEN);
    }

    // 2. Deslizamento da gaveta com inércia e amortecimento elástico
    animate(mobileDrawer, { x: ["100%", "0%"] }, SPRING_DRAWER_OPEN);

    // 3. Fade in do overlay escuro com desfoque de fundo
    if (drawerOverlay) {
      animate(drawerOverlay, { opacity: [0, 1] }, { duration: 0.3 });
    }

    // 4. Entrada dos links em cascata (stagger) com física de mola
    animate(
      ".mobile-nav-links a",
      { opacity: [0, 1], x: [28, 0] },
      { ...SPRING_LINKS, delay: stagger(0.045, { start: 0.12 }) }
    );
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !isDrawerOpen) return;
    isDrawerOpen = false;

    if (lenis) lenis.start();

    menuToggleBtn?.classList.remove("is-active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    menuToggleBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.body.classList.remove("drawer-open");

    const hideDrawer = () => {
      if (isDrawerOpen) return;
      mobileDrawer.classList.remove("is-active");
      drawerOverlay?.classList.remove("is-active");
    };

    if (!motionEnabled) {
      if (drawerOverlay) drawerOverlay.style.opacity = "0";
      setHamburgerInstant(false);
      hideDrawer();
      return;
    }

    const { animate } = window.Motion;

    // 1. Restauração elástica das linhas do hambúrguer para o estado paralelo
    if (line1 && line2) {
      animate(line1, { y: 0, rotate: 0 }, SPRING_HAMBURGER_CLOSE);
      animate(line2, { y: 0, rotate: 0 }, SPRING_HAMBURGER_CLOSE);
    }

    // 2. Saída da gaveta com mola de recuo ágil
    const closeAnimation = animate(mobileDrawer, { x: "100%" }, SPRING_DRAWER_CLOSE);

    // 3. Fade out do overlay
    if (drawerOverlay) {
      animate(drawerOverlay, { opacity: 0 }, { duration: 0.25 });
    }

    closeAnimation.then(hideDrawer);
  };

  menuToggleBtn?.addEventListener("click", () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerCloseBtn?.addEventListener("click", closeDrawer);
  drawerOverlay?.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isDrawerOpen) {
      closeDrawer();
    }
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // 4. Rolagem suave para links âncora via Lenis com easing exponencial
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          scrollToTarget(targetElement, -40);
        }
      }
    });
  });

  // 5. Accordion (FAQ): Foco visual com fechamento de itens alternados
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
        if (lenis) {
          setTimeout(() => lenis.resize(), 150);
        }
      }
    });
  });

  // 6. Animações Editoriais de Revelação por ScrollTrigger (GSAP)
  if (hasGsap && hasScrollTrigger) {
    // Cabeçalho e cards de procedimentos
    const procedHeader = document.querySelector(".procedures-header-centered");
    if (procedHeader) {
      gsap.from(procedHeader, {
        scrollTrigger: {
          trigger: procedHeader,
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 32,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out"
      });
    }

    const procedureCards = document.querySelectorAll(".procedure-card");
    if (procedureCards.length) {
      gsap.from(procedureCards, {
        scrollTrigger: {
          trigger: ".procedures-cards-grid",
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

    // O Método (Filosofia): Citação Editorial e Métricas
    const quoteBlock = document.querySelector(".editorial-quote");
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

    const authorityPoints = document.querySelectorAll(".authority-point");
    if (authorityPoints.length) {
      gsap.from(authorityPoints, {
        scrollTrigger: {
          trigger: ".authority-points",
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 22,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: "power2.out"
      });
    }

    // O Curso: Etapas da Linha do Tempo
    const timelineSteps = document.querySelectorAll(".timeline-step");
    if (timelineSteps.length) {
      gsap.from(timelineSteps, {
        scrollTrigger: {
          trigger: ".journey-timeline",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power2.out"
      });
    }

    // Resultados & Harmonia (Cards de Casos)
    const caseCards = document.querySelectorAll(".case-card");
    if (caseCards.length) {
      gsap.from(caseCards, {
        scrollTrigger: {
          trigger: ".cases-grid",
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

    // Sobre Steffani: Foto e Perfil
    const aboutPhoto = document.querySelector(".about-photo");
    const aboutContent = document.querySelector(".about-content");
    if (aboutPhoto && aboutContent) {
      gsap.from([aboutPhoto, aboutContent], {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 32,
        opacity: 0,
        stagger: 0.15,
        duration: 0.85,
        ease: "power2.out"
      });
    }

    // CTA Final
    const finalCta = document.querySelector(".final-cta-content");
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
  }
});
