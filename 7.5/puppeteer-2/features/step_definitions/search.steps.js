const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const {  clickElement, putText, getText, chooseSeat, chooseFilm, chooseDay } = require("../../lib/commands.js");

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
// Given("user is on {string} page", async function (string) {
//  // return await this.page.goto(`https://qamid.tmweb.ru/client/index.php${string}`, {
//    // setTimeout: 20000,
//    await this.page.goto(string);
//   });
// //});
Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client/index.php/${string}`, {
    setTimeout: 20000,
  })
})
When("user choose day {string}", { timeout: 60000 }, async function (string) {
  return await chooseDay(this.page, string);
});
When("user2 choose day {string}", { timeout: 60000 }, async function (string) {
  return await chooseDay(this.page, string);
});
When(
  "user choose film {string}",
  { timeout: 60000 },
  async function (string) {
    return await chooseFilm(this.page, string);
  });
  When(
    "user2 choose film {string}",
    { timeout: 60000 },
    async function (string) {
      return await chooseFilm(this.page, string);
    });
When(
  "user choose row {string} and seat {string}",
  { timeout: 60000 },
  async function (string, string2) {
    return await chooseSeat(this.page, string, string2);
  }); 
  When("user click button {string}", { timeout: 60000 }, async function (string) {
    return await clickElement(this.page, string);
  });
  Then("user see information {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  const expected = await string;
  expect(actual).contain(expected);
});
  When(
    "user2 choose row {string} and seat {string}",
    { timeout: 60000 },
    async function (string, string2) {
      return await chooseSeat(this.page, string, string2);
    });

When("user2 click is on {string} page", 
{ timeout: 5000 },
async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client/index.php/${string}`, {
   });
  })
// Then("user2 see that the button is not activated {string}", async function (string) {
//   const actual = await page.$eval('.acceptin-button', (button) => {
//     return button.disabled;
//      });
//     expect(actual).toEqual(true);
  
// });
// Then("user see information {string}", async function (string) {
//   const actual = await getText(this.page, "h2");
//   const expected = await string;
//   expect(actual).contain(expected);
// });

Then("user2 see that the button {string} is not activated",
  { timeout: 60000 },
  async function (string) {
    const acceptionButton = await this.page.$eval(
      "button",
      (button) => button.disabled
    );
    await expect(acceptionButton).equal(true);
  });
// Given("user is on {string} page", async function (string) {
//   return await this.page.goto(`https://netology.ru${string}`, {
//     setTimeout: 20000,
//   });
// });

// When("user search by {string}", async function (string) {
//   return await putText(this.page, "input", string);
// });

// Then("user sees the course suggested {string}", async function (string) {
//   const actual = await getText(this.page, "a[data-name]");
//   const expected = await string;
//   expect(actual).contains(expected);
// });
