import * as puppeteer from 'puppeteer';
import {Page} from "puppeteer";
import {LoadEvent} from "puppeteer";

async function clickAndWaitForEvent(page: Page, linkId: string, event: LoadEvent) {
  console.log(`----- clickAndWaitForEvent: ${event} -----`);
  return Promise.all([
    page.click(linkId),
    page.waitForNavigation({waitUntil: event})
  ])
}

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(1000);

  await page.goto("http://localhost:8989/index.html");

  await clickAndWaitForEvent(page, '#link1', 'domcontentloaded');
  await clickAndWaitForEvent(page, '#link2', 'load');
  await clickAndWaitForEvent(page, '#link3', 'networkidle2');
  await clickAndWaitForEvent(page, '#link4', 'networkidle0');

  await browser.close();
}

run();
