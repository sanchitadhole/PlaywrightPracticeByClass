import { test, expect } from "@playwright/test";

class LoginPage3 {
  constructor(page) {
    this.page = page;
    this.userName = "#username";
    this.passWord = "#password";
    this.submitBtn = "#submit";
    this.loginMsg = ".post-title";
    this.inValidMsg = "#error";
  }

  async goto() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/",
    );
  }

  async login(username, password) {
    await this.page.locator(this.userName).fill(username);
    await this.page.locator(this.passWord).fill(password);
    await this.page.locator(this.submitBtn).click();
  }

  async getLoginSuccess() {
    let successMsg = await this.page.locator(this.loginMsg);
    // console.log(successMsg);
    // return successMsg;
  }

  async getLoginInValidMessage() {
    let inValidMsg = await this.page.locator(this.inValidMsg).textContent();
    console.log(inValidMsg);
  }
}

module.exports = { LoginPage3 };
