$.Model "Retroid.Models.LogicRunner",
	{}
,
	init: ->
		@code = @_wrapCode(@code)
		@logic = (state) => new Function(@code)(state)


	start: (callback) ->
		@running = true
		@callback = callback
		@_loop([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

	stop: ->
		@running = false
		@frameCallback = null

	_loop: (state) ->
		result = @logic(state)

		if @running
			@callback(result)
			setTimeout(
				=> @_loop(result)
				100
			)

	_wrapCode: (text)->
		"var leds = arguments[0]; #{text} ; return leds;"