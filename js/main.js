/**
 * Steffani — Comportamentos, Navegação & Micro-interações
 * Animações com curvas de aceleração naturais (inspiradas em Framer Motion)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Efeito sutil no header ao rolar a página
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.style.borderBottomColor = "rgba(17, 17, 17, 0.12)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.03)";
      } else {
        header.style.borderBottomColor = "rgba(17, 17, 17, 0.06)";
        header.style.boxShadow = "none";
      }
    }, { passive: true });
  }

  // 2. Menu Móvel / Mobile Drawer com Animação Fluida (Framer Motion feel)
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

    // Animação GSAP com física natural e entrada staggered dos itens
    if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(mobileDrawer, 
        { x: "100%" }, 
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(drawerOverlay, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(".mobile-nav-link", 
        { opacity: 0, x: 22 }, 
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.05, ease: "power2.out", delay: 0.12 }
      );
    }
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !isDrawerOpen) return;
    isDrawerOpen = false;

    menuToggleBtn?.classList.remove("is-active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    menuToggleBtn?.setAttribute("aria-expanded", "false");

    if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(mobileDrawer, {
        x: "100%",
        duration: 0.38,
        ease: "power3.in",
        onComplete: () => {
          mobileDrawer.classList.remove("is-active");
          document.body.style.overflow = "";
        }
      });
      gsap.to(drawerOverlay, {
        opacity: 0,
        duration: 0.32,
        ease: "power2.in",
        onComplete: () => {
          drawerOverlay?.classList.remove("is-active");
        }
      });
    } else {
      mobileDrawer.classList.remove("is-active");
      drawerOverlay?.classList.remove("is-active");
      document.body.style.overflow = "";
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

  // Fechar drawer ao clicar em um link interno
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // 3. Rolagem suave para links âncora
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

  // 4. Accordion (FAQ): Fechar outros itens ao abrir um para foco visual
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
