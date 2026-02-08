
import { test  } from "@playwright/test";


test(`Test to learn dropdown interaction`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);


    await page.locator(`//input[@id="username"]`).fill(`democsr2`);


    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);


    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),'CRM')]`).click();


    await page.locator(`//a[text()="Create Lead"]`).click();


    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Testleaf`);


    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Ravindran`);


    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");


    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_COLDCALL"}) // value


 //    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Cold Call"}) // label


     await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:1}) // index
 
    
    selectOption : part1(argument1) : identify the web element, part2(argument2);
    



    const dropdown = page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`); // 13 locators -> child locators
                                    
                                //[webElement1,....webElement13]


    const dropDownCount = await dropdown.count();
    
    for (let index = 0; index < dropDownCount; index++) {
       
        console.log( await dropdown.nth(index).innerText());
/* Note :


page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`); // array of 13 locators


page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(0).innerText() =>"Blank"
page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(1).innerText()=>Locator of "Cold call"
.
.
.page.locator(`//select[@id="createLeadForm_dataSourceId"]/option`).nth(12).innerText()=>Locator of "Word of Mouth"


*/       
}

} )

function part1(argument1: any) {
    throw new Error("Function not implemented.");
}
