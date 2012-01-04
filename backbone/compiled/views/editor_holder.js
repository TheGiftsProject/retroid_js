(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.EditorHolderView = (function() {

    __extends(EditorHolderView, Backbone.View);

    function EditorHolderView() {
      EditorHolderView.__super__.constructor.apply(this, arguments);
    }

    EditorHolderView.prototype.el = $("section#editor_holder");

    EditorHolderView.prototype.editor = $(".editor_input_container", EditorHolderView.el);

    EditorHolderView.prototype.events = {
      "click .run": "run",
      "click .save": "save"
    };

    EditorHolderView.prototype.initialize = function() {
      return this.ui = {
        editor: new Retroid.Views.EditorView({
          el: this.editor,
          model: new Retroid.Models.EditorModel()
        }).render()
      };
    };

    EditorHolderView.prototype.run = function() {
      return this.ui.editor.getCode();
    };

    EditorHolderView.prototype.save = function() {
      return alert("save");
    };

    return EditorHolderView;

  })();

}).call(this);
