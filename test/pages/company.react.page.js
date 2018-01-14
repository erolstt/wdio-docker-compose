var page = require('./page');

var CompanyReactPage = Object.create(page, {

    // Webelements
    companyName:  { get: function () { return $('body [name="name"]'); } },
    revenue:  { get: function () { return $('body [name="revenue"]'); } },
    assets:  { get: function () { return $('body [name="assets"]'); } },
    fDate:  { get: function () { return $('body #founded--38_input'); } },
    productsDropdown:  { get: function () { return $('body [title="open dropdown"]'); } },
    products:  { get: function () { return $('body #productsDropdown--41__listbox'); } },

    // Methods
    fillForm: { value: function (companyName, revenue, assets, fDate, product) {
        this.companyName.setValue(companyName);
        this.revenue.setValue(revenue);
        this.assets.setValue(assets);
        this.fDate.setValue(fDate);
        this.productsDropdown.click();
        this.products.waitForVisible();
        browser.element('//li[contains(@id,\'productsDropdown--41\') and text()=\''+ product +'\']').click();

    }}

});

module.exports = CompanyReactPage;