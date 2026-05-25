import { test, expect } from "@playwright/test";

test("Element actions state methods", async ({ page }) => {
  //click();

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // await page.locator('input[value="radio1"]').click();
  // await page.locator("#displayed-text").fill("sanchita is good girls");
  // await page.getByPlaceholder("Hide/Show Example").clear();

  let openWindowButton = await page.locator("#openwindow");
  await openWindowButton.click();

  //dbclick();

  // let openBtn = await page.locator("#opentab");
  // await openBtn.click();

  //fill()
  // let inputE = await page.locator("#autocomplete");
  // await inputE.fill("Afghanistan")

  //type() --------------// depricated

  // let inputE = await page.locator("#autocomplete");
  // await inputE.type("Afghanistan")

  // press()
  let inputType = await page.locator("#autocomplete");
  await inputType.fill("Af");
  await inputType.press("ArrowDown");
  await inputType.press("Enter");

  // Checkbox

  let checkbox1 = await page.locator("#checkBoxOption1");
  let checkbox2 = await page.locator("#checkBoxOption2");
  let checkbox3 = await page.locator("#checkBoxOption3");
  // await checkbox1.click();
  await checkbox1.check()         //only check hot but click ni parat unclick hot
  let expectedV = await checkbox1.isChecked();

  await expect(expectedV).toBeTruthy();
  await checkbox1.uncheck();

  let expectedV2 = await checkbox1.isChecked();
  await expect(expectedV2).toBeFalsy();


  //Dropdown

  let dropdown = await page.locator("#dropdown-class-example");
  await dropdown.selectOption('option1'); //value,index,text


  let hoverEl = await page.locator("#mousehover");
  await hoverEl.hover();
  await expect(page.getByText("Top")).toBeVisible();
  await expect(page.getByText("Reload")).toBeVisible();



  

});

test.only("Validate mousehover and screenshot command",async({page})=>{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   let mouseHoverBtn = await page.locator("#mousehover")
   await mouseHoverBtn.scrollIntoViewIfNeeded();
   await mouseHoverBtn.hover();

   await mouseHoverBtn.screenshot({path:"S:/Playwright/PlaywrightByCD/Screenshot/table.png"})

})
