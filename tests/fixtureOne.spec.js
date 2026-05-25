import {test,expect} from "@playwright/test"

test("check title for page",async({page,browser})=>{

// Page is fixture
    // if page is not used as fixture ---->
    // launch the browser
    // creates context 
    // open the tab
    // give tab to your test

       // const browser= await chromium.launch();
    // const context = await browser.newContext();
    // const page =    await context.newPage();


        // advantages ---> 

    //  reduce repeated code 
    //  improve framework
    //  provide  reuable setup 
    //  support scalability


    // what is page fixtures ?
    // represents browser tab 
    // web page 
    // active UI screen 



        //await page.goto()
    //---> Launch browser ====> create context ====> Open tab / page  ====> provide page fixture
    // Chrome ==> newTab ===> url launch

    
    //page.goto()
    //page.locator()
    //page.click()
    //page.fill()
    //page.reload()
    //page.goBack()
    //page.screenshot()

    // Broswer

    // manages entire browser application
    // Example ----> 
    // Chrome 
    // Edge
    // Firefox




});


test("Title",async({browser})=>{
    let page1 = await browser.newPage();
    let page2 = await browser.newPage();

    page1.goto("https://www.geeksforgeeks.org/");

    page2.goto("https://www.amazon.com/");




})

// browser  ---> page1 and page2
// browser ---> context ---> browser -user1   ---> browser --- user2
// cookies ---> local storage ---> sessions ---> authentication


//  userid password ----> authenticate ----> token -----> localstorage  / cookies


// Broswe fixture and methods 

    //cookies ---> local storage ---> sessions ---> authentication

    //Browser ---> Context ----> Page