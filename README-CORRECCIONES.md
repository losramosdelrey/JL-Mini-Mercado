# JL Mini Mercado – Correcciones v4

## Qué se corrigió

### 1. `js/data.js` – Orden e consistencia
- Formato uniforme: `{ nombre: "...", disponible: true|false, precio: número }`
- Indentación alineada en todas las categorías
- Espacios dobles eliminados en nombres (`Manzanas  1u` → `Manzanas 1u`, etc.)
- Typos corregidos (`Hamburguezas` → `Hamburguesas`, `Dulce tres Leches` → `Dulce tres leches`)
- Productos no disponibles con `precio: 0` de forma consistente
- Comentario de ayuda al inicio para quien edite el inventario

### 2. `sw.js` – Service Worker completo (cache-v4)
- Precache de **imágenes clave**: logos, categorías del catálogo, fondos, testimonios
- Instalación resistente: si falla un asset, el resto se cachea igual
- Fallback a `index.html` **solo** en navegación (no en CSS/JS/imágenes)
- Limpieza automática de caches antiguas (v3 y anteriores)
- Tras subir: fuerza actualización del SW (DevTools → Application → Update / Unregister)

### 3. JS del menú unificado
- `main.js`, `catalogo.js`, `contacto.js` y `nosotros.js` comparten la misma lógica de:
  - `toggleMenu` / `closeMenu` con `aria-expanded` y `aria-label`
  - IntersectionObserver con **fallback** si el navegador no lo soporta
  - Smooth scroll en anclas `#`
- `nosotros.js` mantiene sus extras: `.fade-in-up` y sombra del header al hacer scroll

## Cómo aplicar

1. Descomprime este ZIP.
2. Copia/sobrescribe en la raíz de tu proyecto:
   - `sw.js`
   - `js/data.js`
   - `js/main.js`
   - `js/catalogo.js`
   - `js/contacto.js`
   - `js/nosotros.js`
3. Sube a GitHub Pages (o tu hosting).
4. En el navegador: limpia caché o en DevTools → Application → Service Workers → **Unregister** y recarga, para activar **cache-v4**.

## Notas
- No se modificó el diseño visual ni el contenido de textos i18n.
- Asegúrate de que las imágenes de testimonios (`images/banners/testimonios/*.webp`) estén subidas al repositorio; el SW las incluye en el precache.
- Para cambiar productos o precios: edita **solo** `js/data.js`.
