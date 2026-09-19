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

    let total = 0, avail = 0;
    Object.values(cat.subcategorias).forEach((sub) => {
      sub.productos.forEach((p) => {
        total++;
        if (p.disponible) avail++;
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
          <span class="legend-no">● No existe (${total - avail})</span>
        </div>
      </div>
    `;

    Object.keys(cat.subcategorias).forEach((subKey) => {
      const sub = cat.subcategorias[subKey];
      const prods = sub.productos || [];
      const availSub = prods.filter((p) => p.disponible).length;

      html += `
        <div class="subcat-block">
          <div class="subcat-title">
            ${sub.nombre}
            <span class="count">${availSub}/${prods.length} disponibles</span>
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

      if (prods.length === 0) {
        html += `<tr><td colspan="3" style="text-align:center;color:var(--text-light);padding:20px">Sin productos</td></tr>`;
      } else {
        prods.forEach((p) => {
          const cls = p.disponible ? "ok" : "no";
          const txt = p.disponible ? "EXISTE EN TIENDA" : "NO EXISTE EN TIENDA";
          // Si el producto no está disponible, el precio se muestra siempre como 0,00
          const precioTxt = p.disponible ? formatPrice(p.precio) : "0,00";
          html += `
            <tr>
              <td class="product-name">${escapeHtml(p.nombre)}</td>
              <td><span class="status ${cls}"><span class="status-dot"></span>${txt}</span></td>
              <td class="price">${precioTxt}<small>CUP</small></td>
            </tr>
          `;
        });
      }

      html += `</tbody></table></div>`;
    });

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
