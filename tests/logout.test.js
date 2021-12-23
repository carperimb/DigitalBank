//import $ from 'webdriverio/build/commands/element/$';
import loginPage from '../pages/login.page';
import logoutPage from '../pages/logout.page';

describe('OpenBank', () => {

    it('Should show logout success message when clicking on logout menu', async () => {

      await loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      await loginPage.logIn(username, password);

      await logoutPage.clickAvatar();
      //let userImage = await $('[class="user-avatar rounded-circle"]');
      //await userImage.click();
      //let dropdownMenu = await $('=Logout');
      //await dropdownMenu.click();
      expect(await browser.getUrl()).to.contain('login?logout');

    });
    it('Should show login page when clicking browser back button after logging out the session', async () => {
      await loginPage.open('login');
      let username = 'jsmith@demo.io';
      let password = 'Demo123!';
      await loginPage.logIn(username, password);

      await logoutPage.clickAvatar();
      //await browser.pause(3000);
      await browser.back();
      //await backBu.click();
      expect(await browser.getUrl()).to.contain('login');


    })
 });