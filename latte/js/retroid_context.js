(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.RetroidContext = (function() {

    function RetroidContext(logic, callback) {
      if (!callback) {
        throw new Exception("must provide callback to retroid context");
      }
      this.frameCallback = callback;
      this.func = logic.func();
    }

    RetroidContext.generateStartState = function() {
      return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    };

    RetroidContext.prototype.start = function() {
      this.running = true;
      return this._loop(RetroidContext.generateStartState());
    };

    RetroidContext.prototype.stop = function() {
      this.running = false;
      return this.frameCallback = null;
    };

    RetroidContext.prototype._loop = function(state) {
      var result;
      result = this.func(state);
      if (this.running) {
        this.frameCallback(result);
        return setTimeout((__bind(function() {
          return this._loop(result);
        }, this)), 100);
      }
    };

    return RetroidContext;

  })();

}).call(this);
