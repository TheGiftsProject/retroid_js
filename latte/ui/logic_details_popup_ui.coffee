class window.LogicDetailsPopupUI
    constructor: (callbacks) ->
        @callbacks = callbacks
        @container = $.tmpl($("#logic_details_popup_template").html())
        @container.hide()
        @container.appendTo($("body"))
        @authorInput = @container.find("#logic_details_author")
        @nameInput = @container.find("#logic_details_name")
        @submitButton = @container.find(".logic_details_submit")
        @cancelButton = @container.find(".logic_details_cancel")

    show: () ->
        @_bindEvents()
        @container.show()
        posLeft = $(window).width() / 2
        posTop = $(window).height() / 2
        @container.css(
            'top': posTop
            'left': posLeft
        )

    hide: () ->
        @container.hide()
        @_unbindEvents()

    reset: () ->
        @authorInput.val("")
        @nameInput.val("")

    _bindEvents: () ->
        @submitButton.click(_.bind(@_submit, @))
        @cancelButton.click(_.bind(@_cancel, @))

    _unbindEvents: () ->
        @submitButton.unbind('click')
        @cancelButton.unbind('click')

    _submit: () ->
        @callbacks.submit?(@authorInput.val(), @nameInput.val())

    _cancel: () ->
        @callbacks.cancel?()
