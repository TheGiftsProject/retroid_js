class RetroidSmallUI
    constructor: (container) ->
        @canvas = $.tmpl($("#retroid_small_ui_template").html())
        @canvas.appendTo(container)

        @_initContext()

        @bounds =
            width: @canvas.attr('width')
            height: @canvas.attr('height')
        @clockCenter =
            x: @bounds.width/2
            y: @bounds.height/2
        @clockRadius = @bounds.width/2 - 5

    @ledStates:
        active:
            color: "2796ff"
            shadow: "4"
            shadowColor: "blue"

        inactive:
            color: "ccc"
            shadow: "2"
            shadowColor: "eee"

    reset: () ->
        @renderFrame(new Array(12))

    renderFrame: (leds) ->
        @context.clearRect(0, 0, @bounds.width, @bounds.height)
        @_renderLeds(leds)

    _renderLeds: (leds) ->
        @context.save()
        @context.translate(@clockCenter.x, @clockCenter.y)
        for led, i in leds
            @context.save()

            @_setLedState(led)
            @_positionLed(i)
            @_renderLed()

            @context.restore()
        @context.restore()

    _setLedState: (led) ->
        ledState = (if led then RetroidSmallUI.ledStates.active else RetroidSmallUI.ledStates.inactive)
        @context.fillStyle   = ledState.color
        @context.shadowBlur  = ledState.shadow
        @context.shadowColor = ledState.shadowColor

    _positionLed: (ledIdx) ->
        angle = ((Math.PI * 2) / 12) * ledIdx

        @context.rotate(angle)
        @context.translate(0, -@clockRadius)

    _renderLed: () ->
        ctx = @context
        ctx.beginPath()
        ctx.arc(0, 4, 4, Math.PI*2, 0, true)
        ctx.fill()

    _initContext: () ->
        @context = @canvas[0].getContext('2d')
