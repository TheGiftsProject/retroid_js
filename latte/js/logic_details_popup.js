(function() {

  window.LogicDetailsPopup = (function() {

    function LogicDetailsPopup(callbacks) {
      this.callbacks = callbacks;
      this.ui = new LogicDetailsPopupUI({
        submit: _.bind(this._submit, this),
        cancel: _.bind(this._cancel, this)
      });
    }

    LogicDetailsPopup.prototype.open = function() {
      this.ui.reset();
      return this.ui.show();
    };

    LogicDetailsPopup.prototype.close = function() {
      return this.ui.hide();
    };

    LogicDetailsPopup.prototype._submit = function(author, name) {
      var _base;
      return typeof (_base = this.callbacks).submit === "function" ? _base.submit(author, name) : void 0;
    };

    LogicDetailsPopup.prototype._cancel = function() {
      return this.close();
    };

    return LogicDetailsPopup;

  })();

}).call(this);
