// Service Worker ringan: Selalu ambil file terbaru dari internet
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Langsung ambil dari jaringan (GitHub Pages) agar update selalu sinkron seketika
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
