class LogicList
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @ui = new LogicListUI(container,
            logicSelected: _.bind(@logicSelected, this)
        )
        @logicList = []
        @retroidList = []

        @loadLogicList()

    loadLogicList: () ->
        Logic.all().done( (items) =>
            @logicList = items;
            _.each(@logicList, (item, idx) =>
                container = @ui.createItemContainer(idx)
                retroid = new Retroid(container, true)
                retroid.setLogic(item)
                @retroidList.push(retroid)
            )
        )

    logicSelected: (idx, el) ->
        @callbacks.logicSelected?(@logicList[idx])
        @ui.markActive(el)

    logicChanged: () ->
        @ui.markAllInactive()

    addLogic: (logic) ->
        @logicList.push(logic)

