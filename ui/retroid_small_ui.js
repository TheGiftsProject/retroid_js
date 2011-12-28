function RetroidSmallUI(container) {
    this.canvas = $.tmpl($("#retroid_small_ui_template").html());
    this.canvas.appendTo(container);

    this._initContext();

    this.bounds = { width: this.canvas.attr('width'), height: this.canvas.attr('height') };
    this.clockCenter = { x: this.bounds.width/2, y: this.bounds.height/2 };
    this.clockRadius = this.bounds.width/2 - 5;
}

RetroidSmallUI.ledStates =  {
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
    this.renderFrame(new Array(12));
};

RetroidSmallUI.prototype.renderFrame = function(leds) {
    this.context.clearRect(0, 0, this.bounds.width, this.bounds.height);
    this._renderLeds(leds);
};

RetroidSmallUI.prototype._renderLeds = function(leds) {
    this.context.save();
    this.context.translate(this.clockCenter.x, this.clockCenter.y);
    for (var i = 0, length = leds.length; i < length; ++i) {
        this.context.save();

        this._setLedState(leds[i]);
        this._positionLed(i);
        this._renderLed();

        this.context.restore();
    }
    this.context.restore();
};

RetroidSmallUI.prototype._setLedState = function(led) {
    var ledState = (led ? RetroidSmallUI.ledStates.active : RetroidSmallUI.ledStates.inactive);
    this.context.fillStyle      = ledState.color;
    this.context.shadowBlur     = ledState.shadow;
    this.context.shadowColor    = ledState.shadowColor;
};

RetroidSmallUI.prototype._positionLed = function(ledIdx) {
    var angle = ((Math.PI * 2) / 12) * ledIdx;

    this.context.rotate(angle);
    this.context.translate(0, -this.clockRadius);
};

RetroidSmallUI.prototype._renderLed = function() {
    var ctx = this.context;
    ctx.beginPath();
    ctx.arc(0, 4, 4, Math.PI*2, 0, true);
    ctx.fill();
};

RetroidSmallUI.prototype._initContext = function() {
    this.context = this.canvas[0].getContext('2d');
};
