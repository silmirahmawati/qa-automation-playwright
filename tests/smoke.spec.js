const { test, expect } = require("@playwright/test");

test("Smoke test - open SauceDemo homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Swag Labs/);
});
