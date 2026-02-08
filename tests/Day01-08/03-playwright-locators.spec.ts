

// import { test } from "@playwright/test";


// test(`Learn playwright locators`,async ({page}) => {
    
// await page.goto(`https://login.salesforce.com/?locale=in`);


// await page.getByAltText("Salesforce").isVisible();


// await page.getByRole("textbox",{name:"Username"}).fill(`dilipkumar.rajendran@testleaf.com`);
// //await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")


// await page.getByText("Username",{exact:true}).fill(`dilipkumar.rajendran@testleaf.com`)



// await page.getByRole("textbox",{name:"Password"}).fill(`TestLeaf@2025`);


// await page.getByRole("button",{name:"Log In"}).click();


// await page.getByTitle("App Launcher",{exact:true}).click();


// await page.getByRole("button",{name:"View All Applications"}).click();


// await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads")


// await page.waitForTimeout(3000)


// })


//await page.getByTitle("View profile",{exact:true}).click();

import { test  } from "@playwright/test" ;

test (`test to learn locators`,async( { page } ) => {

    await page.goto (`http://leaftaps.com/opentaps/control/main`) ;

    await page.getByAltText(`/opentaps_images/opentaps_logo.png`).isVisible();

    await page.getByRole("textbox",{name : "Username"}).fill(`democsr2`);

    await page.getByRole("textbox",{name : "Password"}).fill(`crmsfa`);

    await page.getByRole("button",{name : "Login"}).click();

    await page.getByRole("button",{name:"crmsfa"}).click();

    //await page.waitForTimeout(3000);

    await page.getByTestId("Logout").click();

    //await page.getByRole("button",{name: "Logout"}).click();

}) 

