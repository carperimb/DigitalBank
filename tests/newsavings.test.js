const expectChai = require('chai').expect;
import loginPage from '../pages/login.page';
import savingsPage from '../pages/savings.page';
import newsavingsPage from  '../pages/newsavings.page';

describe ('NewSavings', () => {
    beforeEach(() => {
        loginPage.open('login');
        let username = 'jsmith@demo.io';
        let password = 'Demo123!';
        loginPage.logIn(username, password);
  
    });
    it.skip ('Should open Create Savings Page when clicking on the New Savings menu', async () => {
        await newsavingsPage.clickNewMenu();
        expectChai (await newsavingsPage.getSavingsTitle()).to.equal('Create Savings');
        await browser.pause(3000);
    });
    it ('Should create a new savings account when clicking on the submit button and show confirmation message', async () => {
        await newsavingsPage.clickNewMenu();
        let name = 'test';
        let deposit = '55';
        newsavingsPage.createSavings(name, deposit);
        newsavingsPage.clickSubmit();
        //expectChai (await newsavingsPage.getConfirmation()).to.equal('Confirmation');
        expect(await browser).toHaveUrlContaining('account/savings-view?selectSwitch=173');
        await browser.pause(3000);
    });
    it ('Should reset the new savings form when clicking on the reset button', async () => {
        await newsavingsPage.clickNewMenu();
        let name = 'test';
        let deposit = '55';
        newsavingsPage.createSavings(name, deposit);
        newsavingsPage.clickReset();
        expectChai (await newsavingsPage.getDeposit()).to.equal('');
        await browser.pause(3000);
    })
});