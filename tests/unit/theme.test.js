import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { nextTheme, resolveTheme, themeGlyph } from "../../js/theme.js";

// Example unit test — add the remaining cases in tests/unit/
describe("theme helpers (unit)", () => {
  it("nextTheme switches light to dark", () => {
    assert.equal(nextTheme("light"), "dark");
  });

  it("nextTheme switches dark to light", () => {
    assert.equal(nextTheme("dark"), "light");
  });

  it("resolveTheme keeps a valid stored theme over the system preference", () => {
    assert.equal(resolveTheme("dark", true), "dark");
    assert.equal(resolveTheme("light", false), "light");
  });

  it("resolveTheme falls back to the system preference when nothing valid is stored", () => {
    assert.equal(resolveTheme(null, true), "light");
    assert.equal(resolveTheme(null, false), "dark");
    assert.equal(resolveTheme("blue", true), "light");
  });

  it("themeGlyph shows the icon of the theme the button switches to", () => {
    assert.equal(themeGlyph("dark"), "☀");
    assert.equal(themeGlyph("light"), "☾");
  });
});
