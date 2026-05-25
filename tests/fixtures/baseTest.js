import {test as base} from "@playwright/test"

import{LoginPage2} from "../Pages/LoginPage2"


// create fixtures

export const test = base.extend({
    loginIn:async({page},use)=>{
        let loginPage = new LoginPage2(page)
        await loginPage.goto();
        await use(loginPage)
    }
})

export {expect} from "@playwright/test"