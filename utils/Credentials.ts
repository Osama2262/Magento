import { faker } from '@faker-js/faker';

export default class Credentials {

    static email = faker.internet.email();
    static pass = faker.internet.password({length: 16, memorable: false,});
    static firstName = '';
    static lastName = '';

    static getEmail() {
        return this.email;
    }

    static getPass() {
        return this.pass;
    }

    static getFirstName() {
        return this.firstName;
    }

    static getLastName() {
        return this.lastName;
    }

    static setName(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static resetCredentials() {
        this.email = faker.internet.email();
        this.pass = faker.internet.password();
    }
}