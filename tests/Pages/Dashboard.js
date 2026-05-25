import { test, expect } from "@playwright/test";

class DashboardPage {
  constructor(page) {
    this.page = page;
    ((this.loginMsg = ".post-title"),
      (this.logOutButton = 'a:has-text("Logout")'));
  }

  async getLoginSuccess() {
    let successMsg = await this.page.locator(this.loginMsg).textContent();
    // console.log(successMsg);
    return successMsg;
  }

   async logOutFunction(){
        this.page.locator(logOutButton).click()
    }
}


module.exports = {DashboardPage}