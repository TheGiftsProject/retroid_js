(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicsModel = (function() {
    function LogicsModel(logicListViewModel) {
      this.logicListViewModel = logicListViewModel;
      this.loadLogics();
      this.logicListViewModel.orderByOptions(['Date', 'Rating']);
      this.logicListViewModel.selectedOrderBy.subscribe(__bind(function(newValue) {
        return this.orderBy(newValue);
      }, this));
    }
    LogicsModel.prototype.loadLogics = function() {
      return $.ajax({
        url: "http://sharp-wind-7656.herokuapp.com/logics",
        dataType: 'jsonp',
        success: __bind(function(response) {
          return this._updateLogicsModel(response);
        }, this)
      });
    };
    LogicsModel.prototype._updateLogicsModel = function(response) {
      return this.logicListViewModel.logicList(response.objects);
    };
    LogicsModel.prototype.orderBy = function(option) {
      return this["orderBy" + option]();
    };
    LogicsModel.prototype.orderByDate = function() {
      return this.logicListViewModel.logicList.sort(__bind(function(left, right) {
        if (left.created_at > right.created_at) {
          return 1;
        }
        if (left.created_at < right.created_at) {
          return 0;
        }
      }, this));
    };
    LogicsModel.prototype.orderByRating = function() {
      return this.logicListViewModel.logicList.sort(__bind(function(left, right) {
        if (left.rating > right.rating) {
          return 0;
        }
        if (left.rating < right.rating) {
          return 1;
        }
      }, this));
    };
    return LogicsModel;
  })();
}).call(this);
