//import $ from 'webdriverio/build/commands/browser/$';
import BasePage from '../pages/base.page';

class LogoutPage extends BasePage {
    //WebElements
    get userAvatar(){return $('[class="user-avatar rounded-circle"]')};
    get logoutItem(){return $('=Logout')};

    /**
     * click on user avatar and logout
     * @param {Object} menu
     */
    async clickAvatar(){
        await super.clickElement(await this.userAvatar);
        await super.clickElement(await this.logoutItem);

    }
}
export default new LogoutPage();