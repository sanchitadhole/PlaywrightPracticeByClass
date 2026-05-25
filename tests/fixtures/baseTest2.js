import { test as base } from "@playwright/test";

import { LoginPage3 } from "../Pages/LoginPage3";

import { DashboardPage } from "../Pages/Dashboard";

export const test = base.extend({
  loginIn: async ({ page }, use) => {
    let loginPage = new LoginPage3(page);
    await loginPage.goto();
    await use(loginPage);
  },

  dashboard: async ({ page }, use) => {
    let dashboard = new DashboardPage(page);
    await use(dashboard);
  },
});


export {expect } from "@playwright/test"
