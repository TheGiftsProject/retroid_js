window.Retroid or= {}
window.Retroid.Views or= {}
window.Retroid.Models or= {}
class window.Retroid.AppView extends Backbone.View
  el: $("#retroid_backbone")
  
  initialize: ->
    @_initEditorHolder()
    @_initLargeClock()
    @
  
  _initEditorHolder: ->
    @ui = 
      editorHolder: new Retroid.Views.EditorHolderView()

  _initLargeClock: ->
    @largeClock = new Retroid.Views.LargeClockView()
