(function() {

  window.LogicDetailsPopupUI = (function() {

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

    LogicDetailsPopupUI.prototype.show = function() {
      var posLeft, posTop;
      this._bindEvents();
      this.container.show();
      posLeft = $(window).width() / 2;
      posTop = $(window).height() / 2;
      return this.container.css({
        'top': posTop,
        'left': posLeft
      });
    };

    LogicDetailsPopupUI.prototype.hide = function() {
      this.container.hide();
      return this._unbindEvents();
    };

    LogicDetailsPopupUI.prototype.reset = function() {
      this.authorInput.val("");
      return this.nameInput.val("");
    };

    LogicDetailsPopupUI.prototype._bindEvents = function() {
      this.submitButton.click(_.bind(this._submit, this));
      return this.cancelButton.click(_.bind(this._cancel, this));
    };

    LogicDetailsPopupUI.prototype._unbindEvents = function() {
      this.submitButton.unbind('click');
      return this.cancelButton.unbind('click');
    };

    LogicDetailsPopupUI.prototype._submit = function() {
      var _base;
      return typeof (_base = this.callbacks).submit === "function" ? _base.submit(this.authorInput.val(), this.nameInput.val()) : void 0;
    };

    LogicDetailsPopupUI.prototype._cancel = function() {
      var _base;
      return typeof (_base = this.callbacks).cancel === "function" ? _base.cancel() : void 0;
    };

    return LogicDetailsPopupUI;

  })();

}).call(this);
