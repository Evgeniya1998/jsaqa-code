const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
args: ['--start-maximized'], //— используем максимальный размер окна браузера
devtools: true
  });  
const page = await browser.newPage();
//await page.goto("https://netology.ru", {timeout: 200000});
//await browser.close();
}) ();
