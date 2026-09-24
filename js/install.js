/**
 * JL Mini Mercado - Botón de instalación PWA
 * Usa beforeinstallprompt para mostrar un botón visible
 */
(function () {
  "use strict";

  let deferredPrompt = null;
  let installBtn = null;

  function t(key, fallback) {
    if (window.JL_I18N && typeof window.JL_I18N.t === "function") {
      const v = window.JL_I18N.t(key);
      if (v && v !== key) return v;
    }
    return fallback || key;
  }

  function isStandalone() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true ||
      document.referrer.includes("android-app://")
    );
  }

  function hideButton() {
    if (installBtn) {
      installBtn.classList.remove("visible");
      installBtn.setAttribute("aria-hidden", "true");
    }
  }

  function showButton() {
    if (installBtn && !isStandalone()) {
      installBtn.classList.add("visible");
      installBtn.setAttribute("aria-hidden", "false");
    }
  }

  function updateButtonText() {
    if (!installBtn) return;
    const label = installBtn.querySelector(".install-label");
    if (label) {
      label.textContent = t("install.btn", "Instalar aplicación");
    }
    installBtn.setAttribute(
      "aria-label",
      t("install.btn", "Instalar aplicación")
    );
  }

  function createButton() {
    // Evitar duplicados
    if (document.getElementById("pwa-install-btn")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "pwa-install-btn";
    btn.className = "pwa-install-btn";
    btn.setAttribute("aria-hidden", "true");
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
      <span class="install-label">${t("install.btn", "Instalar aplicación")}</span>
    `;

    btn.addEventListener("click", async function () {
      if (!deferredPrompt) return;

      btn.disabled = true;
      deferredPrompt.prompt();

      try {
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          hideButton();
        }
      } catch (e) {
        console.warn("[PWA Install]", e);
      }

      deferredPrompt = null;
      btn.disabled = false;
    });

    // Preferir insertar junto a los botones flotantes si existen
    const floating = document.querySelector(".floating-actions");
    if (floating) {
      floating.appendChild(btn);
    } else {
      // Fallback: cuerpo del documento
      document.body.appendChild(btn);
    }

    installBtn = btn;
  }

  function init() {
    if (isStandalone()) return; // Ya está instalada

    createButton();
    updateButtonText();

    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferredPrompt = e;
      showButton();
    });

    window.addEventListener("appinstalled", function () {
      deferredPrompt = null;
      hideButton();
    });

    // Actualizar texto al cambiar idioma
    window.addEventListener("jl-lang-change", updateButtonText);

    // Si el evento ya ocurrió antes de cargar este script (raro, pero posible)
    // no podemos recuperarlo; el botón solo aparece cuando el navegador lo permite.
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
