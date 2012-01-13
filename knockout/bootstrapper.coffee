class window.Bootstrapper
	constructor: ->
		@_initShellViewModel()
		@_initUIAdapters()

	_initShellViewModel: ->
		@shellViewModel = new ShellViewModel()
		ko.applyBindings(@shellViewModel)

	_initUIAdapters: ->
		@aceEditorAdapter = new AceEditorAdapter('#script_input', @shellViewModel.editor)
		@retroidAdapter = new RetroidAdapter($('.main_retroid'), @shellViewModel.retroid)

$(document).ready( ->
	window.bootstrapper = new window.Bootstrapper()	
)	
