class window.SmallRetroidViewModel
	constructor: (code) ->
		@leds = ko.observableArray([0,0,0,0,0,0,0,0,0,0,0,0])
		@logicRunner = new LogicRunnerModel(@, code)
		@logicRunner.run()