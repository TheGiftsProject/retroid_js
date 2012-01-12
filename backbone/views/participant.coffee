class Retroid.Views.ParticipantView extends Backbone.View
  template: _.template($("#templates #participant").html())
  className: "participant"
  clockView: => @$(".right")
  events:
    "mouseover": "animate"
    "mouseout": "stop"

  initialize: ->
    @logic = @model.get("logic")
  
  render: ->
    $(@el).html(@template(@model.toJSON()))
    smallClock = new Retroid.Views.SmallClockView(model: @logic)
    @clockView().append(smallClock.render().el)
    @
  
  stop: ->
    @logic.Stop()

  animate: ->
    @logic.Run()
  
