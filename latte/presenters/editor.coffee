class window.Editor
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @ui = new EditorUI(container,
            submit: _.bind(@_newLogic, @)
            save: _.bind(@_saveLogic, @)
            textChanged: _.bind(@_textChanged, @)
        )

        @ui.setSaveState(false)

    setLogic: (logic) ->
        @ui.setText(logic.code)

    _newLogic: (code) ->
        logic = new Logic({ code: code })
        @callbacks.runLogic?(logic)
        @ui.setSaveState(true)

    _saveLogic: (code) ->
        logic = new Logic({ code: code })
        @callbacks.saveLogic?(logic)

    _textChanged: (text) ->
        @ui.setSaveState(false)
