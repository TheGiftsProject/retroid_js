RetroidJS
======================

RetroidJS is an experiment in which we took several Javascript MVC frameworks to the test, in attempt to try
and figure out which ones are the best to work with.

Current list of participating frameworks:

* [Backbone](http://documentcloud.github.com/backbone/ "Backbone")
* [KnockoutJS](http://knockoutjs.com/ "KnockoutJS")
* [EmberJS](http://emberjs.com/ "EmberJS!")
* [Javascript MVC](http://javascriptmvc.com/ "Javascript MVC")
* Vanilla - We've also added a vanilla flavor, which is a framework-less implementation of RetroidJS.

The RetroidJS app is simulator of the awesome [Retroid!](http://www.youtube.com/watch?v=8sAvXCfEj3s "Retroid!") .
In the simulator a participant can write a block of javascript code, that it's purpose is the manipulate the Retroid's
LEDs. The user can submit his code for others to watch and vote on.

The app has 3 main parts:

* AceEditor.
* The Retroid.
* A list of all the participating logics.

How to work with the Retroid server
=====================================

Add a directory per framework.
Initial code in vanilla dir.

SERVER:
    All urls return json and can be made to return jsonp by adding a callback param
    All calls return at the very least { ack: "success" || "failure" }
    All calls use get, not post

    http://sharp-wind-7656.herokuapp.com/logics -- returns all logics { objects: [logics] }
    http://sharp-wind-7656.herokuapp.com/logics/:id -- returns the logic { object: [logic] }
    http://sharp-wind-7656.herokuapp.com/logics/create -- expect logic[author], logic[name], logic[code] params. returns { object: [newly created logic] }
    http://sharp-wind-7656.herokuapp.com/logics/:id/vote -- expects vote param (which should be 'up' or 'down'). returns { object: [updated logic] }
    http://sharp-wind-7656.herokuapp.com/logics/:id/destroy -- deleted the logic. returns { deleted_object: [logic_id] }
