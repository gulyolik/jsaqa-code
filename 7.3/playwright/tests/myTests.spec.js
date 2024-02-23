//import { email, password } from "../user.js";
const user = require("../user");
const { test, expect } = require("@playwright/test");

test.describe("authorization", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout * 3);
    await page.goto("https://netology.ru/?modal=sign_in");
  });

  test("valid authorization", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(user.email);
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(user.password);
    await page.getByTestId("login-submit-btn").click();
    await expect(page.locator("body h2")).toHaveText("Моё обучение", {
      useInnerText: true,
      timeout: 60 * 1000,
    });
  },
  300*1000
  ),
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
    }
    );
});