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
      name: 'GPQuery',
      sections: []
    };




    // TODO: Refactor Nav Links Code
    /*  Overview
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "overview",
      title     : "Overview",
      linkClass : "inactive",
      tooltip   : "Current Season & Last Race",
      type      : "link",
      url       : "/overview",
      iconType  : "fa",
      iconValue : "fa-tachometer",
      childSections: []
    });




    /*  Seasons
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "seasons",
      title     : "Seasons",
      linkClass : "inactive",
      tooltip   : "Season Details & Race Schedules",
      type      : "category",
      url       : "/seasons",
      iconType  : "fa",
      iconValue : "fa-calendar",
      childSections: [
        {
          id        : "races",
          title     : "Race Schedule",
          linkClass : "inactive",
          tooltip   : "Season Race Schedules",
          type      : "link",
          url       : "/races",
          iconType  : "fa",
          iconValue : "fa-flag-checkered"
        },
        {
          id        : "driverStandings",
          title     : "Drivers' Standings",
          linkClass : "inactive",
          tooltip   : "Season Driver Championship Standings",
          type      : "link",
          url       : "/driverStandings",
          iconType  : "fa",
          iconValue : "fa-trophy"
        },
        {
          id        : "constructorStandings",
          title     : "Constructors' Standings",
          linkClass : "inactive",
          tooltip   : "Season Constructor Championship Standings",
          type      : "link",
          url       : "/constructorStandings",
          iconType  : "fa",
          iconValue : "fa-trophy"
        }
      ]
    });

    /* End Seasons ––––––––––––––––––––––––––––––––––– */




    /*  Grands Prix
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "races",
      title     : "Grands Prix",
      linkClass : "inactive",
      tooltip   : "Grand Prix Details & Circuit Information",
      type      : "category",
      url       : "/races",
      iconType  : "fa",
      iconValue : "fa-flag-checkered",
      childSections: [
        {
          id        : "detail",
          title     : "Detail",
          linkClass : "inactive",
          tooltip   : "Race Detail",
          type      : "link",
          url       : "/detail",
          iconType  : "fa",
          iconValue : "fa-area-chart"
        },
        {
          id        : "results",
          title     : "Race Results",
          linkClass : "inactive",
          tooltip   : "Race Results",
          type      : "link",
          url       : "/results",
          iconType  : "fa",
          iconValue : "fa-flag-checkered"
        },
        {
          id        : "qualifying",
          title     : "qualifying",
          linkClass : "inactive",
          tooltip   : "Qualifying Results (2003 onwards)",
          type      : "link",
          url       : "/qualifying",
          iconType  : "fa",
          iconValue : "fa-sort-numeric-asc"
        },
        {
          id        : "lapTimes",
          title     : "Lap Times",
          linkClass : "inactive",
          tooltip   : "Lap Time Data (1996 onwards)",
          type      : "link",
          url       : "/lapTimes",
          iconType  : "fa",
          iconValue : "fa-clock-o"
        },
        {
          id        : "pitStops",
          title     : "Pit Stops",
          linkClass : "inactive",
          tooltip   : "Pit Stop Data (2012 onwards)",
          type      : "link",
          url       : "/pitStops",
          iconType  : "fa",
          iconValue : "fa-wrench"
        },
        {
          id        : "circuits",
          title     : "Circuits",
          linkClass : "inactive",
          tooltip   : "Circuit information",
          type      : "category",
          url       : "/circuits",
          iconType  : "fa",
          iconValue : "fa-location-arrow",
          childSections: [
          ]
        }
      ]
    });

    /* End Grands Prix ––––––––––––––––––––––––––––––– */




    /*  Drivers
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "drivers",
      title     : "Drivers",
      linkClass : "inactive",
      tooltip   : "Drivers statistics",
      type      : "category",
      url       : "/drivers",
      iconType  : "fa",
      iconValue : "fa-user",
      childSections: [
        {
          id        : "detail",
          title     : "Detail",
          linkClass : "inactive",
          tooltip   : "Driver Detail",
          type      : "link",
          url       : "/detail",
          iconType  : "fa",
          iconValue : "fa-id-card-o"
        },
        {
          id        : "list",
          title     : "List",
          linkClass : "inactive",
          tooltip   : "Driver List",
          type      : "link",
          url       : "/list",
          iconType  : "fa",
          iconValue : "fa-list-o"
        }
      ]
    });

    /* End Drivers ––––––––––––––––––––––––––––––––––– */




    /*  Constructors
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "constructors",
      title     : "Constructors",
      linkClass : "inactive",
      tooltip   : "Constructors statistics",
      type      : "category",
      url       : "/constructors",
      iconType  : "fa",
      iconValue : "fa-users",
      childSections: [
        {
          id        : "detail",
          title     : "Detail",
          linkClass : "inactive",
          tooltip   : "Constructor Detail",
          type      : "link",
          url       : "/detail",
          iconType  : "fa",
          iconValue : "fa-id-card-o"
        },
        {
          id        : "list",
          title     : "List",
          linkClass : "inactive",
          tooltip   : "Constructor List",
          type      : "link",
          url       : "/list",
          iconType  : "fa",
          iconValue : "fa-list-o"
        }
      ]
    });

    /* End Constructors –––––––––––––––––––––––––––––– */




    /*  Championship Standings
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $rootScope.app.sections.push({
      id        : "standings",
      title     : "Championship Standings",
      linkClass : "inactive",
      tooltip   : "World Championship Standings",
      type      : "category",
      url       : "/standings",
      iconType  : "fa",
      iconValue : "fa-trophy",
      childSections: [
        {
          id        : "drivers",
          title     : "Drivers",
          linkClass : "inactive",
          tooltip   : "Drivers' Championship Standings",
          type      : "link",
          url       : "/drivers",
          iconType  : "fa",
          iconValue : "fa-user"
        },
        {
          id        : "constructors",
          title     : "Constructors",
          linkClass : "inactive",
          tooltip   : "Constructors' Championship Standings",
          type      : "link",
          url       : "/constructors",
          iconType  : "fa",
          iconValue : "fa-users"
        }
      ]
    });

    /*  End Championship Standings ––––––––––––––––––– */




    //  Set reference to localStorage
    // ------------------------------

    $rootScope.$storage = $window.localStorage;

  }

})();
