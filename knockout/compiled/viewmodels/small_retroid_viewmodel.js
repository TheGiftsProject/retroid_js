(function() {
  window.SmallRetroidViewModel = (function() {
    function SmallRetroidViewModel(code) {
      this.leds = ko.observableArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.logicRunner = new LogicRunnerModel(this, code);
      this.logicRunner.run();
    }
    return SmallRetroidViewModel;
  })();
}).call(this);
