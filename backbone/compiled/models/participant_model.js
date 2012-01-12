(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Retroid.Models.Participant = (function(_super) {

    __extends(Participant, _super);

    function Participant() {
      Participant.__super__.constructor.apply(this, arguments);
    }

    Participant.prototype.defaults = {
      author: "",
      name: "",
      dateAdded: "",
      votes: 0
    };

    Participant.prototype.url = "http://sharp-wind-7656.herokuapp.com/logics";

    Participant.prototype.initialize = function() {
      var logic;
      logic = new Retroid.Models.Logic();
      return this.set({
        logic: logic
      });
    };

    Participant.prototype.GetCode = function() {
      return this.get("logic").WrappedCode();
    };

    Participant.prototype.sync = function(method, model, options) {
      var data;
      data = this.formatForCreate();
      return $.ajax({
        type: 'POST',
        url: "" + this.url + "/create",
        data: data,
        dataType: 'jsonp'
      });
    };

    Participant.prototype.formatForCreate = function() {
      return {
        logic: {
          author: this.get("author"),
          name: this.get("name"),
          code: this.get("logic").get("code")
        }
      };
    };

    Participant.prototype.parse = function(response) {
      return {
        author: response.author,
        name: response.name,
        logic: new Retroid.Models.Logic({
          code: response.code
        }),
        dateAdded: response.created_at,
        id: response.id,
        votes: response.rating
      };
    };

    return Participant;

  })(Backbone.Model);

}).call(this);
