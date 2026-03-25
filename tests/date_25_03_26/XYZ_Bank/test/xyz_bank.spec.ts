import { test, expect } from '@playwright/test';
import Create_acc from '../POM/create_acc.page.ts';
import Customer_action from '../POM/customer_action.page.ts';
import path from "path"
import fs from 'fs'
const jsondata=fs.readFileSync(path.join(__dirname,"../Utility/url.json"),"utf-8")
const url=JSON.parse(jsondata)

test.use({
    launchOptions:{
        slowMo:500
    }
})

test('XYZ Bank', async ({ page }) => {
    page.on('dialog',async d=>{
        await d.accept()
    })
    await page.goto(url.url)
    const addCustomerPage=new Create_acc(page)
    await addCustomerPage.add_custm();
    await addCustomerPage.Open_acc();

    const custm_action=new Customer_action(page)
    await custm_action.custm_login()
    await custm_action.custm_deposit()
    await custm_action.custm_withdraw()
});
