import { test, expect } from "@playwright/test";

test("CTA button shows the hello alert", async ({ page }) => {
  await page.goto("/");

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("Hello from the DevOps Lab boilerplate!");
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Say hello" }).click();
});
