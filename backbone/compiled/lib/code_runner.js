(function() {

  Retroid.Libs.codeRunner = (function() {

    function codeRunner() {}

    codeRunner.prototype.run = function(callback, code) {
      var _this = this;
      this.callback = callback;
      this.code = code;
      if (this.interval) clearInterval(this.interval);
      return this.interval = setInterval((function() {
        return _this.callback("aaaa");
      }), 1000);
    };

    return codeRunner;

  })();

}).call(this);
