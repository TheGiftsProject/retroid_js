(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Models.Participant = (function(_super) {

    __extends(Participant, _super);

    function Participant() {
      Participant.__super__.constructor.apply(this, arguments);
    }

    Participant.prototype.defaults = {
      name: "",
      email: "",
      dateAdded: "",
      rating: "",
      logic: new Retroid.Models.Logic()
    };

    Participant.prototype.GetCode = function() {
      return this.get("logic").WrappedCode();
    };

    return Participant;

  })(Backbone.Model);

}).call(this);