
  window.ShellViewModel = (function() {

    function ShellViewModel() {
      this.editor = new EditorViewModel();
      this.logic = new LogicListViewModel(this.editor);
    }

    return ShellViewModel;

  })();
