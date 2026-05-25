import { test, expect } from "@playwright/test";

test("validate assertion in playwright atleast 15", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // 1. toBeVisible
  let nameEl = await page.locator("#name");
  await expect(nameEl).toBeVisible();

  //2. toBeHidden
  await page.locator("#hide-textbox").click();
  let textBox = await page.locator("#displayed-text");
  await expect(textBox).toBeHidden();

  //3 .toHaveText

  await expect(page.locator("legend").first()).toHaveText(
    "Radio Button Example",
  );

  //4. toContainText

  await expect(page.locator("legend").first()).toContainText("Button Example");

  //5. toHaveValue()

  await page.locator("#name").fill("Sanchita dhole");
  await expect(page.locator("#name")).toHaveValue("Sanchita dhole");

  //6. toHaveAttribute

  let nameAtt = await page.locator("#name");
  await expect(nameAtt).toHaveAttribute("placeholder", "Enter Your Name");

  //7. toBeChecked

  await page.locator("input[value = 'radio1']").check();
  await expect(page.locator("input[value = 'radio1']")).toBeChecked();

  await page.locator("input[value = 'radio2']").check();

   await expect(page.locator("input[value = 'radio1']")).not.toBeChecked()
});
