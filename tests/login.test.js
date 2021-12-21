//import $ from 'webdriverio/build/commands/browser/$';
import loginPage from '../pages/login.page';
import homePage from '../pages/home.page';
import { expect } from 'chai';

describe('OpenBank', () => {

    
    it('Should access the home page when attempting to login with valid credentials', async () => {
        await loginPage.open('login');
        let username = 'jsmith@demo.io';
        let password = 'Demo123!';
        await loginPage.enter(username, password);
       
        //await assert.equal(await $('h1').getText(),'Dashboard','Error: it did not show the expected text');
        expect(await homePage.getDashboardTitle()).to.equal('Dashboard');
        
     });
     it('Should show an error when attempting to login with invalid credentials', async () => {
        await loginPage.open('login');
        //await browser.url('login');
        let username = 'asdfasdf';
        let password = '123456';
        await loginPage.enter(username, password);
        //await loginPage.checkExpectedError('login?error');
        expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/login?error');
        
     });
     it('Should show an error when attempting to login with blank credentials', async () => {
        await loginPage.open('login');
        //await browser.url('login');
        let username = '';
        let password = '';
        await loginPage.enter(username, password);
        //await loginPage.checkExpectedError('login?error');
        expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/login?error');
        
        
     });
 });