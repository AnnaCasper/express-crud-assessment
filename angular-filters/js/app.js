var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/messages', {
      templateUrl: 'partials/messages.html',
      controller: 'MessagesCtrl'
    })
    .otherwise({redirectTo: '/'})
});
