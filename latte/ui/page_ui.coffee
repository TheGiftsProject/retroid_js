class PageUI
    constructor: (container) ->
        @container = container
        @editorContainer = @container.find(".editor")
        @mainRetroidContainer = @container.find(".main_retroid")
        @logicListContainer = @container.find(".logic_list")

    getEditorContainer: () ->
        @editorContainer

    getMainRetroidContainer: () ->
        @mainRetroidContainer

    getLogicListContainer: () ->
        @logicListContainer
