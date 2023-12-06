let page;

beforeEach(async () => {
  page = await browser.newPage();
  //await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }); 

//describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await new Promise(resolve => setTimeout(resolve, 7000));
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 50000);

  test("The first link attribute", async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});
describe("The page news is open", () => {
  beforeEach(async () => {
    await page.goto("https://netology.ru");
  });
  test("The header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await new Promise(resolve => setTimeout(resolve, 5000));
    const url = await page.url();
    expect(url).toEqual("https://netology.ru/");
  }, 70000);
  
  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("/");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".styles_button__3chpH";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Получить консультацию");
  });
});