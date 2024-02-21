const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

afterEach(() => {
  page.close();
});

describe("Cinema-WebSite Test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
    await clickElement(page, 
      ".movie-seances__time:not(.acceptin-button-disabled)");
    let freeStandartSeat = ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair. buying-scheme__chair_standart)";
    let freeVipSeat = ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair .buying-scheme__chair_vip)";
    let alreadyBookedSeat = 
    ".buying-scheme__wrapper .buying-scheme__chair_taken";
  
  })

  test("The first successfull booking", async() => {
    await clickElement(page, freeStandartSeat);
    expect(page).contains(".buying-scheme__chair_selected");
  });

  test("The second successful booking", async() =>{
    await clickElement(page, freeVipSeat);
    expect(page).contains(".buying-scheme__chair_selected");
  });

  test("Truring to book black seat", async() =>{
    await clickElement(page, alreadyBookedSeat);
    expect(
      await page.$eval("button.acceptin-button", (link) =>
        link.getAttribute("disabled")
      )
    ).toBe("true");
  });
});
