import {test } from "@playwright/test";
import Credentials from '../utils/Credentials';
import LoginPage from "../Pages/LoginPage";
test("Login To Magento website",async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.goToWebsite();
    await loginPage.login(Credentials.getEmail(), Credentials.getPass());
    await loginPage.checkWelcomeMessage();
    
});