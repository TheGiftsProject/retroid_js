var AceEditorAdapter;

AceEditorAdapter = (function() {

  function AceEditorAdapter(element_id, editorViewModel) {
    this.element_id = element_id;
    this.editorViewModel = editorViewModel;
    this._initAce();
  }

  AceEditorAdapter.prototype._initAce = function() {
    var javascriptMode;
    var _this = this;
    this.ace = window.ace.edit($(this.element_id)[0].id);
    javascriptMode = require('ace/mode/javascript').Mode;
    this.ace.getSession().setMode(new javascriptMode());
    this.ace.setTheme('ace/theme/solarized_dark');
    this.ace.setFontSize(14);
    this.ace.getSession().on('change', function(response) {
      return _this.editorViewModel.aceText(_this.ace.getSession().getValue());
    });
    return this.editorViewModel.aceText.subscribe(function(newValue) {
      if (_this.editorViewModel.aceText() !== newValue) {
        return _this.ace.getSession().setValue(newValue);
      }
    });
  };

  return AceEditorAdapter;

})();
