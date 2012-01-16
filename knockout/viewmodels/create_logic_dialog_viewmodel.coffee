class window.CreateLogicDialogViewModel
	constructor: ()->
		@closeDialog = ko.observable()
		@author = ko.observable()
		@name = ko.observable()
		@code = ko.observable()
		@createLogic = () =>
			logicModel = new LogicModel({author: @author, name: @name, code: @code})
			logicModel.create().done( (logic) =>
				@closeDialog(true)
			)		
