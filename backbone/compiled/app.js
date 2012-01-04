(function() {
  var _base, _base2;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Retroid || (window.Retroid = {});

  (_base = window.Retroid).Views || (_base.Views = {});

  (_base2 = window.Retroid).Models || (_base2.Models = {});

  window.Retroid.AppView = (function() {

    __extends(AppView, Backbone.View);

    function AppView() {
      AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = $("#retroid_backbone");

    AppView.prototype.initialize = function() {
      this._initEditorHolder();
      this._initLargeClock();
      return this;
    };

    AppView.prototype._initEditorHolder = function() {
      return this.ui = {
        editorHolder: new Retroid.Views.EditorHolderView()
      };
    };

    AppView.prototype._initLargeClock = function() {
      return this.largeClock = new Retroid.Views.LargeClockView();
    };

    return AppView;

  })();

}).call(this);
