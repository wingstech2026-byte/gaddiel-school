/* News page: stories from assets/data/news.json */
(function () {
  "use strict";
  var G = window.GNAPS, box = document.getElementById("news-list");
  if (!G || !box) return;
  var esc = G.esc;
  fetch("assets/data/news.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      var items = (data.news || data).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
      box.innerHTML = items.map(function (n, i) {
        var body = (n.body || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
        return '<article class="news-item" id="' + esc(n.id || "story-" + i) + '">' +
          (n.image ? '<img src="' + esc(n.image) + '" alt="' + esc(n.imageAlt || "") + '" width="480" height="320" loading="' + (i ? "lazy" : "eager") + '">' : "") +
          '<div class="news-body"><time datetime="' + esc(n.date) + '">' + esc(G.parseDate(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })) + "</time>" +
          "<h2>" + esc(n.title) + "</h2><p>" + esc(n.summary) + "</p>" +
          (body ? (i === 0 ? body : "<details><summary>Read more</summary>" + body + "</details>") : "") +
          "</div></article>";
      }).join("");
      if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
    })
    .catch(function () {
      box.innerHTML = '<p class="placeholder-note">Sorry, the news could not be loaded. Please check your connection and refresh the page.</p>';
    });
})();
