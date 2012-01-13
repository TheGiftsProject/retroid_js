class window.RetroidViewModel
	constructor: (@editorViewModel)->
		@logicRunner = new LogicRunner(@)
		@leds = ko.observableArray([0,0,0,0,0,0,0,0,0,0,0,0])		
		@editorViewModel.aceText.subscribe( (newValue) =>			
			@canRunLogic(@logicRunner.CodeIsValid(@editorViewModel.aceText()))
		)

		@onRunLogic = () =>			
			@logicRunner.code = @editorViewModel.aceText()
			@logicRunner.Run()

		@canRunLogic = ko.observable(true)