/* Offline shell. Bump CACHE when files change. */
const CACHE = "rehab-v2";
const SHELL = ["./", "./index.html", "./app.css", "./data.js", "./app.js", "./manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      // keep this version's shell AND its runtime thumbnail cache (CACHE + "-thumbs")
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(CACHE)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Video thumbnails: cache-first so exercise cards still look right offline.
  if (url.hostname === "i.ytimg.com") {
    e.respondWith(
      caches.open(CACHE + "-thumbs").then((c) =>
        c.match(req).then((hit) =>
          // NOTE: <img> loads these cross-origin with no-cors, so the response is opaque
          // (status 0, ok === false). Opaque responses are still cacheable and still render.
          hit || fetch(req).then((res) => {
            if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone());
            return res;
          }).catch(() => hit || Response.error())
        )
      )
    );
    return;
  }

  // Never try to cache the YouTube player itself.
  if (url.hostname.endsWith("youtube.com") || url.hostname.endsWith("ytimg.com")) return;

  // Same-origin: network-first, fall back to cache (then to the shell for navigations).
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
    );
  }
});
