class window.LogicRunner
	constructor: (@viewModel, @code = '')->

	run: ->
		if @codeIsValid(@code)
			@stop()
			@interval = window.setInterval (=>
				toEval = "(function (leds){#{@code};return leds;})([#{@viewModel.leds()}])"
				leds = eval(toEval)
				@viewModel.leds(leds)
			), 100

	stop: ->
		window.clearInterval @interval if @interval
	
	codeIsValid: (code)->
		toEval = "(function (leds){#{code};return leds;})([#{@viewModel.leds()}])"
		result = true
		try
			eval(toEval)
		catch exception
			result = false
		result