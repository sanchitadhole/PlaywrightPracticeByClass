import {test, expect} from "@playwright/test"

test("Validate title on google site",async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google")

});

test.only("Validate laptop count",async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator("#twotabsearchtextbox").first().fill("Laptop");
    let dd = await page.locator(".a-section.aok-relative.s-image-fixed-height>img").count()
    console.log(dd)
})