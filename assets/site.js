(function () {
  var toggle = document.querySelector(".menu-toggle");
  var drawer = document.getElementById("mobdrawer");
  var overlay = document.querySelector(".mob-overlay");
  var root = document.documentElement;
  function setOpen(open) {
    if (!drawer || !overlay || !toggle) return;
    drawer.hidden = !open;
    overlay.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    root.style.overflow = open ? "hidden" : "";
  }
  if (toggle && drawer) {
    toggle.addEventListener("click", function () { setOpen(drawer.hidden); });
    overlay.addEventListener("click", function () { setOpen(false); });
    drawer.querySelector(".mob-close").addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 900) setOpen(false); });
  }
  var drops = document.querySelectorAll(".nav-links .has-drop > button");
  for (var i = 0; i < drops.length; i++) {
    drops[i].addEventListener("click", function (e) {
      e.currentTarget.parentNode.classList.toggle("open");
    });
  }
})();
