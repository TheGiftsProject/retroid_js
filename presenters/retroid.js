function Retroid(container, small) {
    this.ui = (small ? new RetroidSmallUI(container) : new RetroidUI(container));
    this.logicFunc = null;
}

Retroid.prototype.setLogic = function(logic) {
    if (this.currentLogic) {
        this.currentLogic.stop();
    }

    this.ui.reset();
    this.currentLogic = new RetroidContext(logic, _.bind(this.stateChanged, this));
    this.currentLogic.start();
};

Retroid.prototype.stateChanged = function(state) {
    if (!$.isArray(state)) {
        state = [];
    }
    state.length = 12;
    this.ui.renderFrame(state);
};
