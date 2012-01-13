class Retroid.Models.Participants extends Backbone.Collection
  model: Retroid.Models.Participant
  url: "http://sharp-wind-7656.herokuapp.com/logics?callback=?"
  parse: (response) ->
    models = []
    for object in response.objects
      models.push(new Retroid.Models.Participant().parse(object))
    models
