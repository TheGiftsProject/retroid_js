class LogicListUI
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @itemTemplate = $("#logic_list_item_template").html()
        @container = $(container)

        @bindEvents()

    bindEvents: () ->
        @container.on('click', 'li', _.bind(@logicSelected, @))

    createItemContainer: (id) ->
        itemContainer = $.tmpl(@itemTemplate)
        itemContainer.data('id', id)
        itemContainer.appendTo(@container)

        itemContainer

    logicSelected: (ev) ->
        element = $(ev.currentTarget)
        @callbacks.logicSelected?(element.data('id'), element)

    markActive: (element) ->
        @container.find('li').not(element).removeClass('active')
        element?.addClass('active')

    markAllInactive: () ->
        @markActive()
