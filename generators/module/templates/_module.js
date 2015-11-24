(function() {
  'use strict';

  angular
    .module('app.<%= moduleSuffix %>', [])
      .run(Run)
      .config(Config);

      /* @ngInject */
      function Run () {

      }

      /* @ngInject */
      function Config () {

      }
})();
