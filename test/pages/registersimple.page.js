var page = require('./page');

var RegisterSimplePage = Object.create(page, {

    // Webelements
    userName:  { get: function () { return $('body [name="username"]'); } },
    email:  { get: function () { return $('body [name="email"]'); } },
    emailConfirm:  { get: function () { return $('body [name="emailConfirm"]'); } },
    password:  { get: function () { return $('body [name="password"]'); } },
    devSkills:  { get: function () { return $('body [name="devSkills"]'); } },
    acceptTerms:  { get: function () { return $('body [name="terms"]'); } },
    reset:  { get: function () { return $('body [data-tip="Reset"]'); } },
    clear:  { get: function () { return $('body [data-tip="Clear"]'); } },
    submitButton:  { get: function () { return $('body [type="submit"]'); } },

    // Methods
    fillForm: { value: function (username, email, emailConf, password, devSkill) {
        this.userName.setValue(username);
        this.email.setValue(email);
        this.emailConfirm.setValue(emailConf);
        this.password.setValue(password);
        this.devSkills.setValue(devSkill);
    }},

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

module.exports = RegisterSimplePage;