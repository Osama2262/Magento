import { expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
export default class CheckoutPage
{
    constructor(private page:Page)
    {
        this.page=page;
    }

    //locators 
    checkOutButton = "//button[@title='Proceed to Checkout']"
    firstName = "//input[contains(@name,'firstname')]"
    lastName = "//input[contains(@name,'lastname')]"
    company ="//input[@name='company']"
    streetAddress = "//input[@name='street[0]']"
    state = "//select[@name='region_id']"
    city = "//input[contains(@name,'city')]"
    postalCode = "//input[contains(@name,'postcode')]"
    phoneNumber = "//input[@name='telephone']"
    cartIcon = "//a[@class='action showcart']"
    shippingMethods = "//input[@value='flatrate_flatrate']"
    nextButton = "//span[contains(.,'Next')]"
    placeOrder ="//span[contains(.,'Place Order')]"
    thanksMessage = "//span[contains(.,'Thank you for your purchase!')]"
    checkOutLoader="[id='checkout-loader']"

    
    //methods
    async checkOutProcess()
    {
        await this.page.locator(this.cartIcon).click();
        await this.page.waitForTimeout(700);
        await this.page.locator(this.checkOutButton).click();
        await this.page.waitForLoadState('load');
        await this.page.locator(this.company).fill(faker.internet.domainName());
        await this.page.locator(this.streetAddress).fill(faker.location.streetAddress());
        await this.page.locator(this.state).selectOption({label: 'California'});
        await this.page.locator(this.city).fill(faker.location.city());
        await this.page.locator(this.postalCode).fill(faker.location.zipCode());
        await this.page.locator(this.phoneNumber).fill(faker.phone.number());
        await this.page.locator(this.shippingMethods).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.nextButton).click();
        await this.page.locator(this.placeOrder).click();
        await this.page.waitForTimeout(1000);
    }
    
    //assertion
    async verifyThanksMessage()
    {
        const temp = await this.page.locator(this.thanksMessage);
        await expect(temp).toBeVisible();
        await this.page.close();
    }
}