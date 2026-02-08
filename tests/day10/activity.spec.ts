

import (test) from "playwright/test";

import logindata from "./login.json" ;


test ("Test salesforce using playwright json file", async ({page}) => {

    await page.goto(`https://login.salesforce.com/?locale=in`) ;

    await page.locator(`#username`).fill(logindata.Username) ;

    await page.locator(`#password`).fill(logindata.Password) ;

    await page.waitForTimeout(2000) ;

})