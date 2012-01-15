class window.LogicListViewModel
	constructor: (@editorViewModel)->				
		@onEditLogic = (item) =>
			@editorViewModel.aceText(item.code)

		@logicList = ko.observableArray([])
		@selectedOrderBy = ko.observable()
		@orderByOptions = ko.observableArray(['Date','Rating'])
		@removeLogic = (item) =>			
			debugger
			item.destroy().done( =>
				@logicList.destroy(item)
			)

		@loadLogicList()
		
		@selectedOrderBy.subscribe( (newValue) =>
			@orderBy(newValue)
		)

	loadLogicList: ->		
		window.LogicModel.all().done( (collection) =>			
			@logicList(collection)
		)
	
	orderBy: (option)->
		@["orderBy#{option}"]()

	orderByDate: ->
		@logicList.sort( (left, right)=>
			return 1 if left.created_at > right.created_at
			return 0 if left.created_at < right.created_at
		)

	orderByRating: ->
		@logicList.sort( (left, right)=>
			return 0 if left.rating > right.rating
			return 1 if left.rating < right.rating
		)