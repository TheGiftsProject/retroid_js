(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicRunnerModel = (function() {
    function LogicRunnerModel(viewModel, code) {
      this.viewModel = viewModel;
      this.code = code != null ? code : '';
    }
    LogicRunnerModel.prototype.run = function() {
      if (this.codeIsValid(this.code)) {
        this.stop();
        return this.interval = window.setInterval((__bind(function() {
          var leds, toEval;
          toEval = "(function (leds){" + this.code + ";return leds;})([" + (this.viewModel.leds()) + "])";
          leds = eval(toEval);
          return this.viewModel.leds(leds);
        }, this)), 100);
      }
    };
    LogicRunnerModel.prototype.stop = function() {
      if (this.interval) {
        return window.clearInterval(this.interval);
      }
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
}).call(this);
