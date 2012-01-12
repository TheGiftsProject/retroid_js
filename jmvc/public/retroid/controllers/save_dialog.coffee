$.Controller "Retroid.SaveDialogController",
	{}
,
	init: (_el,_opts)->
		@ui =
			name: @element.find('#name_input')
			author: @element.find('#author_input')
			code: @element.find("#code")
	
	show: (code)->
		@code = code
		@reset()
		
	hide: ->
		@element.hide()

	reset: ->
		@ui.name.val('')
		@ui.author.val('')
		@ui.name.focus()

	"form submit": (el,ev)->
		@element.find('.error').removeClass('error')
		ev.preventDefault()
		logic = new Retroid.Models.Logic(code: @code, name: @ui.name.val(), author: @ui.author.val())
		errors = logic.errors()
		logic.bind('created', (ev) => 
			console.log(ev)
			@hide()
		)
		if errors
			for field,error of errors
				@ui[field].addClass('error')
		else
			logic.save()

			
		


