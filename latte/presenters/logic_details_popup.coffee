class LogicDetailsPopup
    constructor: (callbacks) ->
        @callbacks = callbacks
        @ui = new LogicDetailsPopupUI(
            submit: _.bind(@submit, this)
            cancel: _.bind(@cancel, this)
        )

    open: () ->
        @ui.reset()
        @ui.bindEvents() # move to show
        @ui.show()

    close: () ->
        @ui.hide()
        @ui.unbindEvents() # move to hide

    submit: (author, name) ->
        @callbacks.submit?(author, name)

    cancel: () ->
        @close()
