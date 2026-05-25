import { test, expect } from "@playwright/test";

test("Page fixture example", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#name").fill("sanchita ");
});

test("Browser fixture example", async ({ browser }) => {
  let page = await browser.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#name").fill("sanchita dhole");

  let page2 = await browser.newPage();
  await page2.goto("https://www.google.com/");
});

//  // cookies , local storage , sessions, authentication
test("context fixture example", async ({ context }) => {
  let page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#name").fill("sanchita dhole");
});

// request

test("request fixture GET Api Call ",async({request})=>{

    let response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    let jsonRes = await response.json()
    console.log(jsonRes)
    await expect(response.status()).toBe(200);
    await expect(jsonRes.id).toBe(1)

})

test.only("browserName fixture example",async({page,browserName})=>{
    test.skip(browserName=="chrome");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#name").fill("sanchita dhole");

})
