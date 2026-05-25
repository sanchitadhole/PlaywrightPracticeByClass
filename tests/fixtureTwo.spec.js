import { test, expect } from "@playwright/test";

const { LoginPage } = require("../tests/Pages/LoginPage");

test("Validate login page message", async ({ page }) => {
  let loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("student", "Password123");
  await loginPage.getLoginSuccess();

  
});
