
  window.LogicModel = (function() {

    function LogicModel(_arg) {
      this.id = _arg.id, this.author = _arg.author, this.code = _arg.code, this.created_at = _arg.created_at, this.updated_at = _arg.updated_at, this.name = _arg.name, this.rating = _arg.rating;
      this.rating = ko.observable(this.rating);
    }

    LogicModel.logics_url = "http://sharp-wind-7656.herokuapp.com/logics";

    LogicModel.prototype.create = function() {
      var deferred;
      var _this = this;
      if (this.id) {
        throw 'Cannot create a logic that already exists in the database';
      }
      deferred = $.Deferred();
      $.ajax({
        url: "" + this.LogicModel.logics_url + "/create",
        data: {
          "logic[author]": this.author,
          "logic[name]": this.name,
          "logic[code]": this.code
        },
        dataType: 'jsonp'
      }).done(function(response) {
        _this.id = response.object.id;
        return deferred.resolve(response.object);
      }).fail(function(xhr, status, error) {
        return deferred.rejectWith(_this, [xhr, status, error]);
      });
      return deferred.promise();
    };

    LogicModel.prototype.destroy = function() {
      var deferred;
      var _this = this;
      deferred = $.Deferred();
      $.ajax({
        url: "" + LogicModel.logics_url + "/" + this.id + "/destroy",
        dataType: 'jsonp'
      }).done(function(response) {
        return deferred.resolve(response.object);
      }).fail(function(xhr, status, error) {
        return deferred.rejectWith(_this, [xhr, status, error]);
      });
      return deferred.promise();
    };

    LogicModel.prototype.vote = function(type) {
      var deferred;
      var _this = this;
      deferred = $.Deferred();
      $.ajax({
        url: "" + LogicModel.logics_url + "/" + this.id + "/vote",
        data: {
          vote: type
        },
        dataType: 'jsonp'
      }).done(function(response) {
        _this.rating(response.object.rating);
        return deferred.resolve(response.object);
      }).fail(function(xhr, status, error) {
        return deferred.rejectWith(_this, [xhr, status, error]);
      });
      return deferred.promise();
    };

    LogicModel.all = function() {
      var deferred;
      var _this = this;
      deferred = $.Deferred();
      $.ajax(this.logics_url, {
        dataType: 'jsonp'
      }).done(function(response) {
        return deferred.resolve(_this._buildLogicModels(response.objects));
      }).fail(function(xhr, status, error) {
        return deferred.rejectWith(_this, [xhr, status, error]);
      });
      return deferred.promise();
    };

    LogicModel._buildLogicModels = function(collection) {
      var item, logicModel, result, _i, _len;
      result = [];
      for (_i = 0, _len = collection.length; _i < _len; _i++) {
        item = collection[_i];
        logicModel = new window.LogicModel({
          id: item.id,
          author: item.author,
          code: item.code,
          created_at: item.created_at,
          updated_at: item.updated_at,
          name: item.name,
          rating: item.rating
        });
        result.push(logicModel);
      }
      return result;
    };

    return LogicModel;

  })();
