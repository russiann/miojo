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
      function Config ($stateProvider) {
        $stateProvider
          .state('app.<%= moduleSuffix %>', {
            url: '/<%= moduleSuffix %>',
            views: {
              'menuContent': {
                templateUrl: '<%= moduleSuffix %>.view.html'
              }
            }
          })
      }
})();
