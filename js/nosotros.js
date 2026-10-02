/**
 * Nosotros – fade-in (respaldo; el HTML también trae script inline)
 */
(function () {
  "use strict";
  function go() {
    var list = document.querySelectorAll(".fade-in");
    list.forEach(function (el) {
      if (!el.classList.contains("visible")) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("visible");
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
  else go();
  window.addEventListener("scroll", go, { passive: true });
})();
