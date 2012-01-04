var fixtureData = [
    {
        "fullName":"John Doe",
        "username":"johnny",
        "rating":1,
        "createAt": "2013"
    },
    {
        "fullName":"Bob Doe",
        "username":"bobby",
        "rating":2,
        "createAt": "2012"
    },
    {
        "fullName":"Tom Doe",
        "username":"tommy",
        "rating":3,
        "createAt": "2014"
    }
];

var App = Em.Application.create();

App.entry = Ember.Object.extend({
    fullName: "",
    username: "",
    rating: 0
});

App.entriesCollection = Ember.ArrayController.create({
    // The array of Contact objects that backs the array controller.
    content: [],

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
            return App.entry.create(entryData);
        });
        console.debug('loaded entries');
        this.set('content', entries);
    }
});


App.entryRowView = Ember.View.extend({

});

App.entriesCollection.loadFixtureData();
//App.EntriesCollection.loadData();
