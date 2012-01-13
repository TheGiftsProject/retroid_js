(function() {
  window.EditorViewModel = (function() {
    function EditorViewModel() {
      this.aceText = ko.observable('').extend({
        throttle: 200
      });
    }
    return EditorViewModel;
  })();
}).call(this);
