var app = angular.module('calculator', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/add/:firstNum/:secondNum', {
      templateUrl: 'partials/result.html',
      controller: 'AddCtrl'
    })
    .when('/subtract/:firstNum/:secondNum', {
      templateUrl: 'partials/result.html',
      controller: 'SubtractCtrl'
    })
    .when('/multiply/:firstNum/:secondNum', {
      templateUrl: 'partials/result.html',
      controller: 'MultiplyCtrl'
    })
    .when('/divide/:firstNum/:secondNum', {
      templateUrl: 'partials/result.html',
      controller: 'DivideCtrl'
    })
    .otherwise({redirectTo: '/'});
})
