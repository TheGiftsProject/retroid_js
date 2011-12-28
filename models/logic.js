function Logic(text) {
    this.text = text;
    this.logicFunc = new Function(Logic.processFunctionText(this.text));
}

Logic.prototype.func = function() {
    return _.bind(this.logicFunc, {}); // create a new context for the function to run in -- so we don't pollute the window object
};

Logic.processFunctionText = function(text) {
    return "var leds = arguments[0];" + text + "; return leds;";
};
