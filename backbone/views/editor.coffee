class window.Retroid.Views.EditorView extends Backbone.View
  template: _.template($("#templates .editor").html())
  
  events:
    "keyup" : "change"

  initialize: ->
    # @model.bind('change', @render, @)
    @model.bind('destroy', @remove, @)
    @

  render: ->
    console.log "rending the code editor"
    $(@el).html(@template(@model.toJSON()))
    @
  
  getCode: ->
    @model.get("code")
  
  change: ->
    @model.set(code:$("textarea",@el).val())

  
