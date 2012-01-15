
  window.RetroidViewModel = (function() {

    function RetroidViewModel(editorViewModel) {
      var _this = this;
      this.editorViewModel = editorViewModel;
      this.logicRunner = new LogicRunnerModel(this);
      this.leds = ko.observableArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.editorViewModel.aceText.subscribe(function(newValue) {
        return _this.runEnabled(_this.logicRunner.codeIsValid(_this.editorViewModel.aceText()));
      });
      this.onRunLogic = function() {
        _this.logicRunner.code = _this.editorViewModel.aceText();
        return _this.logicRunner.run();
      };
      this.runEnabled = ko.observable(true);
    }

    return RetroidViewModel;

  })();
