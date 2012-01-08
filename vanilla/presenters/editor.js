function Editor(container, callbacks) {
    this.callbacks = callbacks;
    this.ui = new EditorUI(container, { submit: _.bind(this.newLogic, this),
                                        save: _.bind(this.saveLogic, this),
                                        textChanged: _.bind(this.textChanged, this) });

    this.ui.setSaveState(false);
}

Editor.prototype.newLogic = function(code) {
    var logic = new Logic({ code: code });

    if (this.callbacks.runLogic) {
        this.callbacks.runLogic(logic);
    }

    this.ui.setSaveState(true);
};

Editor.prototype.saveLogic = function(code) {
    var logic = new Logic({ code: code });

    if (this.callbacks.saveLogic) {
        this.callbacks.saveLogic(logic);
    }
};

Editor.prototype.setLogic = function(logic) {
    this.ui.setText(logic.code);
};

Editor.prototype.textChanged = function(text) {
    this.ui.setSaveState(false);
};
