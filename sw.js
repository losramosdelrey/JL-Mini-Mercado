/**
 * Service Worker - JL Mini Mercado
 * Versión: cache-v9
 *
 * Estrategias:
 *   - HTML y data.js: Network First con timeout + no-cache (datos frescos)
 *   - CSS y JS estático: Stale-While-Revalidate
 *   - Imágenes y resto: Cache First
 *   - Fallback offline personalizado
 *   - Limpieza solo de caches propias (prefijo jl-minimercado-)
 *
 * v9: horario y dirección en negrita en Contacto (fuerza refresco de caché).
 */
const CACHE_STATIC = 'jl-minimercado-static-v9';
const CACHE_DATA = 'jl-minimercado-data-v9';
const CACHE_RUNTIME = 'jl-minimercado-runtime-v9';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './catalogo.html',
  './contacto.html',
  './nosotros.html',
  './pizarra.html',
  './offline.html',
  './manifest.json',
  './css/main.css',
  './css/catalogo.css',
  './css/contacto.css',
  './css/nosotros.css',
  './css/pizarra.css',
  './css/install.css',
  './js/i18n.js',
  './js/main.js',
  './js/catalogo.js',
  './js/contacto.js',
  './js/nosotros.js',
  './js/pizarra.js',
  './js/install.js',
  './js/data.js',
  './images/logos/logo.png',
  './images/logos/logo_invertido.png',
  './images/logos/icon-192.png',
  './images/logos/icon-512.png',
  './images/logos/icon-maskable-512.png',
  './images/logos/favicon.ico',
  './images/products/Alimentos.webp',
  './images/products/Bebidas_y_Licores.webp',
  './images/products/Aseo_y_Limpieza.webp',
  './images/products/Utiles_del_Hogar.webp',
  './images/products/Perfumeria.webp',
  './images/backgrounds/mercado_1.webp',
  './images/backgrounds/mercado_2.webp',
  './images/backgrounds/mercado_3.webp',
  './images/backgrounds/mercado_4.webp',
  './images/backgrounds/mercado_7.webp',
  './images/backgrounds/mercado_8.webp',
  './images/backgrounds/mercado_9.webp',
  './images/banners/testimonios/rubia.webp',
  './images/banners/testimonios/hombre.webp',
  './images/banners/testimonios/cuca.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) =>
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
    caches.keys().then((names) =>
      Promise.all(
        names.map((name) => {
          if (
            name.startsWith('jl-minimercado-') &&
            name !== CACHE_STATIC &&
            name !== CACHE_DATA &&
            name !== CACHE_RUNTIME
          ) {
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

function isStaticAsset(url) {
  return (
    url.pathname.endsWith('.css') ||
    (url.pathname.endsWith('.js') && !isDataJS(url))
  );
}

async function networkFirst(request, cacheName, timeoutMs) {
  const cached = await caches.match(request);
  const networkPromise = fetch(request, { cache: 'no-cache' })
    .then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(cacheName).then((c) => c.put(request, copy));
      }
      return res;
    })
    .catch(() => null);

  if (!cached) {
    const res = await networkPromise;
    if (res) return res;
    if (isHTML(request)) {
      return (await caches.match('./offline.html')) || (await caches.match('./index.html'));
    }
    return undefined;
  }

  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => resolve(cached), timeoutMs);
  });

  const winner = await Promise.race([networkPromise, timeoutPromise]);
  if (winner) return winner;
  return cached;
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const networkPromise = fetch(request)
    .then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(cacheName).then((c) => c.put(request, copy));
      }
      return res;
    })
    .catch(() => null);

  if (cached) {
    networkPromise.catch(() => {});
    return cached;
  }
  const res = await networkPromise;
  return res || undefined;
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res && res.status === 200 && res.type === 'basic') {
      const copy = res.clone();
      caches.open(cacheName).then((c) => c.put(request, copy));
    }
    return res;
  } catch {
    return undefined;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  if (url.origin !== self.location.origin) return;

  if (isHTML(request) || isDataJS(url)) {
    event.respondWith(networkFirst(request, CACHE_DATA, 4000));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(staleWhileRevalidate(request, CACHE_STATIC));
    return;
  }

  event.respondWith(cacheFirst(request, CACHE_RUNTIME));
});
