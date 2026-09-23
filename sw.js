/**
 * Service Worker - JL Mini Mercado
 * Versión: cache-v4
 * Estrategia: Cache First + Network Fallback
 * Incluye HTML, CSS, JS e imágenes clave para uso offline
 */
const CACHE_NAME = 'jl-minimercado-cache-v4';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './catalogo.html',
  './contacto.html',
  './nosotros.html',
  './pizarra.html',
  './manifest.json',
  './css/main.css',
  './css/catalogo.css',
  './css/contacto.css',
  './css/nosotros.css',
  './css/pizarra.css',
  './js/i18n.js',
  './js/main.js',
  './js/catalogo.js',
  './js/contacto.js',
  './js/nosotros.js',
  './js/pizarra.js',
  './js/data.js',
  /* Logos */
  './images/logos/logo.png',
  './images/logos/logo_invertido.png',
  /* Categorías del catálogo */
  './images/products/Alimentos.webp',
  './images/products/Bebidas_y_Licores.webp',
  './images/products/Aseo_y_Limpieza.webp',
  './images/products/Utiles_del_Hogar.webp',
  './images/products/Perfumeria.webp',
  /* Fondos usados en home / nosotros */
  './images/backgrounds/mercado_1.webp',
  './images/backgrounds/mercado_2.webp',
  './images/backgrounds/mercado_3.webp',
  './images/backgrounds/mercado_4.webp',
  './images/backgrounds/mercado_7.webp',
  './images/backgrounds/mercado_8.webp',
  './images/backgrounds/mercado_9.webp',
  /* Testimonios */
  './images/banners/testimonios/rubia.webp',
  './images/banners/testimonios/hombre.webp',
  './images/banners/testimonios/cuca.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(PRECACHE_ASSETS).catch((err) => {
        // Si algún asset falla (p. ej. imagen no subida), no bloqueamos la instalación
        console.warn('[SW] Precache parcial:', err);
        return Promise.all(
          PRECACHE_ASSETS.map((url) =>
            cache.add(url).catch(() => console.warn('[SW] No se pudo cachear:', url))
          )
        );
      })
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo peticiones GET del mismo origen
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback solo para navegación (páginas HTML)
          if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
          return undefined;
        });
    })
  );
});
