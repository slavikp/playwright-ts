import { expect, test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(1000);

  const userNameField = await page.locator("#user-name").type("standard_user", { delay: 50 });
  const passwordNameField = await page.locator('[data-test="password"]').type("secret_sauce", {delay: 50});
  const loginButton = await page.locator("#login-button").click();

  await page.waitForTimeout(5000);
  page.screenshot({fullPage: true});
});
