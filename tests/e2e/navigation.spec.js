import { test, expect } from "@playwright/test";

// Example e2e test — add the remaining cases in tests/e2e/
test("home page loads hero, about and contact sections", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("DevOps Lab");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Simple website boilerplate"
  );
  await expect(page.locator(".brand")).toHaveText("DevOps Lab");

  await page.getByRole("link", { name: "About" }).click();
  await expect(page.locator("#about")).toBeInViewport();

  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.locator("#contact")).toBeInViewport();
});
