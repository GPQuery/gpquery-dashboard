(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Ergast', ErgastFactory);

  /**
   * Angular-Resource data service for Ergast Developer API
   *
   * @usage
   * ```js
   * // This retrieves the race results for Round 1 of 2012:
   * var params = {
   *   season: '2012',
   *   round: '1',
   *   query: 'results'
   * };
   * Ergast.get(params).$promise.then(function(response) {
   *   $log.info(response);
   * }, function(errorMsg) {
   *   $log.error(errorMsg);
   * });
   * ```
   *
   * @see https://docs.angularjs.org/api/ngResource/service/$resource
   * @see https://docs.angularjs.org/api/ng/service/$http
   * @see http://ergast.com/mrd/
   */
  /** @ngInject */
  function ErgastFactory($resource) {

    // Base URL for `$resource` object
    var url = 'http://ergast.com/api/f1/:season/:round/:query.json';

    // Default parameters for `$resource` object
    var paramDefaults = {
      season: '@season',
      round:  '@round',
      query:  '@query'
      //limit:  '30',   // Default: 30; Maximum: 1000
      //offset: '0'     // Default: 0
    };

    // Custom actions for `$resource` object
    var actions = {};


    /**
     * Custom 'GET' action for: Last Race, Current Season
     *
     * @usage
     * ```js
     * // This retrieves the race results:
     * Ergast.getLastRace({query: 'results'}).$promise.then(function(response) {
     *   $log.info(response);
     * }, function(errorMsg) {
     *   $log.error(errorMsg);
     * });
     * ```
     *
     * @param   {String}      query     query type
     * @param   {Number}      [limit]   results; default=30, max=1000 (optional)
     * @param   {Number}      [offset]  offset; default=0 (optional)
     * @return  {HttpPromise}
     */
    actions.getLastRace = {
      method: 'GET',
      params: {
        season: 'current',
        round:  'last',
        query:  '@query'
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();
