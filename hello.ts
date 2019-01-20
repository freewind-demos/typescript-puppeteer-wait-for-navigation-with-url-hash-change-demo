import * as puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log('open github');
  await page.goto("http://github.com");

  await browser.close();
}

run();
