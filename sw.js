/* Priya Fabrication service worker */
const CACHE = "pf-cache-v1";
const CORE = [
  "./", "index.html", "products.html", "about.html", "contact.html",
  "manifest.json", "assets/logo.svg", "assets/favicon.svg",
  "assets/icons/icon-192.png", "assets/icons/icon-512.png"
];

self.addEventListener("install", e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE).catch(()=>{})));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);

  // Always get fresh HTML when online (so updates show immediately); cache for offline
  const isDoc = req.mode === "navigate" || (req.headers.get("accept")||"").includes("text/html");
  if(isDoc){
    e.respondWith(
      fetch(req).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); return r; })
                .catch(()=>caches.match(req).then(m=>m||caches.match("index.html")))
    );
    return;
  }

  // Never cache the live Google Sheet / Apps Script (products must stay fresh)
  if(/docs\.google\.com|script\.google/.test(url.href)) return;

  // Same-origin static assets: serve from cache, refresh in background
  if(url.origin === location.origin){
    e.respondWith(
      caches.match(req).then(m=>{
        const fp = fetch(req).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); return r; }).catch(()=>m);
        return m || fp;
      })
    );
  }
});
