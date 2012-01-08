class Retroid.Views.SubmitView extends Backbone.View
  template: _.template($("#templates #submit_popup").html())
  className: "submit_popup"
  events:
    "click .cancel": "close"
    "click .submit": "save"

  render: ->
    $(@el).html(@template(@model.toJSON()))
    @

  close: ->
    $(@el).remove()
  
  save: ->
    @model.set(name:@$(".name").val(),email:@$(".email").val(),id:Math.random())
