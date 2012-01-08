(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Views.ParticipantsView = (function(_super) {

    __extends(ParticipantsView, _super);

    function ParticipantsView() {
      ParticipantsView.__super__.constructor.apply(this, arguments);
    }

    ParticipantsView.prototype.el = $("#participants");

    ParticipantsView.prototype.initialize = function() {
      return this.collection.bind("add", this.added, this);
    };

    ParticipantsView.prototype.added = function(participant) {
      return this.el.append(new Retroid.Views.ParticipantView({
        this.model: participant
      }));
    };

    return ParticipantsView;

  })(Backbone.View);

}).call(this);
