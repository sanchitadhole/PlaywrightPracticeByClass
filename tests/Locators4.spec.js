import { test, expoct, expect } from "@playwright/test";

test("element states methods", async ({ page }) => {
  // await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // let head1 = await page.locator("h1")
  // let expValue = await head1.isVisible();
  // await expect(expValue).toBeTruthy

  //isHiden

  //  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // let head2 = await page.locator("h1")
  // let expValue2 = await head2.isHidden();
  // await expect(expValue2).toBeTruthy

  //radio , checkbox, ischeck

  //   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  //   let radioBtn = await page.locator('[value="radio1"]');
  //   let expValue = await radioBtn.isChecked();
  //   await expect(expValue).toBeFalsy();
  //   await radioBtn.click();
  //   radioBtn = await radioBtn.isChecked();
  //   await expect(radioBtn).toBeTruthy();

  //isEnabled()

  // await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // let ele1 = page.locator("#displayed-text");
  // await expect(ele1).toBeEnabled();

  // await page.locator("#hide-textbox").click();

  //   let ele2 = page.locator(".inputs.displayed-class");
  // await expect(ele1).toBeHidden();

  // await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // let check1 = await page.locator('input[value="radio1"]');
  // let expValue = await check1.isChecked();
  // await expect(expValue).toBeFalsy();
  // await check1.click();
  // expValue = check1.isChecked();
  // await expect(expValue).toBeTruthy();



   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   let button1 = await page.locator("#opentab");
   let enb = await button1.isEnabled();
   await expect(enb).toBeTruthy();



  




});

test.only("validate waitFoe method",async({page})=>{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   let hideBtn = page.locator("#hide-textbox");
   let showBtn = page.locator("#show-textbox");
   let inputBtn = page.locator("#displayed-text");
   await showBtn.waitFor({state:'visible'});
   await hideBtn.click();
   await inputBtn.waitFor({state:'hidden'})



})
