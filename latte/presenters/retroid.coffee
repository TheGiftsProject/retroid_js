class window.Retroid
    constructor: (container, small) ->
        @ui = (if small then new RetroidSmallUI(container) else new RetroidUI(container))
        @logicFunc = null

    setLogic: (logic) ->
        if (@currentLogic)
            @currentLogic.stop()

        @ui.reset()
        @currentLogic = new RetroidContext(logic, _.bind(@_stateChanged, @))
        @currentLogic.start()

    _stateChanged: (state) ->
        if (!$.isArray(state))
            state = []
        state.length = 12
        @ui.renderFrame(state)
