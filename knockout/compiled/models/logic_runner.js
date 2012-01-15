
  window.LogicRunnerModel = (function() {

    function LogicRunnerModel(viewModel, code) {
      this.viewModel = viewModel;
      this.code = code != null ? code : '';
    }

    LogicRunnerModel.prototype.run = function() {
      var _this = this;
      if (this.codeIsValid(this.code)) {
        this.stop();
        return this.interval = window.setInterval((function() {
          var leds, toEval;
          toEval = "(function (leds){" + _this.code + ";return leds;})([" + (_this.viewModel.leds()) + "])";
          leds = eval(toEval);
          return _this.viewModel.leds(leds);
        }), 100);
      }
    };

    LogicRunnerModel.prototype.stop = function() {
      if (this.interval) return window.clearInterval(this.interval);
    };

    LogicRunnerModel.prototype.codeIsValid = function(code) {
      var result, toEval;
      toEval = "(function (leds){" + code + ";return leds;})([" + (this.viewModel.leds()) + "])";
      result = true;
      try {
        eval(toEval);
      } catch (exception) {
        result = false;
      }
      return result;
    };

    return LogicRunnerModel;

  })();
