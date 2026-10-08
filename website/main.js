// Laag 3 van 3: uitvoering. Beweging volgens DESIGN.md. Bij reduced motion staat alles meteen in de eindstand.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var todo = document.querySelector(".todo");
  var items = todo ? todo.querySelectorAll(".todo-list li") : [];

  function finishTodo() {
    items.forEach(function (li) { li.classList.add("done"); });
    if (todo) todo.classList.add("complete");
  }

  if (reduce || !("IntersectionObserver" in window)) { finishTodo(); return; }
  document.documentElement.classList.add("js");

  // Elementen in een groep verschijnen kort na elkaar
  document.querySelectorAll(".bento, .route, .work, .about-copy").forEach(function (group) {
    group.querySelectorAll(".reveal").forEach(function (el, i) { el.style.setProperty("--d", i * 90 + "ms"); });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) requestAnimationFrame(function () { el.classList.add("in"); });
    else io.observe(el);
  });

  // De to-do-lijst streept zichzelf door, regel voor regel
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
