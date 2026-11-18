// Network-first service worker: works offline, always picks up updates when online.
// Bump CACHE whenever you upload a new version, so old copies get cleaned up.
const CACHE = "dailyfive-v3";
const FILES = ["./", "./index.html", "./privacy.html", "./icon.svg", "./icon-192.png", "./icon-512.png", "./manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("dailyfive-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(m => m || (e.request.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});
