this.examples = [
    "for (var i = 0; i < leds.length; ++i) { leds[i] = !leds[i]; }",
    "var modified = false; for (var i = 0; i < leds.length; ++i) { if (leds[i]) { leds[(i+1) % 12] = 1; leds[i] = 0; modified = true; break; } } if (!modified) { leds[0] = 1; }",
    "var modified = 0; var backbuffer = []; backbuffer.length = leds.length; if (this.firstRun === undefined) { this.firstRun = false; this.startPoint = 0; this.phase = 0; } for (var i = 0, length = leds.length; i < length; ++i) { if (backbuffer[i] === undefined) { backbuffer[i] = leds[i]; } if (leds[i] == this.phase) { backbuffer[(i+1) % 12] = this.phase; backbuffer[(i+11) % 12] = this.phase; modified++; } } if (modified == leds.length) { this.phase = !this.phase; this.startPoint = Math.floor(Math.random() * 12); backbuffer[this.startPoint] = this.phase; } leds = backbuffer;"
];

this.LogicCollection = _.map(this.examples, function(item) {
    return new Logic(item);
}, this);
