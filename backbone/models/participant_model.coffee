class Retroid.Models.Participant extends Backbone.Model
  defaults:
    name: ""
    email: ""
    dateAdded: ""
    rating: ""
    logic: new Retroid.Models.Logic()
  
  GetCode: ->
    @get("logic").WrappedCode()