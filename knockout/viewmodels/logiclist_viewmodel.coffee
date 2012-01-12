class window.LogicListViewModel
	constructor: (@editorViewModel)->
		@logicList = ko.observableArray([
			{
				name: "moo1"
				rating: 5
				logic: "for (var i = 0; i < leds.length; ++i) { leds[i] = !leds[i]; }"
			}
			{
				name: "moo2"
				rating: 4
				logic: "var modi"
			}
			{
				name: "moo3"
				rating: 3
				logic: ""
			}
		])
		@onRunLogic = (item) =>
			@editorViewModel.aceText(item.logic)