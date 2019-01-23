import * as puppeteer from 'puppeteer';
import {Page} from "puppeteer";
import {LoadEvent} from "puppeteer";

async function clickAndWaitForEvent(page: Page, hash: string, event: LoadEvent) {
  console.log(`----- clickAndWaitForEvent: ${event} -----`);
  await page.goto(`http://localhost:8989/index.html${hash}`, {
    waitUntil: event
  })
}

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(1000);

  await page.goto("http://localhost:8989/index.html");

  await clickAndWaitForEvent(page, '#section1', 'domcontentloaded');
  await clickAndWaitForEvent(page, '#section2', 'load');
  await clickAndWaitForEvent(page, '#section3', 'networkidle2');
  await clickAndWaitForEvent(page, '#section4', 'networkidle0');

  await browser.close();
}

run();
