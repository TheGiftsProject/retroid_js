class window.ShellViewModel
	constructor: ->
		@editor = new EditorViewModel()		
		@logic = new LogicListViewModel(@editor)
		@retroid = new RetroidViewModel(@editor)