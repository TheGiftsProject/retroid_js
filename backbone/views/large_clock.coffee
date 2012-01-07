class window.Retroid.Views.LargeClockView extends Backbone.View
  
  el: $("#large_clock")
  
  initialize: ->
    @retroid_ui = new RetroidUI(@el,=>@retroid_ui.reset())
    @model.bind('change:leds', @renderFrame, @)
  
  renderFrame:->
    @retroid_ui.renderFrame(@model.get("leds"))


