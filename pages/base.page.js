const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Open url
    * 
    */
   async open(ruta) {
       await browser.url(ruta);
   }


   /**
    * Wait for an element to be clickable
    * @param {Object} element a clickear
    */
   async clickElement(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }


   /**
    * Send text method
    * @param {Object} element que recibirá el texto
    * @param {String} text a envíar 
    */
   async sendText(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
              
       await element.setValue(text);
   }

   /**
    * Check expected error 
    */
    async checkExpectedError(ruta){
       //await browser.getUrl(ruta);
       return this.browser.url(ruta);
    }


}