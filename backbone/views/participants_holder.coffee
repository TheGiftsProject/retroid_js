class Retroid.Views.ParticipantsView extends Backbone.View
  id: "votes"

  initialize: ->
    @collection.bind "add", @added, @
  
  _initBest: ->

  added: ->
    console.log "participant added"