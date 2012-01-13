(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicListViewModel = (function() {
    function LogicListViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.logicList = ko.observableArray([]);
      this.onEditLogic = __bind(function(item) {
        return this.editorViewModel.aceText(item.code);
      }, this);
      this.logicsModel = new LogicsModel(this);
    }
    return LogicListViewModel;
  })();
}).call(this);
