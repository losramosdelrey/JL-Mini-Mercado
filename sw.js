/**
 * Service Worker - JL Mini Mercado
 * Versión: cache-v5
 * Estrategia:
 *   - Assets estáticos (CSS, JS excepto data.js, imágenes): Cache First
 *   - HTML y data.js (contenido que cambia): Network First con fallback a caché
 *   - Limpieza automática de caches antiguas
 */
const CACHE_NAME = 'jl-minimercado-cache-v5';
const DATA_CACHE = 'jl-minimercado-data-v5';

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
  /* Logos e iconos */
  './images/logos/logo.png',
  './images/logos/logo_invertido.png',
  './images/logos/icon-192.png',
  './images/logos/icon-512.png',
  './images/logos/favicon.ico',
  /* Categorías del catálogo */
  './images/products/Alimentos.webp',
  './images/products/Bebidas_y_Licores.webp',
  './images/products/Aseo_y_Limpieza.webp',
  './images/products/Utiles_del_Hogar.webp',
  './images/products/Perfumeria.webp',
  /* Fondos */
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
          if (name !== CACHE_NAME && name !== DATA_CACHE) {
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});

function isHTML(request) {
  return (
    request.mode === 'navigate' ||
    (request.headers.get('accept') || '').includes('text/html')
  );
}

function isDataJS(url) {
  return url.pathname.endsWith('/js/data.js') || url.pathname.endsWith('data.js');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Solo mismo origen
  if (url.origin !== self.location.origin) return;

  // Network First para HTML y data.js (contenido actualizable)
  if (isHTML(request) || isDataJS(url)) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            const cacheName = isDataJS(url) ? DATA_CACHE : CACHE_NAME;
            caches.open(cacheName).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            if (cached) return cached;
            if (isHTML(request)) {
              return caches.match('./index.html');
            }
            return undefined;
          });
        })
    );
    return;
  }

  // Cache First para el resto (CSS, JS estático, imágenes)
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
        .catch(() => undefined);
    })
  );
});
