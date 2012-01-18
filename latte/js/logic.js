(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Logic = (function() {

    function Logic(attrs) {
      this.updateAttributes(attrs);
      this.logicFunc = new Function(Logic._processFunctionText(this.code));
    }

    Logic.prototype.func = function() {
      return _.bind(this.logicFunc, {});
    };

    Logic._processFunctionText = function(text) {
      return "var leds = arguments[0];" + text + "; return leds;";
    };

    Logic.prototype.updateAttributes = function(attrs) {
      if (attrs) {
        this.code = attrs.code || this.code;
        this.author = attrs.author || this.author;
        this.name = attrs.name || this.name;
        this.rating = attrs.rating || this.rating;
        this.id = attrs.id || this.id;
        if (attrs.createdAt && new Date(attrs.createdAt)) {
          return this.createdAt = new Date(attrs.createdAt);
        } else if (attrs.created_at && new Date(attrs.created_at)) {
          return this.createdAt = new Date(attrs.created_at);
        }
      }
    };

    Logic.prototype.vote = function(type) {
      var deferred;
      deferred = $.Deferred();
      $.ajax("http://sharp-wind-7656.herokuapp.com/logics/" + this.id + "/vote", {
        data: {
          vote: type
        },
        dataType: 'jsonp'
      }).done(__bind(function(data) {
        if (data.ack === "success") {
          this.rating = data.object.rating;
          return deferred.resolve(this);
        } else {
          return deferred.reject();
        }
      }, this)).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };

    Logic.prototype.save = function() {
      var deferred;
      deferred = $.Deferred();
      $.ajax("http://sharp-wind-7656.herokuapp.com/logics/create", {
        data: {
          "logic[author]": this.author,
          "logic[name]": this.name,
          "logic[code]": this.code
        },
        dataType: 'jsonp'
      }).done(__bind(function(data) {
        if (data.ack === "success") {
          this.updateAttributes(data.object);
          return deferred.resolve(this);
        } else {
          return deferred.reject();
        }
      }, this)).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };

    Logic.all = function() {
      var deferred;
      deferred = $.Deferred();
      $.ajax("http://sharp-wind-7656.herokuapp.com/logics", {
        dataType: 'jsonp'
      }).done(function(data) {
        var logics;
        if (data.ack === "success") {
          logics = [];
          _(data.objects).each(function(item) {
            return logics.push(Logic._createFromServerData(item));
          });
          return deferred.resolve(logics);
        } else {
          return deferred.reject();
        }
      }).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };

    Logic.sortBy = function(logics, attributeName) {
      return _(logics).sortBy(function(item) {
        return item[attributeName];
      }).reverse();
    };

    Logic._createFromServerData = function(data) {
      return new Logic(data);
    };

    return Logic;

  })();

}).call(this);
