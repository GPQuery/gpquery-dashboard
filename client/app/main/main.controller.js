(function() {
  'use strict';

  angular
    .module('gpquery')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, webDevTec, toastr, data) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1476842560729;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      //vm.awesomeThings = webDevTec.getTec();
      vm.awesomeThings = data;

      $log.info('Resolved:',data);

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
