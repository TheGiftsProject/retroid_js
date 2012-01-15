
  window.LogicListViewModel = (function() {

    function LogicListViewModel(editorViewModel) {
      var _this = this;
      this.editorViewModel = editorViewModel;
      this.onEditLogic = function(item) {
        return _this.editorViewModel.aceText(item.code);
      };
      this.logicList = ko.observableArray([]);
      this.selectedOrderBy = ko.observable();
      this.orderByOptions = ko.observableArray(['Date', 'Rating']);
      this._initLogicModelBindings();
      this.loadLogicList();
      this.selectedOrderBy.subscribe(function(newValue) {
        return _this.orderBy(newValue);
      });
    }

    LogicListViewModel.prototype._initLogicModelBindings = function() {
      var _this = this;
      this.removeLogic = function(item) {
        return item.destroy().done(function() {
          return _this.logicList.destroy(item);
        });
      };
      this.thumbsUp = function(item) {
        return item.vote("up").done(function() {
          return _this.orderByRating();
        });
      };
      return this.thumbsDown = function(item) {
        return item.vote("down").done(function() {
          return _this.orderByRating();
        });
      };
    };

    LogicListViewModel.prototype.loadLogicList = function() {
      var _this = this;
      return window.LogicModel.all().done(function(collection) {
        return _this.logicList(collection);
      });
    };

    LogicListViewModel.prototype.orderBy = function(option) {
      return this["orderBy" + option]();
    };

    LogicListViewModel.prototype.orderByDate = function() {
      var _this = this;
      return this.logicList.sort(function(left, right) {
        if (left.created_at > right.created_at) return -1;
        if (left.created_at < right.created_at) return 1;
      });
    };

    LogicListViewModel.prototype.orderByRating = function() {
      var _this = this;
      return this.logicList.sort(function(left, right) {
        if (left.rating() > right.rating()) return -1;
        if (left.rating() < right.rating()) return 1;
      });
    };

    return LogicListViewModel;

  })();
