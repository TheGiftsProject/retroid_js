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
