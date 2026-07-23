import { expect, Page } from "@playwright/test";
export default class ProductListPage{
    constructor(private page: Page) {
        this.page = page;
    }

    //locators
    plpButton="//span[@class='action more button']"
    bagProduct="//img[@alt='Overnight Duffle']"
    addCartButton="//button[contains(@title,'Add to Cart')]"
    quantity= "//input[contains(@class,'item-qty cart-item-qty')]"
    onlyForWait= "//span[contains(text(),'Cart Subtotal')]"
    addToWishlistButton = "//span[contains(.,'Add to Wish List')]"
    addToCompare = "//span[contains(.,'Add to Compare')]" // first
    cartIcon = "//a[@class='action showcart']"
    deleteIcon = "//a[contains(@class,'action delete')]"
    addingMessage="//div[contains(@class,'message-success success message')]"
    updateButton = "//span[contains(text(),'Update')]"
    ok="//span[contains(.,'OK')]"
    arrowIcon = "//button[@type='button' and @data-action='customer-menu-toggle']"
    selectWishlist = "//li[@class='link wishlist']"
    itemOnWishlist = "//li[@data-row='product-item']"; //first
    removeIcon ="//a[@title='Remove Item']"     //first
    cartCounter = "//span[contains(@class,'counter-number')]"
    noItemMessage = "//span[contains(.,'You have no items in your wish list.')]"
    noItemOnCart = "//strong[contains(@class,'subtitle empty')]"
    
    //methods
    async addItemToCart()
    {
        await this.page.locator(this.plpButton).click();
        await this.page.locator(this.bagProduct).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.addCartButton).click();
        await this.page.waitForTimeout(3000);
    }
    async changeQuantity()
    {
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.cartIcon).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.quantity).fill("3");
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.onlyForWait).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.updateButton).first().click();
    }
    async addItemToWishlist ()
    { 
        await this.page.locator(this.plpButton).click();
        await this.page.locator(this.bagProduct).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addToWishlistButton).first().click();
        await this.page.waitForTimeout(2000);
    }
    async removeItemFromWishlist()
    {
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.arrowIcon).first().click();
        await this.page.locator(this.selectWishlist).first().click();
        await this.page.locator(this.itemOnWishlist).first().hover();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.removeIcon).first().click();
        await this.page.waitForTimeout(1000);
    }
    async deleteItemFromCart()
    {
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.cartIcon).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.deleteIcon).first().click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.ok).click();
    }



    //assertion
    async verifyAddingItemToCart()
    {
        const temp = this.page.locator(this.addingMessage);
        await expect(temp).toBeVisible();
    }

    async verifyAddingItemToWishlist()
    {
        const temp = this.page.locator(this.itemOnWishlist).first();
        await expect(temp).toBeVisible();
    }
    async verifyChangingQuantity()
    {
        await this.page.waitForTimeout(2000);
        const temp =  await this.page.locator(this.cartCounter).textContent();
        await expect(temp).toEqual("3");
    }
    async verifyRemovingItemFormWishlist()
    {
        await this.page.waitForTimeout(3000);
        const temp =await this.page.locator(this.noItemMessage);
        await expect(temp).toBeVisible();
    }
    async verifyRemovingItemFormCart()
    {
        await this.page.waitForTimeout(1500);
        const temp = await this.page.locator(this.noItemOnCart);
        await expect(temp).toBeVisible();
    }

}