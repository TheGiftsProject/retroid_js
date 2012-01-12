(function() {
  var EditorViewModel;

  EditorViewModel = (function() {

    function EditorViewModel() {
      this.aceText = ko.observable('moo');
    }

    return EditorViewModel;

  })();

}).call(this);
