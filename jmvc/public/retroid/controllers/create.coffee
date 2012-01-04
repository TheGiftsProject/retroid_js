$.Controller "Retroid.Create",
	{}
,
	init: (_el,_opts)->
		@element.find('.editor').retroid_editor()
		@element.find('.retroid-large').retroid_animator_big()
		


