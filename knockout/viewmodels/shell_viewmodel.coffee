class window.ShellViewModel
	constructor: ->
		@editor = new EditorViewModel()
		@create_logic_dialog = new CreateLogicDialogViewModel()
		@logic = new LogicListViewModel(@editor)
		@retroid = new RetroidViewModel(@editor)