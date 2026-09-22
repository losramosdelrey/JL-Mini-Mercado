# JL Mini Mercado – Correcciones de concordancia (v3)

## Resumen de cambios mínimos aplicados

### 1. sw.js (nuevo – versión cache-v3)
- Incluye **js/i18n.js** (faltaba y rompía la traducción offline)
- Lista completa de HTML, CSS y JS
- Limpieza automática de caches antiguas
- Estrategia Cache First + Network Fallback

### 2. pizarra.html
- Añadido `manifest.json` y `theme-color`
- Añadido registro del Service Worker

### 3. contacto.html
- Añadido `theme-color`
- Añadido registro del Service Worker

### 4. nosotros.html
- Añadido `theme-color`
- **Header unificado** al mismo patrón del resto del sitio (`nav-menu` + `id="navMenu"`)
- Añadido registro del Service Worker

### 5. js/nosotros.js
- Actualizado para usar `navMenu` (antes usaba `navLinks`)
- Soporte correcto de `aria-expanded` / `aria-label`

### 6. css/nosotros.css
- Parche de estilos para `.nav-container` y `.nav-menu` (menú móvil)

### 7. js/catalogo.js y js/contacto.js
- Mejorado el control del menú con atributos de accesibilidad

## Estructura del ZIP
```
jl-minimercado-fixed/
├── index.html
├── catalogo.html
├── contacto.html
├── nosotros.html
├── pizarra.html
├── sw.js
├── manifest.json
├── README-CAMBIOS.md
├── css/
│   ├── main.css
│   ├── catalogo.css
│   ├── contacto.css
│   ├── nosotros.css
│   └── pizarra.css
└── js/
    ├── i18n.js
    ├── main.js
    ├── catalogo.js
    ├── contacto.js
    ├── nosotros.js
    ├── pizarra.js
    └── data.js
```

## Cómo aplicar
1. Descomprime el ZIP.
2. Copia/sobrescribe los archivos en la raíz de tu proyecto (manteniendo las carpetas `css/` y `js/`).
3. Sube el nuevo `sw.js`.
4. Limpia la caché del navegador o fuerza la actualización del Service Worker (versión v3).

## Notas
- Cambios mínimos orientados a que el sitio funcione bien (PWA + menú + i18n).
- El diseño visual de la página Nosotros se mantiene (tema oscuro).
- No se modificó el contenido de productos (`data.js`).
