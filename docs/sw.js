// SignalMap Service Worker — offline-ready PWA
const CACHE = 'signalmap-v1';
const ASSETS = [
  '/SignalMap/',
  '/SignalMap/index.html',
  '/SignalMap/outlets.json',
  '/SignalMap/site.webmanifest',
  '/SignalMap/favicon.svg',
];

// Install: cache the core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
});

// Fetch: cache-first for static, network-first for HTML
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Only handle SignalMap requests
  if (!url.pathname.startsWith('/SignalMap/')) return;

  if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js') || url.pathname.endsWith('.json')) {
    // Cache-first for assets
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => {
        const clone = res.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return res;
      }))
    );
  } else {
    // Network-first for HTML (always show latest)
    e.respondWith(
      fetch(e.request).then((res) => {
        const clone = res.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  }
});
