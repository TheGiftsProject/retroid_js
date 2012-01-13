(function() {
  window.RetroidViewModel = (function() {
    function RetroidViewModel() {
      this.leds = ko.observableArray(new Array(12));
    }
    return RetroidViewModel;
  })();
}).call(this);
