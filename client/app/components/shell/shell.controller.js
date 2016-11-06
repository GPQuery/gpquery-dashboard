(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .controller('ShellController', ShellController);

  /** @ngInject */
  function ShellController($rootScope, $mdSidenav, $log, Data) {
    var vm = this;
    var navId = 'left';

    vm.sections = [];

    vm.toggleSidenav  = toggleSidenav;
    vm.sidenavIsOpen  = sidenavIsOpen;
    vm.navigateTo     = navigateTo;

    activate();

    function activate() {
      Data.getSections().$promise.then(function(response) {
        $log.info('Activated.', response);
        vm.sections = response.sections;
      }, function(errorMsg) {
        $log.error('Error.', errorMsg);
      });
      $log.info('Resolved in ShellController:', vm.sections);
    }

    function toggleSidenav() {
      $mdSidenav(navId).toggle().then(function() {
        $log.debug('$mdSidenav('+navId+').toggle() finished.');
      });
    }

    function sidenavIsOpen() {
      return $mdSidenav(navId).isOpen();
    }

    function navigateTo(url, event) {
      $log.info('ShellController - navigateTo(' + url + ')', event);
    }

  }
})();
