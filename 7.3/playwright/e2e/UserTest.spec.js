// @ts-check
const { test, expect } = require('@playwright/test');
const { login, password } = require("../user");
test('successful authorization', async ({ page }) => {
  test.slow();
  await page.goto('https://netology.ru/?modal=sign_in');
  await expect(page).toHaveTitle("Нетология — обучение современным профессиям онлайн");

  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(login);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.screenshot({ path: 'screenshote.png' });
  await page.getByTestId("login-submit-btn").click();  
  await page.screenshot({ path: 'screenshot.png' });
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.screenshot({ path: 'screenshots.png' });
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
  await page.getByPlaceholder("Пароль").fill("Slonnnnnnnnnnn");
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator("data-testid=login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: 'screenshotic.png' });
}
);
