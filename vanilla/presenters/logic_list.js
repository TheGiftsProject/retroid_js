function LogicList(container, callbacks) {
    this.callbacks = callbacks;
    this.ui = new LogicListUI(container, { logicSelected: _.bind(this.logicSelected, this) });
    this.logicList = [];
    this.retroidList = [];

    this.loadLogicList();
}

LogicList.prototype.loadLogicList = function() {
    Logic.all().done(_.bind(function(items) {
        this.logicList = items;
        _.each(this.logicList, function(item, idx) {
            var container = this.ui.createItemContainer(idx);
            var retroid = new Retroid(container, true);
            retroid.setLogic(item);
            this.retroidList.push(retroid);
        }, this);
    } ,this));
};

LogicList.prototype.logicSelected = function(idx, el) {
    if (this.callbacks && this.callbacks.logicSelected && this.logicList) {
        this.callbacks.logicSelected(this.logicList[idx]);
        this.ui.markActive(el);
    }
};

LogicList.prototype.logicChanged = function() {
    this.ui.markAllInactive();
};

LogicList.prototype.addLogic = function(logic) {
    this.logicList.push(logic);
};
