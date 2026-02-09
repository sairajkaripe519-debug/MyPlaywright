
import {test } from "@playwright/test";

import {parse} from "csv-parse/sync";

import fs from "fs";
import path from "path";

const logindata : any[] = parse(fs.readFileSync(path.join(__dirname, `login.csv`)), {
    columns: true,
    skip_empty_lines: true
})

//import logindata from "./login.csv";

test.describe.serial(`Data driven testing using CSV file`, async() => {

for ( let data of logindata){

test (`Learn to read data from CSV file ${data.TestcaseID}`, async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.username);

    await page.locator(`#password`).fill(data.password);

    await page.waitForTimeout(2000);

    await page.screenshot({path: `./Evidence/screenshots/${data.TestcaseID}.png`});

    await page.locator(`.decorativeSubmit`).click();


})
}
});

