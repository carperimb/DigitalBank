//import $ from 'webdriverio/build/commands/browser/$';
import loginPage from '../pages/login.page';

describe('OpenBank', () => {

    it('Debería mostrar la pagina login', async () => {

      browser.url('login');
	  
	  await browser.pause(5000);
    });
    it('Debería escribir usuario y contraseña e ingresar a home', async () => {
        await browser.url('login');
        //let usuarioInput = await $('[name="username"]');
        //console.log(await usuarioInput.getProperty('placeholder'));
        //let usuario = 'jsmith@demo.io';
        //let contraseña = 'Demo123!';
        //await loginPage.ingresar(usuario, contraseña);
        let usuarioInput = await $('[name="username"]');
        await usuarioInput.setValue('jsmith@demo.io');  //escribe en usuario
        //console.log(await usuarioInput.getValue());
        let contraseñaInput = await $('[name="password"]');
        await contraseñaInput.setValue('Demo123!');
        await contraseñaInput.keys('Enter');
        //await barraDeBusqueda.keys('Enter');  //presiona enter
        //await expect(await loginPage.obtenerTextoUsuario()).to.equal(usuario);
        await assert.equal(await $('h1').getText(),'Dashboard','Error: no se mostró el header esperado');
        await browser.pause(5000);
     });
 });