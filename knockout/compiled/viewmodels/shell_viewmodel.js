(function() {
  window.ShellViewModel = (function() {
    function ShellViewModel() {
      this.editor = new EditorViewModel();
      this.logic = new LogicListViewModel(this.editor);
      this.retroid = new RetroidViewModel();
    }
    return ShellViewModel;
  })();
}).call(this);
