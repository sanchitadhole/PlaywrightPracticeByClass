import { test, expect } from "@playwright/test";

test("Elements state methods", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // const radioCount = await page.locator('input[type="radio"]').count();
  // console.log(radioCount);

  // expect(radioCount).toBe(3);

  //program 2
  // const rows = await page
  //   .locator("#product")
  //   .first()
  //   .locator("th")
  //   .allTextContents();
  // console.log(rows);
  // expect(rows.length).toBeGreaterThan(1);
  // expect(rows[0]).toContain("Instructor");
  // expect(rows[1]).toContain("Course");

  //Program 3
  // allInnerTexts()
  // const rows2 = await page.locator("#product").nth(1).locator('tr').allInnerTexts();
  //  const rows3 = await page.locator("#product").nth(1).locator('tr').allTextContents();

  // console.log(rows2);
//   console.log(rows3);

// expect(rows2[rows2.length-1]).toContain("Smith");

// program 3
//textContent();

// let text = await page.locator('h1').textContent();
// console.log(text)
// expect(text).toContain("Practice Page");

// innerText();

// let text2 = await page.locator('h1').innerText();

// console.log(text2)
// expect(text).toContain("Page");


// Program 4

// inputText()

// let ctyName = "India";
// await page.locator("#autocomplete").fill(ctyName);
// let inputCountryName = await page.locator("#autocomplete").inputValue();
// console.log(inputCountryName);
// expect(inputCountryName).toBe(ctyName);



//getAttribute()

// let text4 = await page.locator("#autocomplete").getAttribute("placeholder");
// console.log(text4)


   // <h1 display= "none">heading</h1>
    // <h1 display= "block">heading</h1>
    // Figma -- html css --> webpage , tab , mobile 

    let box = await page.locator('h1').boundingBox();
    console.log(box);

    expect(box.height).toBe(48)


    //assertion




});


