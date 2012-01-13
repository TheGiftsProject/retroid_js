class window.AceEditorAdapter
	constructor: (@element_id, @editorViewModel)->		
		@_initAce()
		@_initBindings()

	_initAce: ->
		@ace = window.ace.edit($(@element_id)[0].id)
		javascriptMode = require('ace/mode/javascript').Mode
		@ace.getSession().setMode(new javascriptMode())
		@ace.setTheme('ace/theme/solarized_dark')
		@ace.setFontSize(14)		

	_initBindings: ->
		@_initAceToViewModelBinding()
		@_initViewModelToAceBinding()
	
	_initAceToViewModelBinding: ->
		@ace.getSession().on('change', (response) =>
			@editorViewModel.aceText(@ace.getSession().getValue())
		)

	_initViewModelToAceBinding: ->
		@editorViewModel.aceText.subscribe( (newValue) =>
			unless @ace.getSession().getValue() is newValue				
				@ace.getSession().setValue(newValue)
		)	