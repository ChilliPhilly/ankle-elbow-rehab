/* Offline shell. Bump CACHE when files change. */
const CACHE = "rehab-v5";
const SHELL = ["./", "./index.html", "./app.css", "./data.js", "./app.js", "./manifest.webmanifest"];

// GitHub Pages serves everything with `cache-control: max-age=600`, and fetch() inside a
// service worker reads the browser's HTTP cache by DEFAULT. That combination means a plain
// fetch() can hand back a copy up to 10 minutes stale — so "network-first" silently served
// old content after a deploy. `cache: "no-cache"` forces a revalidation against the server;
// with ETags that is nearly free, because unchanged files come back as a 304.
const fromNetwork = (url) => fetch(url, { cache: "no-cache" });

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(SHELL.map((u) =>
        fromNetwork(u).then((r) => (r && r.ok ? c.put(u, r) : null)).catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      // keep this version's shell AND its runtime thumbnail cache (CACHE + "-thumbs")
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(CACHE)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => { if (e.data === "skipWaiting") self.skipWaiting(); });

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

  // Same-origin: revalidated network-first, falling back to cache (then the shell) when offline.
  if (url.origin === self.location.origin) {
    e.respondWith(
      fromNetwork(req.url)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) =>
          hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())
        ))
    );
  }
});
