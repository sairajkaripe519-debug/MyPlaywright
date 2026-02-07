// import { test, expect } from "@playwright/test" ;

// test.only(`To handle alerts`,async ({page}) => {

//     await page.goto(`https://www.leafground.com/alert.xhtml`);

//     page.on ("dialog",async(alert) => {
//         const message = alert.message();
//         console.log(message);
        
//         await alert.accept();


//     })
// });


// ---------------------------------------------------------------------------------------------------------------------------------------------


//     await page.goto(`https://leafground.com/alert.xhtml`);


//     page.on("dialog",async(alert)=>{
// // // page.on is an event listener to listen for user interaction like clicks and capture the alert/ webelement
// // // When page.on is used the control comes to you to handle the alert accordingly


// // //First Trigger --> alert is holding the simple alert
// // //Second Trigger --> alert is holding the confirm alert
// // //Third Trigger --> alert is holding the prompt alert


//     const message = alert.message(); //.message() inbuilt method to get the message out from the alert
//        console.log(message);       
// //     // accept() => Ok and dismiss() => cancel both are inbuilt methods


//     const alertType = alert.type(); // .type() inbuilt method to get the type of the alert and to handle it accordingly using an if condition
//     console.log(`The type of the alert is ${alertType} `);


//     if(alertType==="confirm"){
//         await alert.accept()
//     }else if(alertType==="prompt"){
//         await alert.accept("Testleaf")
//     }else


//     await alert.dismiss();  // any other alerts other than "confirm" or "prompt" will be handled here and dismissed
//     }) 



//     //simple alert -> alert triggered
//     await page.locator(`(//span[text()="Show"])[1]`).click();
//     await page.waitForTimeout(3000)


//     //confirm alert -> alert triggered
//  //   await page.locator(`(//span[text()="Show"])[2]`).click();
//     await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator(`//span[text()="Show"]`).click()
//       await page.waitForTimeout(3000)


//      //prompt alert -> alert triggered
//   //  await page.locator(`(//span[text()="Show"])[5]`).click();
//    await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator(`//span[text()="Show"]`).click()
//       await page.waitForTimeout(3000)



// })
// ------------------------------------------------------------------------------------------------------------------------------------------------
import { test } from "@playwright/test";

test.only(`Test canara bank alerts`, async({page}) => {

    page.goto (`https://www.canarabank.bank.in/pages/net-banking`) ;

    page.on("dialog", async(alert) => {

        const message = alert.message();
        console.log(message);
        
        const Alerttype = alert.type();
        console.log(`This alert is ${Alerttype}`);

        await alert.accept();

    })
    
    await page.locator(`(//a[@id="netbanking-link"])`).click();

    await page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/canarabank.png`});

      await page.waitForTimeout(3000);

})

// import { test } from "@playwright/test" ;

// test.only(`Testing the windows handling`, async ({page, context}) => {
// const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.

// // (async () => {
//   //const browser = await webkit.launch();
//   //const context = await browser.newContext();
//   //const page = await context.newPage();
//   await page.goto('https://www.canarabank.bank.in/pages/net-banking');
//   await page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/canara.png`});
//   await page.waitForTimeout(3000);

//   //await browser.close();
// // })()
// });