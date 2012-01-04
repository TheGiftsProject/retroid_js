class window.Retroid.Views.EditorView extends Backbone.View
  editor_id:"script_input"
  el: $("section#editor")
  events: 
      "click .run"  : "run"
      "click .save" : "save"

  initialize: ->
    @editor = $("#{@editor_id}")
  
  run: ->
    alert "run"
  save: ->
    alert "save"

  _initAce: ->