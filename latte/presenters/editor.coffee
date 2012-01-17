class Editor
    constructor: (container, callbacks) ->
        @callbacks = callbacks
        @ui = new EditorUI(container,
            submit: _.bind(@newLogic, @)
            save: _.bind(@saveLogic, @)
            textChanged: _.bind(@textChanged, @)
        )

        @ui.setSaveState(false)

    newLogic: (code) ->
        logic = new Logic({ code: code })
        @callbacks.runLogic?(logic)
        @ui.setSaveState(true)

    saveLogic: (code) ->
        logic = new Logic({ code: code })
        @callbacks.saveLogic?(logic)

    textChanged: (text) ->
        @ui.setSaveState(false)

    setLogic: (logic) ->
        @ui.setText(logic.code)
