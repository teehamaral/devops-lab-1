import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { nextTheme } from "../../js/theme.js";

// Example unit test — add the remaining cases in tests/unit/
describe("theme helpers (unit)", () => {
  it("nextTheme switches light to dark", () => {
    assert.equal(nextTheme("light"), "dark");
  });
});
