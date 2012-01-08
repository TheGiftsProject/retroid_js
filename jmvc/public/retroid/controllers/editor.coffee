$.Controller "Retroid.EditorController",
	{}
,
	init: (_el,_opts)->
		@el = @element
		@ui =
			editor: @el.find('#script_input')
			actions:
				save: @el.find('.actions .save')
				run: @el.find('.actions .run')
		@ace = @ui.editor.retroid_ace_editor().controller()
		@disableSave()

	disableSave: ->
		@ui.actions.save.attr('disabled','disabled').text("First run to Save")
	
	enableSave: ->
		@ui.actions.save.attr('disabled',null).text("Save")

	".actions .save click": ->
		@element.trigger('save', @ace.getText())
		
	".actions .run click": ->
		@element.trigger('run', @ace.getText())

	change: ->
		@disableSave()