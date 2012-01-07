class window.Retroid.Views.EditorHolderView extends Backbone.View
  el: $("section#editor_holder")
  editor: $(".editor_input_container", @el)
  
  events: 
      "click .run"  : "run"
      "click .save" : "save"

  initialize:  ->
    @model.get("logic").bind('change:code', @codeChanged, @)
    @ui = 
      editor: new Retroid.Views.EditorView(el: @editor, model: @model.get("logic")).render()
  
  codeChanged: ->
    @setRunState(@model.get("logic").IsValid())
    @setSaveState(false)
  
  run: ->
    code = @model.GetCode()
    @Stop()
    @interval = setInterval (=>
      toEval = "#{code}([#{@model.get('logic').get('leds')}])"
      @model.get('logic').set(leds:eval(toEval))
    ), 100
    @setSaveState(true)
  
  Stop: ->
    clearInterval @interval if @interval

  save: ->
    @ui.submitView = new Retroid.Views.SubmitView(model: @model).render()
    $(@el).append(@ui.submitView.el)

  codeValidationError: ->
    @setRunState(false)
  
  setRunState: (state) ->
    $(".run", @el).prop('disabled', not state)

  setSaveState: (state)->
    $(".save", @el).prop('disabled', not state)