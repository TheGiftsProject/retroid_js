function LogicDetailsPopupUI(callbacks) {
    this.callbacks = callbacks;
    this.container = $.tmpl($("#logic_details_popup_template").html());
    this.container.hide();
    this.container.appendTo($("body"));
    this.authorInput = this.container.find("#logic_details_author");
    this.nameInput = this.container.find("#logic_details_name");
    this.submitButton = this.container.find(".logic_details_submit");
    this.cancelButton = this.container.find(".logic_details_cancel");
}

LogicDetailsPopupUI.prototype.bindEvents = function() {
    this.submitButton.click(_.bind(this.submit, this));
    this.cancelButton.click(_.bind(this.cancel, this));
};

LogicDetailsPopupUI.prototype.unbindEvents = function() {
    this.submitButton.unbind('click');
    this.cancelButton.unbind('click');
};

LogicDetailsPopupUI.prototype.show = function() {
    this.container.show();
    var posLeft = ($(document).width() - this.container.width()) / 2;
    var posTop = ($(document).height() - this.container.height()) / 2;
    this.container.css({'top': posTop, 'left': posLeft});
};

LogicDetailsPopupUI.prototype.hide = function() {
    this.container.hide();
};

LogicDetailsPopupUI.prototype.reset = function() {
    this.authorInput.val("");
    this.nameInput.val("");
};

LogicDetailsPopupUI.prototype.submit = function() {
    if (this.callbacks.submit) {
        this.callbacks.submit(this.authorInput.val(), this.nameInput.val());
    }
};

LogicDetailsPopupUI.prototype.cancel = function() {
    if (this.callbacks.cancel) {
        this.callbacks.cancel();
    }
};
