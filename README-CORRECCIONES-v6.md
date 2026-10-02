# JL Mini Mercado – Correcciones v6

## Cambios respecto a v5

### 1. Iconos PWA (cuadrados y maskable)
- `icon-192.png` → 192×192 (cuadrado)
- `icon-512.png` → 512×512 (cuadrado)
- `icon-maskable-512.png` → 512×512 con margen seguro (~20 %) para máscaras circulares/Android
- `favicon.ico` → 32×32 cuadrado
- `manifest.json` actualizado: purpose `any` y `maskable` apuntan a archivos correctos

### 2. Service Worker cache-v6
- **HTML y data.js**: Network First + `cache: 'no-cache'` + timeout 4 s
- **CSS y JS estático**: Stale-While-Revalidate (sirve rápido y actualiza en segundo plano)
- **Imágenes**: Cache First
- **Limpieza de caches**: solo borra nombres que empiezan por `jl-minimercado-` (no toca otros proyectos del mismo origen)
- Versionado: `jl-minimercado-static-v6`, `jl-minimercado-data-v6`, `jl-minimercado-runtime-v6`

## Cómo aplicar
1. Sustituye los archivos del ZIP sobre tu proyecto.
2. En pruebas: DevTools → Application → Service Workers → Unregister (solo en tu equipo).
3. Recarga forzada. Los visitantes recibirán el nuevo SW automáticamente.

## Nota sobre el color del logo
Los iconos se generaron a partir del logo optimizado actual (escala de grises). Si dispones del logo original a color en alta resolución, regenera los iconos desde ese archivo para recuperar el color.
