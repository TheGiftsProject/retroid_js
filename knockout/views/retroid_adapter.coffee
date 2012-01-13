class window.RetroidAdapter
	constructor: (@element, @retroidViewModel)->
		@retroidUI = new RetroidUI(@element)
		@retroidUI.reset()
		@retroidViewModel.leds.subscribe( (newValue) =>
			@retroidUI.renderFrame(newValue)
		)
