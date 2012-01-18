(function() {

  window.Retroid = (function() {

    function Retroid(container, small) {
      this.ui = (small ? new RetroidSmallUI(container) : new RetroidUI(container));
      this.logicFunc = null;
    }

    Retroid.prototype.setLogic = function(logic) {
      if (this.currentLogic) this.currentLogic.stop();
      this.ui.reset();
      this.currentLogic = new RetroidContext(logic, _.bind(this._stateChanged, this));
      return this.currentLogic.start();
    };

    Retroid.prototype._stateChanged = function(state) {
      if (!$.isArray(state)) state = [];
      state.length = 12;
      return this.ui.renderFrame(state);
    };

    return Retroid;

  })();

}).call(this);
