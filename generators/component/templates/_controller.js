(function() {
  'use strict';

  angular
    .module('app.<%= moduleSuffix %>')
    .controller('<%= title %>Controller', <%= title %>Controller);

  /* @ngInject */
  function <%= title %>Controller() {
    var vm = this;

    activate();

    ////////////////

    function activate() {
    }
  }
})();
