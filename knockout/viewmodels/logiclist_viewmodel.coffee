class window.LogicListViewModel
	constructor: (@editorViewModel)->				
		@onEditLogic = (item) =>
			@editorViewModel.aceText(item.code)

		@logicList = ko.observableArray([])
		@selectedOrderBy = ko.observable()
		@orderByOptions = ko.observableArray(['Date','Rating'])

		@_initLogicModelBindings()

		@loadLogicList()		
		
		@selectedOrderBy.subscribe( (newValue) =>
			@orderBy(newValue)
		)

	_initLogicModelBindings: ->
		@removeLogic = (item) =>			
			item.destroy().done( =>
				@logicList.destroy(item)
			)
		@thumbsUp = (item) =>
			item.vote("up")
		@thumbsDown = (item) =>
			item.vote("down")	

	loadLogicList: ->		
		window.LogicModel.all().done( (collection) =>			
			@logicList(collection)
		)
	
	orderBy: (option)->
		@["orderBy#{option}"]()

	orderByDate: ->
		@logicList.sort( (left, right)=>
			return -1 if left.created_at > right.created_at
			return 1 if left.created_at < right.created_at
		)

	orderByRating: ->
		@logicList.sort( (left, right)=>
			return -1 if left.rating > right.rating
			return 1 if left.rating < right.rating
		)