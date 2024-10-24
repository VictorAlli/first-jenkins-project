import { test } from '@playwright/test';

test('', async ({ page }) => {

    await page.goto("https://www.youtube.com");
 

    let rejectAllButton= page.locator("(//div[@class='yt-spec-touch-feedback-shape__fill'])[8]");
   
        await rejectAllButton.click();


    let searchBar = page.locator("//input[@id='search']");

    await searchBar.click();

    await page.waitForTimeout(2000);

    await searchBar.fill("CYDEO");


    await searchBar.press("Enter");


    let firstVideo = page.locator("//a[@id='video-title' and contains(@title, 'Is AI killing software quality assurance jobs?')]");

    await firstVideo.click();






    

});

