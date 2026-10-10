/**
 * Steffani — Comportamentos, Navegação & Micro-interações
 * Animações orquestradas com Framer Motion (Motion Vanilla Engine)
 * Física de Spring: stiffness, damping, mass e stagger reais em propriedades numéricas
 */

document.addEventListener("DOMContentLoaded", () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Elevação sutil do header na rolagem
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.style.borderBottomColor = "rgba(17, 17, 17, 0.1)";
        header.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.02)";
      } else {
        header.style.borderBottomColor = "rgba(17, 17, 17, 0.06)";
        header.style.boxShadow = "none";
      }
    }, { passive: true });
  }

  // 2. Micro-interações táteis para Navbar Desktop com Framer Motion Spring
  if (window.Motion && !isReducedMotion) {
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
  if (drawerCloseBtn && window.Motion && !isReducedMotion) {
    const { animate } = window.Motion;
    drawerCloseBtn.addEventListener("mouseenter", () => {
      animate(drawerCloseBtn, { rotate: 90, scale: 1.06 }, { type: "spring", stiffness: 420, damping: 20 });
    });
    drawerCloseBtn.addEventListener("mouseleave", () => {
      animate(drawerCloseBtn, { rotate: 0, scale: 1 }, { type: "spring", stiffness: 420, damping: 24 });
    });
  }

  const openDrawer = () => {
    if (!mobileDrawer || isDrawerOpen) return;
    isDrawerOpen = true;

    mobileDrawer.classList.add("is-active");
    drawerOverlay?.classList.add("is-active");
    menuToggleBtn?.classList.add("is-active");
    mobileDrawer.setAttribute("aria-hidden", "false");
    menuToggleBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    if (window.Motion && !isReducedMotion) {
      const { animate, stagger } = window.Motion;

      // 1. Linhas do hambúrguer transformam-se em 'X' via mola coordenada (y + rotate)
      if (line1 && line2) {
        animate(line1, { y: 4.5, rotate: 45 }, { type: "spring", stiffness: 440, damping: 22 });
        animate(line2, { y: -4.5, rotate: -45 }, { type: "spring", stiffness: 440, damping: 22 });
      }

      // 2. Deslizamento da gaveta com inércia e amortecimento elástico
      animate(mobileDrawer, 
        { x: ["100%", "0%"] }, 
        { type: "spring", stiffness: 280, damping: 28, mass: 0.85 }
      );

      // 3. Fade in do overlay escuro com desfoque de fundo
      if (drawerOverlay) {
        animate(drawerOverlay, { opacity: [0, 1] }, { duration: 0.3 });
      }

      // 4. Entrada dos links em cascata (stagger) com física de mola
      animate(".mobile-nav-links a", 
        { opacity: [0, 1], x: [28, 0] }, 
        { 
          type: "spring", 
          stiffness: 340, 
          damping: 26, 
          delay: stagger(0.045, { start: 0.12 }) 
        }
      );
    } else {
      mobileDrawer.style.transform = "translateX(0)";
      if (drawerOverlay) drawerOverlay.style.opacity = "1";
    }
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !isDrawerOpen) return;
    isDrawerOpen = false;

    menuToggleBtn?.classList.remove("is-active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    menuToggleBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    if (window.Motion && !isReducedMotion) {
      const { animate } = window.Motion;

      // 1. Restauração elástica das linhas do hambúrguer para o estado paralelo
      if (line1 && line2) {
        animate(line1, { y: 0, rotate: 0 }, { type: "spring", stiffness: 420, damping: 26 });
        animate(line2, { y: 0, rotate: 0 }, { type: "spring", stiffness: 420, damping: 26 });
      }

      // 2. Saída da gaveta com mola de recuo ágil
      const closeAnim = animate(mobileDrawer, 
        { x: "100%" }, 
        { type: "spring", stiffness: 340, damping: 32 }
      );

      // 3. Fade out do overlay
      if (drawerOverlay) {
        animate(drawerOverlay, { opacity: 0 }, { duration: 0.25 });
      }

      closeAnim.then(() => {
        mobileDrawer.classList.remove("is-active");
        drawerOverlay?.classList.remove("is-active");
      });
    } else {
      mobileDrawer.classList.remove("is-active");
      drawerOverlay?.classList.remove("is-active");
    }
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

  // 4. Rolagem suave para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: isReducedMotion ? 'auto' : 'smooth'
          });
        }
      }
    });
  });

  // 5. Accordion (FAQ): Foco visual com fechamento de itens alternados
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
