TypeScript Puppeteer Wait for Navigation with Url Hash Change Demo
==================================================================

When url hash is changed, puppeteer will have a navigation and we can use
`page.waitForNavigation()` to check if the operation is finished.

Even if there is no real `domcontentloaded`, `load`, `networkidle2` or `networkdidle0`,
but they are available in this case.

Notice: I disabled "/favicon.ico" requests in 'index.html' to avoid unexpected requests.

```
npm install -g puppeteer
npm run server
npm run demo
```

Note: since puppeteer needs to download a very huge Chrome which makes the installation quite slow,
I prefer install puppeteer globally and link it to this project before running.
