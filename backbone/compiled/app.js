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
    if (method === "create") model.url = model.url + "/create?callback=?";
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
      setInterval((function() {
        return _this.participants.fetch();
      }), 1000);
      return this;
    };

    AppView.prototype._initModels = function() {
      this.participant = new Retroid.Models.Participant();
      return this.participants = new Retroid.Models.Participants();
    };

    AppView.prototype._initEditorHolder = function(participant) {
      return this.ui.editorHolder = new Retroid.Views.EditorHolderView({
        model: participant
      });
    };

    AppView.prototype._initLargeClock = function(participant) {
      return this.ui.largeClock = new Retroid.Views.LargeClockView({
        model: participant.get("logic")
      });
    };

    AppView.prototype._initParticipantsView = function() {
      return this.ui.participants = new Retroid.Views.ParticipantsView({
        collection: this.participants
      });
    };

    return AppView;

  })(Backbone.View);

}).call(this);
