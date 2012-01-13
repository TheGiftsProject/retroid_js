class window.LogicRunner
	constructor: (@viewModel, @code = '')->

	Run: ->
		if @CodeIsValid()
			@Stop()
			@interval = window.setInterval (=>
				debugger
				toEval = "(function (leds){#{@code};return leds;})([#{@viewModel.leds()}])"
				leds = eval(toEval)
				debugger
				@viewModel.leds(leds)
			), 100

	Stop: ->
		window.clearInterval @interval if @interval
	
	CodeIsValid: ->
		toEval = "(function (leds){#{@code};return leds;})([#{@viewModel.leds()}])"
		result = true
		try
			eval(toEval)
		catch exception
			result = false
		result