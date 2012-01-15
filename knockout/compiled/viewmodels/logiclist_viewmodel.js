
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
      this.loadLogicList();
      this.selectedOrderBy.subscribe(function(newValue) {
        return _this.orderBy(newValue);
      });
    }

    LogicListViewModel.prototype.loadLogicList = function() {
      var _this = this;
      return window.LogicModel.all().done(function(collection) {
        debugger;        return _this.logicList(collection);
      });
    };

    LogicListViewModel.prototype.orderBy = function(option) {
      return this["orderBy" + option]();
    };

    LogicListViewModel.prototype.orderByDate = function() {
      var _this = this;
      return this.logicList.sort(function(left, right) {
        if (left.created_at > right.created_at) return 1;
        if (left.created_at < right.created_at) return 0;
      });
    };

    LogicListViewModel.prototype.orderByRating = function() {
      var _this = this;
      return this.logicList.sort(function(left, right) {
        if (left.rating > right.rating) return 0;
        if (left.rating < right.rating) return 1;
      });
    };

    return LogicListViewModel;

  })();
