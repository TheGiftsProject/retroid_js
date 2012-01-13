class window.LogicListViewModel
	constructor: (@editorViewModel)->		
		@logicList = ko.observableArray([])
		@onEditLogic = (item) =>
			@editorViewModel.aceText(item.code)
		@logicsModel = new LogicsModel(@)