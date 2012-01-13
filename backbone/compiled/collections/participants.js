(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Models.Participants = (function(_super) {

    __extends(Participants, _super);

    function Participants() {
      Participants.__super__.constructor.apply(this, arguments);
    }

    Participants.prototype.model = Retroid.Models.Participant;

    Participants.prototype.url = "http://sharp-wind-7656.herokuapp.com/logics?callback=?";

    Participants.prototype.parse = function(response) {
      var models, object, _i, _len, _ref;
      models = [];
      _ref = response.objects;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        object = _ref[_i];
        models.push(new Retroid.Models.Participant().parse(object));
      }
      return models;
    };

    return Participants;

  })(Backbone.Collection);

}).call(this);
