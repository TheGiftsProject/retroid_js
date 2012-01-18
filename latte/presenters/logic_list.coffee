class window.LogicList
    constructor: (container, sortOrder, callbacks) ->
        @callbacks = callbacks
        @ui = new LogicListUI(container)
        @sortOrder = sortOrder
        @items = []

        @_loadLogicList()

    addLogic: (logic) ->
        @_loadLogicList()

    _loadLogicList: () ->
        Logic.all().done( (items) =>
            items = Logic.sortBy(items, @sortOrder)
            @_renderLogicList(items)
        )

    _renderLogicList: (items) ->
        @items = []
        @ui.reset();
        _.each(items, (item, idx) =>
            container = @ui.createItemContainer()
            item = new LogicListItem(container, item,
                selected: _.bind(@_logicSelected, @)
            )
            @items.push(item)
        )


    _logicSelected: (logic) ->
        @callbacks.logicSelected?(logic)
