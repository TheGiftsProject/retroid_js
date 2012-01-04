class EditorViewModel extends KnockoutViewModel
	constructor: (element_id)->
		@aceText = ko.observable('moo')
		super(element_id)
