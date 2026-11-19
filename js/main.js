import {
  THEME_KEY,
  nextTheme,
  resolveTheme,
  themeGlyph,
} from "./theme.js";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const cta = document.getElementById("cta");
if (cta) {
  cta.addEventListener("click", () => {
    window.alert("Hello from the DevOps Lab boilerplate!");
  });
}

const themeToggle = document.getElementById("theme-toggle");

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    return;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const isLight = theme === "light";
    themeToggle.textContent = themeGlyph(theme);
    themeToggle.setAttribute("aria-pressed", String(isLight));
  }
}

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(resolveTheme(getStoredTheme(), prefersLight));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = nextTheme(current);
    applyTheme(next);
    storeTheme(next);
  });
}
