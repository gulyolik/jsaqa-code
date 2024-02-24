const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");


describe("Cinema-WebSite Test", () => {
  let page;
  let freeStandartSeat = ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)";
  let freeVipSeat = ".buying-scheme__chair_vip";
  let alreadyBookedSeat = 
    ".buying-scheme__chair_taken";
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
    await clickElement(page, 
      ".movie-seances__time:not(.acceptin-button-disabled)");
  })
  afterEach(() => {
    page.close();
  });

  test("The first successfull booking", async() => {
    await clickElement(page, freeStandartSeat);
    await page.waitForXPath('//button[text() = "Забронировать"][not(@disabled)]') 
  });

  test("The second successful booking", async() =>{
    await clickElement(page, freeVipSeat);
    await page.waitForXPath('//button[text() = "Забронировать"][not(@disabled)]');
  });

  test("Truring to book black seat", async() =>{
    await clickElement(page, alreadyBookedSeat);
    expect(await page.waitForXPath('//button[text() = "Забронировать"][(@disabled)]'));
  });
});
