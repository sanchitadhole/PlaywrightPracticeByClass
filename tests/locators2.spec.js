import { test, expect } from "@playwright/test";

test("verify header", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#name");
  await page.getByPlaceholder("Enter Your Name");

  await page.getByRole("Option1");
});
