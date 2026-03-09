import { test, expect } from '@playwright/test';

test('Question 1', async ({ page }) => {
  page.setDefaultTimeout(20000);
  await page.goto('https://demoapps.qspiders.com/ui/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByPlaceholder('Enter your email').fill('admin@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('admin@123');
  await expect(page.getByPlaceholder('Enter your email')).toHaveValue('admin@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Register')).toBeVisible();
  await page.screenshot({path: `tests/date_09_03_26/screenshot/question_1_${Date.now()}.png`})
});