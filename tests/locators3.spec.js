import {test,expect} from '@playwright/test'

// xpath, css , id , getbyText, getByrole, getByLabel, getByPlaceholder


test.only("verify header",async({page})=>{
    // element selection methods ---first(), last(), nth(), filter(), locator(), and(), or()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#radio1").first();
    await page.locator("#radio1").last();
    await  page.locator("#radio1").nth(1);
    await page.locator("#product").first().filter('tr').filter({hasText:"Rahul Shetty"});
    await page.locator('#product').first().locator("tr").filter({has:page.locator('td')})

})