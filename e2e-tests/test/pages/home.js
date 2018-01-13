var Page = require('./page')

var HomePage = Object.create(Page, {

    open: { value : function () {
        Page.open.call(this, '/mobx-react-form-demo/demo.html');
    }},
    
    selectForm: { value: function (formName) {
        var selectBox = $('[name=menu]');
        selectBox.waitForVisible();
        selectBox.selectByVisibleText(formName);
    }}
});

module.exports = HomePage;