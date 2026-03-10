import {test} from '@playwright/test'
test("Question 2", async({page})=>{
    await page.goto("https://www.lenskart.com/");
    await page.locator('//div[@class="sc-3b185ffd-2 bGQhWP"]').nth(4).hover();
    await page.locator('//a[@class="sc-2ea48804-9 byBHlR getGaData"]').nth(1).click();
    await page.screenshot({path: `tests/date_10_03_26/screenshot/question_2_${Date.now()}.png`});
})