steal(
	'../lib/ace/ace.js'	
	'../lib/ace/mode-javascript.js'
	'../lib/ace/theme-solarized_dark.js'
	=>
		$.Controller "Retroid.AceEditorController",
			defaults:
				javascript: "//To start write some javascript and click `run`"
		,
			init: (_el,_opts)->
				@ace = ace.edit(@element.attr('id'))
				@ace.setTheme('ace/theme/solarized_dark')
				@ace.setFontSize(14)
				@setText @options.javascript			

			setText: (text)->
				@ace.getSession().setValue text

			getText: ->
				@ace.getSession().getValue()
)