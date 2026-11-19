export const THEME_KEY = "theme";

/** @param {"light" | "dark"} current */
export function nextTheme(current) {
  return current === "light" ? "dark" : "light";
}

/**
 * @param {string | null} stored
 * @param {boolean} prefersLight
 * @returns {"light" | "dark"}
 */
export function resolveTheme(stored, prefersLight) {
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return prefersLight ? "light" : "dark";
}

/** @param {"light" | "dark"} theme */
export function themeGlyph(theme) {
  return theme === "light" ? "☾" : "☀";
}
