(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const label = document.getElementById('themeLabel');

  if (!btn || !label) { return; }

  const isNorwegian =
    (root.lang || "").toLowerCase().startsWith("no");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      label.textContent = isNorwegian ? "Mørk modus" : "Dark mode";
      btn.textContent   = isNorwegian ? "☀️ Lys" : "☀️ Light";
    } else {
      label.textContent = isNorwegian ? "Lys modus" : "Light mode";
      btn.textContent   = isNorwegian ? "🌙 Mørk" : "🌙 Dark";
    }
  }
  
  // Initialization

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    setTheme(stored);
  } else {
    // Look up OS prefered theme
    const preferedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(preferedDark ? "dark" : "light");
  }

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
