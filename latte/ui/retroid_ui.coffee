class window.RetroidUI
    constructor: (container) ->
        RetroidUI.loadImages()

        @canvas = $.tmpl($("#retroid_ui_template").html())
        container.html(@canvas)

        @_initContext()

        @bounds =
            width: @canvas.attr('width')
            height: @canvas.attr('height')
        @clockCenter =
            x: 142.5
            y: 178
        @clockRadius = 111

    RetroidUI.images =
        background: "images/background.png"
        foreground: "images/foreground.png"
        minute:     "images/minute.png"
        hour:       "images/hour.png"
        point:      "images/point.png"

    # loads images once for all instances of RetroidUI
    @loadImages = () ->
        image = null
        for type of RetroidUI.images
            if (typeof RetroidUI.images[type] == "string")
                image = new Image()
                image.src = RetroidUI.images[type]
                RetroidUI.images[type] = image

    reset: () ->
        @renderFrame(new Array(12))

    renderFrame: (leds) ->
        @context.clearRect(0, 0, @bounds.width, @bounds.height)
        @context.drawImage(RetroidUI.images.background, 0, 0, @bounds.width, @bounds.height)
        @_renderLeds(leds)
        @context.drawImage(RetroidUI.images.foreground, 0, 0, @bounds.width, @bounds.height)

        @_renderClockHand(RetroidUI.images.minute, (new Date()).getMinutes()/60)
        @_renderClockHand(RetroidUI.images.hour, ((new Date()).getHours() % 12)/12)
        @_renderCenter()

    _renderLeds: (leds) ->
        @context.save()
        @context.translate(@clockCenter.x, @clockCenter.y)
        for led, i in leds
            @context.save()

            # ugly! each function changes context state -- should do context modifications in @ function
            @_setLedState(led)
            @_positionLed(i)
            @_renderLed()

            @context.restore()
        @context.restore()

    _setLedState: (led) ->
        @context.fillStyle      = (if led then "2796ff" else "ccc")
        @context.shadowBlur     = (if led then 10       else 8)
        @context.shadowColor    = (if led then "blue"   else "eee")

    _positionLed: (ledIdx) ->
        angle = ((Math.PI * 2) / 12) * ledIdx

        @context.rotate(angle)
        @context.translate(0, -@clockRadius)

    _renderLed: () ->
        ctx = @context
        ctx.beginPath()
        ctx.moveTo(-5, -5)
        ctx.lineTo(-5, 5)
        ctx.arc(0, 5, 5, Math.PI, 0, true)
        ctx.lineTo(5, -5)
        ctx.fill()

    _renderClockHand: (image, percent) ->
        ctx = @context
        ctx.save()
        ctx.translate(@clockCenter.x, @clockCenter.y)
        ctx.rotate((Math.PI * 2) * percent )
        ctx.drawImage(image, -image.width/2, -image.height/2)
        ctx.restore()

    _renderCenter: () ->
        image = RetroidUI.images.point
        middleX = @clockCenter.x - image.width/2
        middleY = @clockCenter.y - image.height/2
        @context.drawImage(image, middleX, middleY)

    _initContext: () ->
        @context = @canvas[0].getContext('2d')
