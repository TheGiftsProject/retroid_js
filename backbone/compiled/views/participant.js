(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Views.ParticipantView = (function(_super) {

    __extends(ParticipantView, _super);

    function ParticipantView() {
      ParticipantView.__super__.constructor.apply(this, arguments);
    }

    return ParticipantView;

  })(Backbone.View);

}).call(this);