import { test, expect } from "@playwright/test";

test("theme toggle updates the page and persists after reload", async ({
  page,
}) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Light mode" });
  const initial = await page.locator("html").getAttribute("data-theme");
  const next = initial === "light" ? "dark" : "light";

  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", next);
  await expect(toggle).toHaveAttribute(
    "aria-pressed",
    next === "light" ? "true" : "false"
  );

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", next);
});
