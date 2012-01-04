// map fixtures for this application

steal("jquery/dom/fixture", function(){
	$.fixture.make("logic", 5, function(i, logic){
	    var descriptions = ["Butterfly", "Tiger", "LionCut"]
	    return {
	        name: $.fixture.rand( descriptions , 1),
	        user: "User " + i,
	        data: "console.log(\"blah\");"
	    }
	})
})