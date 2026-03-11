import { test, expect } from '@playwright/test';
test("Question 1", async ({ page }) => {
    await page.goto("https://www.automationtesting.co.uk/dropdown.html");
    const cars = await page.locator("//select[@id='cars']/option").all();
    await page.screenshot({path: `tests/date_11_03_26/screenshot/question_1${Date.now()}.png`});

    const expected = ["Audi","BMW","Ford","Honda","Jeep","Mercedes","Suzuki","Volkswagen"];
    const actual = [];
    for (const car of cars) {
        const brand = await car.textContent();
        actual.push(brand?.trim());   
    }
    await expect(actual).toEqual(expected);


});