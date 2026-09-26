/**
 * Lógica de la Pizarra Digital
 * No edites este archivo para cambiar productos → usa data.js
 */
(function () {
  "use strict";

  const CAT_ORDER = ["alimentos", "bebidas", "aseo_personal", "aseo_hogar", "fragancias"];
  let currentCat = CAT_ORDER[0];


  /* Iconos SVG inline (24x24, currentColor) por categoría y subcategoría */
  const CAT_ICONS = {
    alimentos:
      '<svg class="pizarra-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/></svg>',
    bebidas:
      '<svg class="pizarra-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/></svg>',
    aseo_personal:
      '<svg class="pizarra-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/></svg>',
    aseo_hogar:
      '<svg class="pizarra-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M19.36 2.72L20.78 4.14 15.06 9.85C16.13 11.39 16.28 13.24 15.38 14.44L9.06 8.12C10.26 7.22 12.11 7.37 13.65 8.44L19.36 2.72M5.71 9.62L6.05 13.07L1.28 17.83C.66 18.46.66 19.47 1.28 20.09L3.45 22.26C4.07 22.88 5.08 22.88 5.7 22.26L10.47 17.49L13.92 17.83C14.54 17.9 15.19 17.66 15.64 17.21L6.33 7.9C5.88 8.35 5.64 9 5.71 9.62Z"/></svg>',
    fragancias:
      '<svg class="pizarra-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M7 3h10v2H7V3m1 4h8l.6 1.42c1.16.36 2.12 1.15 2.68 2.2L21 15v6H3v-6l1.72-4.38c.56-1.05 1.52-1.84 2.68-2.2L8 7m2 2v2h4V9h-4m-3.28 4c-.42.7-.72 1.5-.72 2.38V19h12v-3.62c0-.88-.3-1.68-.72-2.38H6.72Z"/></svg>'
  };

  const SUB_ICONS = {
    conservas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 2h16v4H4V2m1 5h14v15H5V7m3 2v2h8V9H8m0 4v2h8v-2H8m0 4v2h5v-2H8z"/></svg>',
    granos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 2C8.5 2 5.5 4 4 7c2 0 4.5 1 6 3 1.5-2 4-3 6-3-1.5-3-4.5-5-8-5m0 7c-2.5 0-4.5 1.5-5.5 3.5 1.5.3 3 1.2 4 2.5 1-1.3 2.5-2.2 4-2.5-1-2-3-3.5-5.5-3.5m0 6c-1.8 0-3.3 1-4.2 2.4.9.2 1.8.7 2.5 1.4.7-.7 1.6-1.2 2.5-1.4-.9-1.4-2.4-2.4-4.2-2.4M4 20v2h16v-2H4z"/></svg>',
    pastas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 3c-1.5 0-2.7 1.2-2.7 2.7S10.5 8.4 12 8.4s2.7-1.2 2.7-2.7S13.5 3 12 3m-7 6v2h2.3c.4 1.7 1.5 3.1 3 3.9V21h3.4v-6.1c1.5-.8 2.6-2.2 3-3.9H19V9H5z"/></svg>',
    carnicos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M20.5 6c-2.6.3-4.7 2-5.7 4.2-.6-1.5-1.6-2.8-3-3.6C9.5 5.5 6.5 5.8 4.5 7.5 2 9.7 1.7 13.4 3.5 16c1.4 2 3.8 3 6.2 2.7 1.6-.2 3-.9 4.1-2 1.4 1.8 3.6 2.9 6 2.8 3.2-.1 5.7-2.8 5.7-6 0-3-2.2-5.5-5-5.5z"/></svg>',
    jugos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M5.5 2h13l-.8 2H6.3L5.5 2M7 6h10l1.5 14.1c.1.8-.5 1.5-1.3 1.5H6.8c-.8 0-1.4-.7-1.3-1.5L7 6m2 2v2h6V8H9z"/></svg>',
    mermeladas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 2h16v3H4V2m1 4h14v2H5V6m1 3h12l1 13H5L6 9m3 2v2h6v-2H9z"/></svg>',
    lacteos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M18 10V6.35C18 4.5 16.5 3 14.65 3c-1.2 0-2.25.65-2.8 1.6-.55-.95-1.6-1.6-2.8-1.6C7.2 3 5.7 4.5 5.7 6.35V10H3v11h18V10h-3M7.7 6.35c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V10H7.7V6.35m5.8 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V10h-3V6.35M5 12h14v7H5v-7z"/></svg>',
    cereales: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3m0 2.18l6 2.25v4.66c0 3.83-2.5 7.34-6 8.28-3.5-.94-6-4.45-6-8.28V7.43l6-2.25z"/></svg>',
    sopas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 11h16v2H4v-2m1 4h14c.55 0 1 .45 1 1v1H4v-1c0-.55.45-1 1-1m7-14C8.14 1 5 4.14 5 8h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7z"/></svg>',
    condimentos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M17.5 2l.96 2.25L21 5.2l-2.25.96L17.5 8.4l-.96-2.24L14.3 5.2l2.24-.95L17.5 2M5 9l.5 1.5L7 11l-1.5.5L5 13l-.5-1.5L3 11l1.5-.5L5 9m7-5l1 2.5L15.5 8 13 9l-1 2.5L11 9 8.5 8 11 6.5 12 4m-1 9.5l.75 1.75L14 16l-1.75.75L11.5 18.5 10.75 16.75 9 16l1.75-.75L11.5 13.5z"/></svg>',
    infusiones: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M18.5 4H6v2h12.5c1.38 0 2.5 1.12 2.5 2.5S19.88 11 18.5 11H17v2h1.5c2.48 0 4.5-2.02 4.5-4.5S20.98 4 18.5 4M4 4h2v14h11v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg>',
    vinos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6m2 2h8v1.97C14.82 7.59 12.78 9 12 9s-2.82-1.41-4-2.03V5z"/></svg>',
    espumosos: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M6 3h12l-1 2H7L6 3m1 3h10l1.5 13.2c.1.7-.4 1.3-1.1 1.3H7.6c-.7 0-1.2-.6-1.1-1.3L8 6m2 2v1.5h4V8h-4m-1 4v1.5h6V12H9z"/></svg>',
    licores: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M8 2h8v3h-1.5l1 3H16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h.5l1-3H8V2m2 8v10h4V10h-4z"/></svg>',
    rones: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M9 2h6v2.5L14 7h1c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h1L9 4.5V2m2 7v11h2V9h-2z"/></svg>',
    destilados: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M8 2h8v2l-1 2h1c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1L8 4V2m2 6v12h4V8h-4z"/></svg>',
    cervezas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 2v2h1l1.5 16.2c.1.8.8 1.4 1.6 1.4h7.8c.8 0 1.5-.6 1.6-1.4L19 4h1V2H4m3.1 2h9.8l-1.3 14H8.4L7.1 4z"/></svg>',
    desodorantes: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M10 2h4v3h-4V2m1 4h2v2.1c2.3.5 4 2.5 4 4.9v9H7v-9c0-2.4 1.7-4.4 4-4.9V6z"/></svg>',
    jabones: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5C7 5.8 8 6.9 9.3 7.2L8 20h8L14.7 7.2C16 6.9 17 5.8 17 4.5A2.5 2.5 0 0 0 14.5 2c-.8 0-1.5.4-2 1-.5-.6-1.2-1-2-1z"/></svg>',
    shampoo: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M13 2v3h-2V2h2m-1 4c-2.2 0-4 1.8-4 4v1H6v11h12V11h-2V10c0-2.2-1.8-4-4-4z"/></svg>',
    acondicionador: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 2c-1.1 0-2 .9-2 2v1H8v2h8V5h-2V4c0-1.1-.9-2-2-2m-4 6v12h8V8H8z"/></svg>',
    cremas_piel: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M17 4h-1V2H8v2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H7V6h10v14z"/></svg>',
    dental: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M11 2h2v4h-2V2m-1 5h4l1 3H9l1-3m-2 4h10v11H8V11z"/></svg>',
    gel_bano: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M7 2h10v2H7V2m1 3h8l1 3H7l1-3m-1 4h10v11H7V9z"/></svg>',
    papel_higienico: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M6 2h9a5 5 0 0 1 0 10H8v10H6V2m2 2v6h7a3 3 0 0 0 0-6H8z"/></svg>',
    servilletas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 4h16v16H4V4m2 2v12h12V6H6z"/></svg>',
    toallitas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M5 3h14v2H5V3m1 3h12l1 15H5L6 6m3 3v2h6V9H9z"/></svg>',
    sanitarias: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 2C9.5 2 7 4 7 7v3H5v12h14V10h-2V7c0-3-2.5-5-5-5m0 2c1.5 0 3 1.2 3 3v3H9V7c0-1.8 1.5-3 3-3z"/></svg>',
    detergente_polvo: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M5 3h14v3H5V3m1 4h12l1 14H5L6 7m3 3v2h6v-2H9z"/></svg>',
    detergente_liquido: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M9 2h6v3l1 2h1c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h1l1-2V2m2 2v2h2V4h-2m-3 7v9h8V11H8z"/></svg>',
    lavavajillas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/></svg>',
    suavizante: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    frazadas: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 4h16v2H4V4m0 4h16v12H4V8m2 2v8h12v-8H6z"/></svg>',
    agua_tocador: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M9 2h6v2H9V2m1 3h4l1 3h1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1l1-3m-1 5v10h8V10H9z"/></svg>',
    perfumes: '<svg class="pizarra-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M7 3h10v2H7V3m1 4h8l.6 1.42c1.16.36 2.12 1.15 2.68 2.2L21 15v6H3v-6l1.72-4.38c.56-1.05 1.52-1.84 2.68-2.2L8 7m2 2v2h4V9h-4z"/></svg>'
  };

  function iconCat(key) {
    return CAT_ICONS[key] || "";
  }

  function iconSub(key) {
    return SUB_ICONS[key] || "";
  }


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
      btn.innerHTML = iconCat(key) + "<span>" + escapeHtml(catName(key, cat.nombre)) + "</span>";
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
          <span class="pizarra-title-icon" style="color:${cat.color}">${iconCat(currentCat)}</span>
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
            <span class="subcat-icon">${iconSub(subKey)}</span>
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
