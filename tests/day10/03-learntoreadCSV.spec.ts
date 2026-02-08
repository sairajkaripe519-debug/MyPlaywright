
import {test } from "@playwright/test";

import {parse} from "csv-parse/sync";

import fs from "fs";

const logindata : any[] = parse(fs.readFileSync(`./tests/day10/login.csv`), {
    columns: true,
    skip_empty_lines: true
})

//import logindata from "./login.csv";

test.describe.serial(`Data driven testing using CSV file`, async() => {

for ( let data of logindata){

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