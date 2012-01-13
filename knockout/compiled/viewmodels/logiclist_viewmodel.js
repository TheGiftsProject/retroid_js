(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicListViewModel = (function() {
    function LogicListViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.logicList = ko.observableArray([
        {
          name: "moo1",
          rating: 5,
          logic: "for (var i = 0; i < leds.length; ++i) { leds[i] = !leds[i]; }"
        }, {
          name: "moo2",
          rating: 4,
          logic: "var modi"
        }, {
          name: "moo3",
          rating: 3,
          logic: ""
        }
      ]);
      this.onRunLogic = __bind(function(item) {
        return this.editorViewModel.aceText(item.logic);
      }, this);
    }
    return LogicListViewModel;
  })();
}).call(this);
