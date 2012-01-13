(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RetroidViewModel = (function() {
    function RetroidViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.logicRunner = new LogicRunner(this);
      this.leds = ko.observableArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.editorViewModel.aceText.subscribe(__bind(function(newValue) {
        return this.canRunLogic(this.logicRunner.CodeIsValid(this.editorViewModel.aceText()));
      }, this));
      this.onRunLogic = __bind(function() {
        this.logicRunner.code = this.editorViewModel.aceText();
        return this.logicRunner.Run();
      }, this);
      this.canRunLogic = ko.observable(true);
    }
    return RetroidViewModel;
  })();
}).call(this);
