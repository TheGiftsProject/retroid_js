class RetroidContext
    constructor: (logic, callback) ->
        if (!callback)
            throw new Exception("must provide callback to retroid context")

        @frameCallback = callback
        @func = logic.func()

    @generateStartState: () ->
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    start: () ->
        @running = true
        @_loop(RetroidContext.generateStartState())

    stop: () ->
        @running = false
        @frameCallback = null

    _loop: (state) ->
        result = @func(state)

        if (@running)
            @frameCallback(result)
            setTimeout((=> @_loop(result)), 100);
