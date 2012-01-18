class window.Logic
    constructor: (attrs) ->
        @updateAttributes(attrs)
        @logicFunc = new Function(Logic._processFunctionText(@code))

    func: () ->
        _.bind(@logicFunc, {}) # create a new context for the function to run in -- so we don't pollute the window object

    @_processFunctionText: (text) ->
        "var leds = arguments[0];" + text + "; return leds;"

############## ANYTHING BELOW THIS IS SHITTY SERVER COMMUNICATION CODE ##############

    updateAttributes: (attrs) ->
        if (attrs)
            @code      = attrs.code      || @code
            @author    = attrs.author    || @author
            @name      = attrs.name      || @name
            @rating    = attrs.rating    || @rating
            @id        = attrs.id        || @id

            if (attrs.createdAt && new Date(attrs.createdAt))
                @createdAt = new Date(attrs.createdAt)
            else if (attrs.created_at && new Date(attrs.created_at))
                @createdAt = new Date(attrs.created_at)

    vote: (type) ->
        deferred = $.Deferred()

        $.ajax("http://sharp-wind-7656.herokuapp.com/logics/" + @id + "/vote", { data: { vote: type }, dataType: 'jsonp' }).done( (data) =>
            if (data.ack == "success")
                @rating = data.object.rating
                deferred.resolve(@)
            else
                deferred.reject()
        ).fail( () ->
            deferred.reject()
        )

        deferred.promise()

    save: () ->
        deferred = $.Deferred()

        $.ajax("http://sharp-wind-7656.herokuapp.com/logics/create", { data: { "logic[author]": @author, "logic[name]": @name, "logic[code]": @code }, dataType: 'jsonp' }).done( (data) =>
            if (data.ack == "success")
                @updateAttributes(data.object)
                deferred.resolve(@)
            else
                deferred.reject()
        ).fail( () ->
            deferred.reject()
        )

        deferred.promise()


    @all: () ->
        deferred = $.Deferred()

        $.ajax("http://sharp-wind-7656.herokuapp.com/logics", { dataType: 'jsonp' }).done( (data) ->
            if (data.ack == "success")
                logics = []
                _(data.objects).each( (item) ->
                    logics.push(Logic._createFromServerData(item))
                )
                deferred.resolve(logics)
            else
                deferred.reject()
        ).fail( () ->
            deferred.reject()
        )

        deferred.promise()

    @sortBy: (logics, attributeName) ->
        _(logics).sortBy( (item) ->
            item[attributeName]
        ).reverse()

    @_createFromServerData: (data) ->
        new Logic(data)
