window.Retroid or= {}
window.Retroid.Views or= {}
window.Retroid.Models or= {}
window.Retroid.Libs or= {}
class window.Retroid.AppView extends Backbone.View
  el: $("#retroid_backbone")

  initialize: ->
    @ui or= {}
    @_initModels()
    @_bindModelEvents()
    @_initEditorHolder(@participant)
    @_initLargeClock(@participant)
    # @_initParticipantsView()
    @
  
  _bindModelEvents: ->
    @participant.bind "change:id", @_participantAdded, @

  _initModels: ->
    @participant = new Retroid.Models.Participant()
    @participants = new Retroid.Models.Participants()

  _initEditorHolder: (participant)->
    @ui.editorHolder= new Retroid.Views.EditorHolderView(model: participant)

  _initLargeClock:(participant) ->
    @ui.largeClock = new Retroid.Views.LargeClockView(model: participant.get("logic"))
  
  _initParticipantsView: ->
    @ui.participants = new Retroid.Views.ParticipantsView(collection: @participants)
  
  _participantAdded: ->
    @participants.add(@participant)

