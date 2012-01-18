class window.LogicListItem
    constructor: (container, logic, callbacks) ->
        @callbacks = callbacks
        @logic = logic
        @ui = new LogicListItemUI(container, logic,
            selected: _.bind(@_selected, @)
            voteUp: _.bind(@_voteUp, @)
            voteDown: _.bind(@_voteDown, @)
        )

        @retroid = new Retroid(@ui.getClockContainer(), true)
        @retroid.setLogic(@logic)

    _selected: () ->
        @callbacks.selected?(@logic)

    _voteUp: () ->
        @logic.vote('up').done( =>
            @ui.setRating(@logic.rating)
        )

    _voteDown: () ->
        @logic.vote('down').done( =>
            @ui.setRating(@logic.rating)
        )
