(function() {

  window.RetroidSmallUI = (function() {

    function RetroidSmallUI(container) {
      this.canvas = $.tmpl($("#retroid_small_ui_template").html());
      this.canvas.appendTo(container);
      this._initContext();
      this.bounds = {
        width: this.canvas.attr('width'),
        height: this.canvas.attr('height')
      };
      this.clockCenter = {
        x: this.bounds.width / 2,
        y: this.bounds.height / 2
      };
      this.clockRadius = this.bounds.width / 2 - 5;
    }

    RetroidSmallUI.ledStates = {
      active: {
        color: "2796ff",
        shadow: "4",
        shadowColor: "blue"
      },
      inactive: {
        color: "ccc",
        shadow: "2",
        shadowColor: "eee"
      }
    };

    RetroidSmallUI.prototype.reset = function() {
      return this.renderFrame(new Array(12));
    };

    RetroidSmallUI.prototype.renderFrame = function(leds) {
      this.context.clearRect(0, 0, this.bounds.width, this.bounds.height);
      return this._renderLeds(leds);
    };

    RetroidSmallUI.prototype._renderLeds = function(leds) {
      var i, led, _len;
      this.context.save();
      this.context.translate(this.clockCenter.x, this.clockCenter.y);
      for (i = 0, _len = leds.length; i < _len; i++) {
        led = leds[i];
        this.context.save();
        this._setLedState(led);
        this._positionLed(i);
        this._renderLed();
        this.context.restore();
      }
      return this.context.restore();
    };

    RetroidSmallUI.prototype._setLedState = function(led) {
      var ledState;
      ledState = (led ? RetroidSmallUI.ledStates.active : RetroidSmallUI.ledStates.inactive);
      this.context.fillStyle = ledState.color;
      this.context.shadowBlur = ledState.shadow;
      return this.context.shadowColor = ledState.shadowColor;
    };

    RetroidSmallUI.prototype._positionLed = function(ledIdx) {
      var angle;
      angle = ((Math.PI * 2) / 12) * ledIdx;
      this.context.rotate(angle);
      return this.context.translate(0, -this.clockRadius);
    };

    RetroidSmallUI.prototype._renderLed = function() {
      var ctx;
      ctx = this.context;
      ctx.beginPath();
      ctx.arc(0, 4, 4, Math.PI * 2, 0, true);
      return ctx.fill();
    };

    RetroidSmallUI.prototype._initContext = function() {
      return this.context = this.canvas[0].getContext('2d');
    };

    return RetroidSmallUI;

  })();

}).call(this);
