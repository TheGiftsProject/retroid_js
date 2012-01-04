class AceEditor
	constructor: (@element_id)->
		@editorViewModel = new EditorViewModel(@element_id)
		@_initAce()

	_initAce: ->
		@ace = window.ace.edit(@element_id)
		javascriptMode = require('ace/mode/javascript').Mode
		@ace.getSession().setMode(new javascriptMode())
		@ace.setTheme('ace/theme/solarized_dark')
		@ace.setFontSize(14)
		@ace.getSession().on('change', (response) =>
			@editorViewModel.aceText(@ace.getSession().getValue())
		)
		@editorViewModel.aceText.subscribe( (newValue) =>
			unless @editorViewModel.aceText() is newValue
				@ace.getSession().setValue(newValue)
		)