function RetroidUI(container) {
    RetroidUI.loadImages();

    this.canvas = $.tmpl($("#retroid_ui_template").html());
    this.canvas.appendTo(container);

    this._initContext();

    this.bounds = { width: this.canvas.attr('width'), height: this.canvas.attr('height') };
    this.clockCenter = { x: 142.5, y: 178 };
    this.clockRadius = 111;
}

RetroidUI.images = {
    background: "images/background.png",
    foreground: "images/foreground.png",
    minute:     "images/minute.png",
    hour:       "images/hour.png",
    point:      "images/point.png"
};

// loads images once for all instances of RetroidUI
RetroidUI.loadImages = function() {
    var image = null;
    for (var type in RetroidUI.images) {
        if (typeof RetroidUI.images[type] === "string") {
            image = new Image();
            image.src = RetroidUI.images[type];
            RetroidUI.images[type] = image;
        }
    }
};

RetroidUI.prototype.reset = function() {
    this.renderFrame(new Array(12));
};

RetroidUI.prototype.renderFrame = function(leds) {
    this.context.clearRect(0, 0, this.bounds.width, this.bounds.height);
    this.context.drawImage(RetroidUI.images.background, 0, 0, this.bounds.width, this.bounds.height);
    this._renderLeds(leds);
    this.context.drawImage(RetroidUI.images.foreground, 0, 0, this.bounds.width, this.bounds.height);

    this._renderClockHand(RetroidUI.images.minute, (new Date()).getMinutes()/60);
    this._renderClockHand(RetroidUI.images.hour, ((new Date()).getHours() % 12)/12);
    this._renderCenter();
};

RetroidUI.prototype._renderLeds = function(leds) {
    this.context.save();
    this.context.translate(this.clockCenter.x, this.clockCenter.y);
    for (var i = 0, length = leds.length; i < length; ++i) {
        this.context.save();

        // ugly! each function changes context state -- should do context modifications in this function
        this._setLedState(leds[i]);
        this._positionLed(i);
        this._renderLed();

        this.context.restore();
    }
    this.context.restore();
};

RetroidUI.prototype._setLedState = function(led) {
    this.context.fillStyle      = (led ? "2796ff" : "ccc");
    this.context.shadowBlur     = (led ? 10       : 8);
    this.context.shadowColor    = (led ? "blue"   : "eee");
};

RetroidUI.prototype._positionLed = function(ledIdx) {
    var angle = ((Math.PI * 2) / 12) * ledIdx;

    this.context.rotate(angle);
    this.context.translate(0, -this.clockRadius);
};

RetroidUI.prototype._renderLed = function() {
    var ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(-5, -5);
    ctx.lineTo(-5, 5);
    ctx.arc(0, 5, 5, Math.PI, 0, true);
    ctx.lineTo(5, -5);
    ctx.fill();
};

RetroidUI.prototype._renderClockHand = function(image, percent) {
    var ctx = this.context;
    ctx.save();
    ctx.translate(this.clockCenter.x, this.clockCenter.y);
    ctx.rotate((Math.PI * 2) * percent );
    ctx.drawImage(image, -image.width/2, -image.height/2);
    ctx.restore();
};

RetroidUI.prototype._renderCenter = function() {
    var image = RetroidUI.images.point;
    var middleX = this.clockCenter.x - image.width/2;
    var middleY = this.clockCenter.y - image.height/2;
    this.context.drawImage(image, middleX, middleY);
};

RetroidUI.prototype._initContext = function() {
    this.context = this.canvas[0].getContext('2d');
};
