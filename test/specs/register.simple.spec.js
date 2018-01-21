var expect = require('chai').expect;
var HomePage = require('../pages/home')
var RegisterSimplePage = require('../pages/registersimple.page')
var FormButtons = require('../pages/form.buttons')
var jsonfile = require('jsonfile')

describe('Register Simple form actions', function () {

  var registerDataPath = './utils/data/register.json';
  var registerData = jsonfile.readFileSync(registerDataPath);

    it('should submit the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm(registerData.userName, registerData.email, registerData.emailConfirmation, registerData.password, registerData.devSkills);
        FormButtons.submitForm();
    });

    it('should clear the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm(registerData.userName, registerData.email, registerData.emailConfirmation, registerData.password, registerData.devSkills);
        FormButtons.clearForm();
        expect(RegisterSimplePage.userName.getText()).to.be.equal("");
    });

    it('should reset the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm(registerData.userName, registerData.email, registerData.emailConfirmation, registerData.password, registerData.devSkills);
        FormButtons.resetForm();
        console.log(RegisterSimplePage.userName.getValue());
        expect(RegisterSimplePage.userName.getValue()).to.be.equal("SteveJobs");
    });
});
