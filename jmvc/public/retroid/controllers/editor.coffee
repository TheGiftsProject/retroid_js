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
		@ui.actions.save.attr('disabled','disabled')
	
	enableSave: ->
		@ui.actions.save.attr('disabled','')

	".actions .save click": ->
		console.log("SAVE")
		
	".actions .run click": ->
		console.log("RUN")
		@ace.setText("Fffffffuuuuuu.....")