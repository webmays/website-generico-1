/**
 * Steffani — Comportamentos, Navegação & Micro-interações
 * Clean Code: Leveza, fluidez natural sem atrasos ou animações intrusivas.
 */

document.addEventListener("DOMContentLoaded", () => {
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

  // 2. Menu Móvel / Gaveta (Transição pura acelerada por GPU)
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
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
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !isDrawerOpen) return;
    isDrawerOpen = false;

    mobileDrawer.classList.remove("is-active");
    drawerOverlay?.classList.remove("is-active");
    menuToggleBtn?.classList.remove("is-active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    menuToggleBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
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

  // Fechar drawer ao clicar em links internos
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // 3. Rolagem suave natural para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          });
        }
      }
    });
  });

  // 4. Accordion (FAQ): Foco visual com fechamento de itens alternados
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
