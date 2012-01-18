(function() {

  window.LogicListUI = (function() {

    function LogicListUI(container, callbacks) {
      this.callbacks = callbacks;
      this.itemTemplate = $("#logic_list_item_template").html();
      this.container = $(container);
    }

    LogicListUI.prototype.createItemContainer = function() {
      var itemContainer;
      itemContainer = $.tmpl(this.itemTemplate);
      itemContainer.appendTo(this.container);
      return itemContainer;
    };

    LogicListUI.prototype.reset = function() {
      return this.container.empty();
    };

    return LogicListUI;

  })();

}).call(this);
