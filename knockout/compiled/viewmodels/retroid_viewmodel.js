(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RetroidViewModel = (function() {
    function RetroidViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.logicRunner = new LogicRunner(this);
      this.leds = ko.observableArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.editorViewModel.aceText.subscribe(__bind(function(newValue) {
        this.logicRunner.code = newValue;
        return this.logicRunner.Run();
      }, this));
    }
    return RetroidViewModel;
  })();
}).call(this);
