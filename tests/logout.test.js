

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
      
      
      expect(await browser).toHaveUrlContaining('login?logout');
      

    });
    it('Should show login page when clicking browser back button after logging out the session', async () => {
      

      await logoutPage.clickAvatar();
      
      await browser.back();
      
      
      expect(await browser).toHaveUrlContaining('login');
      


    })
 });