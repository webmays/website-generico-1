/**
 * Steffani — Comportamentos e Micro-interações
 * Foco: Discrição, leveza, sem interferir na navegação do usuário.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Efeito sutil no header ao rolar a página
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

  // Rolagem suave para links âncora
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

  // Accordion (FAQ): Fechar os outros ao abrir um item para manter a tela limpa
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
