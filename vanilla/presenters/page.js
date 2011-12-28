function Page(container) {
    this.ui = new PageUI(container);

    this.editor = new Editor(this.ui.getEditorContainer(), { runLogic: _.bind(this.runLogic, this) });
    this.mainRetroid = new Retroid(this.ui.getMainRetroidContainer());
    this.logicList = new LogicList(this.ui.getLogicListContainer(), { logicSelected: _.bind(this.changeLogic, this) });
}

Page.prototype.runLogic = function(logic) {
    this.mainRetroid.setLogic(logic);
    this.logicList.logicChanged();
};

Page.prototype.changeLogic = function(logic) {
    this.editor.setLogic(logic);
    this.mainRetroid.setLogic(logic);
};
