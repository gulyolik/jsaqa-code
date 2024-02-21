let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  },
  6*1000
  );

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },
  7*1000
  );

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  },
  8*1000
  );
});

describe("Another pages tests",() => {
  test("First topic title", async() => {
    await page.goto("https://github.com/topics", {waitUntil: 'load', timeout: 60000});
    const actual = await page.$eval("main h1", link => link.textContent);
    expect(actual).toContain('Topics');

  },
  100*1000
  );
  test("The pricing page header content", async () => {
    await page.goto("https://github.com/pricing",{waitUntil: 'load', timeout: 60000});
    const actual = await page.$eval("h1", (link) => link.innerText);
    expect(actual).toContain("Search code, repositories, users, issues, pull requests..");
  },
  100*1000);

  test("The collections page header content", async () => {
    await page.goto("https://github.com/collections", {waitUntil: 'load', timeout: 60000});
    const actual = await page.$eval('main h1', (link) => link.innerText);
    expect(actual).toContain("Collections");
  });

});

