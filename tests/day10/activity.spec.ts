

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


import {test, expect } from "@playwright/test" ;

import logincreds from "./LoginSF.json";

test.describe.serial(`Salesforce Login and Disable OTP`, async () => {

    for (let data of logincreds) {

        test(`Login to Salesforce and Disable OTP - ${data.TestcaseID}`, async ({page}) => {

            // Step 1: Navigate to Salesforce login page
            await page.goto(`https://login.salesforce.com/?locale=in`);
            await page.waitForLoadState('networkidle');

            // Step 2: Fill login credentials
            await page.locator(`#username`).fill(data.UserID);
            await page.locator(`#password`).fill(data.Password);

            // Step 3: Check remember username if available
            const rememberCheckbox = await page.locator(`#rememberUn`);
            if (await rememberCheckbox.isVisible()) {
                await rememberCheckbox.click();
            }

            // Step 4: Click login button
            await page.locator(`#Login`).click();
            await page.waitForNavigation({ waitUntil: 'networkidle' });

            // Step 5: Handle OTP/2FA if prompted
            // Check if OTP prompt appears
            const otpPrompt = await page.locator('text=/Verify|Code|OTP|Passcode/i').isVisible().catch(() => false);
            
            if (otpPrompt) {
                console.log('OTP prompt detected, attempting to dismiss...');
                // Try to skip or dismiss OTP if possible
                const skipButton = await page.locator('button:has-text("Skip"), button:has-text("Not now")').first().isVisible().catch(() => false);
                if (skipButton) {
                    await page.locator('button:has-text("Skip"), button:has-text("Not now")').first().click();
                    await page.waitForNavigation({ waitUntil: 'networkidle' });
                }
            }

            // Step 6: Navigate to Security Settings
            // Click on user profile menu
            const profileMenu = await page.locator('[aria-label*="profile"], [aria-label*="user"]').first().isVisible().catch(() => false);
            if (profileMenu) {
                await page.locator('[aria-label*="profile"], [aria-label*="user"]').first().click();
                await page.waitForTimeout(1000);
            } else {
                // Alternative: Use Settings menu
                await page.click('a[href*="settings"], button:has-text("Settings")');
            }

            // Step 7: Navigate to My Account or Security Settings
            await page.click('a:has-text("My Account"), a:has-text("Account Settings"), a:has-text("Security")');
            await page.waitForNavigation({ waitUntil: 'networkidle' });

            // Step 8: Find and disable OTP/MFA
            // Look for OTP or Two-Factor Authentication settings
            const otpSection = await page.locator('text=/OTP|Multi-Factor|Two-Factor|MFA|Authenticator/i').first().isVisible().catch(() => false);
            
            if (otpSection) {
                const otpHeading = await page.locator('text=/OTP|Multi-Factor|Two-Factor|MFA|Authenticator/i').first();
                await otpHeading.scroll({ align: 'center' });

                // Look for disable button or toggle
                const disableButton = await page.locator('button:has-text("Disable"), button:has-text("Remove"), button:has-text("Delete")').first().isVisible().catch(() => false);
                
                if (disableButton) {
                    await page.locator('button:has-text("Disable"), button:has-text("Remove"), button:has-text("Delete")').first().click();
                    await page.waitForTimeout(1000);

                    // Confirm disabling if confirmation dialog appears
                    const confirmButton = await page.locator('button:has-text("Confirm"), button:has-text("Yes"), button:has-text("OK")').first().isVisible().catch(() => false);
                    if (confirmButton) {
                        await page.locator('button:has-text("Confirm"), button:has-text("Yes"), button:has-text("OK")').first().click();
                        await page.waitForTimeout(1500);
                    }
                }
            }

            // Step 9: Take final screenshot
            await page.screenshot({path: `./Evidence/screenshots/OTP_Disabled_${data.TestcaseID}.png`});

        });
    }
});