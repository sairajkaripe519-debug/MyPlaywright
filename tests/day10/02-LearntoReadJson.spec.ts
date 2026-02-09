

// import {test} from "@playwright/test";

// import credentials from "./login.json" ;

// import path from "path";



// test.describe(`Login tests in serial mode`, async () => {

//     for (let data of credentials) {
//         test(`To test login using json file${data.TestcaseID}`, async ({page})=> {

//             await page.goto (`http://leaftaps.com/opentaps/control/main`);
            
//             await page.locator(`#username`).fill(`data.username`);

//             await page.locator(`#password`).fill(`data.password`);

//             await page.screenshot({path: `./downloads/screenshots/${data.TestcaseID}_Login.png`});

//             await page.waitForTimeout(2000);

//             await page.locator(`.decorativeSubmit"]`).click();

//             await page.waitForTimeout(4000);

//             await page.screenshot({path: `./Evidence/screenshots/${data.TestcaseID}_HomePage.png`});

//             await page.locator(`decorativeSubmit`).click();


// })
// }
// });

/* Internally while for of iteration below test cases get execute :

test(`Learn to read data from JSON file TC001`,async ({page}) => {
    

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username); // demoCSR2
    await page.locator(`#password`).fill(data.Password); // crmsfa

    await page.locator(`.decorativeSubmit`).click()
})

test(`Learn to read data from JSON file TC002`,async ({page}) => {
    

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username); // demoSalesManager
    await page.locator(`#password`).fill(data.Password); // crmsfa

    await page.locator(`.decorativeSubmit`).click()
})
*/

import { test } from "@playwright/test";

import logindata from "./login.json"

test.describe.serial(`Login tests in serial mode`, () => {
    
    for(let data of logindata) {

        test(`Learn to read data from JSON file ${data.TestcaseID}`, async ({page}) => {
            
            await page.goto(`http://leaftaps.com/opentaps/control/main`);

            await page.locator(`#username`).fill(data.username);
            await page.locator(`#password`).fill(data.password);

            await page.locator(`.decorativeSubmit`).click();
        })
    }
})