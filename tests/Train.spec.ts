

import { test} from '@playwright/test';

// test.skip(`To tst Nested frames - Gemini code`, async ({page}) => {


//     // 1. Launch the browser
//     // const browser = await chromium.launch({ headless: false });
//     // const page = await browser.newPage();

//     // 2. Navigate to the Leafground frames page
//     await page.goto('https://leafground.com/frame.xhtml');

//     // --- TASK 1: COUNT THE FRAMES ---
    
//     // logic: page.frames() returns an array of all frame objects (Main Page + All Iframes)
//     const allFrames = page.frames();
//     const frameCount = allFrames.length;

//     console.log(`Total Frame Objects detected: ${frameCount}`);
//     console.log(`(This includes the Main Page itself, so actual <iframe> count is: ${frameCount - 1})`);

//     // --- TASK 2: INTERACT WITH THE NESTED FRAME ---
    
//     // The screenshot shows a nested structure: 
//     // Outer Frame (src="page.xhtml") -> Inner Frame (src="framebutton.xhtml") -> Button (#Click)

//     // Step A: Locate the outer wrapper frame
//     const wrapperFrame = page.frameLocator('[src="page.xhtml"]');

//     // Step B: Locate the inner frame inside the wrapper
//     const innerFrame = wrapperFrame.frameLocator('[src="framebutton.xhtml"]');

//     // Step C: Click the button inside the nested frame
//     // Note: The DOM shows the button has id="Click"
//     await innerFrame.locator('#Click').click();
//     console.log("Successfully clicked the button inside the nested frame!");

//     // Optional: Pause to see the result
//     await page.waitForTimeout(5000);

//     // 3. Close the browser
//     // await browser.close();
//  });

// //--------------------------------------------------------------------------------------------------------------------------------------------

// //To get the count of frames and interact with nested frames

// //import {test} from "@playwright/test" ;

// test.skip(`To get the count of frames and interact with nested frames`, async ({page}) => {

//     await page.goto(`https://leafground.com/frame.xhtml`)

//     const Frame1 = page.frameLocator(`[src="default.xhtml"]`);

//     await Frame1.locator("#Click").click();

//     await page.screenshot({path:`/Users/sairajkarpe/Sairaj Education/MyPlaywright/Evidence/screenshots/frame1.png`}) ;

//     await page.waitForTimeout(3000) ;

//     const Frame2 = page.frameLocator(`[src="nested.xhtml"]`);

//     await Frame2.locator("#Click").click();

//     await page.screenshot({path:`/Users/sairajkarpe/Sairaj Education/MyPlaywright/Evidence/screenshots/frame2.png`}) ;

//     await page.waitForTimeout(3000) ;   

//     const Outer_Frame =  page.frameLocator(`[src="page.xhtml"]`);

//     const Nested_Inner_frame =  Outer_Frame.frameLocator(`[src="framebutton.xhtml"]`) ;

//     await Nested_Inner_frame.locator("#Click").click();

//     await page.screenshot({path:`/Users/sairajkarpe/Sairaj Education/MyPlaywright/Evidence/screenshots/frame3.png`}) ;

//     await page.waitForTimeout(3000) ;

//     const TotalFrames : any[] = page.frames();

//     const Total_Frames_Count = TotalFrames.length;

//     await page.waitForTimeout(3000) ;

//     console.log(`Total number of Frames is ${Total_Frames_Count}`);

//     console.log(`Actual Number of frames is ${Total_Frames_Count - 1}  because the main page is also considered as a frame`);


// }) ;

//--------------------------------------------------------------------------------------------------------------------------------------------

//import {test} from "@playwright/test" ;

test.only(`To test OneIndia website for frames`,async ({page}) => {

    await page.goto(`https://www.oneindia.com/", waiting until "load`) ;

    await page.waitForTimeout(3000) ;

    const Frameset = page.frames();

    const Frames_Count = Frameset.length;

    console.log(`Total count of frames in one india website is ${Frames_Count} as of feb 11 2026`);
    
});