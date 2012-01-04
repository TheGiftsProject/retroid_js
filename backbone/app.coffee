window.Retroid or= {}
window.Retroid.Views or= {}

class window.Retroid.AppView extends Backbone.View
  el: $("#retroid_backbone")
  
  initialize: ->
    @_initUI()
    @_initEditor()
    @_initLargeClock()
  
  _initUI: ->
    @ui = 
      editor: $("section#editor", @el)
    
  _initEditor: ->
    @editor = new Retroid.Views.EditorView()

  _initLargeClock: ->
    @largeClock = new Retroid.Views.LargeClockView()
