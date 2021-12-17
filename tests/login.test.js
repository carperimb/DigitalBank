//import $ from 'webdriverio/build/commands/browser/$';
import loginPage from '../pages/login.page';

describe('OpenBank', () => {

    /* it('Should show login page', async () => {

      browser.url('login');
	  
	  await browser.pause(5000);
    }); */
    it('Should write in username and password and enter the home page', async () => {
        await loginPage.abrir('login');
        //await browser.url('login');
        //let usuarioInput = await $('[name="username"]');
        //console.log(await usuarioInput.getProperty('placeholder'));
        let usuario = 'jsmith@demo.io';
        let contraseña = 'Demo123!';
        await loginPage.ingresar(usuario, contraseña);
       // let usuarioInput = await $('[name="username"]');
        //await usuarioInput.setValue('jsmith@demo.io');  //escribe en usuario
        //console.log(await usuarioInput.getValue());
        //let contraseñaInput = await $('[name="password"]');
        //await contraseñaInput.setValue('Demo123!');
        //await contraseñaInput.keys('Enter');
        //await barraDeBusqueda.keys('Enter');  //presiona enter
        //await expect(await loginPage.obtenerTextoUsuario()).to.equal(usuario);
        await assert.equal(await $('h1').getText(),'Dashboard','Error: it did not show the expected text');
        await browser.pause(5000);
     });
     it('Should show an error when atempting to login with invalid username and password', async () => {
        await loginPage.abrir('login');
        let usuario = 'asdfasdf';
        let contraseña = '123456';
        await loginPage.ingresar(usuario, contraseña);
        //await expect(await $('.badge badge-pill badge-danger').getText()).to.include.string('Error','Error: it did not show the expected text');
        //await assert.equal(await $('=http://localhost:8080/bank/login?error').getText(),'error','Error: it did not show the expected text');
        //let mensajeError = await $('.badgebadge-pillbadge-danger');
        //console.log(await mensajeError.getText());
        await browser.pause(5000);
     });
     it('Should show an error when atempting to login with blank username and password', async () => {
        await loginPage.abrir('login');
        let usuario = '';
        let contraseña = '';
        await loginPage.ingresar(usuario, contraseña);
        //await expect(await $('.badge badge-pill badge-danger').getText()).to.include.string('Error','Error: it did not show the expected text');
        //await assert.equal(await $('=http://localhost:8080/bank/login?error').getText(),'error','Error: it did not show the expected text');
        
        await browser.pause(5000);
     });
 });