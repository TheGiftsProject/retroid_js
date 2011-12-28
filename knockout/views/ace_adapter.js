var AceEditor;

AceEditor = (function() {

  function AceEditor() {
    this.editorViewModel = new EditorViewModel();
    this._initAce();
  }

  AceEditor.prototype._initAce = function() {
    var javascriptMode;
    this.ace = window.ace.edit("script_input");
    javascriptMode = require('ace/mode/javascript').Mode;
    this.ace.getSession().setMode(new javascriptMode());
    this.ace.setTheme('ace/theme/solarized_dark');
    return this.ace.setFontSize(14);
  };

  AceEditor.prototype.GetText = function() {
    return this.ace.getSession().getText();
  };

  AceEditor.prototype.SetText = function(text) {
    return this.ace.getSession().setText(text);
  };

  return AceEditor;

})();
