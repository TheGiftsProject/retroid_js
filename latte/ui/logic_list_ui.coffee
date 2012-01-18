class window.LogicListUI
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @itemTemplate = $("#logic_list_item_template").html()
        @container = $(container)

    createItemContainer: () ->
        itemContainer = $.tmpl(@itemTemplate)
        itemContainer.appendTo(@container)

        itemContainer

    reset: () ->
        @container.empty()
