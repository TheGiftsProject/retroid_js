var fixtureData = [
    {
        "fullName":"John Doe",
        "username":"johnny",
        "rating":1
    },
    {
        "fullName":"Bob Doe",
        "username":"bobby",
        "rating":2
    },
    {
        "fullName":"Tom Doe",
        "username":"tommy",
        "rating":3
    }
];

var App = Em.Application.create();

App.Entry = Ember.Object.create({

});

App.Entry = Ember.Object.extend({
    fullName: "",
    username: "",
    rating: 0
});

App.entriesCollection = Ember.ArrayController.create({
    // The array of Contact objects that backs the array controller.
    content: [],
    entries: [],

    loadFixtureData: function(){
        this.crateEntriesFromJson(fixtureData);
    },

    loadData: function(){
        var self = this;
        $.getJSON({
            url: '/data.json',
            success: function(data) {
                self.crateEntriesFromJson(data);
            },
            error: function() {
                console.debug('error');
            }
        });
    },

    crateEntriesFromJson: function(json){
        var entries = json.map(function(entryData) {
            return App.Entry.create(entryData);
        });
        console.debug('loaded entries');
        this.set('entries', entries);
        this.set('content', json);
    }
});



App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});


App.entriesCollection.loadFixtureData();
