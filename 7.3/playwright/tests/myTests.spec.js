const { chromium } = require("playwright");
(async() =>{
  const browser = await chromium.launch({
    headless:false,
    slowMo:5000,
    devtools: true
  })
  const page = browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  (await page).getByPlaceholder("Email").fill(user.email);
  (await page).getByPlaceholder("Пароль").fill(user.password);
  (await page).getByTestId("login-submit-btn").click;
  await expect((await page).locator("h2").textContent === "Моё обучение");



})();
