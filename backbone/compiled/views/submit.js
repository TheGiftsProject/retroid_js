(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Views.SubmitView = (function(_super) {

    __extends(SubmitView, _super);

    function SubmitView() {
      SubmitView.__super__.constructor.apply(this, arguments);
    }

    SubmitView.prototype.template = _.template($("#templates #submit_popup").html());

    SubmitView.prototype.className = "submit_popup";

    SubmitView.prototype.events = {
      "click .cancel": "close",
      "click .submit": "save"
    };

    SubmitView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    SubmitView.prototype.close = function() {
      return $(this.el).remove();
    };

    SubmitView.prototype.save = function() {
      var _this = this;
      this.model.set({
        author: this.$(".name").val(),
        name: this.$(".email").val()
      });
      $(this.el).html("SAVING...");
      return this.model.save((function() {
        return _this.close;
      }), {
        silent: true
      });
    };

    return SubmitView;

  })(Backbone.View);

}).call(this);
