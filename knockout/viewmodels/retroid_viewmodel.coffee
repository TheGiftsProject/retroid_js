class window.RetroidViewModel
	constructor: (@editorViewModel)->
		@logicRunner = new LogicRunner(@)
		@leds = ko.observableArray([0,0,0,0,0,0,0,0,0,0,0,0])		
		@editorViewModel.aceText.subscribe( (newValue) =>			
			@runEnabled(@logicRunner.codeIsValid(@editorViewModel.aceText()))
		)

		@onRunLogic = () =>			
			@logicRunner.code = @editorViewModel.aceText()
			@logicRunner.run()

		@runEnabled = ko.observable(true)