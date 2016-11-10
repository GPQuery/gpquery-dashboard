(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Data', DataFactory);

  /** @ngInject */
  function DataFactory($resource) {

    // Base URL for `$resource` object
    var url = 'assets/data/:resource.json';

    // Default parameters for `$resource` object
    var paramDefaults = {
      resource: '@resource'
    };

    // Custom actions for `$resource` object
    var actions = {};

    actions.getSections = {
      method: 'GET',
      params: {
        resource: 'sections'
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();
