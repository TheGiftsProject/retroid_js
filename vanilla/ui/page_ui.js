function PageUI(container) {
    this.container = container;
    this.editorContainer = this.container.find(".editor");
    this.mainRetroidContainer = this.container.find(".main_retroid");
    this.logicListContainer = this.container.find(".logic_list");
}

PageUI.prototype.getEditorContainer = function() {
    return this.editorContainer;
};

PageUI.prototype.getMainRetroidContainer = function() {
    return this.mainRetroidContainer;
};

PageUI.prototype.getLogicListContainer = function() {
    return this.logicListContainer;
};
