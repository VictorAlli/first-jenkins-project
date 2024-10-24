import { expect, test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
//go to https://practice.cydeo.com
    await page.goto('https://practice.cydeo.com');

    //get the title of the page

    let pageTitle = await page.title();

    //print the title of the page
    console.log(pageTitle);

    //expect the title to be "Practice"
    
    expect(pageTitle).toBe("Practice");


});

test('Getting the current URL of the page', async ({ page }) => {
    //go to https://practice.cydeo.com
    await page.goto('https://practice.cydeo.com');

    //get the current URL of the page

    let currentURL = page.url();

    //print the current URL of the page
    console.log(currentURL);

    //expect the current URL to be "https://practice.cydeo.com/"
    
    expect(currentURL).toBe("https://practice.cydeo.com/");

   
});

test('Set the windows size', async ({ page }) => {
    //go to https://practice.cydeo.com
    await page.goto('https://practice.cydeo.com');

    //set the window size to 1920x1080

    await page.setViewportSize({ width: 1920, height: 1080 });

    //expect the window size to be 1920x1080
    
    expect(page.viewportSize()).toEqual({ width: 1920, height: 1080 });
     
});