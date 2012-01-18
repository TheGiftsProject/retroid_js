class window.EditorUI
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @container = container
        @editor = @container.find("#script_input")
        @submitButton = @container.find(".submit")
        @saveButton = @container.find(".save")

        @ace = ace.edit(@editor.attr('id'))
        javascriptMode = require('ace/mode/javascript').Mode
        @ace.getSession().setMode(new javascriptMode())
        @ace.setTheme('ace/theme/solarized_dark')
        @ace.setFontSize(14)

        @_bindEvents()

    setSaveState: (enabled) ->
        @saveButton.prop('disabled', !enabled)

    setText: (text) ->
        @ace.getSession().setValue(text)

    _bindEvents: () ->
        @submitButton.click(_.bind(@_submit, @))
        @saveButton.click(_.bind(@_save, @))
        @ace.getSession().on('change', _.bind(@_textChanged, @))

    _submit: () ->
        @callbacks.submit?(@ace.getSession().getValue())

    _save: () ->
        @callbacks.save?(@ace.getSession().getValue())

    _textChanged: () ->
        @callbacks.textChanged?(@ace.getSession().getValue())
