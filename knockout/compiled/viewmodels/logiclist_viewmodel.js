
  window.LogicListViewModel = (function() {

    function LogicListViewModel(editorViewModel) {
      var _this = this;
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
      this.onRunLogic = function(item) {
        return _this.editorViewModel.aceText(item.logic);
      };
    }

    return LogicListViewModel;

  })();
