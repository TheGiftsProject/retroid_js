class Retroid.Models.Participant extends Backbone.Model
  defaults:
    author: ""
    name: ""
    dateAdded: ""
    votes: 0
  
  url: "http://sharp-wind-7656.herokuapp.com/logics"
  
  initialize: ->
    logic = new Retroid.Models.Logic()
    @set(logic: logic)

  GetCode: ->
    @get("logic").WrappedCode()

  sync: (method, model, options) ->
    data = @formatForCreate()
    $.ajax({
      type: 'POST',
      url: "#{@url}/create",
      data: data,
      dataType: 'jsonp'
    })

  # DAMN you GARTNER!!!
  formatForCreate: ->
    logic:
      author: @get("author")
      name: @get("name")
      code: @get("logic").get("code")
    
  parse: (response) ->
    author: response.author
    name: response.name
    logic: new Retroid.Models.Logic(code:response.code)
    dateAdded: response.created_at
    id: response.id
    votes: response.rating

