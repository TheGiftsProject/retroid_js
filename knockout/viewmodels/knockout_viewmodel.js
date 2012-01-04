var KnockoutViewModel;

KnockoutViewModel = (function() {

  function KnockoutViewModel(element_id) {
    ko.applyBindings(this, document.getElementById("#" + element_id));
  }

  return KnockoutViewModel;

})();
