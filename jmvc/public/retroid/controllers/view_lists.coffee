$.Controller "Retroid.ViewLists",
	{}
,
	init: (_el,_opts)->
		console.log("view lists ready")
		@load()

	load: ->
		Retroid.Models.Logic.findAll([], (models) => @render(models))

	render: (@models)->
		latest = _.sortBy(@models, (x)=>x.created_at).reverse().slice(0,10)
		top = _.sortBy(@models, (x)=>x.score).slice(0,10)
		newEl = @element.find('.new').empty()
		topEl = @element.find('.top').empty()
		for model in latest
			newEl.append("views/logic_li.ejs",logic: model)
		for model in top		
			topEl.append("views/logic_li.ejs",logic: model)
	
	"{Retroid.Model.Logic} created": ->
		console.log('created1')
		@load()

	"{Logic} created": ->
		console.log('created2')
		@load()