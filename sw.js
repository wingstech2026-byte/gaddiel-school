/* Gaddiel School - offline helper (service worker).
   Pages and files that a visitor has opened are saved on their phone,
   so the site still opens when there is no mobile data.
   Staff do not need to edit this file. If you ever rename or remove one of
   the files in CORE below, update the list and change VERSION (e.g. v2). */
var VERSION = "gnaps-v11";
var CORE = [
  "./", "index.html", "about.html", "programmes.html", "school-life.html",
  "admissions.html", "apply.html", "calendar.html", "support.html", "news.html",
  "contact.html", "teachers.html", "krio.html", "fees.html", "app.html", "offline.html", "manifest.webmanifest",
  "assets/css/style.css", "assets/js/site-data.js", "assets/js/main.js",
  "assets/js/calendar.js", "assets/js/news.js",
  "assets/data/calendar.json", "assets/data/news.json", "assets/data/announcement.json",
  "assets/img/logo.png", "assets/img/logo-white.png", "favicon.ico"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Pages, text and data: try the internet first so updates show at once; use the saved copy when offline.
function networkFirst(req) {
  return fetch(req).then(function (res) {
    if (res.ok) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (r) {
      if (r) return r;
      return req.mode === "navigate" ? caches.match("offline.html") : Response.error();
    });
  });
}

// Photos: show the saved copy straight away, and refresh it in the background.
function staleWhileRevalidate(req) {
  return caches.open(VERSION).then(function (c) {
    return c.match(req).then(function (cached) {
      var fresh = fetch(req).then(function (res) { if (res.ok) c.put(req, res.clone()); return res; }).catch(function () { return cached; });
      return cached || fresh;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // maps, fonts, forms: leave to the browser
  if (url.pathname.indexOf("/_vercel/") === 0) return;        // visitor statistics
  if (url.pathname.indexOf("/admin") === 0) return;           // staff website editor
  if (/\.(mp4|pdf|apk)$/i.test(url.pathname)) return;         // large files are not saved
  if (req.mode === "navigate" || /(\/|\.html|\.json|\.js|\.css)$/i.test(url.pathname)) {
    e.respondWith(networkFirst(req));
  } else {
    e.respondWith(staleWhileRevalidate(req));
  }
});
