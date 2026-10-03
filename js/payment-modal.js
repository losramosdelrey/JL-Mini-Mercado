/**
 * JL Mini Mercado - Ventana flotante de pagos desde el exterior
 * Se muestra en Pizarra. Soporta ES / EN (usa jl-lang).
 */
(function () {
  "use strict";

  var WA_NUMBER = "5351870743";

  var TEXTS = {
    es: {
      msg: "Usted también puede efectuar pagos desde el exterior en <strong>USD</strong> o vía <strong>Zelle</strong>.",
      help: "¿Necesita ayuda? Contáctenos al WhatsApp.",
      wa: "Escribir por WhatsApp",
      exit: "Salir",
      aria: "Información sobre pagos desde el exterior",
      waText: "Hola JL Mini Mercado, quisiera información sobre pagos desde el exterior (USD / Zelle)."
    },
    en: {
      msg: "You can also pay from abroad in <strong>USD</strong> or via <strong>Zelle</strong>.",
      help: "Need help? Contact us on WhatsApp.",
      wa: "Message us on WhatsApp",
      exit: "Close",
      aria: "Information about payments from abroad",
      waText: "Hello JL Mini Mercado, I would like information about payments from abroad (USD / Zelle)."
    }
  };

  var overlay, lastFocus;

  function lang() {
    var l = "es";
    try { l = localStorage.getItem("jl-lang") || "es"; } catch (e) {}
    return TEXTS[l] ? l : "es";
  }

  function render() {
    var t = TEXTS[lang()];
    overlay.querySelector(".pay-modal").setAttribute("aria-label", t.aria);
    overlay.querySelector(".pay-modal-text").innerHTML = t.msg;
    overlay.querySelector(".pay-modal-help").textContent = t.help;
    var wa = overlay.querySelector(".pay-modal-wa");
    wa.querySelector("span").textContent = t.wa;
    wa.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(t.waText);
    overlay.querySelector(".pay-modal-exit").textContent = t.exit;
  }

  function close() {
    overlay.classList.remove("visible");
    document.removeEventListener("keydown", onKey);
    setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  function build() {
    overlay = document.createElement("div");
    overlay.className = "pay-modal-overlay";
    overlay.innerHTML =
      '<div class="pay-modal" role="dialog" aria-modal="true">' +
        '<img class="pay-modal-logo" src="images/logos/logo.png" alt="JL Mini Mercado" width="96" height="85">' +
        '<p class="pay-modal-text"></p>' +
        '<p class="pay-modal-help"></p>' +
        '<a class="pay-modal-wa" target="_blank" rel="noopener noreferrer">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.200-3.4-8.300zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 0 1-1.500-5.200c0-5.400 4.400-9.800 9.900-9.800 2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.100-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5c.1-.2.2-.3.300-.5.100-.2 0-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>' +
          '<span></span>' +
        '</a>' +
        '<button type="button" class="pay-modal-exit"></button>' +
      '</div>';

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    overlay.querySelector(".pay-modal-exit").addEventListener("click", close);

    document.body.appendChild(overlay);
    render();
    window.addEventListener("jl-lang-change", function () { if (overlay.parentNode) render(); });
    document.addEventListener("keydown", onKey);

    lastFocus = document.activeElement;
    requestAnimationFrame(function () {
      overlay.classList.add("visible");
      overlay.querySelector(".pay-modal-exit").focus();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
