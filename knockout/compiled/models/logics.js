(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicsModel = (function() {
    function LogicsModel(logicListViewModel) {
      this.logicListViewModel = logicListViewModel;
      $.ajax({
        url: "http://sharp-wind-7656.herokuapp.com/logics",
        dataType: 'jsonp',
        success: __bind(function(response) {
          return this._initLogicsModel(response);
        }, this)
      });
    }
    LogicsModel.prototype._initLogicsModel = function(response) {
      return this.logicListViewModel.logicList(response.objects);
    };
    return LogicsModel;
  })();
}).call(this);
