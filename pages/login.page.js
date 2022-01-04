
import BasePage from '../pages/base.page';

class LoginPage extends BasePage {

   //WebElements
   get usernameInput(){ return $('#username') }
   get passwordInput(){return $('#password')}


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Write username and password and press Enter
    * @param {String} username 
    * @param {String} password
    */
   async logIn(username, password) {
       await super.sendText(await this.usernameInput, username);
       await super.sendText(await this.passwordInput, password);
       await this.passwordInput.keys('Enter');
   }

   /**
    * Get username
    */
   async getUsername() {
       return await this.usernameInput.getValue();
   }

}
export default new LoginPage();