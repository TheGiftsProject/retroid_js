(function() {
  var ShellViewModel;

  ShellViewModel = (function() {

    function ShellViewModel() {
      this.logic = new LogicListViewModel('#logic_list');
      this.aceEditor = new EditorViewModel();
    }

    return ShellViewModel;

  })();

}).call(this);
