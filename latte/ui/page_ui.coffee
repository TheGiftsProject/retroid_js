class window.PageUI
    constructor: (container) ->
        @container = container
        @editorContainer = @container.find(".editor")
        @mainRetroidContainer = @container.find(".main_retroid")
        @ratingLogicListContainer = @container.find(".rating_logic_list")
        @dateLogicListContainer = @container.find(".date_logic_list")

    getEditorContainer: () ->
        @editorContainer

    getMainRetroidContainer: () ->
        @mainRetroidContainer

    getRatingLogicListContainer: () ->
        @ratingLogicListContainer

    getDateLogicListContainer: () ->
        @dateLogicListContainer
