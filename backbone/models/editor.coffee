class window.Retroid.Models.EditorModel extends Backbone.Model
  defaults: ->
    code: " var returns = [];
            var last = false;
            var all_off = true;

            for (var i = 0; i < leds.length; i++) {
                if (last) {
                    last = false;
                    returns.push(1);
                }
                else {
                    if (leds[i]) {
                        all_off = false;
                        last = true;
                    }
                    returns.push(0);
                }
            }
            if (last || all_off) {
                returns[0] = 1;
            }

            return returns;"


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


