

import { chromium, test } from "@playwright/test";

test(`Test to learn CSS Selectors`, async ({ page }) => { // {page}--> page    

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`input[id="username"]`).fill(`democsr2`) // input[id="username"] --> unique web elemnt to interact with username text box
    await page.locator(`#username`).fill(`democsr2`)

    await page.locator(`.inputLogin`).nth(0).fill(`democsr2`)

    await page.locator(`.inputLogin`).first().fill(`democsr2`)

    await page.locator(`input[id="password"]`).fill(`crmsfa`) // input[id="password"] --> unique web elemnt to interact with password text box
    await page.locator(`#passord`).fill(`crmsfa`)

    await page.locator(`.inputLogin`).nth(1).fill(`crmsfa`)
    await page.locator(`.inputLogin`).last().fill(`crmsfa`)
   
    await page.locator(`input[class="decorativeSubmit"]`).click()
    await page.locator(`.decorativeSubmit`).click()

    await page.waitForTimeout(3000)
})