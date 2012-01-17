function Page(container) {
    this.ui = new PageUI(container);

    this.editor = new Editor(this.ui.getEditorContainer(), { runLogic: _.bind(this.runLogic, this), saveLogic: _.bind(this.showLogicDetailsPopup, this) });
    this.mainRetroid = new Retroid(this.ui.getMainRetroidContainer());
    this.logicList = new LogicList(this.ui.getLogicListContainer(), { logicSelected: _.bind(this.changeLogic, this) });
    this.logicDetailsPopup = new LogicDetailsPopup({ submit: _.bind(this.saveLogic, this) });
}

Page.prototype.runLogic = function(logic) {
    this.mainRetroid.setLogic(logic);
    this.logicList.logicChanged();
};

Page.prototype.changeLogic = function(logic) {
    this.editor.setLogic(logic);
    this.mainRetroid.setLogic(logic);
};

Page.prototype.showLogicDetailsPopup = function(logic) {
    this.pendingLogic = logic;
    this.logicDetailsPopup.open();
};

Page.prototype.saveLogic = function(author, name) {
    this.logicDetailsPopup.close();
    this.pendingLogic.updateAttributes({ author: author, name: name });
    this.pendingLogic.save().done(_.bind(function(logic) {
        this.logicList.addLogic(logic);
    }, this));
};
