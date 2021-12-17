//import $ from 'webdriverio/build/commands/browser/$';
import BasePage from '../pages/base.page';

class LoginPage extends BasePage {

   //WebElements
   get usuarioInput(){ return $('[name="username"]') }
   get contraseñaInput(){return $('[name="password"]')}


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el usuario y la contraseña en los campos y presiona Enter
    * @param {String} usuario 
    * @param {String} contraseña
    */
   async ingresar(usuario, contraseña) {
       await super.vaciarCampoYEnviarTexto(await this.usuarioInput, usuario);
       await super.vaciarCampoYEnviarTexto(await this.contraseñaInput, contraseña);
       await this.contraseñaInput.keys('Enter');
   }

   /**
    * Obtener texto del usuario
    */
   async obtenerTextoUsuario() {
       return await this.usuarioInput.getValue();
   }


}
export default new LoginPage();