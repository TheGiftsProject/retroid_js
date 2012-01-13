(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.LogicListViewModel = (function() {
    function LogicListViewModel(editorViewModel) {
      this.editorViewModel = editorViewModel;
      this.logicList = ko.observableArray([
        {
          name: "moo1",
          rating: 5,
          logic: "var returns = [];					var last = false;					var all_off = true;					for (var i = 0; i < leds.length; i++) {					    if (last) {					        last = false;					        returns.push(1);					    }					    else {					        if (leds[i]) {					            all_off = false;					            last = true;					        }					        returns.push(0);					    }					}					if (last || all_off) {					    returns[0] = 1;					}					return returns;"
        }, {
          name: "moo2",
          rating: 4,
          logic: "asfvar modi"
        }, {
          name: "moo3",
          rating: 3,
          logic: "asgsag"
        }
      ]);
      this.onEditLogic = __bind(function(item) {
        return this.editorViewModel.aceText(item.logic);
      }, this);
    }
    return LogicListViewModel;
  })();
}).call(this);
