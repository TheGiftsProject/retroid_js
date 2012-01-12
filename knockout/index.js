var ShellViewModel;

ShellViewModel = (function() {

  function ShellViewModel() {
    this.logic = new LogicListViewModel('#logic_list');
    this.aceEditor = new EditorViewModel();
    new AceEditor('#script_input', this.aceEditor);
    ko.applyBindings(this);
  }

  return ShellViewModel;

})();

$(document).ready(function() {
  return new ShellViewModel();
});
