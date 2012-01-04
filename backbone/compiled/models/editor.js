(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Models.EditorModel = (function() {

    __extends(EditorModel, Backbone.Model);

    function EditorModel() {
      EditorModel.__super__.constructor.apply(this, arguments);
    }

    EditorModel.prototype.defaults = function() {
      return {
        code: "var returns = [];    var last = false;    var all_off = true;    for (var i = 0; i < leds.length; i++) {        if (last) {            last = false;            returns.push(1);        }        else {            if (leds[i]) {                all_off = false;                last = true;            }            returns.push(0);        }    }    if (last || all_off) {        returns[0] = 1;    }    return returns;"
      };
    };

    return EditorModel;

  })();

}).call(this);
