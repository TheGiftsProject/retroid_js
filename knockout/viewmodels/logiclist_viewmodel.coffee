class window.LogicListViewModel
	constructor: (@editorViewModel)->
		@logicList = ko.observableArray([
			{
				name: "moo1"
				rating: 5
				logic: "var returns = [];
					var last = false;
					var all_off = true;

					for (var i = 0; i < leds.length; i++) {
					    if (last) {
					        last = false;
					        returns.push(1);
					    }
					    else {
					        if (leds[i]) {
					            all_off = false;
					            last = true;
					        }
					        returns.push(0);
					    }
					}
					if (last || all_off) {
					    returns[0] = 1;
					}

					return returns;"
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