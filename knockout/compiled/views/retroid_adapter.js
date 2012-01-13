(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RetroidAdapter = (function() {
    function RetroidAdapter(element, retroidViewModel) {
      this.element = element;
      this.retroidViewModel = retroidViewModel;
      this.retroidUI = new RetroidUI(this.element);
      this.retroidViewModel.leds.subscribe(__bind(function(newValue) {
        return this.retroidUI.renderFrame(newValue);
      }, this));
    }
    return RetroidAdapter;
  })();
}).call(this);
