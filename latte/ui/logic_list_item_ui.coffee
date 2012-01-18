class window.LogicListItemUI
    constructor: (container, data, callbacks) ->
        @container = $(container)
        @callbacks = callbacks

        template = $("#logic_details_template").html()

        $.tmpl(template, data).appendTo(@container)

        @clockContainer = @container.find(".clock");
        @rating = @container.find(".rating")
        @_bindEvents()

    getClockContainer: () ->
        @clockContainer

    setRating: (value) ->
        @rating.text(value)

    _bindEvents: () ->
        @container.find(".arrow_up").on('click', _.bind(@_voteUp, @))
        @container.find(".arrow_down").on('click', _.bind(@_voteDown, @))
        @container.on('click', _.bind(@_selected, @))

    _voteUp: () ->
        @callbacks.voteUp?()

    _voteDown: () ->
        @callbacks.voteDown?()

    _selected: () ->
        @callbacks.selected?()

