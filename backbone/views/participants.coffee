class Retroid.Views.ParticipantsView extends Backbone.View

  initialize: ->
    @collection.bind "reset", @fetched, @
    
  fetched: ->
    @el.children().remove()
    for participant in @collection.models
      continue unless participant.logic.IsValid()
      participantView = new Retroid.Views.ParticipantView(model:participant)
      @el.append(participantView.render().el)