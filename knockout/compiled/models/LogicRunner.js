(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicRunner = (function() {
    function LogicRunner(viewModel, code) {
      this.viewModel = viewModel;
      this.code = code != null ? code : '';
    }
    LogicRunner.prototype.Run = function() {
      if (this.CodeIsValid(this.code)) {
        this.Stop();
        return this.interval = window.setInterval((__bind(function() {
          var leds, toEval;
          toEval = "(function (leds){" + this.code + ";return leds;})([" + (this.viewModel.leds()) + "])";
          leds = eval(toEval);
          return this.viewModel.leds(leds);
        }, this)), 100);
      }
    };
    LogicRunner.prototype.Stop = function() {
      if (this.interval) {
        return window.clearInterval(this.interval);
      }
    };
    LogicRunner.prototype.CodeIsValid = function(code) {
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
