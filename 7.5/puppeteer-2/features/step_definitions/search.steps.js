const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, clickXPathElement, putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on poster page", async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/", {
    setTimeout: 60 * 1000,
  });
});

When("user selects available session", async function () {
  const elements = await this.page.$x("//a[@class='page-nav__day '][1]");
  await elements[0].click();
  await clickElement(
    this.page,
    ".movie-seances__time"
  );
});

When("user reserves one free seat",{timeout: 60 * 1000}, async function () {
  await clickElement(
    this.page,
    ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)"
  );
});

When("user reserves free VIP seat",{timeout: 60 * 1000}, async function () {
  await clickElement(
    this.page,
    ".buying-scheme__chair_vip");
});

When("user selects the occupied seat",{timeout: 60 * 1000}, async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__chair_taken");
});

Then ("user sees that his place is chosen", async function (string) {
  expect(await this.page.waitForXPath('//button[text() = "Забронировать"][not(@disabled)]'));
})

Then("button {string} is disabled", async function (string) {
  expect(await this.page.waitForXPath('//button[text() = "Забронировать"][(@disabled)]'));
});