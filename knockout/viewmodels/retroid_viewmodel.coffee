class window.RetroidViewModel
	constructor: (@editorViewModel)->
		@logicRunner = new LogicRunner(@)
		@leds = ko.observableArray([0,0,0,0,0,0,0,0,0,0,0,0])
		@editorViewModel.aceText.subscribe( (newValue) =>
			@logicRunner.code = newValue
			@logicRunner.Run()
		)
	


		