(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Views.SmallClockView = (function(_super) {

    __extends(SmallClockView, _super);

    function SmallClockView() {
      SmallClockView.__super__.constructor.apply(this, arguments);
    }

    SmallClockView.prototype.initialize = function() {
      return this.model.bind('change:leds', this.renderFrame, this);
    };

    SmallClockView.prototype.render = function() {
      this.retroid_ui = new RetroidUI(this.el, "#retroid_small_ui_template", null, true);
      this.retroid_ui.reset();
      return this;
    };

    SmallClockView.prototype.renderFrame = function() {
      return this.retroid_ui.renderFrame(this.model.get("leds"));
    };

    return SmallClockView;

  })(Backbone.View);

}).call(this);
