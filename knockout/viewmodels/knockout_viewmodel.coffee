class KnockoutViewModel
	constructor: (element_id)->
		ko.applyBindings(@, document.getElementById("##{element_id}"))