
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
      return this.aceEditorAdapter = new AceEditorAdapter('#script_input', this.shellViewModel.editor);
    };

    return Bootstrapper;

  })();

  $(document).ready(function() {
    return new window.Bootstrapper();
  });
