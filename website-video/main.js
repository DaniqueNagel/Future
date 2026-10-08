// Laag 3 van 3: uitvoering. Scrollvideo en beweging volgens DESIGN.md.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Ontbreekt een video, dan tonen we de gemarkeerde plek uit BRIEF.md
  function watchVideo(video) {
    if (!video) return;
    var slot = video.parentElement.querySelector(".media-slot");
    var src = video.querySelector("source");
    function missing() { video.parentElement.classList.add("no-video"); if (slot) slot.hidden = false; }
    if (src) src.addEventListener("error", missing);
    video.addEventListener("error", missing);
    if (/^https?:/.test(location.protocol)) fetch(src ? src.src : video.src, { method: "HEAD" }).then(function (r) { if (!r.ok) missing(); }).catch(missing);
  }
  var scrub = document.querySelector("video.scrub");
  var loop = document.querySelector("video.loop");
  watchVideo(scrub); watchVideo(loop);

  // To-do-lijst
  var todo = document.querySelector(".todo");
  var items = todo ? todo.querySelectorAll(".todo-list li") : [];
  function finishTodo() { items.forEach(function (li) { li.classList.add("done"); }); if (todo) todo.classList.add("complete"); }

  if (reduce || !("IntersectionObserver" in window)) {
    finishTodo();
    if (scrub) scrub.addEventListener("loadedmetadata", function () { scrub.currentTime = Math.max(0, scrub.duration - 0.05); });
    return;
  }
  document.documentElement.classList.add("js");

  // Scrollvideo: de video en de tekstmomenten volgen hoe ver je in de hero bent
  var section = document.querySelector(".scrolly");
  var beats = section ? section.querySelectorAll(".beat") : [];
  var running = false, current = -1, target = 0;
  function frame() {
    if (!running) return;
    var rect = section.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    var p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    var beat = p < 1 / 3 ? 0 : p < 2 / 3 ? 1 : 2;
    if (beat !== current) {
      beats.forEach(function (b, i) { b.classList.toggle("is-active", i === beat); });
      current = beat;
    }
    if (scrub && scrub.duration) {
      target = p * (scrub.duration - 0.05);
      if (Math.abs(scrub.currentTime - target) > 0.02) scrub.currentTime = target;
    }
    requestAnimationFrame(frame);
  }
  if (section) {
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; requestAnimationFrame(frame); }
      if (!visible) running = false;
    }).observe(section);
  }

  // Het kompas speelt alleen als het in beeld is
  if (loop) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { loop.play().catch(function () {}); } else { loop.pause(); }
    }).observe(loop);
  }

  // Secties verschijnen
  document.querySelectorAll(".bento, .route, .work, .about-copy").forEach(function (group) {
    group.querySelectorAll(".reveal").forEach(function (el, i) { el.style.setProperty("--d", i * 90 + "ms"); });
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) requestAnimationFrame(function () { el.classList.add("in"); });
    else io.observe(el);
  });

  // To-do-lijst streept zichzelf door
  if (todo) {
    var tio = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      tio.disconnect();
      items.forEach(function (li, i) { setTimeout(function () { li.classList.add("done"); }, 300 + i * 350); });
      setTimeout(function () { todo.classList.add("complete"); }, 300 + items.length * 350 + 300);
    }, { threshold: 0.5 });
    tio.observe(todo);
  }
})();
