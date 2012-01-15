
  window.LogicService = (function() {

    function LogicService() {
      this.logics_url = "http://sharp-wind-7656.herokuapp.com/logics";
    }

    LogicService.prototype.getAllLogics = function() {
      var deferred;
      var _this = this;
      deferred = $.deferred;
      $.ajax({
        url: this.logics_url,
        dataType: 'jsonp'
      }).done(response)(function() {
        return _this._buildLogicModels(response.objects);
      }).fail(xhr, status, error)(function() {
        return deferred.rejectWith(_this, [xhr, status, error]);
      });
      return deferred.promise();
    };

    LogicService.prototype._buildLogicModels = function(collection) {
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

    return LogicService;

  })();
