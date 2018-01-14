var expect = require('chai').expect;
var HomePage = require('../pages/home')
var FormButtons = require('../pages/form.buttons')
var CompanyReactPage = require('../pages/company.react.page')

describe('Company react Widgets', function () {
    it('should submit the form', function () {
        HomePage.open();
        HomePage.selectForm('Company (React Widgets)');
        FormButtons.clearForm();
        CompanyReactPage.fillForm("React Company", "123456.70", "987654321", "01/01/2000", "Watch", "iMac");
    });

    it('should clear the form', function () {
        HomePage.open();
        HomePage.selectForm('Company (React Widgets)');
        FormButtons.clearForm();
        expect(CompanyReactPage.companyName.getValue()).to.be.equal("");

    });

    it('should reset the form', function () {
        HomePage.open();
        HomePage.selectForm('Company (React Widgets)');
        FormButtons.resetForm();
        expect(CompanyReactPage.companyName.getValue()).to.be.equal("Apple");

    });
} );