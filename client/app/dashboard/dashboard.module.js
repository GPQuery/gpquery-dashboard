(function() {
  'use strict';

  angular
    .module('gpquery.dashboard', [

      'gpquery.dashboard.main'

    ])
    .config(routerConfig);

  /** ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('overview', {
        url:          '/overview',
        templateUrl:  'app/dashboard/dashboard.html',
        controller:   'DashboardController',
        controllerAs: 'dash',
        resolve: {
          $title: function() {
            return 'Overview';
          },
          $bodyClass: function() {
            return 'dash-page overview';
          },
          data: function(webDevTec) {
            return webDevTec.getTec();
          }
        }
      });
  }

})();
