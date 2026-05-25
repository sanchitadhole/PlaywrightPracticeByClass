import {test, expect} from "./fixtures/baseTest2"

test("validate login functionality",async({page,loginIn,dashboard})=>{
    await loginIn.login("student","Password123");
    await dashboard.getLoginSuccess()
    await dashboard.logOutFunction()
})