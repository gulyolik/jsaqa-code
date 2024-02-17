// @ts-check
import {expect } from '@playwright/test';
// @ts-ignore
import { email, password, mail } from "../user.js";
import { chromium } from 'playwright';

( async () => {
  const browser = await chromium.launch({
    headless:false,
    slowMo: 5000,
    devtools: true
    })
  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.locator("h2")).toContainText("Мои курсы и профессии", {
    useInnerText: true,
    timeout: 60 * 1000,
  });
  
}) ();

( async () => {
  const browser = await chromium.launch({
    headless:false,
    slowMo: 5000,
    devtools: true
    })
  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(mail);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('123');
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByTestId("login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль",
    { timeout: 10 * 1000 }
  );
}) ();