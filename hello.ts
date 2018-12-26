import * as puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log('open github');
  await page.goto("http://github.com");

  console.log('save a screenshot');
  await page.screenshot({path: 'screenshots/github.png'});

  await browser.close();
}

run();
