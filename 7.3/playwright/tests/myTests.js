import { test, expect } from '@playwright/test';

const user = require("../user.js");

//const { test, expect } = require("@playwright/test");

test.describe("authorization", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout * 3);
  });

  test("valid authorization", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(user.email);
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(user.password);
    await page.getByTestId("login-submit-btn").click();
    await expect(page.locator("h2")).toContainText("Мои курсы и профессии", {
      useInnerText: true,
      timeout: 60 * 1000,
    });
  }),
    test("invalid authorization", async ({ page }) => {
      await page.getByPlaceholder("Email").click();
      await page.getByPlaceholder("Email").fill("InvalidEmail@mail.ru");
      await page.getByPlaceholder("Пароль").click();
      await page.getByPlaceholder("Пароль").fill("InvalidPassword");
      await page.getByTestId("login-submit-btn").click();
      await expect(page.getByTestId("login-error-hint")).toHaveText(
        "Вы ввели неправильно логин или пароль",
        { timeout: 10 * 1000 }
      );
    });
});