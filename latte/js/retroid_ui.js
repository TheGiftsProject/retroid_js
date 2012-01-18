(function() {

  window.RetroidUI = (function() {

    function RetroidUI(container) {
      RetroidUI.loadImages();
      this.canvas = $.tmpl($("#retroid_ui_template").html());
      container.html(this.canvas);
      this._initContext();
      this.bounds = {
        width: this.canvas.attr('width'),
        height: this.canvas.attr('height')
      };
      this.clockCenter = {
        x: 142.5,
        y: 178
      };
      this.clockRadius = 111;
    }

    RetroidUI.images = {
      background: "images/background.png",
      foreground: "images/foreground.png",
      minute: "images/minute.png",
      hour: "images/hour.png",
      point: "images/point.png"
    };

    RetroidUI.loadImages = function() {
      var image, type, _results;
      image = null;
      _results = [];
      for (type in RetroidUI.images) {
        if (typeof RetroidUI.images[type] === "string") {
          image = new Image();
          image.src = RetroidUI.images[type];
          _results.push(RetroidUI.images[type] = image);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    RetroidUI.prototype.reset = function() {
      return this.renderFrame(new Array(12));
    };

    RetroidUI.prototype.renderFrame = function(leds) {
      this.context.clearRect(0, 0, this.bounds.width, this.bounds.height);
      this.context.drawImage(RetroidUI.images.background, 0, 0, this.bounds.width, this.bounds.height);
      this._renderLeds(leds);
      this.context.drawImage(RetroidUI.images.foreground, 0, 0, this.bounds.width, this.bounds.height);
      this._renderClockHand(RetroidUI.images.minute, (new Date()).getMinutes() / 60);
      this._renderClockHand(RetroidUI.images.hour, ((new Date()).getHours() % 12) / 12);
      return this._renderCenter();
    };

    RetroidUI.prototype._renderLeds = function(leds) {
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

    RetroidUI.prototype._setLedState = function(led) {
      this.context.fillStyle = (led ? "2796ff" : "ccc");
      this.context.shadowBlur = (led ? 10 : 8);
      return this.context.shadowColor = (led ? "blue" : "eee");
    };

    RetroidUI.prototype._positionLed = function(ledIdx) {
      var angle;
      angle = ((Math.PI * 2) / 12) * ledIdx;
      this.context.rotate(angle);
      return this.context.translate(0, -this.clockRadius);
    };

    RetroidUI.prototype._renderLed = function() {
      var ctx;
      ctx = this.context;
      ctx.beginPath();
      ctx.moveTo(-5, -5);
      ctx.lineTo(-5, 5);
      ctx.arc(0, 5, 5, Math.PI, 0, true);
      ctx.lineTo(5, -5);
      return ctx.fill();
    };

    RetroidUI.prototype._renderClockHand = function(image, percent) {
      var ctx;
      ctx = this.context;
      ctx.save();
      ctx.translate(this.clockCenter.x, this.clockCenter.y);
      ctx.rotate((Math.PI * 2) * percent);
      ctx.drawImage(image, -image.width / 2, -image.height / 2);
      return ctx.restore();
    };

    RetroidUI.prototype._renderCenter = function() {
      var image, middleX, middleY;
      image = RetroidUI.images.point;
      middleX = this.clockCenter.x - image.width / 2;
      middleY = this.clockCenter.y - image.height / 2;
      return this.context.drawImage(image, middleX, middleY);
    };

    RetroidUI.prototype._initContext = function() {
      return this.context = this.canvas[0].getContext('2d');
    };

    return RetroidUI;

  })();

}).call(this);
