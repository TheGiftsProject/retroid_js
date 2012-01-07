class Retroid.Libs.codeRunner
  run: (@callback, @code) ->
    clearInterval @interval if @interval
    @interval = setInterval (=>
      @callback("aaaa")
    ), 1000
      