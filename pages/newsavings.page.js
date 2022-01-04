import BasePage from './base.page';

class NewSavingsPage extends BasePage{
    //WebElements
    get newSavingsMenu(){return $('#new-savings-menu-item')};
    get savingsMenu(){return $('#savings-menu')};
    get title(){return $('h1')};
    get selectAccountType(){return $('//*[@id="Savings"]')};
    get selectAccountOwner(){return $ ('//*[@id="Individual"]')};
    get accountName(){return $('//*[@id="name"]')};
    get initialDeposit(){return $('//*[@id="openingBalance"]')};
    get submitButton(){return $('#newSavingsSubmit')};
    get resetButton(){return $('#newSavingsReset')};
    get confirmation(){return $('//*[@id="new-account-conf-alert"]/span[1]')};

    /**
     * Click on New Savings menu
     * @param {Object} newSmenu
     */
     async clickNewMenu(){
        await super.clickElement(await this.savingsMenu);
        await super.clickElement(await this.newSavingsMenu);
        
    }

    /**
     * Create a New Savings account
     * @param {String} name
     * @param {String} deposit
     */
    async createSavings(name, deposit){
        await super.clickElement(await this.selectAccountType);
        await super.clickElement(await this.selectAccountOwner);
        await super.sendText(await this.accountName, name);
        await super.sendText(await this.initialDeposit, deposit);
        //await super.clickElement(await this.submitButton);

    }
    async clickSubmit(){
        await super.clickElement(await this.submitButton);
    }
    async clickReset(){
        await super.clickElement(await this.resetButton);
    }


    //Get Create Savings title
    async getSavingsTitle(){
        return await this.title.getText();
    }

    //Get confirmation message
    async getConfirmation(){
        return await this.confirmation.getText();
    }

    //Get deposit text
    async getDeposit(){
        return await this.initialDeposit.getText();
    }
}
export default new NewSavingsPage();