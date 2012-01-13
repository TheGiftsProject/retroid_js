window.Retroid or= {}
window.Retroid.Views or= {}
window.Retroid.Models or= {}
window.Retroid.Libs or= {}

Backbone.oldSync = Backbone.sync
Backbone.sync = (method, model, options) ->
  options.contentType = "application/json; charset=utf-8"
  if method == "create"
    model.url = model.url+"/create?callback=?"
    params.data = model.toJSON()
  return Backbone.oldSync(method, model, options);  


class window.Retroid.AppView extends Backbone.View
  el: $("#retroid_backbone")

  initialize: ->
    @ui or= {}
    @_initModels()
    @_initEditorHolder(@participant)
    @_initLargeClock(@participant)
    @_initParticipantsView()
    @participants.bind "reset", @_fetchedParticipants, @
    setInterval (=>@participants.fetch()), 1000
    @

  _initModels: ->
    @participant = new Retroid.Models.Participant()
    @participants = new Retroid.Models.Participants()
    @participantsByVotes = new Retroid.Models.Participants(comparator:(participant)->participant.get("votes"))
    @participantsByLatest = new Retroid.Models.Participants(comparator:(participant)->participant.get("dateAdded"))
    
  _initEditorHolder: (participant)->
    @ui.editorHolder= new Retroid.Views.EditorHolderView(model: participant)

  _initLargeClock:(participant) ->
    @ui.largeClock = new Retroid.Views.LargeClockView(model: participant.logic)
  
  _fetchedParticipants: ->
    @participantsByVotes.reset(@participants.models)
    @participantsByLatest.reset(@participants.models)


  _initParticipantsView: ->
    @ui.participantsByVotes = new Retroid.Views.ParticipantsView(el:$("#participants.byVotes"), collection: @participantsByVotes)
    @ui.participantsByLatest = new Retroid.Views.ParticipantsView(el:$("#participants.byLatest"), collection: @participantsByLatest)

