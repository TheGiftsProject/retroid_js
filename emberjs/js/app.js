
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
    contentByRating: [],
    contentByFullname: [],

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
        this.set('content', entries);
        this.set('contentByRating', this.sortByRating());
        this.set('contentByFullname', this.sortByFullName() );
    },

    // this was originally in Sproutcore and removed from Ember
    sortBy: function(property){
        var content = this.get('content');
        return _.sortBy(content, function(entry){
            return entry.get(property);
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

//    contentBinding: 'App.entriesCollection',
//    attributeBindings:['value'],
//    valueBinding: 'content.value',

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
    selectedEntry: false,

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
