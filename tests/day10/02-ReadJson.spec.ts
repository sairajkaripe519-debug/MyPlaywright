

// import {test } from "@playwright/test";

// import loginData from "./login.json";

// test.describe.serial(`Data driven testing using JSON file`, async() => {

// for ( let data of loginData){

// test (`Learn to read data from json file ${data.TestcaseID}`, async ({page}) => {

//     await page.goto(`http://leaftaps.com/opentaps/control/main`);

//     await page.locator(`#username`).fill(data.username);

//     await page.locator(`#password`).fill(data.password);

//     await page.waitForTimeout(2000);

//     await page.screenshot({path: `./downloads/screenshots/${data.TestcaseID}.png`});

//     await page.locator(`.decorativeSubmit`).click();


// })
// }
// });
// ----------------------------------------------------------------------------------------------------------------------------------
import {test } from "@playwright/test";

import loginData from "./login.json";

test.describe.parallel(`Data driven testing using JSON file`, async() => {

for ( let data of loginData){

test (`Learn to read data from json file ${data.TestcaseID}`, async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.username);

    await page.locator(`#password`).fill(data.password);

    await page.waitForTimeout(2000);

    await page.screenshot({path: `./downloads/screenshots/${data.TestcaseID}.png`});

    await page.locator(`.decorativeSubmit`).click();


})
}
});