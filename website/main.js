// Laag 3 van 3: uitvoering. Beweging volgens DESIGN.md: subtiel, één keer, en uit bij reduced motion.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Raster van punten achter de route
  var dots = document.querySelector(".route-dots");
  if (dots) {
    var ns = "http://www.w3.org/2000/svg";
    for (var x = 40; x <= 440; x += 40) {
      for (var y = 60; y <= 340; y += 40) {
        var c = document.createElementNS(ns, "circle");
        c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("r", 1.6);
        dots.appendChild(c);
      }
    }
  }

  if (reduce || !("IntersectionObserver" in window)) return;
  root.classList.add("js");

  // De route tekent zich één keer
  var line = document.querySelector(".route-line");
  var ring = document.querySelector(".route-end-ring");
  if (line) line.classList.add("draw");
  if (ring) ring.classList.add("draw");

  // Elementen in een rij krijgen 80 ms vertraging per stuk
  document.querySelectorAll(".grid-3, .grid-2, .steps").forEach(function (group) {
    group.querySelectorAll(".reveal").forEach(function (el, i) { el.style.setProperty("--d", i * 80 + "ms"); });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    // Wat al in beeld staat bij het laden, verschijnt meteen
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) { requestAnimationFrame(function () { el.classList.add("in"); }); }
    else io.observe(el);
  });
})();
