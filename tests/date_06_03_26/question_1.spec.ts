import {test} from '@playwright/test';

test('Question 1', async ({page}) => {
  await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020/athletes');
  await page.locator('//button[@id="onetrust-accept-btn-handler"]').click();
  const athletes = await page.locator('//div[@class="sc-d8cd2c5-2 dPlqCj"]/child::h3[contains(text(),"Emma MCKEON")]/ancestor::div[@data-row-id="athlete-row-2"]/following-sibling::div[@data-row-id="medals-row-2"]/descendant::span[@data-cy="ocs-text-module"]').first();
  const medals = await athletes.textContent();
  console.log(medals);
  await page.screenshot({path: `tests/date_06_03_26/screenshot/question_1_${Date.now()}.png`}); 
})
//Question Write an XPath to find the number of Gold medals won by the athlete “Emma McKeon”
//I used first() to get the first element because there are multiple elements with the same data-cy attribute i can use index but using in playwright first() is more efficient and less prone to errors if the structure of the page changes.