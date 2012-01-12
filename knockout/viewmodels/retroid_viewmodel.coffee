class window.RetroidViewModel
	constructor: (@editorViewModel)->
		@code = @editorViewModel.aceText.subscribe( (newValue)=>
			unless @code is newValue
				@code = newValue				
		)
	


		