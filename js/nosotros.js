/**
 * Nosotros - menú unificado + animaciones .fade-in-up + sombra del header
 */
(function () {
  "use strict";

  function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle("active");
    if (hamburger) {
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      hamburger.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      );
    }
  }

  function closeMenu() {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    if (navMenu) navMenu.classList.remove("active");
    if (hamburger) {
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú de navegación");
    }
  }

  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;

  function initFadeInUp() {
    const targets = document.querySelectorAll(".fade-in-up");
    if (!targets.length) return;

    // Si no hay IntersectionObserver (WebViews antiguos), mostrar todo de una vez
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initHeaderShadow() {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("main-header");
      if (header) {
        header.style.boxShadow =
          window.scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.3)" : "none";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initFadeInUp();
      initHeaderShadow();
    });
  } else {
    initFadeInUp();
    initHeaderShadow();
  }
})();
