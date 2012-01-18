(function() {

  window.LogicListItemUI = (function() {

    function LogicListItemUI(container, data, callbacks) {
      var template;
      this.container = $(container);
      this.callbacks = callbacks;
      template = $("#logic_details_template").html();
      $.tmpl(template, data).appendTo(this.container);
      this.clockContainer = this.container.find(".clock");
      this.rating = this.container.find(".rating");
      this._bindEvents();
    }

    LogicListItemUI.prototype.getClockContainer = function() {
      return this.clockContainer;
    };

    LogicListItemUI.prototype.setRating = function(value) {
      return this.rating.text(value);
    };

    LogicListItemUI.prototype._bindEvents = function() {
      this.container.find(".arrow_up").on('click', _.bind(this._voteUp, this));
      this.container.find(".arrow_down").on('click', _.bind(this._voteDown, this));
      return this.container.on('click', _.bind(this._selected, this));
    };

    LogicListItemUI.prototype._voteUp = function() {
      var _base;
      return typeof (_base = this.callbacks).voteUp === "function" ? _base.voteUp() : void 0;
    };

    LogicListItemUI.prototype._voteDown = function() {
      var _base;
      return typeof (_base = this.callbacks).voteDown === "function" ? _base.voteDown() : void 0;
    };

    LogicListItemUI.prototype._selected = function() {
      var _base;
      return typeof (_base = this.callbacks).selected === "function" ? _base.selected() : void 0;
    };

    return LogicListItemUI;

  })();

}).call(this);
