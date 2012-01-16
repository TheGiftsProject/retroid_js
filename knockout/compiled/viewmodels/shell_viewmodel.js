(function() {
  window.ShellViewModel = (function() {
    function ShellViewModel() {
      this.editor = new EditorViewModel();
      this.create_logic_dialog = new CreateLogicDialogViewModel();
      this.logic = new LogicListViewModel(this.editor);
      this.retroid = new RetroidViewModel(this.editor);
    }
    return ShellViewModel;
  })();
}).call(this);
