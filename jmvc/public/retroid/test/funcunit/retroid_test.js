steal("funcunit", function(){
	module("retroid test", { 
		setup: function(){
			S.open("//retroid/retroid.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})