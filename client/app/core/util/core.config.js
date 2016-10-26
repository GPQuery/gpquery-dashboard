(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {


    //  Configure `$log`
    // ------------------------------

    $logProvider.debugEnabled(true);


    //  Configure `toastr`
    // ------------------------------

    toastrConfig.allowHtml          = true;
    toastrConfig.timeOut            = 6000;
    toastrConfig.positionClass      = 'toast-bottom-right';
    toastrConfig.preventDuplicates  = true;
    toastrConfig.progressBar        = true;


  }

})();
