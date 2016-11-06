(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .controller('ShellController', ShellController);

  /** @ngInject */
  function ShellController($rootScope, $mdSidenav, $log) {
    var vm = this;
    var navId = 'left';

    vm.navLinks = [];

    vm.toggleSidenav = toggleSidenav;
    vm.sidenavIsOpen = sidenavIsOpen;

    activate();

    function activate() {
      vm.navLinks = $rootScope.app.sections;
      $log.info('Resolved in ShellController:', vm.navLinks);
    }

    function toggleSidenav() {
      $mdSidenav(navId).toggle().then(function() {
        $log.debug('$mdSidenav('+navId+').toggle() finished.');
      });
    }

    function sidenavIsOpen() {
      return $mdSidenav(navId).isOpen();
    }

  }
})();
