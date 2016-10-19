(function() {
  'use strict';

  angular
    .module('gpquery')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {




    /* State Configurations
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    $stateProvider
      .state('home', {
        url:          '/',
        templateUrl:  'app/main/main.html',
        controller:   'MainController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Main';
          },
          $bodyClass: function() {
            return 'main-page';
          },
          data: function(webDevTec) {
            return webDevTec.getTec();
          }
        }
      });




    /* URL Router Configurations
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $urlRouterProvider.otherwise('/');




    /* HTML5 Mode
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $locationProvider.html5Mode(true);


  }

})();
