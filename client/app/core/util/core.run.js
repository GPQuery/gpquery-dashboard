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
      name: 'Joho',
      viewAnimation: 'ng-fadeInUp'
    };


    //  Set reference to localStorage
    // ------------------------------

    $rootScope.$storage = $window.localStorage;

  }

})();
