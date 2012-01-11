class Retroid.Models.Logic extends Backbone.Model
  defaults:
    leds: [0,0,0,0,0,0,0,0,0,0,0,0]
    code: " var returns = [];
            var last = false;
            var all_off = true;
            
            for (var i = 0; i < leds.length; i++) {
                if (last) {
                    last = false;
                    returns.push(1);
                }
                else {
                    if (leds[i]) {
                        all_off = false;
                        last = true;
                    }
                    returns.push(0);
                }
            }
            if (last || all_off) {
                returns[0] = 1;
            }
            
            return returns;"

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
  