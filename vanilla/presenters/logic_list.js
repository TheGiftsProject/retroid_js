function LogicList(container, callbacks) {
    this.callbacks = callbacks;
    this.ui = new LogicListUI(container, { logicSelected: _.bind(this.logicSelected, this) });

    this.loadLogicList();
}

LogicList.prototype.loadLogicList = function() {
    _.each(LogicCollection, function(item, idx) {
        var container = this.ui.createItemContainer(idx);
        var retroid = new Retroid(container, true);
        retroid.setLogic(item);
    }, this);
};

LogicList.prototype.logicSelected = function(idx, el) {
    if (this.callbacks && this.callbacks.logicSelected && LogicCollection[idx]) {
        this.callbacks.logicSelected(LogicCollection[idx]);
        this.ui.markActive(el);
    }
};

LogicList.prototype.logicChanged = function() {
    this.ui.markAllInactive();
};
