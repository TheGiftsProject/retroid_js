(function() {
  window.Bootstrapper = (function() {
    function Bootstrapper() {
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
    return Bootstrapper;
  })();
  $(document).ready(function() {
    return window.bootstrapper = new window.Bootstrapper();
  });
}).call(this);
