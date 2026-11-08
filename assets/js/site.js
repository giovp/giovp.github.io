/* Light/dark toggle with persistence. The initial theme is applied inline in
   <head> so there is no flash of the wrong colour scheme. */

(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* private mode — ignore */
    }
  }

  if (btn) {
    btn.addEventListener("click", function () {
      apply(current() === "dark" ? "light" : "dark");
    });
  }

  /* Follow the system preference unless the visitor chose a theme. */
  var stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    stored = null;
  }

  if (!stored && window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var sync = function () {
      root.setAttribute("data-theme", mq.matches ? "dark" : "light");
    };
    sync();
    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
    } else if (mq.addListener) {
      mq.addListener(sync);
    }
  }
})();
