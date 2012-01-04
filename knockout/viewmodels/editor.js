var EditorViewModel;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

EditorViewModel = (function() {

  __extends(EditorViewModel, KnockoutViewModel);

  function EditorViewModel(element_id) {
    this.aceText = ko.observable('moo');
    EditorViewModel.__super__.constructor.call(this, element_id);
  }

  return EditorViewModel;

})();
