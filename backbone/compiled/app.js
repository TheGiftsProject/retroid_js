(function() {
  var _base, _base2, _base3,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid || (window.Retroid = {});

  (_base = window.Retroid).Views || (_base.Views = {});

  (_base2 = window.Retroid).Models || (_base2.Models = {});

  (_base3 = window.Retroid).Libs || (_base3.Libs = {});

  Backbone.oldSync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    options.contentType = "application/json; charset=utf-8";
    if (method === "create") {
      model.url = model.url + "/create?callback=?";
      params.data = model.toJSON();
    }
    return Backbone.oldSync(method, model, options);
  };

  window.Retroid.AppView = (function(_super) {

    __extends(AppView, _super);

    function AppView() {
      AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = $("#retroid_backbone");

    AppView.prototype.initialize = function() {
      var _this = this;
      this.ui || (this.ui = {});
      this._initModels();
      this._initEditorHolder(this.participant);
      this._initLargeClock(this.participant);
      this._initParticipantsView();
      this.participants.bind("reset", this._fetchedParticipants, this);
      setInterval((function() {
        return _this.participants.fetch();
      }), 1000);
      return this;
    };

    AppView.prototype._initModels = function() {
      this.participant = new Retroid.Models.Participant();
      this.participants = new Retroid.Models.Participants();
      this.participantsByVotes = new Retroid.Models.Participants({
        comparator: function(participant) {
          return participant.get("votes");
        }
      });
      return this.participantsByLatest = new Retroid.Models.Participants({
        comparator: function(participant) {
          return participant.get("dateAdded");
        }
      });
    };

    AppView.prototype._initEditorHolder = function(participant) {
      return this.ui.editorHolder = new Retroid.Views.EditorHolderView({
        model: participant
      });
    };

    AppView.prototype._initLargeClock = function(participant) {
      return this.ui.largeClock = new Retroid.Views.LargeClockView({
        model: participant.logic
      });
    };

    AppView.prototype._fetchedParticipants = function() {
      this.participantsByVotes.reset(this.participants.models);
      return this.participantsByLatest.reset(this.participants.models);
    };

    AppView.prototype._initParticipantsView = function() {
      this.ui.participantsByVotes = new Retroid.Views.ParticipantsView({
        el: $("#participants.byVotes"),
        collection: this.participantsByVotes
      });
      return this.ui.participantsByLatest = new Retroid.Views.ParticipantsView({
        el: $("#participants.byLatest"),
        collection: this.participantsByLatest
      });
    };

    return AppView;

  })(Backbone.View);

}).call(this);
