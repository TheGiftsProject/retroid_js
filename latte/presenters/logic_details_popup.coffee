class window.LogicDetailsPopup
    constructor: (callbacks) ->
        @callbacks = callbacks
        @ui = new LogicDetailsPopupUI(
            submit: _.bind(@_submit, this)
            cancel: _.bind(@_cancel, this)
        )

    open: () ->
        @ui.reset()
        @ui.show()

    close: () ->
        @ui.hide()

    _submit: (author, name) ->
        @callbacks.submit?(author, name)

    _cancel: () ->
        @close()
