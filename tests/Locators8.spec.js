import { test, expect } from "@playwright/test";

test("Elements state methods", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // const frame = page.frameLocator("#courses-iframe");
  // let frameText = await frame.locator("h2").first().innerText();
  // console.log(frameText);

  //element in frame ---not working without handling frame
  // let elementFrame = await page.locator('h2').first();
  // console.log(elementFrame.textContent());

  //frame object ---- content frame

  // let iframeEl= page.locator("#courses-iframe")
  // const frame = await iframeEl.contentFrame();
  // console.log(frame);

  //evalute

  // let e = await page.locator('#name').evaluate((el)=>el.tagName);
  // console.log(e)

  // let a = await page.locator("#opentab").evaluate((el)=>
  //   el.tagName
  // )
  // console.log("ss"+a)

  // type = "text"
  // type = "number"
  // <input type = number/>

  // program 1
  let type = await page.locator("#name").evaluate((el) => el.type);
  console.log(type);

  let placeholder = await page
    .locator("#name")
    .evaluate((el) => el.placeholder);
  console.log("d" + placeholder);

  let id = await page.locator("#name").evaluate((el) => el.id);
  console.log(id);

  let name = await page.locator("#name").evaluate((el) => el.name);
  console.log(name);

  //program 2

  //single element attr

  let a = await page.locator("#name").evaluate((el) => ({
    type: el.type,
    id: el.id,
    name: el.name,
    placeholder: el.placeholder,
  }));
  console.log(a);

  // Programs 3

  let b = await page.locator("input[type='checkbox']").evaluateAll((elements) =>
    elements.map(function (el, index, arr) {
      return el.id;
    }),
  );
  console.log(b);

  //programs 4

  let c = await page
    .locator("#product")
    .first()
    .locator("tr")
    .locator("th")
    .evaluateAll((els) =>
      els.map(function (el, index, arr) {
        return el.textContent;
      }),
    );
  console.log(c);

  //Programs 5

  let d = await page
    .locator("#product")
    .nth(1)
    .locator("tr")
    .locator("th")
    .evaluateAll((els) =>
      els.map(function (el, index, arr) {
        return el.textContent;
      }),
    );
  console.log(d);

  //Programs 6
  let e = [1, 2, 3, 4, 5];
  let f = e.map((el) => {
    return el + 2;
  });
  console.log(f);

  // evalute --- single element
  // evalute --- multiple elements

  //Progarams 7

  //changing ui for debug

  await page
    .locator("#name")
    .evaluate((el) => (el.style.border = "3px solid red"));

  // scroll element manaually

  await page.locator("#mousehover").evaluate((el) => el.scrollIntoView());

  // Need width/height           =====> evalute()
  // Need custome style          =====> evalute()
  // Need DOM    values          =====> evalute()
  // Need many element texts     =====> evaluteAll()
  // Need ids of all checkboxs   =====> evaluteAll()

  // let prices = await page.locator('#product').first()

  // calculate

  // let pricess = await page
  //   .locator("#product")
  //   .first()
  //   .locator("tr td:nth-child(3)")
  //   .evaluateAll((ele) =>
  //     ele.map(function (el) {
  //       return Number(el.textContent);
  //     }),
  //   );

  // console.log(pricess);

  // let aadd = pricess.reduce(function (acc, el, index, arr) {
  //   return el + acc;
  // }, 0);
  // console.log(aadd);

  // let cities = await page
  //   .locator("#product")
  //   .last()
  //   .locator("tr td:nth-child(3)")
  //   .evaluateAll((els) => els.map((els) => els.textContent));
  // console.log(cities);

  // let result = cities.some((el) => el == "Chennai");
  // console.log(result);
  // await expect(result).toBe(true);

  // let citiesE = await page
  //   .locator("#product")
  //   .last()
  //   .locator("tr td:nth-child(3)")
  //   .evaluateAll((el) => el.filter((el) => el.textContent.trim() == "Chennai"));

  // console.log(citiesE);
});
