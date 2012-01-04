$.Controller "Retroid.Create",
	listensTo: ['run','save']
,
	init: (_el,_opts)->
		@ui =
			editor : @element.find('.editor').retroid_editor()
			animator : @element.find('.retroid-large').retroid_animator()
			dialog : @element.find('.save-dialog').retroid_save_dialog()
	
	run: (el,ev, code)->
		@runner?.stop()
		@runner = new Retroid.Models.LogicRunner(code: code)
		@startingRun()
		@runner.start((frame) => 
			@didRun() if @waitingForFirstRun
			@ui.animator.controller().renderFrame.call(@ui.animator.controller(), frame)
		)
		
	startingRun: ->
		@waitingForFirstRun = true
		@ui.editor.controller()?.disableSave()

	didRun: ->
		@waitingForFirstRun = false
		@ui.editor.controller().enableSave()

	change: ->
		@runner?.stop()
		@ui.animator.controller()?.reset()
	
	save: (el,ev, text) ->
		@ui.dialog.show().controller()?.show(text)