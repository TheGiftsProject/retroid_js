class Retroid.Views.ParticipantsView extends Backbone.View
  el: $("#participants")

  initialize: ->
    @collection.bind "add", @added, @

  added: (participant) ->
    @el.append(new Retroid.Views.ParticipantView(@model:participant))