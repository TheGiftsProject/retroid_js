(function() {
  var _base;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid || (window.Retroid = {});

  (_base = window.Retroid).Views || (_base.Views = {});

  window.Retroid.AppView = (function() {

    __extends(AppView, Backbone.View);

    function AppView() {
      AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = $("#retroid_backbone");

    AppView.prototype.initialize = function() {
      this._initUI();
      this._initEditor();
      return this._initLargeClock();
    };

    AppView.prototype._initUI = function() {
      return this.ui = {
        editor: $("section#editor", this.el)
      };
    };

    AppView.prototype._initEditor = function() {
      return this.editor = new Retroid.Views.EditorView();
    };

    AppView.prototype._initLargeClock = function() {
      return this.largeClock = new Retroid.Views.LargeClockView();
    };

    return AppView;

  })();

}).call(this);
