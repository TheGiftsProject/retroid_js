class window.Retroid.Views.EditorHolderView extends Backbone.View
  el: $("section#editor_holder")
  editor: $(".editor_input_container", @el)
  
  events: 
      "click .run"  : "run"
      "click .save" : "save"

  initialize:  ->
    @logic = @model.get("logic")
    @logic.bind 'change:code', @codeChanged, @
    @model.bind "change:id", @participantSaved, @


    @editorView new Retroid.Views.EditorView(el: @editor, data: @logic.toJSON).render()
    @ui =
      editor: @editorView.render()

    # Model -> ViewModel -> View
    # the model got new data, it publishes that event to the ViewModel
    @bind "change:id", @handelModelToViewBinding, @

    # View -> ViewModel -> Model
    # the view got new data, it publishes that event to the ViewModel
    @bind "editorView:customEvent", @handelViewToModelBinding, @



  # View -> ViewModel -> Model
  handelModelToViewBinding: (data)->
    @editorView.syncUI(data)


  # View -> ViewModel -> Model
  handelViewToModelBinding: (data)->
    @model.syncPersistenceData(data)





  codeChanged: ->
    @setRunState(@logic.IsValid())
    @logic.Stop()
    @setSaveState(false)
  
  run: ->
    @logic.Run()
    @setSaveState(true)

  save: ->
    @ui.submitView = new Retroid.Views.SubmitView(model: @model).render()
    $(@el).append(@ui.submitView.el)
    
  participantSaved: ->
    @logic.Stop()
    @ui.submitView.remove()

  setRunState: (state) ->
    $(".run", @el).prop('disabled', not state)

  setSaveState: (state)->
    $(".save", @el).prop('disabled', not state)