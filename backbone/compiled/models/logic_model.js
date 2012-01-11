(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Models.Logic = (function(_super) {

    __extends(Logic, _super);

    function Logic() {
      Logic.__super__.constructor.apply(this, arguments);
    }

    Logic.prototype.defaults = {
      leds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      code: " var returns = [];            var last = false;            var all_off = true;                        for (var i = 0; i < leds.length; i++) {                if (last) {                    last = false;                    returns.push(1);                }                else {                    if (leds[i]) {                        all_off = false;                        last = true;                    }                    returns.push(0);                }            }            if (last || all_off) {                returns[0] = 1;            }                        return returns;"
    };

    Logic.prototype.WrappedCode = function(code) {
      if (code == null) code = this.get('code');
      return "(function (leds){" + code + ";return leds;})";
    };

    Logic.prototype.Run = function() {
      var _this = this;
      this.Stop();
      return this.interval = setInterval((function() {
        var toEval;
        toEval = "" + (_this.WrappedCode()) + "([" + (_this.get('leds')) + "])";
        return _this.set({
          leds: eval(toEval)
        });
      }), 100);
    };

    Logic.prototype.Stop = function() {
      if (this.interval) return clearInterval(this.interval);
    };

    Logic.prototype.IsValid = function(code) {
      var result;
      if (code == null) code = this.WrappedCode();
      result = true;
      try {
        eval("" + code + "(" + (this.get('leds')) + ")");
      } catch (error) {
        result = false;
      }
      return result;
    };

    return Logic;

  })(Backbone.Model);

}).call(this);
