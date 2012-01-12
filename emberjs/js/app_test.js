

var App = Ember.Application.create();



App.entry = Ember.Object.create({
    code: "INIT"
});




App.entriesCollection = Ember.ArrayController.create({
    // The array of Contact objects that backs the array controller. (we have to use this var for some reason)
    content: []


});



App.codeView = Ember.TextArea.extend({

    valueBinding: 'App.entry.code',

    insertNewline: function(){
        var value = this.get('value');
        if (value) {
            this.set('value', '');
        }
    }
});






App.entryListView = Ember.CollectionView.extend({
    tagName: 'ul',
    value: null,
    itemViewClass: App.codeView,

    valueChanged: function(){
        this.$().val( this.get('value') );
    }.observes('value')
});





