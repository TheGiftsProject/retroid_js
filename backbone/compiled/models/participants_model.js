(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Models.Participants = (function(_super) {

    __extends(Participants, _super);

    function Participants() {
      Participants.__super__.constructor.apply(this, arguments);
    }

    Participants.prototype.model = Retroid.Models.Participant;

    return Participants;

  })(Backbone.Collection);

}).call(this);
