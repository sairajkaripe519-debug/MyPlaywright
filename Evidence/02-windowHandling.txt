import { test } from "@playwright/test";

test(`Learn window handling sequential`, async ({ page, context }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`)

    await searchBox.fill(`Phones`);

    await searchBox.press("Enter");

    const newPage = context.waitForEvent('page') // enable a listener before an event occurs // click action

    await page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()

    const childPage = await newPage

    console.log(await page.title());

    console.log(await childPage.title());

    await page.bringToFront(); // page => parent page

    await page.locator(`//span[text()="Electronics"]`).click()

    await page.waitForTimeout(3000)

    await childPage.bringToFront();

})



test(`Learn window handling concurrent method`, async ({ page, context }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`)

    await searchBox.fill(`Phones`);

    await searchBox.press("Enter");

    // const newPage = context.waitForEvent('page') // enable a listener before an event occurs // click action

    // await page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()

    // const childPage = await newPage

    const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()]) // array of promise resolved
    //Here the pages are captured usiung the concept called destructuring of array to resolve the promise of all the actions performed

    console.log(await childPage.title());

    await page.bringToFront(); // page => parent page

    await page.locator(`//span[text()="Electronics"]`).click()

    await page.waitForTimeout(3000)

    await childPage.bringToFront();

})



test.only(`Multiple pages window handling`, async ({ page, context }) => {

    await page.goto(`https://leafground.com/window.xhtml`);

    await Promise.all([context.waitForEvent("page"), page.getByText(`Open Multiple`, { exact: true }).click({timeout:3000})]);

    const allPages = context.pages();

    await page.waitForLoadState("domcontentloaded");

    console.log(await allPages[0].title()); // allPages[0] => parent page reference

    console.log(await allPages[1].title()); // allPages[1] => childPage one ref

    console.log(await allPages[2].title());// allPages[2] => childPage two ref


})




