function LogicDetailsPopup(callbacks) {
    this.callbacks = callbacks;
    this.ui = new LogicDetailsPopupUI({ submit: _.bind(this.submit, this), cancel: _.bind(this.cancel, this) });
}

LogicDetailsPopup.prototype.open = function() {
    this.ui.reset();
    this.ui.bindEvents();
    this.ui.show();
};

LogicDetailsPopup.prototype.close = function() {
    this.ui.hide();
    this.ui.unbindEvents();
};

LogicDetailsPopup.prototype.submit = function(author, name) {
    if (this.callbacks.submit) {
        this.callbacks.submit(author, name);
    }
};

LogicDetailsPopup.prototype.cancel = function() {
    this.close();
};
