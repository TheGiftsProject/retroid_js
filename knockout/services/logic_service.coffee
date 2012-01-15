class window.LogicService
	constructor: ->
		@logics_url = "http://sharp-wind-7656.herokuapp.com/logics"
		
	getAllLogics: ->
		deferred = $.deferred

		$.ajax({ url: @logics_url, dataType: 'jsonp' })
		.done(response) =>
			@_buildLogicModels(response.objects)
		.fail(xhr,status,error) =>
			deferred.rejectWith(@, [xhr,status,error])

		deferred.promise()
	
	_buildLogicModels: (collection) ->
		result = []
		for item in collection
			logicModel = new window.LogicModel(
				id: item.id
				author: item.author
				code: item.code
				created_at: item.created_at
				updated_at: item.updated_at
				name: item.name
				rating: item.rating
			)
			result.push(logicModel)
		
		result
			