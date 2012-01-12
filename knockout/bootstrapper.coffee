class window.Bootstrapper
	constructor: ->
		@_initShellViewModel()
		@_initUIAdapters()

	_initShellViewModel: ->
		@shellViewModel = new ShellViewModel()
		ko.applyBindings(@shellViewModel)

	_initUIAdapters: ->
		@aceEditorAdapter = new AceEditorAdapter('#script_input', @shellViewModel.aceEditor)

$(document).ready( ->		
	new window.Bootstrapper()
)	
