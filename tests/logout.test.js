
import { expect } from 'chai';
import loginPage from '../pages/login.page';
import logoutPage from '../pages/logout.page';

describe('OpenBank', () => {
  beforeEach(() => {
      loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      loginPage.logIn(username, password);

  })

    it('Should show logout success message when clicking on logout menu', async () => {

      

      await logoutPage.clickAvatar();
      
      expect(await browser.getUrl()).to.contain('login?logout');
      //expect(await browser).toHaveUrlContaining('login?logout');
      //await expect(browser).toHaveUrl('login?logout');

    });
    it('Should show login page when clicking browser back button after logging out the session', async () => {
      /* await loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      await loginPage.logIn(username, password); */

      await logoutPage.clickAvatar();
      
      await browser.back();
      
      expect(await browser.getUrl()).to.contain('login');
      //expect(await browser).toHaveUrlContaining('login');
      //await expect(browser).toHaveUrl('login');


    })
 });