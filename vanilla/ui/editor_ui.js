function EditorUI(container, callbacks) {
    this.callbacks = callbacks;
    this.container = container;
    this.editor = this.container.find("#script_input");
    this.submitButton = this.container.find(".submit");
    this.saveButton = this.container.find(".save");

    this.ace = ace.edit(this.editor.attr('id'));
    var javascriptMode = require('ace/mode/javascript').Mode;
    this.ace.getSession().setMode(new javascriptMode());
    this.ace.setTheme('ace/theme/solarized_dark');
    this.ace.setFontSize(14);

    this.bindEvents();
}

EditorUI.prototype.bindEvents = function() {
    this.submitButton.click(_.bind(this.submit, this));
    this.saveButton.click(_.bind(this.save, this));
    this.ace.getSession().on('change', _.bind(this.textChanged, this));
};

EditorUI.prototype.submit = function() {
    if (this.callbacks.submit) {
        this.callbacks.submit(this.ace.getSession().getValue());
    }
};

EditorUI.prototype.save = function() {
    if (this.callbacks.save) {
        this.callbacks.save(this.ace.getSession().getValue());
    }
};

EditorUI.prototype.setText = function(text) {
    this.ace.getSession().setValue(text);
};

EditorUI.prototype.textChanged = function() {
    if (this.callbacks.textChanged) {
        this.callbacks.textChanged(this.ace.getSession().getValue());
    }
};

EditorUI.prototype.setSaveState = function(enabled) {
    this.saveButton.prop('disabled', !enabled);
};
