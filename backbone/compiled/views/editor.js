(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.EditorView = (function() {

    __extends(EditorView, Backbone.View);

    function EditorView() {
      EditorView.__super__.constructor.apply(this, arguments);
    }

    EditorView.prototype.editor_id = "script_input";

    EditorView.prototype.el = $("section#editor");

    EditorView.prototype.events = {
      "click .run": "run",
      "click .save": "save"
    };

    EditorView.prototype.initialize = function() {
      return this.editor = $("" + this.editor_id);
    };

    EditorView.prototype.run = function() {
      return alert("run");
    };

    EditorView.prototype.save = function() {
      return alert("save");
    };

    EditorView.prototype._initAce = function() {};

    return EditorView;

  })();

}).call(this);
