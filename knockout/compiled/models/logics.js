
  window.LogicsModel = (function() {

    function LogicsModel(logicListViewModel) {
      var _this = this;
      this.logicListViewModel = logicListViewModel;
      this.loadLogics();
      this.logicListViewModel.orderByOptions(['Date', 'Rating']);
      this.logicListViewModel.selectedOrderBy.subscribe(function(newValue) {
        return _this.orderBy(newValue);
      });
    }

    LogicsModel.prototype.loadLogics = function() {
      var _this = this;
      return $.ajax({
        url: "http://sharp-wind-7656.herokuapp.com/logics",
        dataType: 'jsonp',
        success: function(response) {
          return _this._updateLogicsModel(response);
        }
      });
    };

    LogicsModel.prototype._updateLogicsModel = function(response) {
      return this.logicListViewModel.logicList(response.objects);
    };

    LogicsModel.prototype.orderBy = function(option) {
      return this["orderBy" + option]();
    };

    LogicsModel.prototype.orderByDate = function() {
      var _this = this;
      return this.logicListViewModel.logicList.sort(function(left, right) {
        if (left.created_at > right.created_at) return 1;
        if (left.created_at < right.created_at) return 0;
      });
    };

    LogicsModel.prototype.orderByRating = function() {
      var _this = this;
      return this.logicListViewModel.logicList.sort(function(left, right) {
        if (left.rating > right.rating) return 0;
        if (left.rating < right.rating) return 1;
      });
    };

    return LogicsModel;

  })();
