const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto("https://example.com");
  await page.goto("https://marketingplatform.google.com/about/");
  // await page.screenshot({ path: "screenshot.png" });
  // await page.pdf({ path: "hn.pdf", format: "A4" });

  // const h1 = await page.evaluate(
  //   () => document.querySelector("h1").textContent
  // );
  const h1 = await page.evaluate(() =>
    Array.from(document.querySelector("div.compact h3.title")).map(partner => {
      partner.innerText.trim();
    })
  );

  console.log(h1);
  await browser.close();
})();
