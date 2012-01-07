class window.Retroid.Models.Logic extends Backbone.Model
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

  initialize: ->

  WrappedCode: (code = @get('code'))->
    "(function (leds){#{code}})"

  IsValid: (code = @.WrappedCode())->
    result = true
    try
      eval("#{code}(#{@get('leds')})")
    catch error
        result = false
    result
  