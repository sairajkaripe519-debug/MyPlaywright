

import { test } from "@playwright/test" ;

test.only(`Testing the windows handling`, async ({page, context}) => {

    await page.goto(`https://www.flipkart.com/`);

    const Searchbox = await page.getByPlaceholder("Search for Products, Brands and More");

    

    await page.waitForTimeout(3000);

    await Searchbox.fill(`Iphone`);

    await page.waitForTimeout(3000);

    await page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/flipkart.png`});

    await Searchbox.press("Enter");

    // const newpage = context.waitForEvent(`page`);

    // await page.locator(`//div[text()="Apple iPhone 16 (Black, 128 GB)"]`).click();

    // const childpage = await newpage

    const [childpage] = await Promise.all([context.waitForEvent(`page`)],page.locator(`//div[text()="Apple iPhone 16 (Black, 128 GB)"]`).click() );

    

    console.log(await childpage.title());

    await page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/flipkart_child.png`});

    // console.log(await page.title());

    // console.log(await childpage.title());

    await page.bringToFront();

    //await page.locator(`//div[text()="Electronics"]`).click();

    await Promise.all([page.locator(`//span[text()="Electronics"]`).click(), page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/flipkart_electronics.png`})]);

    //await page.screenshot({path: `/Users/sairajkarpe/Sairaj Education/MyPlaywright/tests/day09/flipkart_electronics.png`});

    await page.waitForTimeout(3000);

    await childpage.bringToFront();

})


// import {test} from "@playwright/test"


// test.only(`Test to handle multiple windows `, async({page, context}) => {

//     await page.goto(`https://leafground.com/window.xhtml`);

//     await Promise.all ([context.waitForEvent("page"), page.getByText(`Open Multiple`,{exact:true}).click()]);

//     const allpages = context.pages();

//     await page.waitForLoadState("domcontentloaded")

//     console.log(await allpages[0].title());
    
//     console.log(await allpages[1].title());

//     console.log(await allpages[2].title());
    
    
// })