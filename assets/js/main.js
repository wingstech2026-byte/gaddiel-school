/* Gaddiel Nursery & Preparatory School - shared site script.
   Staff do not need to edit this file: change assets/js/site-data.js instead. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- Icons (inline SVG, no downloads) ---------- */
  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a5 5 0 0 0-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.5 2.3 4 6.3 4c2.2 0 3.7 1.2 4.7 2.6C12 5.2 13.5 4 15.7 4c4 0 6 4.5 4.3 7.8C19.5 16.4 12 21 12 21z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/></svg>'
  };
  window.GNAPS_ICONS = I;

  /* ---------- Helpers ---------- */
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, S);
  }
  function isPH(v) { return v == null || v === "" || /PLACEHOLDER/i.test(String(v)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var LINKS = {
    tel: function () { return isPH(S.phone) ? null : "tel:" + S.phone.replace(/[^\d+]/g, ""); },
    whatsapp: function () { return isPH(S.whatsapp) ? null : "https://wa.me/" + String(S.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent("Hello Gaddiel School, "); },
    email: function () { return isPH(S.email) ? null : "mailto:" + S.email; },
    facebook: function () { return isPH(get("links.facebook")) ? null : S.links.facebook; },
    reviews: function () { return isPH(get("links.googleReviews")) ? null : S.links.googleReviews; },
    gofundme: function () { return isPH(get("links.gofundme")) ? null : S.links.gofundme; },
    directions: function () { return get("links.directions"); }
  };
  var PH_LABEL = { tel: "phone number", whatsapp: "WhatsApp number", email: "email address", facebook: "Facebook page link", reviews: "Google reviews link", gofundme: "GoFundMe link" };
  function link(kind) { var f = LINKS[kind]; return f ? f() : null; }

  function applyLink(a) {
    var kind = a.getAttribute("data-href");
    var url = link(kind);
    if (url) {
      a.href = url;
      if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    } else {
      a.href = "#";
      a.classList.add("is-placeholder");
      a.title = "Coming soon: the school's " + (PH_LABEL[kind] || "link") + " will be added here";
    }
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a.is-placeholder");
    if (!a) return;
    e.preventDefault();
    alert("Coming soon. " + a.title.replace("Coming soon: ", "").replace(/^t/, "T") + ".");
  });

  /* ---------- Shared header ---------- */
  var NAV = [
    ["index.html", "Home"], ["about.html", "About"], ["programmes.html", "Programmes"],
    ["school-life.html", "School Life"], ["admissions.html", "Admissions"],
    ["calendar.html", "Calendar"], ["news.html", "News"], ["contact.html", "Contact"]
  ];
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page.indexOf(".") === -1) page += ".html";

  function renderHeader() {
    var host = $("#site-header");
    if (!host) return;
    var items = NAV.map(function (n) {
      return '<li><a href="' + n[0] + '"' + (page === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + "</a></li>";
    }).join("");
    host.innerHTML =
      '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="' + esc(S.name) + ', home">' +
      '<img src="assets/img/logo.png" alt="" width="50" height="50">' +
      '<span class="brand-text"><span class="brand-name">Gaddiel</span><span class="brand-sub">Nursery &amp; Preparatory School</span></span></a>' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">' + I.menu + "<span>Menu</span></button>" +
      '<nav class="site-nav" id="site-nav" aria-label="Main"><ul>' + items +
      '<li class="nav-cta"><a href="support.html"' + (page === "support.html" ? ' aria-current="page"' : "") + ">Support our school</a></li></ul></nav>" +
      "</div></header>";

    var btn = $(".nav-toggle", host), nav = $("#site-nav");
    function setOpen(open) {
      btn.setAttribute("aria-expanded", open);
      nav.classList.toggle("open", open);
      btn.innerHTML = (open ? I.close : I.menu) + "<span>" + (open ? "Close" : "Menu") + "</span>";
    }
    btn.addEventListener("click", function (e) { e.stopPropagation(); setOpen(btn.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); btn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !host.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- Shared footer + sticky mobile bar ---------- */
  function hoursRows() {
    return (S.hours || []).map(function (h) { return "<tr><th scope=\"row\">" + esc(h.days) + "</th><td>" + esc(h.time) + "</td></tr>"; }).join("");
  }
  function renderFooter() {
    var host = $("#site-footer");
    if (!host) return;
    var a = S.address || {};
    host.innerHTML =
      '<footer class="site-footer"><div class="wrap"><div class="footer-grid">' +
      '<div><div class="footer-brand"><img src="assets/img/logo-white.png" alt="" width="56" height="56" loading="lazy"><b>' + esc(S.name) + "</b></div>" +
      '<p class="footer-motto">“' + esc(S.motto) + '”</p><p>' + esc(S.mottoMeaning) + ".</p>" +
      "<p>" + esc(a.street) + ", " + esc(a.city) + "<br>" + esc(a.country) + ", " + esc(a.region) + "</p></div>" +
      '<div><h2>Explore</h2><ul class="footer-list">' +
      NAV.slice(1).map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      '<li><a href="support.html">Support our school</a></li></ul></div>' +
      '<div><h2>Contact</h2><ul class="footer-list">' +
      '<li><a data-href="tel" href="#">' + esc(S.phone) + "</a></li>" +
      '<li><a data-href="email" href="#">' + esc(S.email) + "</a></li>" +
      '<li><a data-href="whatsapp" href="#">WhatsApp us</a></li>' +
      "<li>Mon–Fri 8:00 AM – 3:00 PM</li><li>Sat &amp; Sun closed</li></ul></div>" +
      "<div><h2>Follow &amp; support</h2>" +
      '<div class="social">' +
      '<a data-href="facebook" href="#">' + I.facebook + "Facebook</a>" +
      '<a data-href="reviews" href="#">' + I.star + "Google reviews</a>" +
      '<a data-href="gofundme" href="#">' + I.heart + "GoFundMe</a></div></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + esc(S.name) + ". Founded " + esc(S.founded) + ".</span>" +
      "<span>“Train up a child in the way he should go.” Proverbs 22:6</span></div>" +
      "</div></footer>" +
      '<div class="mobile-bar" role="region" aria-label="Quick contact">' +
      '<a class="btn btn--gold" data-href="tel" href="#">' + I.phone + "Call now</a>" +
      '<a class="btn btn--whatsapp" data-href="whatsapp" href="#">' + I.whatsapp + "WhatsApp</a></div>";
  }

  /* ---------- Fill in data from site-data.js ---------- */
  function bindData() {
    $$("[data-text]").forEach(function (el) {
      var v = get(el.getAttribute("data-text"));
      if (v != null) el.textContent = v;
    });
    $$("[data-href]").forEach(applyLink);
    $$("[data-hours]").forEach(function (tb) { tb.innerHTML = hoursRows(); });
    $$("[data-icon]").forEach(function (el) { el.insertAdjacentHTML("afterbegin", I[el.getAttribute("data-icon")] || ""); });
  }

  /* ---------- Animated counters ---------- */
  function counters() {
    var els = $$("[data-count]");
    if (!els.length) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function run(el) {
      var target = Number(get(el.getAttribute("data-count"))) || 0;
      if (reduce || !("requestAnimationFrame" in window)) { el.textContent = target; return; }
      var t0 = null, dur = 1400;
      function step(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (el) { el.textContent = "0"; io.observe(el); });
  }

  /* ---------- Reveal on scroll ---------- */
  function reveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Map: loads only when needed (saves mobile data) ---------- */
  function maps() {
    $$("[data-map]").forEach(function (box) {
      function load() {
        box.innerHTML = '<iframe src="' + esc(get("links.mapEmbed")) + '" title="Map showing 143 Fort Street, Freetown" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
      }
      if (box.getAttribute("data-map") === "auto") { load(); return; }
      var b = $("button", box);
      if (b) b.addEventListener("click", load);
    });
  }

  /* ---------- Lightbox gallery ---------- */
  function lightbox() {
    var galleries = $$("[data-gallery]");
    if (!galleries.length) return;
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Photo viewer");
    lb.innerHTML = '<button class="lb-btn lb-close" type="button" aria-label="Close photo">&times;</button>' +
      '<button class="lb-btn lb-prev" type="button" aria-label="Previous photo">&#8249;</button>' +
      '<img alt=""><p></p>' +
      '<button class="lb-btn lb-next" type="button" aria-label="Next photo">&#8250;</button>';
    document.body.appendChild(lb);
    var img = $("img", lb), cap = $("p", lb), items = [], idx = 0, opener = null;
    function show(i) {
      idx = (i + items.length) % items.length;
      var b = items[idx], th = $("img", b);
      img.src = b.getAttribute("data-full");
      img.alt = th ? th.alt : "";
      cap.textContent = (th ? th.alt : "") + "  (" + (idx + 1) + " of " + items.length + ")";
    }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; if (opener) opener.focus(); }
    galleries.forEach(function (g) {
      $$("button[data-full]", g).forEach(function (b) {
        b.addEventListener("click", function () {
          items = $$("button[data-full]", g); opener = b;
          show(items.indexOf(b));
          lb.classList.add("open"); document.body.style.overflow = "hidden";
          $(".lb-close", lb).focus();
        });
      });
    });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", function () { show(idx - 1); });
    $(".lb-next", lb).addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
      else if (e.key === "Tab") { // keep focus inside the viewer
        var f = $$("button", lb), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var x0 = null; // swipe on phones
    lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* ---------- Forms (Formspree) ---------- */
  function forms() {
    $$("form[data-form]").forEach(function (form) {
      if (!isPH(S.formspreeId)) form.action = "https://formspree.io/f/" + S.formspreeId;
      var status = $(".form-status", form);
      var fields = $$("input, select, textarea", form).filter(function (f) { return !f.closest(".hp-field") && f.type !== "hidden"; });

      function msgFor(f) {
        var v = f.validity, label = (f.getAttribute("data-label") || "This field");
        if (v.valueMissing) return label + " is required.";
        if (v.typeMismatch && f.type === "email") return "Please enter a valid email address, like name@example.com.";
        if (v.patternMismatch) return f.getAttribute("data-pattern-msg") || "Please check this field.";
        if (v.tooShort) return label + " is too short.";
        return "";
      }
      function check(f) {
        var err = document.getElementById(f.id + "-error");
        var m = f.checkValidity() ? "" : msgFor(f);
        f.setAttribute("aria-invalid", m ? "true" : "false");
        if (err) { err.textContent = m; err.classList.toggle("show", !!m); }
        return !m;
      }
      fields.forEach(function (f) {
        f.addEventListener("blur", function () { if (f.value) check(f); });
        f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") check(f); });
      });

      form.setAttribute("novalidate", "");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        status.className = "form-status";
        var bad = fields.filter(function (f) { return !check(f); });
        if (bad.length) { bad[0].focus(); return; }

        var hp = $(".hp-field input", form);
        if (hp && hp.value) { done(); return; } // spam bot: pretend success

        if (isPH(S.formspreeId)) {
          showStatus("err", "This form is not connected yet. The school needs to add its Formspree ID in assets/js/site-data.js. Meanwhile, please call or WhatsApp us.");
          return;
        }
        var btn = $("button[type=submit]", form), label = btn.textContent;
        btn.disabled = true; btn.textContent = "Sending…";
        fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw new Error(r.status); done(); })
          .catch(function () { showStatus("err", "Sorry, your message could not be sent. Please check your internet connection and try again, or call us."); })
          .then(function () { btn.disabled = false; btn.textContent = label; });
      });
      function showStatus(kind, text) {
        status.textContent = text;
        status.className = "form-status show " + kind;
        status.setAttribute("tabindex", "-1");
        status.focus();
      }
      function done() {
        form.reset();
        fields.forEach(function (f) { f.removeAttribute("aria-invalid"); });
        showStatus("ok", form.getAttribute("data-thanks") || "Thank you! Your message has been sent. We will get back to you soon.");
      }
    });
    // "Book a visit" links preselect the enquiry type
    var sel = $("#enq-type");
    if (sel && /[?&]visit=1/.test(location.search)) sel.value = "Book a visit";
  }

  /* ---------- Calendar helpers (used by home + calendar page) ---------- */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function parseDate(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function ymd(d) { return d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0"); }
  function fmtDate(d) { return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function icsFor(ev) {
    var start = parseDate(ev.start), end = parseDate(ev.end || ev.start);
    var lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Gaddiel School//Calendar//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:" + ymd(start) + "-" + slug(ev.title) + "@gaddiel-school",
      "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "")];
    if (ev.time) { // Freetown is on GMT all year, so times are written in UTC
      var t = ev.time.replace(":", ""), te = (ev.endTime || "").replace(":", "");
      if (!te) { var hh = Math.min(23, +t.slice(0, 2) + 2); te = String(hh).padStart(2, "0") + t.slice(2); }
      lines.push("DTSTART:" + ymd(start) + "T" + t + "00Z", "DTEND:" + ymd(end) + "T" + te + "00Z");
    } else {
      var after = new Date(end); after.setDate(after.getDate() + 1);
      lines.push("DTSTART;VALUE=DATE:" + ymd(start), "DTEND;VALUE=DATE:" + ymd(after));
    }
    var desc = (ev.description || "") + (ev.tbc ? " (Date to be confirmed)" : "");
    lines.push("SUMMARY:" + icsEsc(ev.title + " - Gaddiel School"), "DESCRIPTION:" + icsEsc(desc),
      "LOCATION:" + icsEsc(ev.location || "Gaddiel Nursery & Preparatory School, 143 Fort Street, Freetown"),
      "END:VEVENT", "END:VCALENDAR");
    return "data:text/calendar;charset=utf-8," + encodeURIComponent(lines.join("\r\n"));
  }
  function icsEsc(s) { return String(s).replace(/\\/g, "\\\\").replace(/[,;]/g, "\\$&").replace(/\n/g, "\\n"); }

  function eventHTML(ev, opts) {
    opts = opts || {};
    var d = parseDate(ev.start), end = ev.end ? parseDate(ev.end) : null;
    var when = fmtDate(d) + (end && ev.end !== ev.start ? " to " + fmtDate(end) : "") + (ev.time ? ", " + ev.time + (ev.endTime ? "–" + ev.endTime : "") : "");
    var typeLabel = { holiday: "Holiday", term: "Term dates", event: "School event" }[ev.type] || "Event";
    return '<li class="event event--' + esc(ev.type || "event") + '">' +
      '<div class="event-date" aria-hidden="true"><b>' + d.getDate() + "</b><small>" + MONTHS[d.getMonth()].slice(0, 3) + "</small></div>" +
      '<div class="event-body"><h3>' + esc(ev.title) + "</h3>" +
      '<div class="event-meta"><span class="tag' + (ev.type === "holiday" ? " tag--holiday" : "") + '">' + typeLabel + "</span>" +
      (ev.tbc ? '<span class="tag tag--tbc">Date to be confirmed</span>' : "") + "</div>" +
      '<p class="event-meta">' + esc(when) + "</p>" +
      (ev.description && !opts.short ? "<p>" + esc(ev.description) + "</p>" : "") +
      '<a class="ics-link" href="' + icsFor(ev) + '" download="gaddiel-' + slug(ev.title) + '.ics">' + I.cal + "Add to my calendar<span class=\"sr-only\">: " + esc(ev.title) + "</span></a>" +
      "</div></li>";
  }
  function loadCalendar() {
    return fetch("assets/data/calendar.json", { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (data) {
      var evs = (data.events || data).slice();
      evs.sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });
      return evs;
    });
  }
  window.GNAPS = { parseDate: parseDate, fmtDate: fmtDate, eventHTML: eventHTML, loadCalendar: loadCalendar, esc: esc, MONTHS: MONTHS, isPH: isPH, link: link };

  function upcoming() {
    var box = $("#upcoming-events");
    if (!box) return;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    loadCalendar().then(function (evs) {
      var next = evs.filter(function (e) { return parseDate(e.end || e.start) >= today; }).slice(0, 3);
      box.innerHTML = next.length ? next.map(function (e) { return eventHTML(e, { short: true }); }).join("")
        : "<li>New dates will be added soon. Please check the calendar.</li>";
    }).catch(function () {
      box.innerHTML = '<li>Could not load events just now. <a href="calendar.html">Open the calendar</a>.</li>';
    });
  }

  /* ---------- Page sections built from site-data.js ---------- */
  function reviews() {
    var box = $("#reviews");
    if (!box) return;
    box.innerHTML = (S.reviews || []).map(function (r) {
      return '<figure class="review"><blockquote>' + esc(r.quote) + "</blockquote><figcaption>" + esc(r.name) + "</figcaption></figure>";
    }).join("");
  }
  function staff() {
    var box = $("#staff");
    if (!box) return;
    box.innerHTML = (S.staff || []).map(function (p) {
      return '<div class="card staff-card"><img src="' + esc(p.photo) + '" alt="' + esc(p.name + ", " + p.role) + '" width="150" height="180" loading="lazy"><h3>' + esc(p.name) + "</h3><p>" + esc(p.role) + "</p></div>";
    }).join("");
  }
  function enrolmentChart() {
    var box = $("#enrolment-chart");
    if (!box) return;
    var rows = S.enrolment || [];
    var max = Math.max.apply(null, rows.map(function (r) { return r.pupils; }).concat([1]));
    box.innerHTML = '<div class="bars">' + rows.map(function (r) {
      return '<div class="bar" tabindex="0" aria-label="' + esc(r.year) + ": " + r.pupils + ' pupils"><span class="tip">' + esc(r.year) + ": " + r.pupils + " pupils</span>" +
        '<span class="bar-val" aria-hidden="true">' + r.pupils + '</span><span class="bar-fill" data-h="' + (r.pupils / max * 100).toFixed(1) + '"></span></div>';
    }).join("") + '</div><div class="bar-labels" aria-hidden="true">' + rows.map(function (r) { return "<span>" + esc(r.year.replace(" (opening)", "")).replace("/", "/<wbr>") + "</span>"; }).join("") + "</div>" +
      '<details><summary>Show as a table</summary><div class="table-wrap" style="margin-top:10px"><table><thead><tr><th scope="col">Academic year</th><th scope="col">Pupils</th></tr></thead><tbody>' +
      rows.slice().reverse().map(function (r) { return '<tr><th scope="row">' + esc(r.year) + "</th><td>" + r.pupils + "</td></tr>"; }).join("") + "</tbody></table></div></details>";
    // the bar area holds the value label too, so leave room for it
    function grow() { $$(".bar-fill", box).forEach(function (b) { b.style.height = "calc((100% - 26px) * " + (b.getAttribute("data-h") / 100) + ")"; }); }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { grow(); io.disconnect(); } }, { threshold: 0.3 });
      io.observe(box);
    } else grow();
  }
  function progressStory() {
    var box = $("#progress-story");
    if (!box) return;
    box.innerHTML = (S.enrolment || []).map(function (r) { return "<div><b>" + r.pupils + "</b><span>" + esc(r.year) + "</span></div>"; }).join("");
  }
  function donationNeeds() {
    var box = $("#donation-needs");
    if (box) box.innerHTML = (S.donationNeeds || []).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("");
  }
  function share() {
    var box = $("#share");
    if (!box) return;
    var url = S.siteUrl + "/support.html";
    var gfm = link("gofundme");
    var text = S.shareText + " " + (gfm || url);
    box.innerHTML =
      '<a class="btn btn--facebook" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(gfm || url) + '">' + I.facebook + "Share on Facebook</a>" +
      '<a class="btn btn--whatsapp" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(text) + '">' + I.whatsapp + "Share on WhatsApp</a>";
  }

  /* ---------- Start ---------- */
  renderHeader();
  renderFooter();
  reviews(); staff(); enrolmentChart(); progressStory(); donationNeeds(); share();
  bindData();
  counters(); reveal(); maps(); lightbox(); forms(); upcoming();
})();
