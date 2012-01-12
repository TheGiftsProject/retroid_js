class window.Retroid.Views.EditorView extends Backbone.View
  template: _.template($("#templates .editor").html())
  
  events:
    "keyup" : "change"

  initialize: ->
    _.bindAll @, "change"

  render: ->
    $(@el).html(@template(@model.toJSON()))
    @
  
  getCode: ->
    @model.WrappedCode()
  
  change: ->
    @model.set(code:@$("textarea").val())

  
