class Retroid.Views.SmallClockView extends Backbone.View
  initialize: ->
    
    @model.bind('change:leds', @renderFrame, @)
  
  render: ->
    @retroid_ui = new RetroidUI(@el, "#retroid_small_ui_template", null, true)
    @retroid_ui.reset()
    @

  renderFrame: ->
    @retroid_ui.renderFrame(@model.get("leds"))