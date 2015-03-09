'use strict';

angular.module('clientApp')
.service('JourneyService', function($http) {
  this.getJourneys = function() {
    return $http.get('/api/journeys');
  };
});
