import { test, expect } from "@playwright/test";

const { LoginPage } = require("../tests/Pages/LoginPage");
let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});
test("validate login credentials", async ({ page }) => {
  await loginPage.login("student", "Password123");
  await loginPage.getLoginSuccess()
});


test("validate login inValid credentials", async ({ page }) => {
  await loginPage.login("student", "Password1233");
  await loginPage.getLoginInValidMessage()
});
