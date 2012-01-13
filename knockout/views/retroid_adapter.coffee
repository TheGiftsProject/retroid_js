class window.RetroidAdapter
	constructor: (@element, @retroidViewModel)->
		@retroidUI = new RetroidUI(@element)		
		@retroidViewModel.leds.subscribe( (newValue) =>	
			@retroidUI.renderFrame(newValue)
		)		
