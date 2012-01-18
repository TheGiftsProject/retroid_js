(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.LogicList = (function() {

    function LogicList(container, sortOrder, callbacks) {
      this.callbacks = callbacks;
      this.ui = new LogicListUI(container);
      this.sortOrder = sortOrder;
      this.items = [];
      this._loadLogicList();
    }

    LogicList.prototype.addLogic = function(logic) {
      return this._loadLogicList();
    };

    LogicList.prototype._loadLogicList = function() {
      return Logic.all().done(__bind(function(items) {
        items = Logic.sortBy(items, this.sortOrder);
        return this._renderLogicList(items);
      }, this));
    };

    LogicList.prototype._renderLogicList = function(items) {
      this.items = [];
      this.ui.reset();
      return _.each(items, __bind(function(item, idx) {
        var container;
        container = this.ui.createItemContainer();
        item = new LogicListItem(container, item, {
          selected: _.bind(this._logicSelected, this)
        });
        return this.items.push(item);
      }, this));
    };

    LogicList.prototype._logicSelected = function(logic) {
      var _base;
      return typeof (_base = this.callbacks).logicSelected === "function" ? _base.logicSelected(logic) : void 0;
    };

    return LogicList;

  })();

}).call(this);
