class Retroid.Views.ParticipantView extends Backbone.View
  template: _.template($("#templates #participant").html())
  render: ->
    $(@el).html(@template(@model.toJSON()))
    @
