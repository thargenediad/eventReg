'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '5/1/2014',
      time: '10:30 AM',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: 'img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass'
        },
        {
          name: 'Scopes for fun and profit'
        },
        {
          name: 'Well-Behaved Controllers'
        }
      ]
    }
  }
);