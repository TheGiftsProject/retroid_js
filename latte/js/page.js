(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Page = (function() {

    function Page(container) {
      this.ui = new PageUI(container);
      this.editor = new Editor(this.ui.getEditorContainer(), {
        runLogic: _.bind(this._runLogic, this),
        saveLogic: _.bind(this._showLogicDetailsPopup, this)
      });
      this.mainRetroid = new Retroid(this.ui.getMainRetroidContainer());
      this.ratingLogicList = new LogicList(this.ui.getRatingLogicListContainer(), 'rating', {
        logicSelected: _.bind(this._changeLogic, this)
      });
      this.dateLogicList = new LogicList(this.ui.getDateLogicListContainer(), 'createdAt', {
        logicSelected: _.bind(this._changeLogic, this)
      });
      this.logicDetailsPopup = new LogicDetailsPopup({
        submit: _.bind(this._saveLogic, this)
      });
    }

    Page.prototype._runLogic = function(logic) {
      return this.mainRetroid.setLogic(logic);
    };

    Page.prototype._changeLogic = function(logic) {
      this.editor.setLogic(logic);
      return this.mainRetroid.setLogic(logic);
    };

    Page.prototype._showLogicDetailsPopup = function(logic) {
      this.pendingLogic = logic;
      return this.logicDetailsPopup.open();
    };

    Page.prototype._saveLogic = function(author, name) {
      this.logicDetailsPopup.close();
      this.pendingLogic.updateAttributes({
        author: author,
        name: name
      });
      return this.pendingLogic.save().done(__bind(function(logic) {
        this.dateLogicList.addLogic(logic);
        return this.ratingLogicList.addLogic(logic);
      }, this));
    };

    return Page;

  })();

}).call(this);
