(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.CreateLogicDialogViewModel = (function() {
    function CreateLogicDialogViewModel() {
      this.closeDialog = ko.observable();
      this.author = ko.observable();
      this.name = ko.observable();
      this.code = ko.observable();
      this.createLogic = __bind(function() {
        var logicModel;
        logicModel = new LogicModel({
          author: this.author,
          name: this.name,
          code: this.code
        });
        return logicModel.create().done(__bind(function(logic) {
          return this.closeDialog(true);
        }, this));
      }, this);
    }
    return CreateLogicDialogViewModel;
  })();
}).call(this);
