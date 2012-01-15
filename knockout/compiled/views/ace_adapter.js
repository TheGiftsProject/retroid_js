
  window.AceEditorAdapter = (function() {

    function AceEditorAdapter(element_id, editorViewModel) {
      this.element_id = element_id;
      this.editorViewModel = editorViewModel;
      this._initAce();
      this._initBindings();
    }

    AceEditorAdapter.prototype._initAce = function() {
      var javascriptMode;
      this.ace = window.ace.edit($(this.element_id)[0].id);
      javascriptMode = require('ace/mode/javascript').Mode;
      this.ace.getSession().setMode(new javascriptMode());
      this.ace.setTheme('ace/theme/solarized_dark');
      return this.ace.setFontSize(14);
    };

    AceEditorAdapter.prototype._initBindings = function() {
      this._initAceToViewModelBinding();
      return this._initViewModelToAceBinding();
    };

    AceEditorAdapter.prototype._initAceToViewModelBinding = function() {
      var _this = this;
      return this.ace.getSession().on('change', function(response) {
        return _this.editorViewModel.aceText(_this.ace.getSession().getValue());
      });
    };

    AceEditorAdapter.prototype._initViewModelToAceBinding = function() {
      var _this = this;
      return this.editorViewModel.aceText.subscribe(function(newValue) {
        if (_this.ace.getSession().getValue() !== newValue) {
          return _this.ace.getSession().setValue(newValue);
        }
      });
    };

    return AceEditorAdapter;

  })();
