(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.LargeClockView = (function() {

    __extends(LargeClockView, Backbone.View);

    function LargeClockView() {
      LargeClockView.__super__.constructor.apply(this, arguments);
    }

    LargeClockView.prototype.el = $("#large_clock canvas");

    LargeClockView.prototype.initialize = function() {
      return console.log("initializing the large clock");
    };

    return LargeClockView;

  })();

}).call(this);
