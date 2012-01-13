class Retroid.Models.Logic extends Backbone.Model
  defaults:
    leds: [0,0,0,0,0,0,0,0,0,0,0,0]

  WrappedCode: (code = @get('code'))->
    "(function (leds){#{code};return leds;})"
  
  Run: ->
    @Stop()
    @interval = setInterval (=>
      toEval = "#{@WrappedCode()}([#{@get('leds')}])"
      @set(leds: eval(toEval))
    ), 100

  Stop: ->
    clearInterval @interval if @interval
    
  IsValid: (code = @.WrappedCode())->
    result = true
    try
      eval("#{code}(#{@get('leds')})")
    catch error
        result = false
    result
  