import BasePage from './base.page';

class SavingsPage extends BasePage {
    //WebElements
    get savingsMenu(){return $('#savings-menu')};
    get viewSavings(){return $('#view-savings-menu-item')};
    get title(){return $('h1')};
    get individualSelector(){return $('//*[@id="79"]/div/label/span[2]')};
    get jointSelector(){return $('//*[@id="124"]/div/label/span[1]')};
    

    /**
     * Click on Savings menu and View Savings
     * @param {Object} menu
     */
    async clickMenu(){
        await super.clickElement(await this.savingsMenu);
        await super.clickElement(await this.viewSavings);
    }

    /**
     * Click on Individual selector
     * @param {Object} selector 
     */
    async clickSelector(){
        await super.clickElement(await this.individualSelector);
    }

    /**
     * Click on Joint selector
     * @param {Object} jselector
     */
    async clickJointSelector(){
        await super.clickElement(await this.jointSelector);
    }

    

    //Get View Savings title
    async getSavingsTitle(){
        return await this.title.getText();
    }
}
export default new SavingsPage();