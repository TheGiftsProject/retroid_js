(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.LogicListItem = (function() {

    function LogicListItem(container, logic, callbacks) {
      this.callbacks = callbacks;
      this.logic = logic;
      this.ui = new LogicListItemUI(container, logic, {
        selected: _.bind(this._selected, this),
        voteUp: _.bind(this._voteUp, this),
        voteDown: _.bind(this._voteDown, this)
      });
      this.retroid = new Retroid(this.ui.getClockContainer(), true);
      this.retroid.setLogic(this.logic);
    }

    LogicListItem.prototype._selected = function() {
      var _base;
      return typeof (_base = this.callbacks).selected === "function" ? _base.selected(this.logic) : void 0;
    };

    LogicListItem.prototype._voteUp = function() {
      return this.logic.vote('up').done(__bind(function() {
        return this.ui.setRating(this.logic.rating);
      }, this));
    };

    LogicListItem.prototype._voteDown = function() {
      return this.logic.vote('down').done(__bind(function() {
        return this.ui.setRating(this.logic.rating);
      }, this));
    };

    return LogicListItem;

  })();

}).call(this);
