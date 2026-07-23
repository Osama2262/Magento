import { test } from "@playwright/test";
import Credentials from '../utils/Credentials';
import LoginPage from "../Pages/LoginPage";
import ProductListPage from "../Pages/ProductListPage";

test.describe('Product list', () => {
  let productListPage: ProductListPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    productListPage = new ProductListPage(page);

    await loginPage.goToWebsite();
    await loginPage.login(Credentials.getEmail(), Credentials.getPass());
  });

  test("Add item to cart", async () => {
    await productListPage.addItemToCart();
    await productListPage.verifyAddingItemToCart();
  });

  test("Change the quantity for Items", async () => {
    await productListPage.changeQuantity();
    await productListPage.verifyChangingQuantity();
  });

  test("Remove item from Cart", async () => {
    await productListPage.deleteItemFromCart();
    await productListPage.verifyRemovingItemFormCart();
  });

  test("Add Item to Wishlist", async () => {
    await productListPage.addItemToWishlist();
    await productListPage.verifyAddingItemToWishlist();
  });

  test("Remove item from Wishlist", async () => {
    await productListPage.removeItemFromWishlist();
    await productListPage.verifyRemovingItemFormWishlist();
  });
});