(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .run(configRunBlock);

  /** @ngInject */
  function configRunBlock($rootScope, $window) {


    //  Set `$rootScope` Values
    // ------------------------------

    $rootScope.app = {
      name: 'GPQuery'
    };


    //  Set reference to localStorage
    // ------------------------------

    $rootScope.$storage = $window.localStorage;

  }

})();
