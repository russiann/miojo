(function() {
  'use strict';

  angular
    .module('app', ['app.core', 'app.components'])
    .run(Run)
    .config(Config);

    /* @ngInject */
    function Run () {
    }

    /* @ngInject */
    function Config ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'sidemenu.view.html'
        })

      $urlRouterProvider.otherwise('/app/home');
    }

})();
