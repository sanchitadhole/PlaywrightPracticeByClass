import {test,expect} from '@playwright/test'

test("validate title for page",async({page})=>{

    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")

})

test('Verify header',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let headingElement = await page.locator("h1");
    let text = await headingElement.textContent();
    console.log(text);
    await expect(text).toEqual("Practice Page")
})

