'use strict';

angular.module('clientApp')
.controller('JourneyCtrl', function($scope, JourneyService) {

  function getJourneys() {
    JourneyService.getJourneys()
    .success(function(data /*, status, headers, config */) {
      $scope.journeys = data;
    })
    .error(function(/* data, status, headers, config */) {
      alert('GET: error');
    });
  }
  getJourneys();
});