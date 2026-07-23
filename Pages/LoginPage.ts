import { expect, Page } from "@playwright/test";
import Credentials from "../utils/Credentials";

export default class LoginPage {

    constructor(private page: Page) {
        this.page = page;
    }

    //locators
    emailInput = "//input[@title='Email']"
    signInButton = "//a[contains(text(),'Sign In')]"
    passwordInput = "//input[contains(@name,'login[password]')]"
    loginButton = "//button[@type='submit' and @class='action login primary']"


    //actions
    async goToWebsite() {
        await this.page.goto('/');
    }
    async clickSignInButton() {
        await this.page.locator(this.signInButton).first().click();
    }
    async fillEmail(email: string) {
        await this.page.locator(this.emailInput).fill(email);
    }
    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }
    async clickLoginButton() {
        await this.page.locator(this.loginButton).first().click();
    }
    
    //methods
    async login(email: string, password: string) {
        await this.clickSignInButton();
        await this.page.waitForTimeout(1000);
        await this.fillEmail(email);
        await this.page.waitForTimeout(500);
        await this.fillPassword(password);
        await this.page.waitForTimeout(500);
        await this.clickLoginButton();
    }
    //assertion
    async checkWelcomeMessage(){
       const welcomeMessage = `//span[@class='logged-in' and contains(text(),'Welcome, ${Credentials.getFirstName()} ${Credentials.getLastName()}!')]`;
       const temp = this.page.locator(welcomeMessage).first();
       await expect(temp).toBeVisible();
    }
}