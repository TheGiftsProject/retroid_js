(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Views.ParticipantView = (function(_super) {

    __extends(ParticipantView, _super);

    function ParticipantView() {
      this.clockView = __bind(this.clockView, this);
      ParticipantView.__super__.constructor.apply(this, arguments);
    }

    ParticipantView.prototype.template = _.template($("#templates #participant").html());

    ParticipantView.prototype.className = "participant";

    ParticipantView.prototype.clockView = function() {
      return this.$(".right");
    };

    ParticipantView.prototype.events = {
      "mouseover": "animate",
      "mouseout": "stop"
    };

    ParticipantView.prototype.initialize = function() {
      return this.logic = this.model.logic;
    };

    ParticipantView.prototype.render = function() {
      var smallClock;
      $(this.el).html(this.template(this.model.toJSON()));
      smallClock = new Retroid.Views.SmallClockView({
        model: this.logic
      });
      this.clockView().append(smallClock.render().el);
      return this;
    };

    ParticipantView.prototype.stop = function() {
      return this.logic.Stop();
    };

    ParticipantView.prototype.animate = function() {
      return this.logic.Run();
    };

    return ParticipantView;

  })(Backbone.View);

}).call(this);
