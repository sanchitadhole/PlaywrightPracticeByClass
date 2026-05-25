import {test,expect} from "../tests/fixtures/baseTest"

test("login page",async({page,loginIn})=>{
   await loginIn.login("student","Password123")
    await loginIn.getLoginSuccess()
})