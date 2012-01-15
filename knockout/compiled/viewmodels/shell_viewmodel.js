(function() {
  window.ShellViewModel = (function() {
    function ShellViewModel() {
      this.editor = new EditorViewModel();
      this.logic = new LogicListViewModel(this.editor);
      this.retroid = new RetroidViewModel(this.editor);
    }
    return ShellViewModel;
  })();
}).call(this);
