(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .directive('gpShell', gpShellDirective);

  /** @ngInject */
  function gpShellDirective() {
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/shell/shell.html',
      controller: 'ShellController',
      controllerAs: 'shell'
    };

    return directive;

  }

})();
