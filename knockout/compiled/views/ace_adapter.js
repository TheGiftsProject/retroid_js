(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.AceEditorAdapter = (function() {
    function AceEditorAdapter(element_id, editorViewModel) {
      this.element_id = element_id;
      this.editorViewModel = editorViewModel;
      this._initAce();
    }
    AceEditorAdapter.prototype._initAce = function() {
      var javascriptMode;
      this.ace = window.ace.edit($(this.element_id)[0].id);
      javascriptMode = require('ace/mode/javascript').Mode;
      this.ace.getSession().setMode(new javascriptMode());
      this.ace.setTheme('ace/theme/solarized_dark');
      this.ace.setFontSize(14);
      this.ace.getSession().on('change', __bind(function(response) {
        return this.editorViewModel.aceText(this.ace.getSession().getValue());
      }, this));
      return this.editorViewModel.aceText.subscribe(__bind(function(newValue) {
        if (this.ace.getSession().getValue() !== newValue) {
          return this.ace.getSession().setValue(newValue);
        }
      }, this));
    };
    return AceEditorAdapter;
  })();
}).call(this);
