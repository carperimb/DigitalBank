const expectChai = require('chai').expect;
import loginPage from '../pages/login.page';
import savingsPage from '../pages/savings.page';

describe ('Savings', () => {
    beforeEach(() => {
        loginPage.open('login');
        let username = 'jsmith@demo.io';
        let password = 'Demo123!';
        loginPage.logIn(username, password);
  
    });

    it ('Should open Savings Page when clicking on the View Savings menu', async () => {
        await savingsPage.clickMenu();
        expectChai (await savingsPage.getSavingsTitle()).to.equal('View Savings Accounts');
    });
    it ('Should show Individual Savings when clicking on the individual selector', async () => {
        await savingsPage.clickMenu();
        await savingsPage.clickSelector();
        expect(await browser).toHaveUrlContaining('account/savings-view?selectSwitch=79');
    });
    it ('Should show Joint Savings when clicking on the joint selector', async () => {
        await savingsPage.clickMenu();
        await savingsPage.clickJointSelector();
        expect(await browser).toHaveUrlContaining('account/savings-view?selectSwitch=124');
    });
    
});