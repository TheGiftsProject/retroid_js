class window.Retroid.Views.EditorHolderView extends Backbone.View
  el: $("section#editor_holder")
  editor: $(".editor_input_container", @el)
  
  events: 
      "click .run"  : "run"
      "click .save" : "save"

  initialize: ->
    @ui = 
      editor: new Retroid.Views.EditorView(el:@editor, model: new Retroid.Models.EditorModel()).render()

  run: ->
    @ui.editor.getCode()

  save: ->
    alert "save"