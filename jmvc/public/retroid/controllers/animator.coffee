$.Controller "Retroid.AnimatorController",
	defaults: 
		width: 300
		height: 348
		center:
			x: 142.5
			y: 178
		radius: 111
		images:
			background: "images/background.png"
			foreground: "images/foreground.png"
			minute:     "images/minute.png"
			hour:       "images/hour.png"
			point:      "images/point.png"
,
	init: ->
		@loadImages()
		@element.append("views/animator.ejs", @options)
		@_initContext()
		setTimeout(
			=> @reset()
			500
		)

	_initContext : ->
		@context = @element.find('canvas')[0].getContext('2d')
		
	loadImages: () ->	
		@images = []
		for type,path of @options.images
			image = new Image()
			image.src = @options.images[type]
			@images[type] = image

	reset: ->
		@renderFrame(new Array(12))

	renderFrame: (leds) ->
		@context.clearRect(0, 0, @options.width, @options.height)
		@context.drawImage(@images.background, 0, 0, @options.width, @options.height)
		@_renderLeds(leds)
		@context.drawImage(@images.foreground, 0, 0, @options.width, @options.height)

		@_renderClockHand(@images.minute, (new Date()).getMinutes()/60)
		@_renderClockHand(@images.hour, ((new Date()).getHours() % 12)/12)
		@_renderCenter()

	_renderLeds: (leds) ->
		leds or= []
		@context.save()
		@context.translate(@options.center.x, @options.center.y)
		for i in [0..11]
			@context.save()

			@_setLedState(leds[i])
			@_positionLed(i)
			@_renderLed()

			@context.restore()
		@context.restore()


	_setLedState: (led) ->
		@context.fillStyle = if led then "2796ff" else "ccc"
		@context.shadowBlur = if led then 10       else 8
		@context.shadowColor = if led then "blue"   else "eee"


	_positionLed : (ledIdx) ->
		angle = ((Math.PI * 2) / 12) * ledIdx
		@context.rotate(angle)
		@context.translate(0, -@options.radius)


	_renderLed : ->
		ctx = @context
		ctx.beginPath()
		ctx.moveTo(-5, -5)
		ctx.lineTo(-5, 5)
		ctx.arc(0, 5, 5, Math.PI, 0, true)
		ctx.lineTo(5, -5)
		ctx.fill()

	_renderClockHand : (image, percent) ->
		ctx = @context
		ctx.save()
		ctx.translate(@options.center.x, @options.center.y)
		ctx.rotate((Math.PI * 2) * percent )
		ctx.drawImage(image, -image.width/2, -image.height/2)
		ctx.restore()


	_renderCenter : ->
		image = @images.point
		middleX = @options.center.x - image.width/2
		middleY = @options.center.y - image.height/2
		@context.drawImage(image, middleX, middleY)