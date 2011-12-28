function LogicListUI(container, callbacks) {
    this.callbacks = callbacks;
    this.itemTemplate = $("#logic_list_item_template").html();
    this.container = $(container);

    this.bindEvents();
}

LogicListUI.prototype.bindEvents = function() {
    this.container.on('click', 'li', _.bind(this.logicSelected, this));
};

LogicListUI.prototype.createItemContainer = function(id) {
    var itemContainer = $.tmpl(this.itemTemplate);
    itemContainer.data('id', id);
    itemContainer.appendTo(this.container);

    return itemContainer;
};

LogicListUI.prototype.logicSelected = function(ev) {
    if (this.callbacks && this.callbacks.logicSelected) {
        var element = $(ev.currentTarget);
        this.callbacks.logicSelected(element.data('id'), element);
    }
};

LogicListUI.prototype.markActive = function(element) {
    this.container.find('li').not(element).removeClass('active');
    if (element) {
        element.addClass('active');
    }
};

LogicListUI.prototype.markAllInactive = function() {
    this.markActive();
};
