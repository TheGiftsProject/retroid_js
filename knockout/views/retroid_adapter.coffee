class window.RetroidAdapter
	constructor: (@retroidViewModel)->
		

	_run: ->
		@Stop()
		@interval = setInterval (=>
			toEval = "#{@WrappedCode()}([#{@get('leds')}])"
			@set(leds: eval(toEval))
		), 100

	_stop: ->
		clearInterval @interval if @interval
