
  window.RetroidAdapter = (function() {

    function RetroidAdapter(element, retroidViewModel) {
      var _this = this;
      this.element = element;
      this.retroidViewModel = retroidViewModel;
      this.retroidUI = new RetroidUI(this.element);
      this.retroidViewModel.leds.subscribe(function(newValue) {
        return _this.retroidUI.renderFrame(newValue);
      });
    }

    return RetroidAdapter;

  })();
