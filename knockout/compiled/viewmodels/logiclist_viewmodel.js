(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicListViewModel = (function() {
    function LogicListViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.onEditLogic = __bind(function(item) {
        return this.editorViewModel.aceText(item.code);
      }, this);
      this.logicList = ko.observableArray([]);
      this.selectedOrderBy = ko.observable();
      this.orderByOptions = ko.observableArray(['Date', 'Rating']);
      this._initLogicModelBindings();
      this.loadLogicList();
      this.selectedOrderBy.subscribe(__bind(function(newValue) {
        return this.orderBy(newValue);
      }, this));
    }
    LogicListViewModel.prototype._initLogicModelBindings = function() {
      this.removeLogic = __bind(function(item) {
        return item.destroy().done(__bind(function() {
          return this.logicList.destroy(item);
        }, this));
      }, this);
      this.thumbsUp = __bind(function(item) {
        return item.vote("up").done(__bind(function() {
          return this.orderByRating();
        }, this));
      }, this);
      return this.thumbsDown = __bind(function(item) {
        return item.vote("down").done(__bind(function() {
          return this.orderByRating();
        }, this));
      }, this);
    };
    LogicListViewModel.prototype.loadLogicList = function() {
      return window.LogicModel.all().done(__bind(function(collection) {
        return this.logicList(collection);
      }, this));
    };
    LogicListViewModel.prototype.orderBy = function(option) {
      return this["orderBy" + option]();
    };
    LogicListViewModel.prototype.orderByDate = function() {
      return this.logicList.sort(__bind(function(left, right) {
        if (left.created_at > right.created_at) {
          return -1;
        }
        if (left.created_at < right.created_at) {
          return 1;
        }
      }, this));
    };
    LogicListViewModel.prototype.orderByRating = function() {
      return this.logicList.sort(__bind(function(left, right) {
        if (left.rating() > right.rating()) {
          return -1;
        }
        if (left.rating() < right.rating()) {
          return 1;
        }
      }, this));
    };
    return LogicListViewModel;
  })();
}).call(this);
