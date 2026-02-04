//browser 
//context --> Creating isolated environment 
//page- tabs that get opened inside a context


import  { test,chromium,firefox,webkit } from "@playwright/test"



test(`Test to launch browser`,async() => { // => fat arrow

    // chrome
    const browser = await chromium.launch({channel:`msedge`})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()


    await page1.goto(`https://www.amazon.in/`)
    await page2.goto(`https://www.flipkart.com/`)


    /* Promise 3 stages :
    1. Pending
    2. Resolved
    3. Rejected */

})