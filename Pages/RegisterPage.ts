import { expect, Page } from "@playwright/test";
export default class RegisterPage {
    constructor(private page: Page) {
        this.page = page;
    }

    //locators
    createAccountButton = "//a[contains(text(),'Create an Account')]"
     firstNameInput = "//input[@id='firstname']"
     lastNameInput = "//input[@id='lastname']"
     emailInput = "//input[@id='email_address']"
     passwordInput = "//input[@id='password']"
     confirmPasswordInput = "//input[@title='Confirm Password']"
     submitToCreateAccountButton ="//button[@type='submit' and @class='action submit primary']";
     thanksMessage="//div[contains(@class,'message-success') and contains(.,'Thank you for registering')]";

    //actions
    async goToWebsite() {
        await this.page.goto("/");
    }
    async fillFirstName(firstName: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
    }
    async fillLastName(lastName: string) {
        await this.page.locator(this.lastNameInput).fill(lastName);
    }
    async fillEmail(email: string) {
        await this.page.locator(this.emailInput).fill(email);
    }
    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }
    async fillConfirmPassword(confirmPassword: string) {
        await this.page.locator(this.confirmPasswordInput).fill(confirmPassword);
    }
    async clickCreateAccountButton() {
        await this.page.locator(this.createAccountButton).first().click();
    }
    async clickSubmitToCreateAccountButton() {
        await this.page.locator(this.submitToCreateAccountButton).first().click();
    }
    //methods
    async register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
        await this.clickCreateAccountButton();
        await this.page.waitForTimeout(500);
        await this.fillFirstName(firstName);
        await this.page.waitForTimeout(500);
        await this.fillLastName(lastName);
        await this.page.waitForTimeout(500);
        await this.fillEmail(email);
        await this.page.waitForTimeout(500);
        await this.fillPassword(password);
        await this.page.waitForTimeout(500);
        await this.fillConfirmPassword(confirmPassword);
        await this.page.waitForTimeout(500);
        await this.clickSubmitToCreateAccountButton();
        await this.page.waitForTimeout(2000);
        await this.page.waitForURL('**/customer/account/**');
    }
    
    //assertion
    async checkThanksMessage()
    {
        const register = this.page.locator(this.thanksMessage).first();
        await expect(register).toBeVisible();
    }
   
    
}