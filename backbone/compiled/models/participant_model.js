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
      votes: 0,
      code: ""
    };

    Participant.prototype.url = "http://sharp-wind-7656.herokuapp.com/logics";

    Participant.prototype.initialize = function() {
      return this.logic = new Retroid.Models.Logic({
        code: this.get("code")
      });
    };

    Participant.prototype.GetCode = function() {
      return this.logic.WrappedCode();
    };

    Participant.prototype.sync = function(method, model, options) {
      if (method === "create") {
        return $.ajax({
          type: 'POST',
          url: "" + this.url + "/create",
          data: this.formatForCreate(),
          dataType: 'jsonp'
        });
      }
    };

    Participant.prototype.formatForCreate = function() {
      return {
        logic: {
          author: this.get("author"),
          name: this.get("name"),
          code: this.get("code")
        }
      };
    };

    Participant.prototype.parse = function(response) {
      return {
        author: response.author,
        name: response.name,
        code: response.code,
        dateAdded: response.created_at,
        id: response.id,
        votes: response.rating
      };
    };

    return Participant;

  })(Backbone.Model);

}).call(this);
