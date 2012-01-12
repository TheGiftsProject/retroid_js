class ShellViewModel
	constructor: ->
		@logic = new LogicListViewModel('#logic_list')
		@aceEditor = new EditorViewModel()
		new AceEditor('#script_input', @aceEditor)
		ko.applyBindings(@)

$(document).ready( ->		
	new ShellViewModel()
)