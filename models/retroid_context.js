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
    this._loop(RetroidContext.generateStartState());
};

RetroidContext.prototype.stop = function() {
    this.running = false;
    this.frameCallback = null;
};

RetroidContext.prototype._loop = function(state) {
    var result = this.func(state);

    if (this.running) {
        this.frameCallback(result);
        setTimeout(_.bind(function() {
            this._loop(result);
        }, this), 100);
    }
};
