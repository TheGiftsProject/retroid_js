class window.LogicsModel
	constructor: (@logicListViewModel)->
		$.ajax(
			url: "http://sharp-wind-7656.herokuapp.com/logics" 
			dataType: 'jsonp' 
			success: (response) => @_initLogicsModel(response)
		)

	_initLogicsModel: (response)->
		@logicListViewModel.logicList(response.objects)