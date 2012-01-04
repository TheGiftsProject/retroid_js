(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.EditorView = (function() {

    __extends(EditorView, Backbone.View);

    function EditorView() {
      EditorView.__super__.constructor.apply(this, arguments);
    }

    EditorView.prototype.template = _.template($("#templates .editor").html());

    EditorView.prototype.events = {
      "keyup": "change"
    };

    EditorView.prototype.initialize = function() {
      this.model.bind('destroy', this.remove, this);
      return this;
    };

    EditorView.prototype.render = function() {
      console.log("rending the code editor");
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    EditorView.prototype.getCode = function() {
      return this.model.get("code");
    };

    EditorView.prototype.change = function() {
      return this.model.set({
        code: $("textarea", this.el).val()
      });
    };

    return EditorView;

  })();

}).call(this);
