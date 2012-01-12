class ShellViewModel
	constructor: ->
		@logic = new LogicListViewModel('#logic_list')
		@aceEditor = new EditorViewModel()		