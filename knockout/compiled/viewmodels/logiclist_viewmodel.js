
  window.LogicListViewModel = (function() {

    function LogicListViewModel(editorViewModel) {
      var _this = this;
      this.editorViewModel = editorViewModel;
      this.logicList = ko.observableArray([]);
      this.onEditLogic = function(item) {
        return _this.editorViewModel.aceText(item.code);
      };
      this.selectedOrderBy = ko.observable();
      this.orderByOptions = ko.observableArray([]);
      this.logicsModel = new LogicsModel(this);
    }

    return LogicListViewModel;

  })();
