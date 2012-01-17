class Page
    constructor: (container) ->
        @ui = new PageUI(container)

        @editor = new Editor(@ui.getEditorContainer(),
            runLogic: _.bind(@runLogic, this)
            saveLogic: _.bind(@showLogicDetailsPopup, this)
        )

        @mainRetroid = new Retroid(@ui.getMainRetroidContainer())

        @logicList = new LogicList(@ui.getLogicListContainer(),
            logicSelected: _.bind(@changeLogic, this)
        )

        @logicDetailsPopup = new LogicDetailsPopup(
            submit: _.bind(@saveLogic, this)
        )

    runLogic: (logic) ->
        @mainRetroid.setLogic(logic)
        @logicList.logicChanged()

    changeLogic: (logic) ->
        @editor.setLogic(logic)
        @mainRetroid.setLogic(logic)

    showLogicDetailsPopup: (logic) ->
        @pendingLogic = logic
        @logicDetailsPopup.open()

    saveLogic: (author, name) ->
        @logicDetailsPopup.close()
        @pendingLogic.updateAttributes(
            author: author
            name: name
        )
        @pendingLogic.save().done( (logic) =>
            @logicList.addLogic(logic)
        )

