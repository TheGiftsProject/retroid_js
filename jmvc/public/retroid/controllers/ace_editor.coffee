steal(
	'../lib/ace/ace.js'	
	'../lib/ace/mode-javascript.js'
	'../lib/ace/theme-solarized_dark.js'
	=>
		$.Controller "Retroid.AceEditorController",
			defaults:
				javascript: "// To start write some javascript and click `run`\n" + "// you get and need to set leds a boolean array of size 12\n"+""
		,
			init: (_el,_opts)->
				@ace = ace.edit(@element.attr('id'))
				@ace.setTheme('ace/theme/solarized_dark')
				@ace.setFontSize(14)
				@setText @options.javascript		
				@ace.getSession().on('change', (data) => @element.trigger('change',data))	

			setText: (text)->
				@ace.getSession().setValue text

			getText: ->
				@ace.getSession().getValue()
)