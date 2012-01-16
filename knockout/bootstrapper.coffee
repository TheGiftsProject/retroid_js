class window.Bootstrapper
	constructor: ->
		@_initCustomBindings()		
		@_initShellViewModel()
		@_initUIAdapters()		

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
		ko.bindingHandlers.create_logic = 
			init: (element, valueAccessor)=>
				viewModel = @shellViewModel.create_logic_dialog				

				dialog_fragment = $('#create_logic_dialog_template').html()
				$(element).click( =>							
					viewModel.code(@shellViewModel.editor.aceText())			
					$.modal(dialog_fragment, { opacity:80, overlayCss: {backgroundColor:"#fff"} })
					ko.applyBindings(viewModel, $('.create_logic_dialog_container')[0])
				)				
				viewModel.closeDialog.subscribe( (value) =>
					$.modal.close() if value
				)
			
$(document).ready( ->
	window.bootstrapper = new window.Bootstrapper()	
)	
