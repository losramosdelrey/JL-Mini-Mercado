/**
 * Lógica de la Pizarra Digital
 * No edites este archivo para cambiar productos → usa data.js
 */
(function () {
  "use strict";

  const CAT_ORDER = ["alimentos", "bebidas", "aseo_personal", "aseo_hogar", "fragancias"];
  let currentCat = CAT_ORDER[0];

  function t(key, fallback) {
    if (window.JL_I18N && typeof window.JL_I18N.t === "function") {
      const v = window.JL_I18N.t(key);
      if (v && v !== key) return v;
    }
    return fallback || key;
  }

  function catName(key, fallback) {
    return t("board.cat." + key, fallback);
  }

  function subName(key, fallback) {
    return t("board.sub." + key, fallback);
  }

  function formatPrice(n) {
    return Number(n).toLocaleString("es-CU");
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function renderNav() {
    const nav = document.getElementById("pizarraNav");
    if (!nav) return;
    nav.innerHTML = "";

    CAT_ORDER.forEach((key) => {
      const cat = INVENTARIO[key];
      if (!cat) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pizarra-btn" + (key === currentCat ? " active" : "");
      btn.dataset.cat = key;
      btn.textContent = catName(key, cat.nombre);
      btn.addEventListener("click", () => {
        currentCat = key;
        history.replaceState(null, "", "#" + key);
        renderNav();
        renderBoard();
      });
      nav.appendChild(btn);
    });
  }

  function renderBoard() {
    const main = document.getElementById("pizarraContent");
    if (!main) return;

    const cat = INVENTARIO[currentCat];
    if (!cat) {
      main.innerHTML = "<p style='text-align:center;padding:40px'>Categoría no encontrada</p>";
      return;
    }

    const labelAvailable = t("board.available.word", "Si hay");
    const labelUnavailable = t("board.unavailable.word", "Hoy no tenemos");
    const labelProduct = t("board.product", "Producto");
    const labelAvailability = t("board.availability", "Disponibilidad");
    const labelPrice = t("board.price", "Precio");

    let html = `
      <div class="pizarra-header">
        <h2 class="pizarra-title">
          <span class="dot" style="background:${cat.color}"></span>
          ${escapeHtml(catName(currentCat, cat.nombre))}
        </h2>
      </div>
    `;

    Object.keys(cat.subcategorias).forEach((subKey) => {
      const sub = cat.subcategorias[subKey];
      const prods = sub.productos || [];

      html += `
        <div class="subcat-block">
          <div class="subcat-title">
            ${escapeHtml(subName(subKey, sub.nombre))}
          </div>
          <div class="table-scroll">
          <table class="product-table">
            <thead>
              <tr>
                <th class="col-name">${escapeHtml(labelProduct)}</th>
                <th class="col-status">${escapeHtml(labelAvailability)}</th>
                <th class="col-price">${escapeHtml(labelPrice)}</th>
              </tr>
            </thead>
            <tbody>
      `;

      if (prods.length === 0) {
        html += `<tr><td colspan="3" style="text-align:center;color:var(--text-light);padding:20px">Sin productos</td></tr>`;
      } else {
        prods.forEach((p) => {
          const cls = p.disponible ? "ok" : "no";
          const txt = p.disponible ? labelAvailable : labelUnavailable;
          const precioTxt = p.disponible ? formatPrice(p.precio) : "—";
          html += `
            <tr>
              <td class="product-name">${escapeHtml(p.nombre)}</td>
              <td><span class="status ${cls}"><span class="status-dot"></span>${txt}</span></td>
              <td class="price">${precioTxt}<small>CUP</small></td>
            </tr>
          `;
        });
      }

      html += `</tbody></table></div></div>`;
    });

    const noteTxt = t(
      "board.note",
      "Nuestros productos han sido clasificados e inspeccionados por un comité profesional de la calidad."
    );
    html += `
      <p class="pizarra-note">
        ${escapeHtml(noteTxt)}
      </p>
    `;

    main.innerHTML = html;
  }

  // Re-render cuando cambia el idioma
  window.addEventListener("jl-lang-change", function () {
    if (typeof INVENTARIO !== "undefined") {
      renderNav();
      renderBoard();
    }
  });

  function init() {
    if (typeof INVENTARIO === "undefined") {
      document.getElementById("pizarraContent").innerHTML =
        "<p style='text-align:center;padding:40px'>Error: no se cargó data.js</p>";
      return;
    }

    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    if (hash && INVENTARIO[hash]) currentCat = hash;

    renderNav();
    renderBoard();

    window.addEventListener("hashchange", () => {
      const h = (window.location.hash || "").replace("#", "").toLowerCase();
      if (h && INVENTARIO[h]) {
        currentCat = h;
        renderNav();
        renderBoard();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
