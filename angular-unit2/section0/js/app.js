var app = angular.module('redditClone', ['angularMoment', 'ngAnimate', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise({redirectTo: '/', templateUrl: 'partials/home.html'})
});
