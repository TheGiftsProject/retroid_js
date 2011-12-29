$.Controller "Retroid.App",
	{}
,
	init: (_el,_opts)->
		@el = @element
		console.log "READY"
		@el.find('.create').retroid_create()
		@el.find('.view').retroid_view_lists()

