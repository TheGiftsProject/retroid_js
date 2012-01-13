class Retroid.Models.Participant extends Backbone.Model
  defaults:
    author: ""
    name: ""
    dateAdded: ""
    votes: 0
    code: ""
  
  url: "http://sharp-wind-7656.herokuapp.com/logics"
  
  initialize: ->
    @bind "change:code", -> @logic.set(code:@get("code")), @
    @logic = new Retroid.Models.Logic(code:@get("code"))

  GetCode: ->
    @logic.WrappedCode()

  sync: (method, model, options) ->
    $.ajax({
      type: 'POST',
      url: "#{@url}/create",
      data: @formatForCreate(),
      dataType: 'jsonp'
    }) if method=="create"

  # DAMN you GARTNER!!!
  formatForCreate: ->
    logic:
      author: @get("author")
      name: @get("name")
      code: @get("code")
    
  parse: (response) ->
    author: response.author
    name: response.name
    code: response.code
    dateAdded: response.created_at
    id: response.id
    votes: response.rating

