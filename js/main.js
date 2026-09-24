/**
 * JL Mini Mercado - Script compartido
 * Menú hamburguesa, animaciones fade-in / fade-in-up, smooth scroll, sombra del header.
 * Usado en todas las páginas.
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

  // Compatibilidad residual
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;

  function initMenuListeners() {
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", function (e) {
        e.preventDefault();
        toggleMenu();
      });
    }
    document.querySelectorAll("#navMenu a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  function initFadeIn(selector) {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

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

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  function initHeaderShadow() {
    const header = document.getElementById("main-header") || document.querySelector("header");
    if (!header) return;
    window.addEventListener(
      "scroll",
      function () {
        header.style.boxShadow =
          window.scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.3)" : "none";
      },
      { passive: true }
    );
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    initMenuListeners();
    initFadeIn(".fade-in");
    initFadeIn(".fade-in-up");
    initSmoothScroll();
    initHeaderShadow();
  });
})();
