class LogicDetailsPopupUI
    constructor: (callbacks) ->
        @callbacks = callbacks
        @container = $.tmpl($("#logic_details_popup_template").html())
        @container.hide()
        @container.appendTo($("body"))
        @authorInput = @container.find("#logic_details_author")
        @nameInput = @container.find("#logic_details_name")
        @submitButton = @container.find(".logic_details_submit")
        @cancelButton = @container.find(".logic_details_cancel")

    bindEvents: () ->
        @submitButton.click(_.bind(@submit, @))
        @cancelButton.click(_.bind(@cancel, @))

    unbindEvents: () ->
        @submitButton.unbind('click')
        @cancelButton.unbind('click')

    show: () ->
        @container.show()
        posLeft = ($(document).width() - @container.width()) / 2
        posTop = ($(document).height() - @container.height()) / 2
        @container.css(
            'top': posTop
            'left': posLeft
        )

    hide: () ->
        @container.hide()

    reset: () ->
        @authorInput.val("")
        @nameInput.val("")

    submit: () ->
        @callbacks.submit?(@authorInput.val(), @nameInput.val())

    cancel: () ->
        @callbacks.cancel?()
