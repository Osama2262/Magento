import {test} from "@playwright/test";
import Credentials from '../utils/Credentials';
import LoginPage from "../Pages/LoginPage";
import ProductListPage from "../Pages/ProductListPage";
import CheckoutPage from "../Pages/CheckoutPage";


test("Checkout the product",async({page})=>
{
const loginPage = new LoginPage(page);
const productListPage = new ProductListPage(page);
await loginPage.goToWebsite();
await loginPage.login(Credentials.getEmail(), Credentials.getPass());
await productListPage.addItemToCart();
await productListPage.verifyAddingItemToCart();
const checkoutPage = new CheckoutPage(page);
await checkoutPage.checkOutProcess();
await checkoutPage.verifyThanksMessage();
});