

import { test, expect } from "@playwright/test" ;

test ( 'To test interaction with PVR ',async ({page}) => {

    await page.goto ( `https://www.pvrcinemas.com/`) ;

    // await page.locator (`//input[@class = "p-dropdown p-component p-inputwrapper custom-icon"]`).click();
    // await page.locator (`//div[@class="show-desktop-view"]`).click();
    // await page.locator (`//span[@id="city"]`).fill(`Nizamabad`);
    // await page.locator (`//li[@role="option"]`).click();
    
    await page.locator (`//span[contains(text(),'Nizamabad')]`).click();

    await page.locator (`//span[contains(text(),'OM SHANTHI (SHANTI..SH...')]`).click();

    await page.locator (`//div[@class="dates-pvr-active"]`).click();

    // await page.locator (`(//div[@class="show-details-icon"]//h5)[1]`).click();

    // await page.locator (`//button[@class="sc-kCuUfV iBvycX reject-terms"]`).click();

    // await page.locator (`//li[contains(text(),'Back')]`).click();

    await page.locator (`(//div[@class="show-details-icon"]//h5)[2]`).click();

    await page.locator (`//button[@class="sc-kCuUfV iBvycX reject-terms"]`).click();

    // await page.locator (`//i[@class="pi pi-times"]`).click();

    // await page.locator (`//li[contains(text(),'Back')]`).click();

    // await page.locator (`//span[contains(text(),'Movie')]`).click();

    // await page.locator (`(//div[@class="p-dropdown-trigger"])[2]`)

    // await expect(page.locator(``))



    // for ( const rowletter of RowsToCheck) {

    //     const availableseatsXpath = `//tr[contains(@class, 'seats-row')][.//span[text() = '${rowletter}']] //a[not(contains(@class,'booked')) and not(contains(@class,'blocked'))]`;

    //     const availableseats = 'page.locator (availableseatsXpath)';

    //     const count = await availableseats.count();

    //     console.log(`Row ${rowletter}:found ${count} availableseats.`) ;

    //     await expect(page.locator ('availableseats, No seats available in Row $ {rowletter})')).not.toHaveCout(0);
    
    // }

    await expect(page.locator (``))



}
)

