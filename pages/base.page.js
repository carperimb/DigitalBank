const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Open url
    * 
    */
   async open(path) {
       await browser.url(path);
   }


   /**
    * Wait for an element to be clickable
    * @param {Object} element to be clickable
    */
   async clickElement(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }


   /**
    * Send text method
    * @param {Object} element 
    * @param {String} text  
    */
   async sendText(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
              
       await element.setValue(text);
   }

   


}