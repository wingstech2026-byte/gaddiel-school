/* Calendar page: month view + list view from assets/data/calendar.json */
(function () {
  "use strict";
  var G = window.GNAPS;
  var root = document.getElementById("calendar-app");
  if (!G || !root) return;
  var esc = G.esc, M = G.MONTHS;
  var events = [], cur = new Date(), selected = null;
  cur.setDate(1);
  var today = new Date(); today.setHours(0, 0, 0, 0);

  var tabs = root.querySelectorAll('[role="tab"]');
  var panels = { month: document.getElementById("view-month"), list: document.getElementById("view-list") };

  function key(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function eventsOn(k) { return events.filter(function (e) { return e.start <= k && (e.end || e.start) >= k; }); }

  function setView(v) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-view") === v;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      panels[t.getAttribute("data-view")].hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { setView(t.getAttribute("data-view")); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        var n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        n.focus(); n.click();
      }
    });
  });

  function renderMonth() {
    var y = cur.getFullYear(), m = cur.getMonth();
    var first = new Date(y, m, 1), days = new Date(y, m + 1, 0).getDate();
    var offset = (first.getDay() + 6) % 7; // weeks start on Monday
    var html = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(function (d) {
      return '<div class="cal-dow" aria-hidden="true">' + d + "</div>";
    }).join("");
    for (var i = 0; i < offset; i++) html += '<div class="cal-day empty" aria-hidden="true"></div>';
    for (var d = 1; d <= days; d++) {
      var date = new Date(y, m, d), k = key(date), evs = eventsOn(k), wd = date.getDay();
      var cls = "cal-day" + (wd === 0 || wd === 6 ? " weekend" : "") + (+date === +today ? " today" : "") + (evs.length ? " has-ev" : "");
      var label = date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) +
        (evs.length ? ": " + evs.map(function (e) { return e.title; }).join(", ") : ": no events");
      html += '<button type="button" class="' + cls + '" data-key="' + k + '" aria-pressed="' + (selected === k) + '" aria-label="' + esc(label) + '">' +
        "<span>" + d + "</span>" +
        '<span class="cal-dots">' + evs.map(function (e) { return '<i class="' + esc(e.type) + '"></i>'; }).join("") + "</span>" +
        evs.slice(0, 2).map(function (e) { return '<span class="cal-label">' + esc(e.title) + "</span>"; }).join("") +
        "</button>";
    }
    document.getElementById("cal-title").textContent = M[m] + " " + y;
    document.getElementById("cal-grid").innerHTML = html;
    renderDay();
  }

  function renderDay() {
    var box = document.getElementById("cal-day-events");
    var y = cur.getFullYear(), m = cur.getMonth();
    var list, heading;
    if (selected && selected.slice(0, 7) === key(cur).slice(0, 7)) {
      list = eventsOn(selected);
      heading = G.fmtDate(G.parseDate(selected));
    } else {
      var a = key(new Date(y, m, 1)), b = key(new Date(y, m + 1, 0));
      list = events.filter(function (e) { return e.start <= b && (e.end || e.start) >= a; });
      heading = "All events in " + M[m] + " " + y;
    }
    box.innerHTML = '<h3 class="month-list-title">' + esc(heading) + "</h3>" +
      (list.length ? '<ul class="event-list">' + list.map(function (e) { return G.eventHTML(e); }).join("") + "</ul>"
        : '<p class="muted">No school events on this ' + (selected ? "day" : "month") + ".</p>");
  }

  function renderList() {
    var showPast = document.getElementById("show-past").checked;
    var list = events.filter(function (e) { return showPast || G.parseDate(e.end || e.start) >= today; });
    var groups = {}, order = [];
    list.forEach(function (e) {
      var d = G.parseDate(e.start), g = M[d.getMonth()] + " " + d.getFullYear();
      if (!groups[g]) { groups[g] = []; order.push(g); }
      groups[g].push(e);
    });
    document.getElementById("cal-list").innerHTML = order.length ? order.map(function (g) {
      return '<section class="month-group"><h2>' + esc(g) + '</h2><ul class="event-list">' + groups[g].map(function (e) { return G.eventHTML(e); }).join("") + "</ul></section>";
    }).join("") : "<p>No upcoming events yet.</p>";
  }

  document.getElementById("cal-grid").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-key]");
    if (!b) return;
    selected = selected === b.getAttribute("data-key") ? null : b.getAttribute("data-key");
    renderMonth();
    var again = document.querySelector('#cal-grid [data-key="' + b.getAttribute("data-key") + '"]');
    if (again) again.focus();
  });
  document.getElementById("cal-prev").addEventListener("click", function () { cur.setMonth(cur.getMonth() - 1); selected = null; renderMonth(); });
  document.getElementById("cal-next").addEventListener("click", function () { cur.setMonth(cur.getMonth() + 1); selected = null; renderMonth(); });
  document.getElementById("show-past").addEventListener("change", renderList);

  // phones start on the easier list view
  setView(window.matchMedia("(max-width: 699px)").matches ? "list" : "month");

  G.loadCalendar().then(function (evs) {
    events = evs;
    renderMonth(); renderList();
  }).catch(function () {
    var msg = '<p class="placeholder-note">Sorry, the calendar could not be loaded. Please check your connection and refresh the page.</p>';
    document.getElementById("cal-list").innerHTML = msg;
    document.getElementById("cal-day-events").innerHTML = msg;
  });
  renderMonth();
})();
