/**
 * Lógica de la Pizarra Digital
 * No edites este archivo para cambiar productos → usa data.js
 */
(function () {
  "use strict";

  const CAT_ORDER = ["alimentos", "bebidas", "aseo_personal", "aseo_hogar", "fragancias"];
  let currentCat = CAT_ORDER[0];

  function formatPrice(n) {
    return Number(n).toLocaleString("es-CU");
  }

  // Un producto se publica solo si disponible es true (también acepta "true" como texto)
  function isAvailable(p) {
    return String(p.disponible).toLowerCase() === "true";
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
      btn.textContent = cat.nombre;
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

    let avail = 0;
    Object.values(cat.subcategorias).forEach((sub) => {
      (sub.productos || []).forEach((p) => {
        if (isAvailable(p)) avail++;
      });
    });

    let html = `
      <div class="pizarra-header">
        <h2 class="pizarra-title">
          <span class="dot" style="background:${cat.color}"></span>
          ${cat.nombre}
        </h2>
        <div class="pizarra-legend">
          <span class="legend-ok">● Existe (${avail})</span>
        </div>
      </div>
    `;

    Object.keys(cat.subcategorias).forEach((subKey) => {
      const sub = cat.subcategorias[subKey];
      // Solo se publican los productos con disponible: true
      const prods = (sub.productos || []).filter(isAvailable);
      if (prods.length === 0) return; // subcategoría sin productos: no se muestra

      html += `
        <div class="subcat-block">
          <div class="subcat-title">
            ${sub.nombre}
            <span class="count">${prods.length} ${prods.length === 1 ? "producto" : "productos"}</span>
          </div>
          <table class="product-table">
            <thead>
              <tr>
                <th style="width:52%">Producto</th>
                <th style="width:28%">Disponibilidad</th>
                <th style="width:20%;text-align:right">Precio</th>
              </tr>
            </thead>
            <tbody>
      `;

      prods.forEach((p) => {
        html += `
          <tr>
            <td class="product-name">${escapeHtml(p.nombre)}</td>
            <td><span class="status ok"><span class="status-dot"></span>EXISTE EN TIENDA</span></td>
            <td class="price">${formatPrice(p.precio)}<small>CUP</small></td>
          </tr>
        `;
      });

      html += `</tbody></table></div>`;
    });

    if (avail === 0) {
      html += `<p style="text-align:center;padding:40px;color:var(--text-light)">No hay productos disponibles en esta categoría por el momento.</p>`;
    }

    html += `
      <p class="pizarra-note">
        * Los productos están sujetos a disponibilidad real en tienda.<br>
        Para actualizar precios o existencia edita el archivo <strong>js/data.js</strong>
      </p>
    `;

    main.innerHTML = html;
  }

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
