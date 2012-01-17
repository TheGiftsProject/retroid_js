class EditorUI
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

        @bindEvents()

    bindEvents: () ->
        @submitButton.click(_.bind(@submit, @))
        @saveButton.click(_.bind(@save, @))
        @ace.getSession().on('change', _.bind(@textChanged, @))

    submit: () ->
        @callbacks.submit?(@ace.getSession().getValue())

    save: () ->
        @callbacks.save?(@ace.getSession().getValue())

    textChanged: () ->
        @callbacks.textChanged?(@ace.getSession().getValue())

    setSaveState: (enabled) ->
        @saveButton.prop('disabled', !enabled)

    setText: (text) ->
        @ace.getSession().setValue(text)
