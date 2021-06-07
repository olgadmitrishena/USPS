import { expect } from "chai";
describe('Registration Page', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.usps.com/');
    })
    