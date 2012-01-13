class window.LogicListViewModel
	constructor: (@editorViewModel)->		
		@logicList = ko.observableArray([])
		@onEditLogic = (item) =>
			@editorViewModel.aceText(item.code)

		@selectedOrderBy = ko.observable()
		@orderByOptions = ko.observableArray([])

		@logicsModel = new LogicsModel(@)

