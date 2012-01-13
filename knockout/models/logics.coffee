class window.LogicsModel
	constructor: (@logicListViewModel)->
		$.ajax(
			url: "http://sharp-wind-7656.herokuapp.com/logics" 
			dataType: 'jsonp' 
			success: (response) => @_initLogicsModel(response)
		)

		@logicListViewModel.orderByOptions(['Date','Rating'])

		@logicListViewModel.selectedOrderBy.subscribe( (newValue) =>
			@orderBy(newValue)
		)

	_initLogicsModel: (response)->
		@logicListViewModel.logicList(response.objects)

	orderBy: (option)->
		@["orderBy#{option}"]()

	orderByDate: ->
		@logicListViewModel.logicList.sort( (left, right)=>
			return 1 if left.created_at > right.created_at
			return 0 if left.created_at < right.created_at
		)

	orderByRating: ->
		@logicListViewModel.logicList.sort( (left, right)=>
			return 0 if left.rating > right.rating
			return 1 if left.rating < right.rating
		)
