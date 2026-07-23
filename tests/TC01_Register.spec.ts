import { test } from "@playwright/test";
import { faker } from '@faker-js/faker';
import RegisterPage from '../Pages/RegisterPage';
import Credentials from '../utils/Credentials';

test('Register to Magento website', async ({ page }) => {

    Credentials.resetCredentials();
    Credentials.setName(faker.person.firstName(), faker.person.lastName());
    const registerPage = new RegisterPage(page);

    await registerPage.goToWebsite();
    await registerPage.register(Credentials.getFirstName(),
     Credentials.getLastName(),
      Credentials.getEmail(),
       Credentials.getPass(),
        Credentials.getPass());
    await registerPage.checkThanksMessage();
});