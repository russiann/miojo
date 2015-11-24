(function() {
  'use strict';

  angular
    .module('app.sidemenu')
    .controller('SideMenuController', SideMenuController);

  /* @ngInject */
  function SideMenuController($scope, $window) {
    var vm = this;

    vm.foo = 'SideMenuController';
  }

})();
