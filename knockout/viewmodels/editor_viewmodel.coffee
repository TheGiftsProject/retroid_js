class window.EditorViewModel
	constructor: ()->
		@aceText = ko.observable('').extend({throttle: 200})
