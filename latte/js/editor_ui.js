(function() {

  window.EditorUI = (function() {

    function EditorUI(container, callbacks) {
      var javascriptMode;
      this.callbacks = callbacks;
      this.container = container;
      this.editor = this.container.find("#script_input");
      this.submitButton = this.container.find(".submit");
      this.saveButton = this.container.find(".save");
      this.ace = ace.edit(this.editor.attr('id'));
      javascriptMode = require('ace/mode/javascript').Mode;
      this.ace.getSession().setMode(new javascriptMode());
      this.ace.setTheme('ace/theme/solarized_dark');
      this.ace.setFontSize(14);
      this._bindEvents();
    }

    EditorUI.prototype.setSaveState = function(enabled) {
      return this.saveButton.prop('disabled', !enabled);
    };

    EditorUI.prototype.setText = function(text) {
      return this.ace.getSession().setValue(text);
    };

    EditorUI.prototype._bindEvents = function() {
      this.submitButton.click(_.bind(this._submit, this));
      this.saveButton.click(_.bind(this._save, this));
      return this.ace.getSession().on('change', _.bind(this._textChanged, this));
    };

    EditorUI.prototype._submit = function() {
      var _base;
      return typeof (_base = this.callbacks).submit === "function" ? _base.submit(this.ace.getSession().getValue()) : void 0;
    };

    EditorUI.prototype._save = function() {
      var _base;
      return typeof (_base = this.callbacks).save === "function" ? _base.save(this.ace.getSession().getValue()) : void 0;
    };

    EditorUI.prototype._textChanged = function() {
      var _base;
      return typeof (_base = this.callbacks).textChanged === "function" ? _base.textChanged(this.ace.getSession().getValue()) : void 0;
    };

    return EditorUI;

  })();

}).call(this);
