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

  var INSTALLED_KEY = "jl-pwa-installed";
  var INSTALLED_TTL = 30 * 24 * 60 * 60 * 1000; // 30 días

  function markInstalled() {
    try { localStorage.setItem(INSTALLED_KEY, String(Date.now())); } catch (e) {}
  }

  function wasInstalled() {
    try {
      var ts = parseInt(localStorage.getItem(INSTALLED_KEY), 10);
      if (!ts) return false;
      if (Date.now() - ts > INSTALLED_TTL) {
        localStorage.removeItem(INSTALLED_KEY);
        return false;
      }
      return true;
    } catch (e) { return false; }
  }

  // Comprueba si la app ya está instalada (Chrome Android) aunque se navegue desde el navegador
  async function isAlreadyInstalled() {
    if (isStandalone()) return true;
    if (navigator.getInstalledRelatedApps) {
      try {
        var apps = await navigator.getInstalledRelatedApps();
        if (apps && apps.length) return true;
        return false; // el navegador respondió: no está instalada
      } catch (e) { /* seguir con el flag local */ }
    }
    return wasInstalled();
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
    const labelText = t("install.btn", "Instalar aplicación");
    const hintText = t("install.hint", "Añade JL Mini Mercado a tu pantalla de inicio");
    installBtn.setAttribute("aria-label", labelText);
    installBtn.setAttribute("title", hintText);
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
      if (!deferredPrompt) { hideButton(); return; }

      btn.disabled = true;
      var promptEvent = deferredPrompt;
      deferredPrompt = null; // el evento solo se puede usar una vez
      promptEvent.prompt();

      try {
        const { outcome } = await promptEvent.userChoice;
        if (outcome === "accepted") markInstalled();
      } catch (e) {
        console.warn("[PWA Install]", e);
      }

      // Aceptado o descartado: ocultar (si el navegador vuelve a permitirlo,
      // lanzará otro beforeinstallprompt y el botón reaparecerá)
      hideButton();
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
    if (isStandalone()) { markInstalled(); return; } // Ya está instalada y abierta como app

    createButton();
    updateButtonText();

    window.addEventListener("beforeinstallprompt", async function (e) {
      e.preventDefault();
      deferredPrompt = e;
      if (await isAlreadyInstalled()) { hideButton(); return; }
      showButton();
    });

    window.addEventListener("appinstalled", function () {
      markInstalled();
      deferredPrompt = null;
      hideButton();
    });

    // Si se abre como app instalada durante la sesión
    var mq = window.matchMedia("(display-mode: standalone)");
    var onModeChange = function (ev) {
      if (ev.matches) { markInstalled(); hideButton(); }
    };
    if (mq.addEventListener) mq.addEventListener("change", onModeChange);
    else if (mq.addListener) mq.addListener(onModeChange);

    // Actualizar texto al cambiar idioma
    window.addEventListener("jl-lang-change", updateButtonText);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
