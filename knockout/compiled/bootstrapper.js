(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Bootstrapper = (function() {
    function Bootstrapper() {
      this._initShellViewModel();
      this._initUIAdapters();
      this._initCustomBindings();
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
      return ko.bindingHandlers.small_retroid = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
          var retroidSmallUI, smallRetroid;
          retroidSmallUI = new RetroidSmallUI(element);
          smallRetroid = new SmallRetroidViewModel(valueAccessor());
          return smallRetroid.leds.subscribe(__bind(function(value) {
            return retroidSmallUI.renderFrame(value);
          }, this));
        }
      };
    };
    return Bootstrapper;
  })();
  $(document).ready(function() {
    return window.bootstrapper = new window.Bootstrapper();
  });
}).call(this);
