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
      return this.collection.bind("reset", this.fetched, this);
    };

    ParticipantsView.prototype.fetched = function() {
      var participant, participantView, _i, _len, _ref, _results;
      this.el.children().remove();
      _ref = this.collection.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        participant = _ref[_i];
        if (!participant.get("logic").IsValid()) continue;
        participantView = new Retroid.Views.ParticipantView({
          model: participant
        });
        _results.push(this.el.append(participantView.render().el));
      }
      return _results;
    };

    return ParticipantsView;

  })(Backbone.View);

}).call(this);
