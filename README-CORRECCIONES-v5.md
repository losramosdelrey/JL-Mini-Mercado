# JL Mini Mercado – Correcciones v5 (Optimización y buenas prácticas)

## Resumen de cambios aplicados

### 1. Service Worker (`sw.js`) → cache-v5
- **Network First** para HTML y `js/data.js` (precios/inventario se actualizan sin limpiar caché manualmente).
- **Cache First** para CSS, JS estático e imágenes.
- Limpieza automática de caches antiguas (v4 y anteriores).
- Incluye nuevos iconos y favicon en precache.

### 2. Manifest PWA (`manifest.json`)
- Iconos separados 192×192 y 512×512 con `purpose: any` y `maskable`.
- Añadidos `scope`, `description`, `lang` y categorías.
- Favicon añadido.

### 3. Logos e iconos optimizados
- `logo.png` y `logo_invertido.png` reducidos de ~122 KB a ~7 KB (128×113).
- Generados `icon-192.png`, `icon-512.png` y `favicon.ico`.

### 4. JavaScript
- Eliminados todos los `onclick` inline del HTML.
- Listeners de menú (hamburger + Escape + cierre al navegar) añadidos en `main.js`, `catalogo.js`, `contacto.js` y `nosotros.js`.
- Scripts cargados con `defer`.

### 5. CSS
- Eliminados todos los `@import` de Google Fonts (se cargan solo vía `<link>` en el HTML → evita doble descarga).

### 6. SEO y archivos de configuración
- Añadidos `robots.txt` y `sitemap.xml`.
- Favicon referenciado en todas las páginas.

### 7. HTML
- Atributos `onclick` eliminados.
- Enlace a favicon en el `<head>` de todas las páginas.
- `defer` en scripts.

## Cómo desplegar
1. Descomprime este ZIP sobre la raíz de tu proyecto (o sube los archivos a GitHub Pages).
2. En el navegador: DevTools → Application → Service Workers → **Unregister** el worker antiguo.
3. Recarga forzada (Ctrl+Shift+R) para activar **cache-v5**.

## Notas
- El diseño visual se mantiene.
- Para cambiar productos/precios: edita **solo** `js/data.js`.
- Los iconos PWA se generaron a partir del logo existente. Si deseas versiones a color o maskable más precisas, reemplaza `images/logos/icon-*.png`.
