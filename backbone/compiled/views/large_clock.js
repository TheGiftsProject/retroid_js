(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.LargeClockView = (function(_super) {

    __extends(LargeClockView, _super);

    function LargeClockView() {
      LargeClockView.__super__.constructor.apply(this, arguments);
    }

    LargeClockView.prototype.el = $("#large_clock");

    LargeClockView.prototype.initialize = function() {
      var _this = this;
      this.retroid_ui = new RetroidUI(this.el, "#retroid_ui_template", function() {
        return _this.retroid_ui.reset();
      });
      this.model.bind('change:leds', this.renderFrame, this);
      return this;
    };

    LargeClockView.prototype.renderFrame = function() {
      return this.retroid_ui.renderFrame(this.model.get("leds"));
    };

    return LargeClockView;

  })(Backbone.View);

}).call(this);
