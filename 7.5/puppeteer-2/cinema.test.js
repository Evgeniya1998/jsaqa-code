const { clickElement, putText, getText, chooseSeat, chooseFilm, chooseDay} = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("films tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
  });

   test("Happy path of one ticket buying", async() => {
     await chooseDay(page, "3");
     await chooseFilm(page, "1");
     await chooseSeat(page, "8", "2");
     await clickElement(page, ".acceptin-button");
     const actual = await getText(page, "h2");
     const expected = "Вы выбрали билеты:";
     expect(actual).toContain(expected);
   });

   test("Happy path of two tickets buying", async() => {
     await chooseDay(page, "4");
     await chooseFilm(page, "2");
     await chooseSeat(page, "3", "8");
     await chooseSeat(page, "3", "9");
     await clickElement(page, ".acceptin-button");
     const actual = await getText(page, "h1");
     const expected = "Вы выбрали билеты:";
     expect(actual).toContain(expected);
   });

   test("Sad path no places", async() => {
     await chooseDay(page, "5");
     await chooseFilm(page, "1");
     await chooseSeat(page, "2", "4");
     await clickElement(page, ".acceptin-button");
     await clickElement(page, ".acceptin-button");
     await page.goto("http://qamid.tmweb.ru/client/index.php");
     await chooseDay(page, "5");
     await chooseFilm(page, "1");
     await chooseSeat(page, "2", "4");
     await clickElement(page, ".acceptin-button");
     const actual = await page.$eval('.acceptin-button', (button) => {
     return button.disabled;
      });
     expect(actual).toEqual(true);
   });
 })