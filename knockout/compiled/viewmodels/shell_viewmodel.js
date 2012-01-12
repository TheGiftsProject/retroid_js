
  window.ShellViewModel = (function() {

    function ShellViewModel() {
      this.logic = new LogicListViewModel('#logic_list');
      this.aceEditor = new EditorViewModel();
    }

    return ShellViewModel;

  })();
