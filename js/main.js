/**
 * Steffani — Comportamentos, Navegação & Micro-interações
 * Animações orquestradas com Framer Motion (Motion Vanilla Engine)
 * Física de Spring: stiffness, damping, mass e stagger reais
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

  // 2. Animações Framer Motion para Navbar Desktop (Hover & Touch)
  if (window.Motion && !isReducedMotion) {
    const { animate } = window.Motion;

    // Links de navegação: micro-interação tátil com spring natural
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("mouseenter", () => {
        animate(link, { y: -1.5, color: "#5B4032" }, { type: "spring", stiffness: 450, damping: 20 });
      });
      link.addEventListener("mouseleave", () => {
        animate(link, { y: 0, color: "#111111" }, { type: "spring", stiffness: 450, damping: 25 });
      });
    });

    // Botão de agendamento (WhatsApp): física elástica de toque/hover
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

  // 3. Menu Móvel / Gaveta com Framer Motion (Física de Mola & Stagger)
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const line1 = document.querySelector(".hamburger-line.line-1");
  const line2 = document.querySelector(".hamburger-line.line-2");
  let isDrawerOpen = false;

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

      // Animação das linhas do hambúrguer para 'X' com mola
      if (line1 && line2) {
        animate(line1, { transform: "translateY(4.25px) rotate(45deg)" }, { type: "spring", stiffness: 420, damping: 24 });
        animate(line2, { transform: "translateY(-4.25px) rotate(-45deg)" }, { type: "spring", stiffness: 420, damping: 24 });
      }

      // Deslize da gaveta com inércia natural do Framer Motion
      animate(mobileDrawer, 
        { transform: ["translateX(100%)", "translateX(0%)"] }, 
        { type: "spring", stiffness: 320, damping: 30, mass: 0.85 }
      );

      // Fade do overlay de fundo
      animate(drawerOverlay, { opacity: [0, 1] }, { duration: 0.35 });

      // Entrada em cascata (stagger) dos links de navegação
      animate(".mobile-nav-links a", 
        { opacity: [0, 1], transform: ["translateX(26px)", "translateX(0px)"] }, 
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

      // Restauração das linhas do hambúrguer
      if (line1 && line2) {
        animate(line1, { transform: "translateY(0px) rotate(0deg)" }, { type: "spring", stiffness: 400, damping: 25 });
        animate(line2, { transform: "translateY(0px) rotate(0deg)" }, { type: "spring", stiffness: 400, damping: 25 });
      }

      // Fechamento suave da gaveta
      const closeAnim = animate(mobileDrawer, 
        { transform: "translateX(100%)" }, 
        { duration: 0.28, easing: [0.32, 0, 0.67, 0] }
      );

      animate(drawerOverlay, { opacity: 0 }, { duration: 0.24 });

      closeAnim.finished.then(() => {
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
