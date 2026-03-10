import { test, expect } from '@playwright/test';

test('compose_and_send_mail', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://mail.google.com/');
  await page.getByRole('button', { name: 'Compose' }).click();
  await page.getByRole('textbox', { name: 'To recipients' }).fill('example@gmail.com');
  await page.getByPlaceholder('Subject').fill('Playwright Test Mail');
  await page.locator('//div[@aria-label="Message Body"]').fill('Hello, this is a simple automated mail sent using Playwright.');
  await page.getByRole('button').click();
  await expect(page.locator('text=Message sent')).toBeVisible();
  await page.screenshot({ path: `tests/date_10_03_26/screenshot/question_1_${Date.now()}.png`, fullPage: true });
});