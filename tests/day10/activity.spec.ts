

// // import {test} from "playwright/test";

// // import {parse} from "csv-parse/sync";

// // import fs from "fs";

// // import path from "path";

// // const logindata : any[] = parse(fs.readFileSync(path.join(__dirname, `login.csv`)), {
// //     columns: true,
// //     skip_empty_lines: true
// // })
// // test.describe.serial(`Data driven testing using CSV file`, async() => {

// // for ( let data of logindata){

// // test (`Learn to read data from json file ${data.TestcaseID}`, async ({page}) => {

// //     await page.goto(`https://login.salesforce.com/?locale=in`) ;

// //     await page.locator(`#username`).fill(data.username);

// //     await page.locator(`#password`).fill(data.password);

// //     await page.waitForTimeout(2000);

// //     await page.screenshot({path: `./Evidence/screenshots/${data.TestcaseID}.png`});

// //     await page.locator(`.decorativeSubmit`).click();


// // })
// // }
// // });

// import { test } from "@playwright/test";

// import credentials from "../../Data/login.json"

// test.describe.parallel(`Login tests in serial mode`,async () => {
    
// for(let data of credentials){

// test(`Learn to read data from JSON file ${data.TCaseId}`,async ({page}) => {
    
//     await page.goto(`http://leaftaps.com/opentaps/control/main`);

//     await page.locator(`#username`).fill(data.Username); // demoSalesManager
//     await page.locator(`#password`).fill(data.Password);

//     await page.locator(`.decorativeSubmit`).click()
// })

// }
// })

// /* Internally while for of iteration below test cases get execute :

// test(`Learn to read data from JSON file TC001`,async ({page}) => {
    

//     await page.goto(`http://leaftaps.com/opentaps/control/main`);

//     await page.locator(`#username`).fill(data.Username); // demoCSR2
//     await page.locator(`#password`).fill(data.Password); // crmsfa

//     await page.locator(`.decorativeSubmit`).click()
// })

// test(`Learn to read data from JSON file TC002`,async ({page}) => {
    

//     await page.goto(`http://leaftaps.com/opentaps/control/main`);

//     await page.locator(`#username`).fill(data.Username); // demoSalesManager
//     await page.locator(`#password`).fill(data.Password); // crmsfa

//     await page.locator(`.decorativeSubmit`).click()
// })
// */


// import {test,expect } from "@playwright/test"

// import logincreds from "./LoginSF.json";

// test.describe.serial(`Login using Json`, async () => {

//     for (let data of logincreds) {

// test(`Learn login using Json file ${data.TestcaseID}`, async ({page}) =>{

//     await page.goto(`https://login.salesforce.com/?locale=in`);

//     await page.locator(`#username`).fill(data.UserID);

//     await page.locator(`#password`).fill(data.Password);

//     await page.waitForTimeout(2000);

//     expect (await page.locator(`#rememberUn`)).toBeVisible();

//     await page.locator(`#rememberUn`).click();

//     await page.screenshot({path: `./Evidence/screenshots/${data.TestcaseID}.png`});

//     await page.locator(`#Login`).click();


// })
// }
// });


import {test,expect } from "@playwright/test" ;

import {parse} from "csv-parse/sync" ;

import fs from "fs" ;

import path from "path" ;

const LogDetails : any[] = parse(fs.readFileSync(path.join(__dirname,`LoginSF.csv`)), {
    columns : true,
    skip_empty_lines : true
})

test.describe.serial(`Login With CSV`, async () => {

    for (let data of LogDetails) {


test(`TO Test using CSV file ${data.TestcaseID}`,async ({page}) => {

    await page.goto(`https://login.salesforce.com/?locale=in`) ;

    await page.locator(`#username`).fill(data.Username);

    await page.locator(`#password`).fill(data.Password);

    await page.waitForTimeout(2000);

   const RemeberMeBox = await page.locator(`#rememberUn:visible()`).isVisible()

   if (RemeberMeBox) { await page.locator(`#rememberUn`).isvisible() 
    then 
   }
    
    await page.locator(`#rememberUn`).click();

    await page.screenshot({path:`./Evidence/screenshots/${data.Username}.png`});

    await page.waitForTimeout(2000);

    await page.locator(`#Login`).click();

}) 
} 
} ) ;