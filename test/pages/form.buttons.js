var page = require('./page');

var FormButtons = Object.create(page, {

    // Webelements
    reset:  { get: function () { return $('[data-tip="Reset"]'); } },
    clear:  { get: function () { return $('[data-tip="Clear"]'); } },
    submitButton:  { get: function () { return $('[type="submit"]'); } },

    // Methods
    clearForm:{ value: function () {
        this.clear.click();
    }},

    resetForm: { value: function () {
        this.reset.click();
    }},

    submitForm: { value: function () {
        this.submitButton.click();
    }}
});

module.exports = FormButtons;