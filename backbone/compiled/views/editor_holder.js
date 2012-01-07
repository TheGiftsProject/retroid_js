(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid.Views.EditorHolderView = (function(_super) {

    __extends(EditorHolderView, _super);

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
      this.model.get("logic").bind('change:code', this.codeChanged, this);
      return this.ui = {
        editor: new Retroid.Views.EditorView({
          el: this.editor,
          model: this.model.get("logic")
        }).render()
      };
    };

    EditorHolderView.prototype.codeChanged = function() {
      this.setRunState(this.model.get("logic").IsValid());
      return this.setSaveState(false);
    };

    EditorHolderView.prototype.run = function() {
      var code,
        _this = this;
      code = this.model.GetCode();
      this.Stop();
      this.interval = setInterval((function() {
        var toEval;
        toEval = "" + code + "([" + (_this.model.get('logic').get('leds')) + "])";
        return _this.model.get('logic').set({
          leds: eval(toEval)
        });
      }), 100);
      return this.setSaveState(true);
    };

    EditorHolderView.prototype.Stop = function() {
      if (this.interval) return clearInterval(this.interval);
    };

    EditorHolderView.prototype.save = function() {
      this.ui.submitView = new Retroid.Views.SubmitView({
        model: this.model
      }).render();
      return $(this.el).append(this.ui.submitView.el);
    };

    EditorHolderView.prototype.codeValidationError = function() {
      return this.setRunState(false);
    };

    EditorHolderView.prototype.setRunState = function(state) {
      return $(".run", this.el).prop('disabled', !state);
    };

    EditorHolderView.prototype.setSaveState = function(state) {
      return $(".save", this.el).prop('disabled', !state);
    };

    return EditorHolderView;

  })(Backbone.View);

}).call(this);
