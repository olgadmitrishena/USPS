import { expect } from "chai";
describe('Registration Page', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.usps.com/');
    })
    it('01/LP-Should verify regesier page title', () => {
        expect(browser.getTitle()).to.equal('Welcome | USPS');
    });
    it('02/LP-Should click registerationLink', () => {
        const registerationLink = $("//a[@id='login-register-header']");
        registerationLink.click();
    });
    it('03/LP-Should Sign up', () => {
        const singUp = $("//a[@id='sign-up-button']");
        singUp.click();
        const header1 = $("h1");
        expect(header1.getText()).to.equal('Create Your USPS.com Account')
    });
    it('04/LP-Should Verify logo', () => {
        const logo = $('#usps-logo');
        const result = $(logo).isDisplayed();
        expect(result).true;
    });
    it('05/LP-Should select language', () => {
        const language = $("#slanguage");
        language.selectByVisibleText('English');
        browser.pause(3000)
    });
    it('06/LP-Should verify User name', () => {
        const userNameIF = $("//input[@id = 'tuserName']");
        userNameIF.setValue('Mashka')
    });
    it('07/LP-Should verify password', () => {
        const passwordIF = "#tPassword";
        $(passwordIF).setValue('123456As')
    });
    it('08/LP-Should re-type password', () => {
        const rePasswordIF = "#tPasswordRetype";
        $(rePasswordIF).setValue('123456As')
    });
    it('09/LP-security Question 1', () => {
        const securQuest1 = $("#ssec1");
        securQuest1.selectByVisibleText('What is the name of your pet?');
        browser.pause(3000);
        const questionCheck = $('//option[@id="o2"]');
        expect(questionCheck.isSelected()).to.equal(true);
    });
    it('10/MP - Should verify selected secret question', () => {
        const selectedSecretQuestionSelectors = $('#ssec1 option#o2');
        expect(selectedSecretQuestionSelectors.isSelected()).to.equal(true);
    });
    it('11/MP - Should verify secret Answer', () => {
        const selectedSecretAnswerSelectors = $('#tsecAnswer1');
        selectedSecretAnswerSelectors.setValue('Nike');
    });
    it('12/MP - Should verify secret Answer text', () => {
        const selectedSecretAnswerSelectors = $('#tsecAnswer1Match');
        selectedSecretAnswerSelectors.setValue('Nike');
    });
    it('13/MP - Should select second secret question', () => {
        const secretQuestionSelectors = $('#ssec2');
        secretQuestionSelectors.selectByVisibleText(
            'In what city were you born?'
        );
    });
    it('14/MP - Should set personal', () => {
        const secretQuestionSelectors = $('#for-rAccount1');
        secretQuestionSelectors.click();
    });
    it('15/MP - Should set country', () => {
        const countrySelectors = $('#scountry');
        //secretQuestionSelectors.scrollIntoView();
        countrySelectors.selectByVisibleText('AFGHANISTAN');
        browser.pause(3000)
    })
});