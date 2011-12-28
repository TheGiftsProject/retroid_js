class AceEditor
	constructor: (@element_id)->
		@editorViewModel = new EditorViewModel()
		@_initAce()

	_initAce: ->
		@ace = window.ace.edit(@element_id)
		javascriptMode = require('ace/mode/javascript').Mode
		@ace.getSession().setMode(new javascriptMode())
		@ace.setTheme('ace/theme/solarized_dark')
		@ace.setFontSize(14)
		ko.bindingHandlers.ace_editor = 
			init: (element)
				@ace.getSession().on('change', () =>
					$(@element_id).trigger('propertyChanged', 'aceeditor_text')
				)
			update: (element, valueAccessor)
				text = valueAccessor()		

	GetText: ->
		@ace.getSession().getText()		

	SetText: (text)->
		@ace.getSession().setText(text)