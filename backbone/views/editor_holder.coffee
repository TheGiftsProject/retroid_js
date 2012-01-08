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
    @ui = 
      editor: new Retroid.Views.EditorView(el: @editor, model: @logic).render()
  
  codeChanged: ->
    @setRunState(@logic.IsValid())
    @setSaveState(false)
  
  run: ->
    code = @model.GetCode()
    @stop()
    @interval = setInterval (=>
      toEval = "#{code}([#{@logic.get('leds')}])"
      @logic.set(leds:eval(toEval))
    ), 100
    @setSaveState(true)
  
  stop: ->
    clearInterval @interval if @interval

  save: ->
    @ui.submitView = new Retroid.Views.SubmitView(model: @model).render()
    $(@el).append(@ui.submitView.el)
    
  participantSaved: ->
    @stop()
    @ui.submitView.remove()

  setRunState: (state) ->
    $(".run", @el).prop('disabled', not state)

  setSaveState: (state)->
    $(".save", @el).prop('disabled', not state)