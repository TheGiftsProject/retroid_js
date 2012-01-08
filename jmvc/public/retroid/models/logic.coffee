$.Model "Retroid.Models.Logic",
	init: ->
		@validatePresenceOf "name"
		@validatePresenceOf "author"
		@validatePresenceOf "code"

	findAll: (params, success, error)->
		$.get('http://sharp-wind-7656.herokuapp.com/logics',
			params, 
			(data) -> success(data.objects),
			'jsonp'
		)

	
	# findOne: 'http://sharp-wind-7656.herokuapp.com/logics/{id}'
	create: (params, success, error)->
		$.post('http://sharp-wind-7656.herokuapp.com/logics/create',
				{logic:params}, 
				(data) -> success(data.object),
				'jsonp'
			)

,
	init: ->
	
	runner: (callback) ->
		new Retroid.Models.LogicRunner(code: @code, callback: callback)
