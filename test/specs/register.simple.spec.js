var expect = require('chai').expect;
var HomePage = require('../pages/home')
var RegisterSimplePage = require('../pages/registersimple.page')
var FormButtons = require('../pages/form.buttons')

describe('Register Simple form actions', function () {
    it('should submit the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        FormButtons.submitForm();
    });

    it('should clear the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        FormButtons.clearForm();
        expect(RegisterSimplePage.userName.getText()).to.be.equal("");
    });

    it('should reset the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        FormButtons.resetForm();
        console.log(RegisterSimplePage.userName.getValue());
        expect(RegisterSimplePage.userName.getValue()).to.be.equal("SteveJobs");
    });
});
