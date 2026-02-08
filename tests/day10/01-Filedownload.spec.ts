

import {test} from '@playwright/test';
import path from 'path';

// test (`Learn to automate file download`, async ({page}) => {

//     await page.goto(`https://leafground.com/file.xhtml`);

//     const filepromise = page.waitForEvent(`download`); // download event will be triggered when we click on the download button

//     await page.getByText(`Download`,{exact:true}).click();

//     const fdown = await filepromise

//     // await fdown.saveAs(`./downloads/leafgroundfiledownload.png`); // relative path -- Not recommended

//     await fdown.saveAs(path.join(__dirname,`../downloads/leafgroundfiledownload.png`)); // absolute path -- recommended

//     //console.log(__dirname);

//     //await page.screenshot({path:`./downloads/screenshots/leafgroundfiledownload.png`});
    
//     await page.waitForTimeout(5000);

// });
    

// import  {test}  from "@playwright/test"
// import path from "path/win32";

test.only(`Learn how to upload a file `, async ({page}) =>{

    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadfile =  page.locator(`(//input[@type="file"])[1]`)

    await page.locator(`(//input[@type="file"])[1]`).click();

    await uploadfile.setInputFiles(path.join(__dirname,'./../../Evidence/Learningfileupload.png')); 

    await page.waitForTimeout(2000);
});
    //case 2 - when we dont have type = file in DOM - mine

// test(`Learn how to upload a file when there is no type=file in DOM`, async ({page}) => {

//     await page.goto(`https://the-internet.herokuapp.com/upload`);

//     const filepromise = page.waitForEvent ("filechooser");

//     await page.locator(`//div[@id="drag-drop-upload"]`).click();

//     const fileupload = await filepromise;

//     await fileupload.setFiles(path.join(__dirname,`./Evidence/02-windowHandling.txt`));

//     await page.waitForTimeout(4000);

// })

// import { test  } from "@playwright/test";

// import {path} from "path";

// test(`File Upload - DOM without type="file"`,async ({page}) => {
    


//     await page.goto(`https://the-internet.herokuapp.com/upload`);

//     await page.waitForTimeout(3000);

//     const filePromise = page.waitForEvent("filechooser"); // listner for upload action


//     await page.locator(`//div[@id="drag-drop-upload"]`).click();


//     const fileUpload = await filePromise


//     await fileUpload.setFiles(path.join(__dirname,'./Evidence/02-windowHandling.txt'))
    
//     await page.waitForTimeout(3000);


// });