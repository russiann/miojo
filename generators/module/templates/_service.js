(function() {
  'use strict';

  angular
    .module('app.<%= moduleSuffix %>')
    .factory('<%= title %>', <%= title %>);

  /* @ngInject */
  function <%= title %>() {
    var service = {
      foo: foo
    };
    return service;

    ////////////////

    function foo() {
    }
  }
})();
