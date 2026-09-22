const CACHE_NAME = 'jl-minimercado-cache-v3';

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
  './js/data.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
