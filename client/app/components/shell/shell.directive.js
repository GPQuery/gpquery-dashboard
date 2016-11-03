(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .directive('gpShell', gpShell);

  /** @ngInject */
  function gpShell() {
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/shell/shell.html',
      controller: 'ShellController',
      controllerAs: 'vm'
    };

    return directive;

  }

})();
