import {test} from '@playwright/test';

test('example test', async ({page}) => {
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
})