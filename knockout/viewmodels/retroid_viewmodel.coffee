class window.RetroidViewModel
	constructor: (@editorViewModel)->
		@logicRunner = new LogicRunner(@)
		@leds = ko.observableArray([0,0,0,0,0,0,0,0,0,0,0,0])		
		@editorViewModel.aceText.subscribe( (newValue) =>			
			@runEnabled(@logicRunner.CodeIsValid(@editorViewModel.aceText()))
		)

		@onRunLogic = () =>			
			@logicRunner.code = @editorViewModel.aceText()
			@logicRunner.Run()

		@runEnabled = ko.observable(true)