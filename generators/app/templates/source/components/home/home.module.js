(function() {
  'use strict';

  angular
    .module('app.home', [])
    .run(Run)
    .config(Config);

    /* @ngInject */
    function Run () {
    }

    /* @ngInject */
    function Config ($stateProvider) {
      $stateProvider
        .state('app.home', {
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'home.view.html'
            }
          }
        })
    }

})();
