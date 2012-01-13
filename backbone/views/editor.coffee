class window.Retroid.Views.EditorView extends Backbone.View
  template: _.template($("#templates .editor").html())
  
  events:
    "keyup" : "change"

  initialize: ->
    _.bindAll @, "change"

  render: ->
    $(@el).html(@template(@data))
    @
  
  getCode: ->
    @model.WrappedCode()
  
  change: ->
    data = @$("textarea").val()
    @trigger("editorView:customEvent", data)

  
