class window.Bootstrapper
	constructor: ->
		@_initShellViewModel()
		@_initUIAdapters()
		@_initCustomBindings()

	_initShellViewModel: ->
		@shellViewModel = new ShellViewModel()
		ko.applyBindings(@shellViewModel)

	_initUIAdapters: ->
		@aceEditorAdapter = new AceEditorAdapter('#script_input', @shellViewModel.editor)
		@retroidAdapter = new RetroidAdapter($('.main_retroid'), @shellViewModel.retroid)

	_initCustomBindings: ->
		ko.bindingHandlers.small_retroid = 
			init: (element, valueAccessor, allBindingsAccessor, viewModel)->
				retroidSmallUI = new RetroidSmallUI(element)
				smallRetroid = new SmallRetroidViewModel(valueAccessor())

				smallRetroid.leds.subscribe( (value) =>
					retroidSmallUI.renderFrame(value)
				)

			
$(document).ready( ->
	window.bootstrapper = new window.Bootstrapper()	
)	
