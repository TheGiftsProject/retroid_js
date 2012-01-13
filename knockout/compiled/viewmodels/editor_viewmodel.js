(function() {
  window.EditorViewModel = (function() {
    function EditorViewModel() {
      this.aceText = ko.observable('');
    }
    return EditorViewModel;
  })();
}).call(this);
