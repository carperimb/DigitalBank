
import loginPage from '../pages/login.page';
import logoutPage from '../pages/logout.page';

describe('OpenBank', () => {

    it('Should show logout success message when clicking on logout menu', async () => {

      await loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      await loginPage.logIn(username, password);

      await logoutPage.clickAvatar();
      
      expect(await browser.getUrl()).to.contain('login?logout');

    });
    it('Should show login page when clicking browser back button after logging out the session', async () => {
      await loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      await loginPage.logIn(username, password);

      await logoutPage.clickAvatar();
      
      await browser.back();
      
      expect(await browser.getUrl()).to.contain('login');


    })
 });