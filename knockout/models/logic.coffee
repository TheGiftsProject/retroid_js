class window.LogicModel
	constructor: (id:@id,author:@author,code:@code,created_at:@created_at,updated_at:@updated_at,name:@name,rating:@rating)->		

	@logics_url: "http://sharp-wind-7656.herokuapp.com/logics"
	create: ->
		if @id
			throw 'Cannot create a logic that already exists in the database'

		deferred = $.Deferred()		
		$.ajax({url: "#{@logics_url}/create", data: { "logic[author]": @author, "logic[name]": @name, "logic[code]": @code }, dataType: 'jsonp'})
			.done( (response) =>
				@id = response.object.id
				deferred.resolve(response.object)
			)
			.fail( (xhr,status,error) =>
				deferred.rejectWith(@, [xhr,status,error])
			)

		deferred.promise()		

	destroy: ->
		deferred = $.Deferred()
		$.ajax({url: "#{@logics_url}/#{@id}/destroy", dataType: 'jsonp'})
			.done(response =>
				deferred.resolve(response.object)
			)
			.fail( (xhr,status,error) =>
				deferred.rejectWith(@, [xhr,status,error])
			)

		deferred.promise()

	vote: (type)->
		deferred = $.Deferred()
		$.ajax({url: "#{@logics_url}/#{@id}/vote", data: { vote: type }, dataType: 'jsonp'})
			.done( (response) => 
				deferred.resolve(response.object)
			)
			.fail( (xhr,status,error) =>
				deferred.rejectWith(@, [xhr,status,error])
			)

		deferred.promise()

	@all: ->
		deferred = $.Deferred()

		$.ajax(@logics_url, { dataType: 'jsonp' })
			.done( (response) => 				
				deferred.resolve(@_buildLogicModels(response.objects))
			)
			.fail( (xhr,status,error) => 
				deferred.rejectWith(@, [xhr,status,error])
			)

		deferred.promise()

	@_buildLogicModels: (collection) ->
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