// @ts-check
const { test, expect } = require('@playwright/test');
const { login, password } = require("../user");
test('successful authorization', async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await expect(page).toHaveTitle("Нетология — обучение современным профессиям онлайн");

  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(login);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});
test("unsuccessful authorization", async ({ page }) => {
  test.slow();
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveTitle(
    "Нетология — обучение современным профессиям онлайн"
  );
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(login);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("Slon");
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator("data-testid=login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
}
);





// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
