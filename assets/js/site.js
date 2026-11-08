/* Two jobs: the colour-scheme toggle and the year in the colophon.
   The stored theme is applied inline in <head> so there is no flash. */

(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
