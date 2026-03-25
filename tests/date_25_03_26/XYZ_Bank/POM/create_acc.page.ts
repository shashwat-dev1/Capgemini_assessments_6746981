import {Page,Locator,expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

const jsondata=fs.readFileSync(path.join(__dirname,"../Utility/create_acc.json"),"utf-8")
const CustmData=JSON.parse(jsondata)

class Create_acc{
    page:Page
    bankmanagerlogin: Locator
    addcustm:Locator
    firstname:Locator
    Lastname:Locator
    Postcode: Locator
    addcustmBTN:Locator
    openacc:Locator
    Customer:Locator
    Currency:Locator
    processBTN:Locator
    data:any=CustmData
    constructor(page:Page){
        this.page=page
        this.bankmanagerlogin=page.locator('//button[@ng-click="manager()"]')
        this.addcustm=page.locator('//button[@ng-click="addCust()"]')
        this.firstname=page.getByPlaceholder('First Name')
        this.Lastname=page.getByPlaceholder('Last Name')
        this.Postcode=page.getByPlaceholder('Post Code')
        this.addcustmBTN=page.getByRole('button',{name:'Add Customer'}).nth(1)
        this.openacc=page.locator('//button[@ng-click="openAccount()"]')
        this.Customer=page.locator('#userSelect')
        this.Currency=page.locator('#currency')
        this.processBTN=page.getByRole('button',{name:'Process'})
    }

    async add_custm(){
        await this.bankmanagerlogin.click()
        await this.addcustm.click()
        await this.firstname.fill(this.data.firstname)
        await this.Lastname.fill(this.data.Lastname)
        await this.Postcode.fill(this.data.Postcode)
        await this.addcustmBTN.click()
    }
    async Open_acc(){
        await this.openacc.click()
        await this.Customer.selectOption({label:`${this.data.firstname} ${this.data.Lastname}`})
        await this.Currency.selectOption("Rupee")
        await this.processBTN.click()
    }
    
}
export default Create_acc 