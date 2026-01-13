const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("Login berhasil dengan user valid", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL(/inventory/);
});

test("Login gagal dengan password salah", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "wrong_password");

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
