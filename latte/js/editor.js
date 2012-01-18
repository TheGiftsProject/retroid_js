(function() {

  window.Editor = (function() {

    function Editor(container, callbacks) {
      this.callbacks = callbacks;
      this.ui = new EditorUI(container, {
        submit: _.bind(this._newLogic, this),
        save: _.bind(this._saveLogic, this),
        textChanged: _.bind(this._textChanged, this)
      });
      this.ui.setSaveState(false);
    }

    Editor.prototype.setLogic = function(logic) {
      return this.ui.setText(logic.code);
    };

    Editor.prototype._newLogic = function(code) {
      var logic, _base;
      logic = new Logic({
        code: code
      });
      if (typeof (_base = this.callbacks).runLogic === "function") {
        _base.runLogic(logic);
      }
      return this.ui.setSaveState(true);
    };

    Editor.prototype._saveLogic = function(code) {
      var logic, _base;
      logic = new Logic({
        code: code
      });
      return typeof (_base = this.callbacks).saveLogic === "function" ? _base.saveLogic(logic) : void 0;
    };

    Editor.prototype._textChanged = function(text) {
      return this.ui.setSaveState(false);
    };

    return Editor;

  })();

}).call(this);
