var fixtureData = [
    {
        "code":"foo(A)",
        "fullName":"John Doe",
        "username":"johnny",
        "rating":1,
        "createAt": "2013"
    },
    {
        "code":"foo(B)",
        "fullName":"Bob Doe",
        "username":"bobby",
        "rating":2,
        "createAt": "2012"
    },
    {
        "code":"foo(C)",
        "fullName":"Tom Doe",
        "username":"tommy",
        "rating":3,
        "createAt": "2014"
    }
];




var App = Ember.Application.create();



App.entry = Ember.Object.extend(Ember.Comparable,{
    fullName: "",
    username: "",
    rating: 0,
    createAt: ''
});




App.entriesCollection = Ember.ArrayController.create({
    // The array of Contact objects that backs the array controller. (we have to use this var for some reason)
    content: [],
    names: [],

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
        this.set('names', this.sortByFullName() );
    },

    sortBy: function(property){
        var content = this.get('content');
        return content.slice().sort(function(a, b) {
            var propertyA = a.get(property),
                propertyB = b.get(property);

            if (!propertyA && propertyB) { return 1; }
            if (!propertyB && propertyA) { return -1; }
            if (propertyA < propertyB) { return -1; }
            if (propertyA > propertyB) { return 1; }
            return 0;
        });
    },

    sortByFullName: function(){
        return this.sortBy('fullName');
    },

    sortByRating: function(){
        return this.sortBy('rating');
    }
});




App.entryRowView = Ember.View.extend({

    contentBinding: 'App.entriesCollection',
    attributeBindings:['value'],
    valueBinding: 'content.value',

    showCodeButton: Ember.Button.extend({
        click: function(event) {
            var entry = this.get('content');
            console.debug(entry.get('code'));
            App.codeView.set('value', entry.get('code'));
        }
    })
});



App.entryListView = Ember.CollectionView.extend({
    tagName: 'ul',
    value: null,
    itemViewClass: App.entryRowView,

    valueChanged: function(){
        this.$().val( this.get('value') );
    }.observes('value')
});



App.codeView = Ember.TextArea.extend({

    valueBinding: Ember.Binding.oneWay('App.user.fullName'),

    insertNewline: function(){
        var value = this.get('value');

        if (value) {
//            Todos.todosController.createTodo(value);
            this.set('value', '');
        }
    }
});






App.entriesCollection.loadFixtureData();
//App.EntriesCollection.loadData();
