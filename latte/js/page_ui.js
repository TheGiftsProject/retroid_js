(function() {

  window.PageUI = (function() {

    function PageUI(container) {
      this.container = container;
      this.editorContainer = this.container.find(".editor");
      this.mainRetroidContainer = this.container.find(".main_retroid");
      this.ratingLogicListContainer = this.container.find(".rating_logic_list");
      this.dateLogicListContainer = this.container.find(".date_logic_list");
    }

    PageUI.prototype.getEditorContainer = function() {
      return this.editorContainer;
    };

    PageUI.prototype.getMainRetroidContainer = function() {
      return this.mainRetroidContainer;
    };

    PageUI.prototype.getRatingLogicListContainer = function() {
      return this.ratingLogicListContainer;
    };

    PageUI.prototype.getDateLogicListContainer = function() {
      return this.dateLogicListContainer;
    };

    return PageUI;

  })();

}).call(this);
