function EditorUI(container, callbacks) {
    this.callbacks = callbacks;
    this.container = container;
    this.editor = this.container.find("#script_input");
    this.submitButton = this.container.find(".submit");

    this.ace = ace.edit(this.editor.attr('id'));
    var javascriptMode = require('ace/mode/javascript').Mode;
    this.ace.getSession().setMode(new javascriptMode());
    this.ace.setTheme('ace/theme/solarized_dark');
    this.ace.setFontSize(14);

    this.bindEvents();
}

EditorUI.prototype.bindEvents = function() {
    this.submitButton.click(_.bind(this.submit, this));
};

EditorUI.prototype.submit = function() {
    if (this.callbacks.submit) {
        this.callbacks.submit(this.ace.getSession().getValue());
    }
};

EditorUI.prototype.setText = function(text) {
    this.ace.getSession().setValue(text);
};
