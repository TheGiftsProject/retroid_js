window.Retroid or= {}
window.Retroid.Views or= {}
window.Retroid.Models or= {}
window.Retroid.Libs or= {}

Backbone.oldSync = Backbone.sync
Backbone.sync = (method, model, options) ->
  options.contentType: "application/json; charset=utf-8"
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
    setInterval (=>@participants.fetch()), 1000
    @

  _initModels: ->
    @participant = new Retroid.Models.Participant()
    @participants = new Retroid.Models.Participants()
    
  _initEditorHolder: (participant)->
    @ui.editorHolder= new Retroid.Views.EditorHolderView(model: participant)

  _initLargeClock:(participant) ->
    @ui.largeClock = new Retroid.Views.LargeClockView(model: participant.get("logic"))
  
  _initParticipantsView: ->
    @ui.participants = new Retroid.Views.ParticipantsView(collection: @participants)

