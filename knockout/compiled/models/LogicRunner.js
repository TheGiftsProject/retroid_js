(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicRunner = (function() {
    function LogicRunner(viewModel, code) {
      this.viewModel = viewModel;
      this.code = code != null ? code : '';
    }
    LogicRunner.prototype.run = function() {
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
    LogicRunner.prototype.stop = function() {
      if (this.interval) {
        return window.clearInterval(this.interval);
      }
    };
    LogicRunner.prototype.codeIsValid = function(code) {
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
    return LogicRunner;
  })();
}).call(this);
