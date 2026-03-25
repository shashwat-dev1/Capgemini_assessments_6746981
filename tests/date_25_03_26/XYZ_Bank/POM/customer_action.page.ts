import {Page,Locator,expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

const jsondata1=fs.readFileSync(path.join(__dirname,"../Utility/customer_action.json"),"utf-8")
const CustmActon=JSON.parse(jsondata1)
const jsondata2=fs.readFileSync(path.join(__dirname,"../Utility/create_acc.json"),"utf-8")
const CustmData=JSON.parse(jsondata2)

class Customer_action{
    page:Page
    HomeURL:Locator
    CustomerLoginBTN: Locator
    YourName:Locator
    Login:Locator
    Deposit:Locator
    amt_deposit:Locator
    depositBTN:Locator
    Withdraw:Locator
    amt_withdraw:Locator
    withdrawBTN:Locator
    Custm_data:any=CustmData
    action_data:any=CustmActon
    balance:Locator
    constructor(page:Page){
        this.page=page
        this.HomeURL=page.locator('//button[@ng-click="home()"]')
        this.CustomerLoginBTN=page.locator('//button[@ng-click="customer()"]')
        this.YourName=page.locator('#userSelect')
        this.Login=page.getByRole('button',{name:'Login'})
        this.Deposit=page.locator('//button[@ng-click="deposit()"]')
        this.amt_deposit=page.getByPlaceholder('amount')
        this.depositBTN=page.getByRole("button",{name:"Deposit"}).last()
        this.Withdraw=page.locator('//button[@ng-click="withdrawl()"]')
        this.amt_withdraw=page.getByPlaceholder('amount')
        this.withdrawBTN=page.getByRole('button',{name:'Withdraw'}).last()
        this.balance=page.locator('(//div[@ng-hide="noAccount"]/strong)[2]')
    }
    async custm_login(){
        await this.HomeURL.click()
        await this.CustomerLoginBTN.click()
        await this.YourName.selectOption({label:`${this.Custm_data.firstname} ${this.Custm_data.Lastname}`})
        await this.Login.click()
    }
    async custm_deposit(){
        await this.Deposit.click()
        await this.amt_deposit.fill(this.action_data.deposit)
        await this.depositBTN.click()
        const balanceamt=this.balance
        await expect(balanceamt).toHaveText(this.action_data.deposit)
    }
    async custm_withdraw(){
        await this.Withdraw.click()
        await this.amt_withdraw.fill(this.action_data.withdraw)
        await this.withdrawBTN.click()
        const balanceamt=this.balance
        await expect(balanceamt).toHaveText(this.action_data.after_withdraw)
    }
}
export default Customer_action