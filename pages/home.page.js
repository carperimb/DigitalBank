import BasePage from '../pages/base.page';

class HomePage extends BasePage {

    //WebElements
    get title(){return $('h1')}

    //Get Dashboard title
    async getDashboardTitle(){
        return await this.title.getValue();
    }
}
export default new HomePage();