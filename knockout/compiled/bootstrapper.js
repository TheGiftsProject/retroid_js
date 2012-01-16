(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Bootstrapper = (function() {
    function Bootstrapper() {
      this._initCustomBindings();
      this._initShellViewModel();
      this._initUIAdapters();
    }
    Bootstrapper.prototype._initShellViewModel = function() {
      this.shellViewModel = new ShellViewModel();
      return ko.applyBindings(this.shellViewModel);
    };
    Bootstrapper.prototype._initUIAdapters = function() {
      this.aceEditorAdapter = new AceEditorAdapter('#script_input', this.shellViewModel.editor);
      return this.retroidAdapter = new RetroidAdapter($('.main_retroid'), this.shellViewModel.retroid);
    };
    Bootstrapper.prototype._initCustomBindings = function() {
      ko.bindingHandlers.small_retroid = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
          var retroidSmallUI, smallRetroid;
          retroidSmallUI = new RetroidSmallUI(element);
          smallRetroid = new SmallRetroidViewModel(valueAccessor());
          return smallRetroid.leds.subscribe(__bind(function(value) {
            return retroidSmallUI.renderFrame(value);
          }, this));
        }
      };
      return ko.bindingHandlers.create_logic = {
        init: __bind(function(element, valueAccessor) {
          var dialog_fragment, viewModel;
          viewModel = this.shellViewModel.create_logic_dialog;
          dialog_fragment = $('#create_logic_dialog_template').html();
          $(element).click(__bind(function() {
            viewModel.code(this.shellViewModel.editor.aceText());
            $.modal(dialog_fragment, {
              opacity: 80,
              overlayCss: {
                backgroundColor: "#fff"
              }
            });
            return ko.applyBindings(viewModel, $('.create_logic_dialog_container')[0]);
          }, this));
          return viewModel.closeDialog.subscribe(__bind(function(value) {
            if (value) {
              return $.modal.close();
            }
          }, this));
        }, this)
      };
    };
    return Bootstrapper;
  })();
  $(document).ready(function() {
    return window.bootstrapper = new window.Bootstrapper();
  });
}).call(this);
