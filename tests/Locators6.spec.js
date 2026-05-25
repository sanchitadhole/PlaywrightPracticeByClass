import { test, expect } from "@playwright/test";
// element info methods

// <h1 id ="one" name = "nm"></h1>

// <ul>
//     <li>apple</li>
//     <li>Mango</li>
//     <li>Banana</li>
// </ul>

test("elements method", async ({ page }) => {

    //count

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const radioCount = await page.locator('input[type="radio"]').count()
    console.log(radioCount);

    // allTextContents()

    const texts = await page.locator("#product").first().locator("th").allTextContents();
    console.log(texts);


    // allInnerTexts()
    const text3 = await page.locator('label').allInnerTexts();
    console.log(text3);

    //textContent()








    // 

});

//count
