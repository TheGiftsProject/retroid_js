function Editor(container, callbacks) {
    this.callbacks = callbacks;
    this.ui = new EditorUI(container, { submit: _.bind(this.newLogic, this) });
}

Editor.prototype.newLogic = function(text) {
    var logic = new Logic(text);

    if (this.callbacks.runLogic) {
        this.callbacks.runLogic(logic);
    }
};

Editor.prototype.setLogic = function(logic) {
    this.ui.setText(logic.text);
};
