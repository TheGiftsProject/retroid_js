class window.Page
    constructor: (container) ->
        @ui = new PageUI(container)

        @editor = new Editor(@ui.getEditorContainer(),
            runLogic: _.bind(@_runLogic, @)
            saveLogic: _.bind(@_showLogicDetailsPopup, @)
        )

        @mainRetroid = new Retroid(@ui.getMainRetroidContainer())

        @ratingLogicList = new LogicList(@ui.getRatingLogicListContainer(), 'rating'
            logicSelected: _.bind(@_changeLogic, @)
        )

        @dateLogicList = new LogicList(@ui.getDateLogicListContainer(), 'createdAt'
            logicSelected: _.bind(@_changeLogic, @)
        )

        @logicDetailsPopup = new LogicDetailsPopup(
            submit: _.bind(@_saveLogic, @)
        )

    _runLogic: (logic) ->
        @mainRetroid.setLogic(logic)

    _changeLogic: (logic) ->
        @editor.setLogic(logic)
        @mainRetroid.setLogic(logic)

    _showLogicDetailsPopup: (logic) ->
        @pendingLogic = logic
        @logicDetailsPopup.open()

    _saveLogic: (author, name) ->
        @logicDetailsPopup.close()
        @pendingLogic.updateAttributes(
            author: author
            name: name
        )
        @pendingLogic.save().done( (logic) =>
            @dateLogicList.addLogic(logic)
            @ratingLogicList.addLogic(logic)
        )

