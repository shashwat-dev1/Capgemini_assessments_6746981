import {test} from '@playwright/test'

test("test2", async({page,browserName})=>{
    await page.goto('https://mail.google.com/');
    await page.locator('//div[@jscontroller="eIu7Db"]').click();
    await page.keyboard.type('shashwatjain739@gmail.com');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Shashwat Sends his regards.');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('Hope you are well brother.');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Thanking you,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('yours truly,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Shashwat Jain');
    await page.keyboard.press('Enter');

    await page.keyboard.press('Tab');
    await page.screenshot({path: `tests/date_10_03_26/screenshot/question_1_1${Date.now()}.png`});
    await page.keyboard.press('Enter');

    await page.screenshot({path: `tests/date_10_03_26/screenshot/question_1_2${Date.now()}.png`});
})